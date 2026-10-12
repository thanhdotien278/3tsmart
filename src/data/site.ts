import type { ImageMetadata } from 'astro';
import heroLiving from '../assets/photos/hero-living.jpg';
import solApartment from '../assets/photos/sol-apartment.jpg';
import solTownhouse from '../assets/photos/sol-townhouse.jpg';
import solVilla from '../assets/photos/sol-villa.jpg';
import solHotel from '../assets/photos/sol-hotel.jpg';
import diagramLiving from '../assets/photos/diagram-living.jpg';

// Chỉ bật tên pháp lý, giờ mở cửa và kênh xã hội sau khi được xác nhận.
export const company = {
  brand: '3tsmart', legalName: '', taxId: '6000916516',
  slogan: 'Công nghệ cho một ngôi nhà dễ sống hơn.',
  hotline: '0985 834 566', hotlineTel: '+84985834566',
  zalo: 'https://zalo.me/0985834566', messenger: '', email: 'lienhe@3tsmart.org',
  address: 'Số 26 phố Dịch Vọng Hậu, phường Dịch Vọng Hậu, Cầu Giấy, Hà Nội',
  postalAddress: { street: 'Số 26 phố Dịch Vọng Hậu', locality: 'Phường Dịch Vọng Hậu, Cầu Giấy', region: 'Hà Nội' },
  mapQuery: 'Số 26 phố Dịch Vọng Hậu, phường Dịch Vọng Hậu, Cầu Giấy, Hà Nội, Vietnam',
  hours: '', social: { facebook: '', youtube: '', tiktok: '' },
};
export const hero = { image: heroLiving as ImageMetadata };
export const nav = [
  { href: '/san-pham', label: 'Thiết bị' }, { href: '/giai-phap', label: 'Giải pháp' },
  { href: '/cong-trinh', label: 'Công trình' }, { href: '/kien-thuc', label: 'Kiến thức' },
  { href: '/gioi-thieu', label: 'Về 3tsmart' }, { href: '/lien-he', label: 'Liên hệ' },
];
export const categories = [
  { id: 'cong-tac', group: 'dien', icon: 'ToggleRight', art: 'switch', name: 'Công tắc & ổ cắm', desc: 'Điều khiển đèn, hẹn giờ và quản lý thiết bị điện.', checks: ['Đế âm và kích thước mặt công tắc', 'Có hoặc không có dây trung tính (N)', 'Tải điện và chuẩn kết nối'], needs: 'Ảnh công tắc hiện tại, số mạch đèn và thiết bị cần điều khiển.' },
  { id: 'khoa-cua', group: 'an-ninh', icon: 'LockKeyhole', art: 'lock', name: 'Khóa cửa thông minh', desc: 'Chọn cách mở cửa phù hợp với cả gia đình.', checks: ['Chất liệu, độ dày và chiều mở cửa', 'Kích thước đố cửa và thân khóa', 'Cách mở dự phòng và nguồn pin'], needs: 'Ảnh hai mặt cửa, cạnh cửa và kích thước đố cửa.' },
  { id: 'camera', group: 'an-ninh', icon: 'Camera', art: 'camera', name: 'Camera & chuông cửa', desc: 'Quan sát lối vào và trao đổi với khách từ xa.', checks: ['Vị trí trong nhà hay ngoài trời', 'Nguồn điện, WiFi hoặc dây mạng', 'Góc nhìn, lưu trữ và quyền riêng tư'], needs: 'Vị trí lắp, phạm vi muốn quan sát và hạ tầng mạng.' },
  { id: 'rem', group: 'tien-nghi', icon: 'Blinds', art: 'curtain', name: 'Rèm cửa tự động', desc: 'Đóng mở rèm theo lịch hoặc theo ngữ cảnh.', checks: ['Loại rèm và chiều dài ray', 'Khối lượng vải và tải motor', 'Vị trí nguồn điện, hộp rèm'], needs: 'Ảnh ô cửa, chiều rộng, chiều cao và loại rèm dự kiến.' },
  { id: 'hong-ngoai', group: 'tien-nghi', icon: 'Tv', art: 'ir', name: 'Điều khiển điều hòa, TV', desc: 'Tìm phương án điều khiển cho thiết bị sẵn có.', checks: ['Hãng, model và loại remote', 'Hồng ngoại hay kiểu điều khiển khác', 'Vị trí bộ điều khiển trong phòng'], needs: 'Ảnh remote và model điều hòa, TV hoặc thiết bị muốn điều khiển.' },
  { id: 'cam-bien', group: 'an-ninh', icon: 'Radar', art: 'sensor', name: 'Cảm biến thông minh', desc: 'Tạo tự động hóa dựa trên chuyển động và môi trường.', checks: ['Chuyển động, hiện diện hay cửa mở', 'Khoảng cách và vùng phát hiện', 'Nguồn pin và hub tương thích'], needs: 'Không gian lắp và tình huống tự động hóa hoặc cảnh báo mong muốn.' },
  { id: 'trung-tam', group: 'tien-nghi', icon: 'Router', art: 'hub', name: 'Bộ điều khiển trung tâm', desc: 'Kết nối thiết bị trong cùng một hệ thống.', checks: ['Hệ sinh thái và chuẩn kết nối', 'Số lượng, phạm vi thiết bị', 'Khả năng chạy kịch bản cục bộ'], needs: 'Danh sách thiết bị sẵn có và ứng dụng bạn muốn sử dụng.' },
  { id: 'chieu-sang', group: 'dien', icon: 'Lightbulb', art: 'light', name: 'Chiếu sáng thông minh', desc: 'Thiết kế ánh sáng theo sinh hoạt và không gian.', checks: ['Loại đèn, nguồn và khả năng dimmer', 'Nhiệt màu, độ sáng mong muốn', 'Phương án điều khiển và dây điện'], needs: 'Bản vẽ hoặc ảnh trần, loại đèn và các khu vực cần điều khiển.' },
];
export const productTabs = [
  { id: 'all', label: 'Tất cả thiết bị' }, { id: 'dien', label: 'Điện & chiếu sáng' },
  { id: 'an-ninh', label: 'An ninh & cảm biến' }, { id: 'tien-nghi', label: 'Tiện nghi & điều khiển' },
];
export const solutions = [
  { id: 'can-ho', icon: 'Building', label: 'Căn hộ', formValue: 'Căn hộ chung cư', image: solApartment, title: 'Nâng cấp từ những điều dùng mỗi ngày', desc: 'Ưu tiên thiết bị giúp cuộc sống thuận tiện hơn. Khả năng thay thế và đi dây cần kiểm tra theo hiện trạng căn hộ.', devices: ['Công tắc & chiếu sáng', 'Khóa cửa', 'Rèm phòng khách', 'Điều khiển điều hòa'], benefits: ['Bắt đầu từ từng phòng', 'Thống nhất hệ sinh thái', 'Làm rõ phần cần cải tạo'] },
  { id: 'nha-pho', icon: 'House', label: 'Nhà phố', formValue: 'Nhà phố', image: solTownhouse, title: 'Liên kết các tầng, chăm chút từng khu vực', desc: 'Phân chia khu vực điều khiển và tính toán kết nối giữa các tầng, từ cửa vào đến cầu thang và phòng ngủ.', devices: ['Camera & chuông cửa', 'Khóa cửa', 'Cảm biến cầu thang', 'Hub và mạng nội bộ'], benefits: ['Phân vùng rõ ràng', 'Tính toán vùng phủ sóng', 'Kịch bản theo sinh hoạt'] },
  { id: 'biet-thu', icon: 'Castle', label: 'Biệt thự', formValue: 'Biệt thự', image: solVilla, title: 'Thiết kế đồng bộ cùng không gian sống', desc: 'Trao đổi từ bản vẽ để phối hợp thiết bị, nội thất và hệ thống điện. Cấu hình được lựa chọn theo từng khu vực sử dụng.', devices: ['Màn hình trung tâm', 'Chiếu sáng theo ngữ cảnh', 'Rèm tự động', 'An ninh khuôn viên'], benefits: ['Phối hợp với thiết kế', 'Kiểm tra tải và kết nối', 'Dự trù mở rộng hệ thống'] },
  { id: 'khach-san', icon: 'Hotel', label: 'Văn phòng / Lưu trú', formValue: 'Khách sạn / Văn phòng', image: solHotel, title: 'Thiết bị phục vụ vận hành', desc: 'Lựa chọn theo quy mô, cách quản lý và nhu cầu sử dụng. Chi phí và hiệu quả cần đánh giá trên cấu hình cụ thể.', devices: ['Khóa & kiểm soát ra vào', 'Cảm biến hiện diện', 'Điều khiển điều hòa', 'Quản lý chiếu sáng'], benefits: ['Phân quyền sử dụng', 'Phương án cho nhiều phòng', 'Làm rõ yêu cầu bảo trì'] },
];
export const diagram = {
  image: diagramLiving,
  hotspots: [
    { x: 62, y: 14, icon: 'Lightbulb', title: 'Chiếu sáng', text: 'Gợi ý điều chỉnh độ sáng theo thời điểm sử dụng.' },
    { x: 52, y: 40, icon: 'ToggleRight', title: 'Công tắc', text: 'Kiểm tra loại tải, dây điện và chuẩn kết nối.' },
    { x: 41, y: 30, icon: 'Gauge', title: 'Điều hòa', text: 'Chọn cách điều khiển tương thích với model hiện có.' },
    { x: 8, y: 44, icon: 'Blinds', title: 'Rèm', text: 'Kiểm tra ray, tải motor và vị trí nguồn điện.' },
  ],
};
export const reasons = [
  { icon: 'ClipboardList', title: 'Cấu hình trước, quyết định sau', text: 'Trao đổi danh sách thiết bị, model và yêu cầu lắp đặt trước khi chốt phương án.' },
  { icon: 'FileText', title: 'Làm rõ chi phí', text: 'Tách thiết bị, phụ kiện và phần lắp đặt trong yêu cầu báo giá.' },
  { icon: 'Headset', title: 'Một đầu mối liên hệ', text: 'Gọi hotline hoặc nhắn Zalo để trao đổi về thiết bị và hỗ trợ sử dụng.' },
];
export const process = [
  { icon: 'MessagesSquare', title: 'Trao đổi nhu cầu', text: 'Không gian, hiện trạng, mong muốn và ngân sách dự kiến.' },
  { icon: 'ClipboardList', title: 'Khảo sát hiện trạng', text: 'Kiểm tra mặt bằng, hạ tầng điện và mạng trước khi chọn cấu hình.' },
  { icon: 'FileText', title: 'Thống nhất báo giá', text: 'Danh sách thiết bị, phụ kiện, phần thi công và lịch dự kiến.' },
  { icon: 'SlidersHorizontal', title: 'Lắp đặt & cấu hình', text: 'Lắp thiết bị, cài ứng dụng và kiểm tra các kịch bản đã thống nhất.' },
  { icon: 'ShieldCheck', title: 'Bàn giao sử dụng', text: 'Hướng dẫn thao tác, tài khoản và điều kiện bảo hành từng thiết bị.' },
];
export interface ProjectRecord {
  slug: string; name: string; type: string; location: string; completed: string;
  image: ImageMetadata; summary: string; scope: string[]; approved: boolean;
}
// Chỉ thêm công trình có ảnh thật và được phép công bố; không dùng ảnh stock.
export const projects: ProjectRecord[] = [];
export const publishedProjects = projects.filter((p) => p.approved);
export const faqs = [
  { q: 'Tôi muốn mua một thiết bị, không lắp cả nhà, có được không?', a: 'Bạn có thể bắt đầu từ một nhóm thiết bị. Gửi model hoặc nhu cầu qua Zalo, email hoặc hotline để trao đổi lựa chọn và báo giá. Khả năng mở rộng cần kiểm tra theo hệ sinh thái của thiết bị.' },
  { q: 'Cần chuẩn bị gì để nhận tư vấn?', a: 'Ảnh hiện trạng hoặc bản vẽ, khu vực muốn lắp và ngân sách dự kiến là điểm bắt đầu tốt. Với khóa cửa cần ảnh cạnh cửa; với công tắc cần kiểm tra dây điện; với rèm cần kích thước ô cửa.' },
  { q: 'Nhà đang ở có lắp được không?', a: 'Tùy hiện trạng và thiết bị được chọn. Cần kiểm tra dây trung tính, tải điện, đế âm và vùng phủ sóng trước khi xác nhận có cần cải tạo hay không.' },
  { q: 'Thiết bị nào dùng được với Apple Home, Google Home hay Alexa?', a: 'Khả năng tương thích phụ thuộc model, phiên bản và hub đi kèm. Hãy cho biết hệ sinh thái bạn đang dùng để kiểm tra đúng cấu hình; không phải mọi thiết bị đều tương thích với mọi nền tảng.' },
  { q: 'Giá và bảo hành được xác nhận thế nào?', a: 'Báo giá cần ghi rõ model, số lượng, phụ kiện, chi phí lắp đặt và điều kiện bảo hành. Giá cuối cùng và thời hạn bảo hành được xác nhận theo thiết bị và phương án cụ thể.' },
];
export const projectTypes = ['Căn hộ chung cư', 'Nhà phố', 'Biệt thự', 'Khách sạn / Văn phòng', 'Cửa hàng / Đại lý', 'Khác'];
