/**
 * Toàn bộ nội dung landing page nằm ở file này.
 * Các mục đánh dấu "PLACEHOLDER" là dữ liệu mẫu – cần thay bằng thông tin thật của 3tsmart trước khi chạy chính thức.
 */
import type { ImageMetadata } from 'astro';
import heroLiving from '../assets/photos/hero-living.jpg';
import aboutTechnician from '../assets/photos/about-technician.jpg';
import aboutSmartlock from '../assets/photos/about-smartlock.jpg';
import solApartment from '../assets/photos/sol-apartment.jpg';
import solTownhouse from '../assets/photos/sol-townhouse.jpg';
import solVilla from '../assets/photos/sol-villa.jpg';
import solHotel from '../assets/photos/sol-hotel.jpg';
import diagramLiving from '../assets/photos/diagram-living.jpg';
import prjVillaPool from '../assets/photos/prj-villa-pool.jpg';
import prjApartment from '../assets/photos/prj-apartment.jpg';
import prjKitchen from '../assets/photos/prj-kitchen.jpg';
import prjDining from '../assets/photos/prj-dining.jpg';
import prjVilla2 from '../assets/photos/prj-villa2.jpg';
import prjOffice from '../assets/photos/prj-office.jpg';
import prjLiving from '../assets/photos/prj-living.jpg';
import prjStairs from '../assets/photos/prj-stairs.jpg';

// PLACEHOLDER: thông tin liên hệ & pháp lý
export const company = {
  brand: '3tsmart',
  legalName: 'Công ty TNHH Công nghệ 3T Smart',
  taxId: '0100000000',
  slogan: 'Nhà thông minh – Tiện nghi hơn, an toàn hơn',
  hotline: '0909 000 000',
  hotlineTel: '+84909000000',
  zalo: 'https://zalo.me/0909000000',
  messenger: 'https://m.me/3tsmart',
  email: 'lienhe@3tsmart.vn',
  address: 'Số 1 Đường Smart, Phường Dịch Vọng, Quận Cầu Giấy, Hà Nội',
  mapQuery: 'Cầu Giấy, Hà Nội',
  hours: 'Thứ 2 – Thứ 7: 8:00 – 18:00 · Chủ nhật: 8:30 – 12:00',
  social: {
    facebook: 'https://facebook.com/3tsmart',
    youtube: 'https://youtube.com/@3tsmart',
    tiktok: 'https://tiktok.com/@3tsmart',
  },
};

export const nav = [
  { href: '#gioi-thieu', label: 'Giới thiệu' },
  { href: '#san-pham', label: 'Sản phẩm' },
  { href: '#giai-phap', label: 'Giải pháp' },
  { href: '#ly-do', label: 'Lý do chọn chúng tôi' },
  { href: '#du-an', label: 'Dự án' },
  { href: '#lien-he', label: 'Liên hệ' },
];

export const hero = {
  image: heroLiving as ImageMetadata,
  title: 'Nhà thông minh – Tiện nghi hơn, an toàn hơn cùng 3tsmart',
  subtitle:
    'Tư vấn, cung cấp và lắp đặt trọn gói công tắc, khóa cửa, camera, rèm tự động… điều khiển bằng một ứng dụng hoặc giọng nói. Lắp được cho cả nhà đang ở, không cần đục tường.',
};

// PLACEHOLDER: số liệu uy tín
export const stats = [
  { value: 8, suffix: '+', label: 'Năm kinh nghiệm' },
  { value: 1200, suffix: '+', label: 'Công trình đã triển khai' },
  { value: 5000, suffix: '+', label: 'Khách hàng tin dùng' },
  { value: 24, suffix: ' tháng', label: 'Bảo hành chính hãng' },
];

export const about = {
  images: [aboutTechnician, aboutSmartlock] as ImageMetadata[],
  story:
    '3tsmart ra đời từ một nhóm kỹ sư điện – điện tử với mong muốn đưa công nghệ nhà thông minh đến gần hơn với mọi gia đình Việt: dễ dùng, bền bỉ và có người hỗ trợ tận nơi khi cần.',
  mission:
    'Sứ mệnh của chúng tôi là giúp mỗi ngôi nhà an toàn hơn, tiết kiệm điện hơn và tiện nghi hơn – với chi phí hợp lý và dịch vụ hậu mãi đáng tin cậy.',
  values: [
    { icon: 'ShieldCheck', title: 'Chính hãng', text: 'Chỉ phân phối thiết bị có nguồn gốc rõ ràng, tem bảo hành đầy đủ.' },
    { icon: 'Handshake', title: 'Tận tâm', text: 'Tư vấn đúng nhu cầu, không bán thừa thiết bị không cần thiết.' },
    { icon: 'Wrench', title: 'Chuyên nghiệp', text: 'Kỹ thuật viên được đào tạo bài bản, thi công gọn gàng, đúng hẹn.' },
  ],
  // PLACEHOLDER: thương hiệu/đối tác phân phối – chỉ hiển thị dạng chữ cho tới khi được phép dùng logo hãng
  partners: ['Google Home', 'Amazon Alexa', 'Apple Home', 'Tuya Smart', 'Zigbee 3.0', 'Matter'],
};

export const categories = [
  { id: 'cong-tac', icon: 'ToggleRight', art: 'switch', name: 'Công tắc & ổ cắm thông minh', desc: 'Mặt kính cảm ứng WiFi/Zigbee, hẹn giờ, đo điện năng, thay trực tiếp công tắc cũ.' },
  { id: 'khoa-cua', icon: 'LockKeyhole', art: 'lock', name: 'Khóa cửa thông minh', desc: 'Mở bằng vân tay, khuôn mặt, thẻ từ, mã số hoặc từ xa qua điện thoại.' },
  { id: 'camera', icon: 'Camera', art: 'camera', name: 'Camera & chuông cửa có hình', desc: 'Giám sát 2K, đàm thoại 2 chiều, cảnh báo người lạ ngay trên điện thoại.' },
  { id: 'rem', icon: 'Blinds', art: 'curtain', name: 'Rèm cửa tự động', desc: 'Motor rèm êm ái, mở/đóng theo lịch, theo ánh sáng hoặc bằng giọng nói.' },
  { id: 'hong-ngoai', icon: 'Tv', art: 'ir', name: 'Điều khiển hồng ngoại', desc: 'Biến điều hòa, TV, quạt sẵn có thành thiết bị điều khiển qua app.' },
  { id: 'cam-bien', icon: 'Radar', art: 'sensor', name: 'Cảm biến', desc: 'Chuyển động, cửa, khói, nhiệt độ – độ ẩm, rò nước; cảnh báo tức thì.' },
  { id: 'trung-tam', icon: 'Router', art: 'hub', name: 'Hub & màn hình trung tâm', desc: 'Bộ não của ngôi nhà, chạy kịch bản tự động ngay cả khi mất Internet.' },
  { id: 'chieu-sang', icon: 'Lightbulb', art: 'light', name: 'Chiếu sáng thông minh', desc: 'Đèn LED, dimmer đổi màu – độ sáng theo ngữ cảnh, tiết kiệm điện.' },
];

export const productTabs = [
  { id: 'all', label: 'Tất cả' },
  { id: 'dien', label: 'Công tắc & điện' },
  { id: 'an-ninh', label: 'An ninh' },
  { id: 'tien-nghi', label: 'Tiện nghi' },
];

// PLACEHOLDER: danh sách sản phẩm bán chạy (giá để "Liên hệ" cho tới khi 3tsmart chốt chính sách giá)
export const bestSellers = [
  { id: 'sp-cong-tac-3', group: 'dien', art: 'switch', name: 'Công tắc cảm ứng mặt kính 3 nút', specs: ['WiFi / Zigbee 3.0', 'Viền LED báo trạng thái', 'Không cần dây N'], price: 'Liên hệ', badge: 'Bán chạy' },
  { id: 'sp-o-cam', group: 'dien', art: 'socket', name: 'Ổ cắm thông minh đo điện năng', specs: ['16A – 3500W', 'Thống kê kWh theo ngày', 'Hẹn giờ, đếm ngược'], price: 'Liên hệ', badge: null },
  { id: 'sp-khoa', group: 'an-ninh', art: 'lock', name: 'Khóa cửa vân tay & khuôn mặt 3D', specs: ['6 cách mở khóa', 'Pin dùng 8–12 tháng', 'Báo động phá khóa'], price: 'Liên hệ', badge: 'Ưu đãi -10%' },
  { id: 'sp-camera', group: 'an-ninh', art: 'camera', name: 'Camera WiFi xoay 360° 2K', specs: ['Hồng ngoại ban đêm 10m', 'Nhận diện người', 'Lưu trữ thẻ nhớ & cloud'], price: 'Liên hệ', badge: null },
  { id: 'sp-chuong', group: 'an-ninh', art: 'doorbell', name: 'Chuông cửa có hình thông minh', specs: ['Đàm thoại 2 chiều', 'Góc nhìn 160°', 'Pin sạc hoặc dây'], price: 'Liên hệ', badge: 'Mới' },
  { id: 'sp-rem', group: 'tien-nghi', art: 'curtain', name: 'Motor rèm thông minh siêu êm', specs: ['Độ ồn < 35dB', 'Kéo tới 50kg', 'Ray chịu tải 6m'], price: 'Liên hệ', badge: null },
  { id: 'sp-ir', group: 'tien-nghi', art: 'ir', name: 'Bộ điều khiển hồng ngoại đa năng', specs: ['Hỗ trợ 8.000+ mẫu thiết bị', 'Cảm biến nhiệt – ẩm', 'Phủ sóng 360°'], price: 'Liên hệ', badge: 'Bán chạy' },
  { id: 'sp-hub', group: 'tien-nghi', art: 'hub', name: 'Bộ trung tâm Zigbee Hub', specs: ['Kết nối 128 thiết bị', 'Chạy offline', 'Tương thích Matter'], price: 'Liên hệ', badge: null },
];

export const solutions = [
  {
    id: 'can-ho', icon: 'Building', label: 'Căn hộ', formValue: 'Căn hộ chung cư', image: solApartment,
    title: 'Căn hộ chung cư thông minh',
    desc: 'Nâng cấp căn hộ trong 1 ngày, giữ nguyên nội thất. Điều khiển mọi thứ từ điện thoại, kể cả khi đi xa.',
    devices: ['Công tắc cảm ứng toàn nhà', 'Khóa cửa vân tay', 'Rèm phòng khách tự động', 'Điều khiển điều hòa, TV', 'Cảm biến cửa & khói'],
    benefits: ['Lắp nhanh, không đục phá', 'Kịch bản “Về nhà / Ra khỏi nhà”', 'Chi phí tối ưu theo diện tích'],
  },
  {
    id: 'nha-pho', icon: 'House', label: 'Nhà phố', formValue: 'Nhà phố', image: solTownhouse,
    title: 'Nhà phố an toàn, tiện nghi',
    desc: 'Giải pháp nhiều tầng: an ninh cổng – cửa, chiếu sáng cầu thang theo cảm biến, quản lý điện năng từng tầng.',
    devices: ['Camera & chuông cửa có hình', 'Khóa cổng/khóa cửa thông minh', 'Đèn cầu thang cảm biến', 'Công tắc bình nóng lạnh hẹn giờ', 'Hub trung tâm đa tầng'],
    benefits: ['Cảnh báo xâm nhập tức thì', 'Giảm điện năng chiếu sáng', 'Mở cửa từ xa cho người thân'],
  },
  {
    id: 'biet-thu', icon: 'Castle', label: 'Biệt thự', formValue: 'Biệt thự', image: solVilla,
    title: 'Biệt thự – điều khiển trọn gói',
    desc: 'Thiết kế hệ thống đồng bộ cho không gian lớn: màn hình trung tâm, âm thanh – ánh sáng theo ngữ cảnh, sân vườn tự động.',
    devices: ['Màn hình điều khiển cảm ứng', 'Chiếu sáng dimmer theo ngữ cảnh', 'Rèm & cổng tự động', 'Tưới cây, bơm hồ theo lịch', 'Camera AI quanh nhà'],
    benefits: ['Thiết kế riêng theo bản vẽ', 'Một chạm cho cả ngôi nhà', 'Bảo trì định kỳ tận nơi'],
  },
  {
    id: 'khach-san', icon: 'Hotel', label: 'Khách sạn / Văn phòng', formValue: 'Khách sạn / Văn phòng', image: solHotel,
    title: 'Khách sạn & văn phòng tiết kiệm điện',
    desc: 'Quản lý tập trung nhiều phòng, tự ngắt điện khi không có người, nâng tầm trải nghiệm khách lưu trú.',
    devices: ['Thẻ từ & khóa phòng thông minh', 'Cảm biến hiện diện tắt điện', 'Điều khiển điều hòa tập trung', 'Rèm & đèn theo kịch bản chào khách', 'Báo cáo năng lượng'],
    benefits: ['Tiết kiệm 20–30% điện năng*', 'Quản lý từ xa nhiều chi nhánh', 'Chiết khấu theo dự án'],
  },
];

export const diagram = {
  image: diagramLiving,
  hotspots: [
    { x: 62, y: 14, icon: 'Lightbulb', title: 'Đèn âm trần dimmer', text: 'Tự giảm độ sáng buổi tối, bật sáng dần khi có người.' },
    { x: 52, y: 40, icon: 'ToggleRight', title: 'Công tắc cảm ứng', text: 'Điều khiển đèn bếp từ tường, app hoặc giọng nói.' },
    { x: 41, y: 30, icon: 'Gauge', title: 'Điều hòa thông minh', text: 'Tự bật trước khi về nhà, giữ nhiệt độ 26°C.' },
    { x: 8, y: 44, icon: 'Blinds', title: 'Rèm tự động', text: 'Mở rèm lúc 6:30 sáng, đóng khi trời nắng gắt.' },
    { x: 33, y: 49, icon: 'Radar', title: 'Cảm biến cửa', text: 'Báo ngay khi cửa kính mở lúc bạn vắng nhà.' },
    { x: 36, y: 18, icon: 'Mic', title: 'Loa trợ lý giọng nói', text: '“Hey Google, chế độ xem phim”.' },
    { x: 65, y: 51, icon: 'Tv', title: 'Điều khiển hồng ngoại', text: 'TV, máy chiếu, quạt đều điều khiển được qua app.' },
    { x: 80, y: 61, icon: 'Router', title: 'Hub trung tâm', text: 'Kết nối mọi thiết bị, chạy kịch bản kể cả khi mất mạng.' },
  ],
};

export const reasons = [
  { icon: 'BadgeCheck', title: 'Hàng chính hãng 100%', text: 'Mỗi thiết bị có hóa đơn, tem bảo hành và nguồn gốc rõ ràng; phát hiện hàng giả hoàn tiền gấp đôi.' },
  { icon: 'ShieldCheck', title: 'Bảo hành 24 tháng, 1 đổi 1', text: 'Lỗi do nhà sản xuất trong 30 ngày đầu được đổi mới ngay, không cần chờ gửi hãng.' },
  { icon: 'HardHat', title: 'Lắp đặt chuyên nghiệp', text: 'Kỹ thuật viên thi công gọn gàng, đi dây âm, dọn dẹp sạch sẽ và cấu hình sẵn trước khi bàn giao.' },
  { icon: 'MessagesSquare', title: 'Tư vấn & khảo sát miễn phí', text: 'Khảo sát tận nơi, lên phương án và báo giá chi tiết từng thiết bị mà không thu phí.' },
  { icon: 'Headset', title: 'Hỗ trợ kỹ thuật nhanh', text: 'Phản hồi trong 30 phút qua hotline/Zalo, có mặt tại nhà trong 24 giờ nếu cần xử lý trực tiếp.' },
  { icon: 'PiggyBank', title: 'Giá cạnh tranh, tiết kiệm điện', text: 'Nhập trực tiếp từ nhà phân phối; kịch bản hẹn giờ – cảm biến giúp giảm hóa đơn điện hằng tháng.' },
];

export const process = [
  { icon: 'MessagesSquare', title: 'Tư vấn', text: 'Lắng nghe nhu cầu, ngân sách qua điện thoại, Zalo hoặc tại showroom.' },
  { icon: 'ClipboardList', title: 'Khảo sát & báo giá', text: 'Khảo sát hiện trạng, đề xuất phương án và báo giá minh bạch.' },
  { icon: 'Package', title: 'Cung cấp thiết bị', text: 'Thiết bị chính hãng, kiểm tra kỹ trước khi giao đến công trình.' },
  { icon: 'SlidersHorizontal', title: 'Lắp đặt & cấu hình', text: 'Thi công, cài đặt app, tạo kịch bản theo thói quen gia đình.' },
  { icon: 'ShieldCheck', title: 'Bàn giao & bảo hành', text: 'Hướng dẫn sử dụng, bàn giao phiếu bảo hành, hỗ trợ trọn đời.' },
];

// PLACEHOLDER: ảnh minh hoạ – thay bằng ảnh công trình thật của 3tsmart
export const projects = [
  { image: prjVillaPool, name: 'Biệt thự ven biển', type: 'Biệt thự', location: 'Đà Nẵng', devices: 'Màn hình trung tâm, rèm, chiếu sáng, camera AI' },
  { image: prjApartment, name: 'Căn hộ 2PN Vinhomes', type: 'Căn hộ', location: 'Hà Nội', devices: 'Công tắc cảm ứng, khóa vân tay, rèm' },
  { image: prjKitchen, name: 'Căn hộ Studio', type: 'Căn hộ', location: 'TP.HCM', devices: 'Công tắc, cảm biến khói, điều khiển IR' },
  { image: prjVilla2, name: 'Biệt thự sân vườn', type: 'Biệt thự', location: 'Hải Phòng', devices: 'Cổng tự động, tưới cây, camera' },
  { image: prjDining, name: 'Nhà phố 4 tầng', type: 'Nhà phố', location: 'Hà Nội', devices: 'Chuông cửa có hình, đèn cầu thang cảm biến' },
  { image: prjOffice, name: 'Văn phòng công ty', type: 'Văn phòng', location: 'Hà Nội', devices: 'Cảm biến hiện diện, điều hòa tập trung' },
  { image: prjLiving, name: 'Penthouse', type: 'Căn hộ', location: 'TP.HCM', devices: 'Dimmer, rèm, loa giọng nói' },
  { image: prjStairs, name: 'Nhà phố hiện đại', type: 'Nhà phố', location: 'Bắc Ninh', devices: 'Khóa thông minh, camera, hub Zigbee' },
];

// PLACEHOLDER: chỉ dùng phản hồi thật, có sự đồng ý của khách hàng
export const testimonials = [
  { name: 'Anh Minh Tuấn', project: 'Căn hộ 3PN · Cầu Giấy', rating: 5, text: 'Đội kỹ thuật lắp trong một buổi sáng, không phải đục tường. Giờ tối về chỉ cần nói “về nhà” là đèn, điều hòa, rèm tự chạy.' },
  { name: 'Chị Thu Hà', project: 'Nhà phố · Long Biên', rating: 5, text: 'Tôi thích nhất chuông cửa có hình và khóa vân tay – con đi học về tự mở cửa, tôi xem được trên điện thoại lúc đang ở công ty.' },
  { name: 'Anh Quốc Bảo', project: 'Khách sạn 24 phòng · Hạ Long', rating: 5, text: 'Sau 3 tháng dùng cảm biến hiện diện và thẻ từ, hóa đơn điện giảm rõ rệt. Báo giá minh bạch, hỗ trợ rất nhanh.' },
];

export const faqs = [
  { q: 'Lắp đặt nhà thông minh chi phí khoảng bao nhiêu?', a: 'Chi phí phụ thuộc diện tích và số thiết bị. Một căn hộ 2 phòng ngủ với công tắc, khóa cửa và rèm thường từ vài chục triệu đồng. 3tsmart khảo sát và báo giá chi tiết miễn phí, bạn có thể bắt đầu từ vài thiết bị rồi mở rộng dần.' },
  { q: 'Nhà cũ đang ở có lắp được không? Có phải đục tường không?', a: 'Được. Phần lớn công tắc thông minh thay trực tiếp vào đế âm tường cũ, thiết bị không dây như cảm biến, rèm, điều khiển hồng ngoại không cần đi dây mới, nên hầu như không phải đục phá.' },
  { q: 'Thiết bị có tương thích Google Home, Alexa, Apple Home không?', a: 'Đa số thiết bị chúng tôi cung cấp tương thích Google Home và Amazon Alexa; nhiều dòng hỗ trợ Apple Home hoặc chuẩn Matter. Chúng tôi sẽ tư vấn đúng hệ sinh thái bạn đang dùng.' },
  { q: 'Khi mất điện hoặc mất mạng thì sao?', a: 'Khi mất Internet, công tắc vẫn bấm tay bình thường và các kịch bản chạy trên Hub nội bộ vẫn hoạt động. Khi mất điện, khóa cửa dùng pin riêng và có cổng sạc khẩn cấp, camera có thể dùng thêm bộ lưu điện.' },
  { q: 'Chính sách bảo hành như thế nào?', a: 'Thiết bị được bảo hành chính hãng 12–24 tháng tùy loại, 1 đổi 1 trong 30 ngày đầu nếu lỗi do nhà sản xuất. Phần thi công được bảo hành 12 tháng và hỗ trợ kỹ thuật trọn đời.' },
  { q: 'Dữ liệu camera và tài khoản có an toàn không?', a: 'Thiết bị dùng kết nối mã hóa, tài khoản đứng tên chủ nhà. Kỹ thuật viên hướng dẫn đổi mật khẩu, bật xác thực 2 lớp và có tùy chọn lưu trữ cục bộ trên thẻ nhớ hoặc đầu ghi.' },
  { q: 'Bao lâu thì lắp đặt xong?', a: 'Căn hộ thường hoàn thành trong 1 ngày; nhà phố, biệt thự từ 2–5 ngày tùy quy mô. Lịch thi công được thống nhất trước và linh hoạt theo thời gian của gia đình.' },
  { q: 'Tôi là đại lý / nhà thầu, có chính sách chiết khấu không?', a: 'Có. 3tsmart có chính sách giá đại lý, chiết khấu theo dự án và hỗ trợ kỹ thuật cho thợ điện, kiến trúc sư, nhà thầu. Vui lòng để lại thông tin để nhận bảng giá.' },
];

export const projectTypes = ['Căn hộ chung cư', 'Nhà phố', 'Biệt thự', 'Khách sạn / Văn phòng', 'Cửa hàng / Đại lý', 'Khác'];
