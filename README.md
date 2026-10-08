# Landing page 3tsmart

Landing page một trang cho 3tsmart (thiết bị điện công nghệ & nhà thông minh). Dựng bằng Astro 5 + Tailwind CSS 4, xuất ra HTML tĩnh – deploy được lên Vercel, Netlify hay Cloudflare Pages.

## Chạy dự án

```bash
npm install
npm run dev       # http://localhost:4321
npm run build     # astro check + build ra thư mục dist/
npm run preview
```

Yêu cầu Node.js 18.20+ / 20+.

## Cấu hình (.env)

| Biến | Ý nghĩa |
| --- | --- |
| `SITE_URL` | Domain chính thức (dùng cho canonical, sitemap, OG) |
| `PUBLIC_LEAD_ENDPOINT` | URL nhận dữ liệu form – xem `integrations/google-apps-script.gs` (Google Sheet + email) |
| `PUBLIC_GTM_ID` | Mã Google Tag Manager (`GTM-XXXX`). Chỉ tải sau khi khách bấm "Đồng ý" cookie. GA4, Facebook/TikTok Pixel, Google Ads cấu hình trong GTM |

Sự kiện được đẩy vào `dataLayer`: `generate_lead`, `form_error`, `click_call`, `click_zalo`, `click_messenger`, `cta_*_click`, `view_product`, `filter_products`, `view_map`, `scroll_depth`. UTM / gclid / fbclid được lưu theo phiên và gửi kèm lead.

## Sửa nội dung

Toàn bộ nội dung nằm trong `src/data/site.ts`. Các mục đánh dấu `PLACEHOLDER` **phải thay bằng thông tin thật trước khi go-live**: tên pháp lý, MST, hotline, Zalo, Messenger, email, địa chỉ, số liệu thống kê, sản phẩm/giá, dự án, đánh giá khách hàng, mạng xã hội.

Ảnh trong `src/assets/photos/` là ảnh minh họa tạm từ Unsplash – nên thay bằng ảnh công trình/sản phẩm thật của 3tsmart. Logo: `src/assets/brand/logo.png`, icon trong `public/`.

## Cấu trúc

```
src/components/   các section (Hero, Products, Solutions, Diagram, Projects, Contact…)
src/data/site.ts  nội dung & thông tin công ty
src/scripts/      JS phía client (menu, tabs, lọc sản phẩm, lightbox, form, tracking, cookie)
src/pages/        trang chủ, chính sách bảo hành/bảo mật, điều khoản, 404
integrations/     Google Apps Script nhận lead
```
