type Dict = Record<string, unknown>;
declare global {
  interface Window { dataLayer: Dict[]; __GTM_ID__?: string }
}

const $ = <T extends Element = HTMLElement>(s: string, r: ParentNode = document) => r.querySelector<T>(s);
const $$ = <T extends Element = HTMLElement>(s: string, r: ParentNode = document) => Array.from(r.querySelectorAll<T>(s));
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/* ---------- Tracking (GA4 / GTM qua dataLayer) ---------- */
export function track(event: string, params: Dict = {}) {
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ event, ...params });
}

const UTM_KEYS = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content', 'gclid', 'fbclid', 'ttclid'];
function captureUtm() {
  const q = new URLSearchParams(location.search);
  const found: Record<string, string> = {};
  UTM_KEYS.forEach((k) => { const v = q.get(k); if (v) found[k] = v.slice(0, 200); });
  if (Object.keys(found).length) sessionStorage.setItem('3t_utm', JSON.stringify(found));
}
const getUtm = (): Record<string, string> => { try { return JSON.parse(sessionStorage.getItem('3t_utm') || '{}'); } catch { return {}; } };

function initTracking() {
  captureUtm();
  document.addEventListener('click', (e) => {
    const el = (e.target as HTMLElement).closest<HTMLElement>('[data-track]');
    if (el) track(el.dataset.track!, { label: el.dataset.trackLabel || el.textContent?.trim().slice(0, 60) });
  });
  const marks = [50, 90];
  const fired = new Set<number>();
  const onScroll = () => {
    const h = document.documentElement;
    const pct = ((h.scrollTop + innerHeight) / h.scrollHeight) * 100;
    marks.forEach((m) => { if (pct >= m && !fired.has(m)) { fired.add(m); track('scroll_depth', { percent: m }); } });
  };
  addEventListener('scroll', onScroll, { passive: true });
}

/* ---------- Cookie consent + GTM ---------- */
function loadGtm(id: string) {
  window.dataLayer.push({ 'gtm.start': Date.now(), event: 'gtm.js' });
  const s = document.createElement('script');
  s.async = true;
  s.src = `https://www.googletagmanager.com/gtm.js?id=${encodeURIComponent(id)}`;
  document.head.appendChild(s);
}
function initConsent() {
  const id = window.__GTM_ID__;
  const banner = $('#cookie-banner');
  if (!id || !banner) return;
  const choice = localStorage.getItem('3t_consent');
  if (choice === 'accept') return loadGtm(id);
  if (choice === 'reject') return;
  banner.hidden = false;
  banner.addEventListener('click', (e) => {
    const btn = (e.target as HTMLElement).closest<HTMLElement>('[data-cookie]');
    if (!btn) return;
    localStorage.setItem('3t_consent', btn.dataset.cookie!);
    banner.hidden = true;
    if (btn.dataset.cookie === 'accept') loadGtm(id);
  });
}

/* ---------- Header, menu, scrollspy, back-to-top ---------- */
function initHeader() {
  const header = $('#site-header');
  const toggle = $<HTMLButtonElement>('#menu-toggle');
  const menu = $('#mobile-menu');
  const toTop = $<HTMLButtonElement>('#back-to-top');
  const setMenu = (open: boolean) => {
    if (!toggle || !menu) return;
    menu.hidden = !open;
    toggle.setAttribute('aria-expanded', String(open));
    toggle.setAttribute('aria-label', open ? 'Đóng menu' : 'Mở menu');
    $('[data-icon-open]', toggle)!.hidden = open;
    $('[data-icon-close]', toggle)!.hidden = !open;
  };
  toggle?.addEventListener('click', () => setMenu(menu!.hidden));
  menu?.addEventListener('click', (e) => { if ((e.target as HTMLElement).closest('a')) setMenu(false); });
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape' && menu && !menu.hidden) { setMenu(false); toggle?.focus(); } });
  matchMedia('(min-width: 1024px)').addEventListener('change', (m) => m.matches && setMenu(false));

  const onScroll = () => {
    const y = scrollY;
    header?.setAttribute('data-scrolled', String(y > 8));
    toTop?.setAttribute('data-show', String(y > 700));
  };
  addEventListener('scroll', onScroll, { passive: true });
  onScroll();
  toTop?.addEventListener('click', () => { scrollTo({ top: 0, behavior: reduceMotion ? 'auto' : 'smooth' }); ($('a[href="#top"]') as HTMLElement | null)?.focus({ preventScroll: true }); });

  const links = $$<HTMLAnchorElement>('a[data-nav]');
  const ids = [...new Set(links.map((a) => a.hash.slice(1)).filter(Boolean))];
  const sections = ids.map((id) => document.getElementById(id)).filter(Boolean) as HTMLElement[];
  if (!sections.length) return;
  const visible = new Map<string, number>();
  const io = new IntersectionObserver((entries) => {
    entries.forEach((en) => visible.set(en.target.id, en.isIntersecting ? en.intersectionRatio : 0));
    let best = ''; let max = 0;
    visible.forEach((v, k) => { if (v > max) { max = v; best = k; } });
    links.forEach((a) => (a.hash === `#${best}` && max > 0 ? a.setAttribute('aria-current', 'true') : a.removeAttribute('aria-current')));
  }, { rootMargin: '-72px 0px -45% 0px', threshold: [0, 0.1, 0.25, 0.5] });
  sections.forEach((s) => io.observe(s));
}

/* ---------- Reveal & counters ---------- */
function initReveal() {
  const els = $$('[data-reveal]');
  if (reduceMotion || !('IntersectionObserver' in window)) { els.forEach((el) => el.classList.add('is-in')); return; }
  const io = new IntersectionObserver((entries) => {
    entries.forEach((en) => { if (en.isIntersecting) { en.target.classList.add('is-in'); io.unobserve(en.target); } });
  }, { rootMargin: '0px 0px -8% 0px', threshold: 0.08 });
  els.forEach((el) => io.observe(el));

  const counters = $$('[data-count]');
  const cio = new IntersectionObserver((entries) => {
    entries.forEach((en) => {
      if (!en.isIntersecting) return;
      const el = en.target as HTMLElement; cio.unobserve(el);
      const end = Number(el.dataset.count); const t0 = performance.now(); const dur = 1100;
      const step = (t: number) => {
        const p = Math.min(1, (t - t0) / dur); const v = Math.round(end * (1 - Math.pow(1 - p, 3)));
        el.textContent = v.toLocaleString('vi-VN');
        if (p < 1) requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
    });
  }, { threshold: 0.6 });
  counters.forEach((c) => cio.observe(c));
}

/* ---------- Bộ lọc sản phẩm ---------- */
function applyFilter(id: string) {
  $$<HTMLButtonElement>('[data-filter]').forEach((b) => b.setAttribute('aria-pressed', String(b.dataset.filter === id)));
  $$('#product-grid > li').forEach((li) => { li.hidden = id !== 'all' && li.dataset.group !== id; });
}
function initProducts() {
  $$<HTMLButtonElement>('[data-filter]').forEach((b) => b.addEventListener('click', () => { applyFilter(b.dataset.filter!); track('filter_products', { group: b.dataset.filter }); }));
  $$<HTMLAnchorElement>('[data-filter-go]').forEach((a) => a.addEventListener('click', () => applyFilter(a.dataset.filterGo!)));
}

/* ---------- Tabs (ARIA) ---------- */
function initTabs() {
  $$('[data-tabs]').forEach((root) => {
    const tabs = $$<HTMLButtonElement>('[role="tab"]', root);
    const select = (t: HTMLButtonElement, focus = false) => {
      tabs.forEach((x) => {
        const on = x === t;
        x.setAttribute('aria-selected', String(on));
        x.tabIndex = on ? 0 : -1;
        document.getElementById(x.getAttribute('aria-controls')!)!.hidden = !on;
      });
      if (focus) t.focus();
    };
    tabs.forEach((t, i) => {
      t.addEventListener('click', () => select(t));
      t.addEventListener('keydown', (e) => {
        const map: Record<string, number> = { ArrowRight: i + 1, ArrowLeft: i - 1, Home: 0, End: tabs.length - 1 };
        if (!(e.key in map)) return;
        e.preventDefault();
        select(tabs[(map[e.key] + tabs.length) % tabs.length], true);
      });
    });
  });
}

/* ---------- Sơ đồ điểm lắp thiết bị ---------- */
function initDiagram() {
  const root = $('[data-diagram]');
  if (!root) return;
  const data: { title: string; text: string }[] = JSON.parse($('#hotspot-data', root)!.textContent || '[]');
  const select = (i: number) => {
    $$('[data-hotspot],[data-hotspot-list]', root).forEach((b) => {
      const idx = Number(b.dataset.hotspot ?? b.dataset.hotspotList);
      b.setAttribute('aria-pressed', String(idx === i));
    });
    $$('[data-icon-for]', root).forEach((s) => (s.hidden = Number(s.dataset.iconFor) !== i));
    $('[data-info-title]', root)!.textContent = data[i].title;
    $('[data-info-text]', root)!.textContent = data[i].text;
  };
  root.addEventListener('click', (e) => {
    const b = (e.target as HTMLElement).closest<HTMLElement>('[data-hotspot],[data-hotspot-list]');
    if (b) select(Number(b.dataset.hotspot ?? b.dataset.hotspotList));
  });
}

/* ---------- Lightbox ---------- */
function initLightbox() {
  const dlg = $<HTMLDialogElement>('#lightbox');
  const items = $$<HTMLButtonElement>('[data-lightbox]');
  if (!dlg || !items.length) return;
  const img = $<HTMLImageElement>('[data-lb-img]', dlg)!;
  let cur = 0; let opener: HTMLElement | null = null;
  const show = (i: number) => {
    cur = (i + items.length) % items.length;
    const it = items[cur];
    img.src = it.dataset.src!;
    img.alt = it.dataset.caption!;
    $('[data-lb-caption]', dlg)!.textContent = it.dataset.caption!;
    $('[data-lb-devices]', dlg)!.textContent = `Thiết bị: ${it.dataset.devices}`;
    $('[data-lb-count]', dlg)!.textContent = `${cur + 1} / ${items.length}`;
  };
  items.forEach((b, i) => b.addEventListener('click', () => { opener = b; show(i); dlg.showModal(); document.body.style.overflow = 'hidden'; }));
  dlg.addEventListener('close', () => { document.body.style.overflow = ''; opener?.focus(); });
  $('[data-lb-prev]', dlg)!.addEventListener('click', () => show(cur - 1));
  $('[data-lb-next]', dlg)!.addEventListener('click', () => show(cur + 1));
  $('[data-lb-close]', dlg)!.addEventListener('click', () => dlg.close());
  dlg.addEventListener('click', (e) => { if (e.target === dlg || (e.target as HTMLElement).matches('div.flex.h-full')) dlg.close(); });
  dlg.addEventListener('keydown', (e) => { if (e.key === 'ArrowLeft') show(cur - 1); if (e.key === 'ArrowRight') show(cur + 1); });
  let sx = 0;
  dlg.addEventListener('touchstart', (e) => { sx = e.touches[0].clientX; }, { passive: true });
  dlg.addEventListener('touchend', (e) => { const dx = e.changedTouches[0].clientX - sx; if (Math.abs(dx) > 50) show(cur + (dx < 0 ? 1 : -1)); });
}

/* ---------- Bản đồ (tải khi người dùng bấm) ---------- */
function initMap() {
  $$('[data-map]').forEach((box) => {
    $('[data-map-load]', box)?.addEventListener('click', () => {
      const f = document.createElement('iframe');
      f.src = box.dataset.map!; f.title = 'Bản đồ showroom 3tsmart'; f.loading = 'lazy';
      f.referrerPolicy = 'no-referrer-when-downgrade'; f.className = 'absolute inset-0 h-full w-full border-0';
      box.replaceChildren(f);
      track('view_map');
    });
  });
}

/* ---------- Form báo giá ---------- */
const PHONE_RE = /^(?:\+?84|0)(?:3|5|7|8|9)\d{8}$/;
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
export const normalizePhone = (v: string) => v.replace(/[\s.\-()]/g, '');

function initForm() {
  const form = $<HTMLFormElement>('#lead-form');
  const success = $('#lead-success');
  if (!form || !success) return;
  const startedAt = Date.now();
  const summary = $('#form-errors', form)!;
  const typeSel = $<HTMLSelectElement>('#f-type', form)!;
  const note = $<HTMLTextAreaElement>('#f-note', form)!;

  $$<HTMLAnchorElement>('[data-project-type]').forEach((a) => a.addEventListener('click', () => { typeSel.value = a.dataset.projectType!; }));
  $$<HTMLAnchorElement>('[data-ask]').forEach((a) => a.addEventListener('click', () => {
    const line = `Tôi muốn hỏi giá: ${a.dataset.ask}`;
    if (!note.value.includes(line)) note.value = note.value ? `${note.value}\n${line}` : line;
  }));

  const setErr = (id: string, msg: string) => {
    const input = $<HTMLInputElement>(`#${id}`, form)!; const p = $(`#${id}-err`, form)!;
    input.setAttribute('aria-invalid', msg ? 'true' : 'false'); p.textContent = msg; p.hidden = !msg;
  };
  const validate = () => {
    const fd = new FormData(form);
    const errs: [string, string][] = [];
    const name = String(fd.get('name') || '').trim();
    const phone = normalizePhone(String(fd.get('phone') || ''));
    const email = String(fd.get('email') || '').trim();
    if (name.length < 2) errs.push(['f-name', 'Vui lòng nhập họ và tên.']);
    if (!phone) errs.push(['f-phone', 'Vui lòng nhập số điện thoại.']);
    else if (!PHONE_RE.test(phone)) errs.push(['f-phone', 'Số điện thoại chưa đúng định dạng Việt Nam (VD: 0912 345 678).']);
    if (email && !EMAIL_RE.test(email)) errs.push(['f-email', 'Email chưa đúng định dạng.']);
    if (!fd.get('consent')) errs.push(['f-consent', 'Vui lòng đồng ý với chính sách bảo mật để tiếp tục.']);
    ['f-name', 'f-phone', 'f-email', 'f-consent'].forEach((id) => setErr(id, errs.find((e) => e[0] === id)?.[1] || ''));
    return errs;
  };
  form.addEventListener('input', (e) => {
    const t = e.target as HTMLInputElement;
    if (t.getAttribute('aria-invalid') === 'true') validate();
  });

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const errs = validate();
    if (errs.length) {
      summary.innerHTML = '';
      const h = document.createElement('p'); h.className = 'font-semibold'; h.textContent = `Vui lòng kiểm tra ${errs.length} mục:`;
      const ul = document.createElement('ul'); ul.className = 'mt-1 list-disc pl-5';
      errs.forEach(([id, m]) => { const li = document.createElement('li'); const a = document.createElement('a'); a.href = `#${id}`; a.textContent = m; a.className = 'underline'; li.append(a); ul.append(li); });
      summary.append(h, ul); summary.classList.remove('hidden'); summary.focus();
      track('form_error', { count: errs.length });
      return;
    }
    summary.classList.add('hidden');
    const fd = new FormData(form);
    const spam = String(fd.get('website') || '') !== '' || Date.now() - startedAt < 2500;
    const btn = $<HTMLButtonElement>('[data-submit]', form)!;
    btn.disabled = true; $('[data-label]', btn)!.hidden = true; $('[data-loading]', btn)!.hidden = false;

    const payload = new URLSearchParams({
      name: String(fd.get('name')).trim(),
      phone: normalizePhone(String(fd.get('phone'))),
      email: String(fd.get('email') || '').trim(),
      projectType: String(fd.get('projectType') || ''),
      note: String(fd.get('note') || '').trim(),
      website: String(fd.get('website') || ''),
      consent: 'yes',
      page: location.href.split('#')[0],
      referrer: document.referrer,
      submittedAt: new Date().toISOString(),
      ...getUtm(),
    });
    const endpoint = import.meta.env.PUBLIC_LEAD_ENDPOINT as string | undefined;
    try {
      if (!spam) {
        if (endpoint) {
          // Google Apps Script không hỗ trợ CORS preflight → gửi dạng form, no-cors
          await fetch(endpoint, { method: 'POST', mode: 'no-cors', body: payload });
        } else {
          console.warn('[3tsmart] PUBLIC_LEAD_ENDPOINT chưa được cấu hình – lead chỉ được ghi log ở chế độ demo.', Object.fromEntries(payload));
        }
        track('generate_lead', { project_type: payload.get('projectType') || 'unknown', ...getUtm() });
      }
      form.hidden = true; success.hidden = false; success.focus();
    } catch {
      summary.textContent = 'Không gửi được do lỗi kết nối. Vui lòng thử lại hoặc gọi hotline để được hỗ trợ ngay.';
      summary.classList.remove('hidden'); summary.focus();
      track('form_error', { reason: 'network' });
    } finally {
      btn.disabled = false; $('[data-label]', btn)!.hidden = false; $('[data-loading]', btn)!.hidden = true;
    }
  });

  $('[data-form-reset]', success)?.addEventListener('click', () => {
    form.reset(); success.hidden = true; form.hidden = false; $<HTMLInputElement>('#f-name', form)!.focus();
  });
}

initTracking();
initConsent();
initHeader();
initReveal();
initProducts();
initTabs();
initDiagram();
initLightbox();
initMap();
initForm();
