# Website doanh nghiệp 3tsmart

Astro 5 + Tailwind CSS 4, TypeScript; xuất HTML tĩnh cho Vercel, Netlify, Cloudflare Pages hoặc Apache/cPanel.

## Chạy và kiểm tra

Node.js 20.19+ được khuyến nghị.

```bash
npm install
npm run dev
npm run build     # Astro/type check + static build -> dist/
npm test          # Chạy sau build: tìm kiếm, email draft, route/link/canonical, dữ liệu xuất bản
npm run preview
```

Chưa có ESLint riêng; `astro check` kiểm tra Astro/TypeScript. Không có pre-commit hook trong repo.

## Cấu hình

| Biến | Ý nghĩa |
| --- | --- |
| `SITE_URL` | Mặc định https://3tsmart.org; dùng cho canonical, sitemap và OG |
| `PUBLIC_LEAD_ENDPOINT` | URL Web App trong `integrations/google-apps-script.gs`; để trống dùng email soạn sẵn |
| `PUBLIC_GTM_ID` | GTM chỉ tải sau khi khách đồng ý phân tích |

**Không có endpoint:** form kiểm tra thông tin rồi mở email tới lienhe@3tsmart.org. Khách phải bấm Gửi trong ứng dụng email. Website không lưu lead, không log dữ liệu cá nhân và không báo “đã nhận yêu cầu”. Nếu chưa cài ứng dụng email, khách dùng hotline hoặc Zalo. Không JavaScript: form có fallback qua ứng dụng email và các liên kết trực tiếp.

**Có endpoint Apps Script:** form gửi POST dạng URL-encoded, `no-cors` để tương thích Apps Script. Opaque response không chứng minh lead đã được lưu; giao diện chỉ báo đã chuyển yêu cầu gửi và hướng dẫn xác nhận qua hotline/Zalo. Cần kiểm tra Google Sheet và email thông báo trên môi trường thật trước khi vận hành. Muốn xác nhận lưu thành công cần backend cùng origin hoặc CORS, trả JSON xác nhận; chưa có trong bản static này.

Sự kiện chính: `inquiry_email_draft`, `lead_submission_attempt` (delivery: unconfirmed), `form_error`, `click_call`, `click_zalo`, `filter_products`, `view_map`, `scroll_depth`. Không dùng `generate_lead` cho email chưa gửi hoặc response chưa xác nhận. Thông tin nguồn truy cập được lưu theo phiên khi đã đồng ý phân tích. Không đưa tên, số điện thoại hay nội dung form vào dataLayer.

## Các trang

- `/`: trang chủ doanh nghiệp.
- `/san-pham`: danh mục có tìm kiếm tiếng Việt không dấu và bộ lọc kết hợp.
- `/san-pham/[id]`: tám trang **nhóm thiết bị**, không phải SKU / tồn kho.
- `/giai-phap`, `/giai-phap/[id]`: gợi ý theo bốn loại không gian.
- `/kien-thuc`, `/kien-thuc/[slug]`: hướng dẫn lựa chọn và công nghệ.
- `/cong-trinh`, `/cong-trinh/[slug]`: chỉ xuất bản hồ sơ đã xác nhận.
- `/gioi-thieu`, `/lien-he`, ba trang thông tin/chính sách và 404.

URL sản phẩm/giải pháp giữ ngữ cảnh khi sang form: `/lien-he?thiet-bi=...#lead-form` hoặc `?khong-gian=...`.

## Nội dung thật trước khi xuất bản

`src/data/site.ts` giữ contact, nhóm thiết bị, giải pháp, FAQ và hồ sơ công trình. `src/data/articles.ts` giữ bài hướng dẫn. Giữ hotline, MST, địa chỉ và email người dùng đã cung cấp.

Tên pháp lý, giờ mở cửa và kênh xã hội chưa xác nhận để trống, không render liên kết giả. Không dùng số năm hoạt động, lượng khách/công trình hay đánh giá mẫu. Không dùng Product/Offer/Review schema cho nhóm thiết bị không có model và giá thật.

Ảnh trong `src/assets/photos/` là minh họa từ Unsplash; không phải công trình, đội ngũ hay sản phẩm thực tế của 3tsmart. Minh họa thiết bị là SVG trong `DeviceArt.astro`. Logo do chủ website cung cấp.

### Đưa công trình thật lên website

1. Xin quyền công bố ảnh, thông tin khu vực và hạng mục; không đăng địa chỉ nhà / dữ liệu khách hàng khi chưa được phép.
2. Import ảnh thật và thêm bản ghi vào `projects` trong `src/data/site.ts`.
3. Điền `slug`, `name`, `type`, `location`, `completed`, `image`, `summary`, `scope`.
4. Chỉ đặt `approved: true` sau khi kiểm tra ảnh, model/hạng mục và quyền sử dụng.
5. Build lại: danh sách và route chi tiết tự sinh. Hiện không có bản ghi được công bố; website hiển thị trạng thái đang cập nhật.

Để bán theo SKU, cần bổ sung danh sách model, ảnh, giá/tình trạng hàng và điều kiện bảo hành thật; không tự biến nhóm thiết bị thành sản phẩm “bán chạy”.

## Deploy

- Vercel: import repo, build `npm run build`, output `dist`. `vercel.json` bật clean URLs.
- Apache/cPanel: upload **nội dung** `dist/` vào `public_html`, gồm `.htaccess`.
- Netlify/Cloudflare Pages: build như trên; giữ `public/_headers`.
- Cloudflare Workers Builds (hosting hiện tại): build `npm run build`; production deploy `npx wrangler deploy`; preview deploy `npx wrangler preview`. `wrangler.json` khai báo Worker `3tsmart`, static assets từ `dist/` và `previews: {}` bắt buộc cho lệnh preview. Không cần thêm Worker script hay Astro server adapter. Giữ `drop-trailing-slash` cho URL sạch và `404-page` để trang không tồn tại trả HTTP 404, không trả trang chủ.
- Kiểm tra cấu hình mà không publish: build xong chạy `npx wrangler deploy --dry-run`. CLI và các lệnh publish cần môi trường Cloudflare phù hợp; không đặt API token trong repo.
- Wrangler 4.149.0 (phiên bản trong log hosting) yêu cầu Node.js 22+. Cloudflare hiện chạy Node.js 24; khi dùng CLI cục bộ, dùng Node.js 22+ dù riêng Astro có thể build với Node.js 20.19+.
- Biến môi trường được đóng vào build; thay biến hoặc dữ liệu cần rebuild/redeploy.
- Ảnh chia sẻ: chạy `node scripts/generate-og.mjs` rồi build lại khi đổi thiết kế OG.

Bản đồ hiện tìm theo địa chỉ, không xác nhận pin showroom chính xác. Cần URL Google Maps place/share thực tế để ghim đúng vị trí.
