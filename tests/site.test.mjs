import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync, readdirSync, existsSync } from 'node:fs';
import { join, relative } from 'node:path';
import ts from 'typescript';

async function loadHelper(name) {
  const source = readFileSync(new URL(`../src/scripts/${name}.ts`, import.meta.url), 'utf8');
  const { outputText } = ts.transpileModule(source, { compilerOptions: { module: ts.ModuleKind.ESNext } });
  return import(`data:text/javascript;base64,${Buffer.from(outputText).toString('base64')}`);
}
const { normalizeSearch, matchesDevice } = await loadHelper('catalog');
const { createInquiryMailto } = await loadHelper('inquiry');

test('Vietnamese search is case/diacritic/space insensitive and composes with filters', () => {
  assert.equal(normalizeSearch('  ĐÈN  '), 'den');
  assert.equal(normalizeSearch('KHOÁ CỬA'), normalizeSearch('khoa cua'));
  assert.equal(matchesDevice('an-ninh', 'Khóa cửa thông minh', 'all', 'KHOA CUA'), true);
  assert.equal(matchesDevice('an-ninh', 'Khóa cửa thông minh', 'dien', 'khoa'), false);
  assert.equal(matchesDevice('an-ninh', 'Khóa cửa thông minh', 'an-ninh', ''), true);
  assert.equal(matchesDevice('dien', 'Công tắc & ổ cắm', 'dien', 'CAMERA'), false);
});

test('email drafts keep UTF-8 and user input inside the encoded body', () => {
  const inquiry = { name: 'Nguyễn A', phone: '0985834566', email: 'a@example.com', projectType: 'Căn hộ chung cư', note: 'Rèm & khóa\nBcc: not-an-email' };
  const url = new URL(createInquiryMailto('lienhe@3tsmart.org', inquiry));
  assert.equal(url.pathname, 'lienhe@3tsmart.org');
  assert.equal(url.searchParams.get('subject'), 'Yêu cầu tư vấn / báo giá – 3tsmart');
  assert.ok(url.searchParams.get('body').includes(inquiry.name));
  assert.ok(url.searchParams.get('body').includes(inquiry.note));
  assert.deepEqual([...url.searchParams.keys()], ['subject', 'body']);
});

const dist = new URL('../dist/', import.meta.url).pathname;
function htmlFiles(dir) {
  return readdirSync(dir, { withFileTypes: true }).flatMap((e) =>
    e.isDirectory() ? htmlFiles(join(dir, e.name)) : e.name.endsWith('.html') ? [join(dir, e.name)] : []);
}
const pages = htmlFiles(dist).map((file) => ({ file, html: readFileSync(file, 'utf8') }));

test('all business routes build with unique canonical URLs and working internal links', () => {
  assert.ok(pages.length >= 26, 'Run npm run build before npm test');
  const canonicals = new Set();
  for (const { file, html } of pages) {
    const canonical = html.match(/rel="canonical" href="([^"]+)"/)?.[1];
    assert.ok(canonical?.startsWith('https://3tsmart.org/'), file);
    assert.ok(!canonicals.has(canonical), 'duplicate canonical: ' + canonical);
    canonicals.add(canonical);
    for (const [, href] of html.matchAll(/href="([^"]+)"/g)) {
      if (!href.startsWith('/') || href.startsWith('//')) continue;
      const url = new URL(href.replaceAll('&amp;', '&'), 'https://3tsmart.org');
      const path = decodeURIComponent(url.pathname);
      const target = path === '/' ? join(dist, 'index.html') : join(dist, path.slice(1));
      assert.ok(existsSync(target) || existsSync(target + '.html'), `${relative(dist, file)}: broken link ${href}`);
      if (url.hash && (target.endsWith('.html') || existsSync(target + '.html'))) {
        const document = readFileSync(existsSync(target) ? target : target + '.html', 'utf8');
        assert.ok(document.includes(`id="${url.hash.slice(1)}"`), 'missing anchor: ' + href);
      }
    }
  }
});

test('published HTML does not misrepresent sample social proof or product availability', () => {
  const all = pages.map((p) => p.html).join('\n');
  for (const claim of ['1.200', '5.000', 'hàng nghìn gia đình', 'Bảo hành 24 tháng', 'bảo hành 24 tháng', 'trong 30 phút', 'Công ty TNHH Công nghệ 3T Smart', 'Anh Minh Tuấn', 'Chị Thu Hà', 'Anh Quốc Bảo', 'm.me/3tsmart', 'facebook.com/3tsmart', '3tsmart.vn']) {
    assert.ok(!all.includes(claim), 'unverified claim published: ' + claim);
  }
  assert.ok(!all.includes('href=""'), 'empty social links');
  assert.ok(readFileSync(join(dist, 'cong-trinh.html'), 'utf8').includes('Đang cập nhật hồ sơ'));
  for (const { html } of pages) {
    for (const [, raw] of html.matchAll(/<script type="application\/ld\+json">([^<]+)<\/script>/g)) {
      const schema = JSON.parse(raw);
      assert.ok(!['Product', 'Review', 'AggregateRating'].includes(schema['@type']));
    }
  }
});

test('contact information and inquiry context survive static generation', () => {
  const contact = readFileSync(join(dist, 'lien-he.html'), 'utf8');
  assert.ok(contact.includes('tel:+84985834566'));
  assert.ok(contact.includes('mailto:lienhe@3tsmart.org'));
  assert.ok(contact.includes('https://zalo.me/0985834566'));
  assert.ok(contact.includes('6000916516'));
  assert.ok(contact.includes('data-recipient="lienhe@3tsmart.org"'));
  assert.ok(!contact.includes('3tsmart đã nhận được yêu cầu'));
  for (const route of ['san-pham/cong-tac', 'san-pham/khoa-cua', 'giai-phap/can-ho']) {
    const page = readFileSync(join(dist, route + '.html'), 'utf8');
    assert.ok(page.includes('/lien-he?'));
    assert.ok(page.includes('#lead-form'));
  }
});
