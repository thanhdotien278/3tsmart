/**
 * Nhận lead từ form landing page 3tsmart và ghi vào Google Sheet.
 * Cách dùng: Extensions → Apps Script trong Google Sheet, dán file này,
 * Deploy → New deployment → Web app (Execute as: Me, Access: Anyone),
 * rồi đặt URL nhận được vào biến môi trường PUBLIC_LEAD_ENDPOINT.
 */
const SHEET_NAME = 'Leads';
const NOTIFY_EMAIL = ''; // ví dụ 'sales@3tsmart.vn' để nhận email khi có lead mới
const FIELDS = ['submittedAt', 'name', 'phone', 'email', 'projectType', 'note', 'page', 'referrer',
  'utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content', 'gclid', 'fbclid', 'ttclid'];

function doPost(e) {
  const p = (e && e.parameter) || {};
  if (p.website) return ContentService.createTextOutput('ok'); // honeypot
  const phone = String(p.phone || '').replace(/[^\d+]/g, '');
  if (!p.name || !/^(\+?84|0)\d{9}$/.test(phone) || p.consent !== 'yes') {
    return ContentService.createTextOutput('invalid');
  }
  const lock = LockService.getScriptLock();
  lock.waitLock(10000);
  try {
    const ss = SpreadsheetApp.getActiveSpreadsheet();
    const sh = ss.getSheetByName(SHEET_NAME) || ss.insertSheet(SHEET_NAME);
    if (sh.getLastRow() === 0) sh.appendRow(FIELDS);
    // Chặn chèn công thức (CSV/formula injection)
    const safe = (v) => { const s = String(v == null ? '' : v).slice(0, 1000); return /^[=+\-@]/.test(s) ? "'" + s : s; };
    sh.appendRow(FIELDS.map((f) => safe(f === 'phone' ? phone : p[f])));
  } finally {
    lock.releaseLock();
  }
  if (NOTIFY_EMAIL) {
    MailApp.sendEmail(NOTIFY_EMAIL, `[3tsmart] Lead mới: ${p.name} – ${phone}`,
      FIELDS.map((f) => `${f}: ${p[f] || ''}`).join('\n'));
  }
  return ContentService.createTextOutput('ok');
}
