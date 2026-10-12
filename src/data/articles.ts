import apartment from '../assets/photos/sol-apartment.jpg';
import lock from '../assets/photos/about-smartlock.jpg';
import living from '../assets/photos/diagram-living.jpg';

export const articles = [
  {
    slug: 'bat-dau-nha-thong-minh', category: 'Hướng dẫn bắt đầu', readTime: '4 phút',
    title: 'Làm nhà thông minh: bắt đầu từ nhu cầu, không từ số lượng thiết bị',
    excerpt: 'Một lộ trình để xác định hạng mục cần thiết, kiểm tra hiện trạng và tránh mua thiết bị không tương thích.',
    image: apartment,
    sections: [
      { title: '1. Viết ra tình huống bạn muốn cải thiện', text: 'Bạn muốn tắt toàn bộ đèn khi ra khỏi nhà, kiểm tra cửa đã khóa, hay mở rèm vào buổi sáng? Hãy bắt đầu bằng tình huống sử dụng cụ thể. Mỗi tình huống sẽ giúp xác định đúng thiết bị và điều kiện để tự động hóa hoạt động.', items: ['Chọn 2–3 tình huống dùng thường xuyên.', 'Ghi rõ ai sẽ sử dụng: người lớn, trẻ nhỏ hoặc người cao tuổi.', 'Xác định phần nào vẫn cần thao tác bằng nút vật lý.'] },
      { title: '2. Kiểm tra điện, mạng và kích thước lắp đặt', text: 'Thiết bị không dây vẫn có thể cần nguồn điện phù hợp. Công tắc cần kiểm tra dây trung tính và tải đèn; khóa cần khớp với cánh cửa; rèm cần nguồn điện, ray và khoảng trống. Với hệ thống nhiều tầng, chất lượng mạng và vị trí hub rất quan trọng.', items: ['Chụp ảnh hoặc chuẩn bị bản vẽ mặt bằng.', 'Nhờ người có chuyên môn kiểm tra điện; không tự mở mạch đang có điện.', 'Phân biệt nhà mới đang thi công và nhà đang sử dụng.'] },
      { title: '3. Chọn hệ sinh thái trước khi chọn model', text: 'Khả năng tương thích phải kiểm tra theo model và phiên bản, không chỉ theo logo in trên hộp. Một thiết bị có thể cần hub riêng hoặc tài khoản dịch vụ. Yêu cầu người tư vấn xác nhận ứng dụng, nền tảng hỗ trợ và các tính năng dùng được khi mất Internet.', items: ['Kiểm tra hub, chuẩn kết nối và thiết bị đang có.', 'Hỏi rõ dữ liệu lưu ở đâu và có chi phí thuê bao không.', 'Không mặc định mọi thiết bị Matter, Zigbee hoặc WiFi đều có cùng tính năng.'] },
      { title: '4. Lắp từng bước và kiểm tra trước khi mở rộng', text: 'Một phòng hoặc một nhóm chức năng là điểm khởi đầu dễ đánh giá. Sau khi dùng thử, hãy điều chỉnh lịch, độ nhạy cảm biến và quyền truy cập cho phù hợp sinh hoạt. Báo giá nên tách thiết bị, phụ kiện và công lắp đặt để có cơ sở so sánh.', items: ['Giữ cách điều khiển thủ công khi cần.', 'Ghi lại danh sách model, tài khoản và điều kiện bảo hành.', 'Mở rộng khi phương án ban đầu đáp ứng đúng nhu cầu.'] },
    ],
  },
  {
    slug: 'chon-khoa-cua-thong-minh', category: 'Trước khi mua', readTime: '3 phút',
    title: '5 thông tin cần chuẩn bị trước khi chọn khóa cửa thông minh',
    excerpt: 'Chất liệu cửa, kích thước và cách mở dự phòng quan trọng không kém vân tay hay điều khiển từ xa.',
    image: lock,
    sections: [
      { title: 'Cửa hiện tại quyết định khả năng lắp đặt', text: 'Chụp hai mặt cửa và cạnh cửa, đo độ dày cánh cùng độ rộng đố cửa. Cho biết cửa gỗ, kim loại, nhôm kính hay loại khác, và chiều mở vào hay ra. Đây là dữ liệu cần thiết để chọn thân khóa; một model không phù hợp có thể đòi hỏi chỉnh sửa cửa.', items: ['Chất liệu và độ dày cánh cửa.', 'Độ rộng đố cửa, vị trí khóa hiện tại.', 'Chiều mở và khoảng trống cạnh tay nắm.'] },
      { title: 'Chọn cách mở phù hợp với người dùng', text: 'Vân tay, mã số, thẻ và ứng dụng có ưu điểm khác nhau. Người lớn tuổi hoặc trẻ nhỏ có thể cần phương án thay thế. Đối với nhà cho thuê, hãy làm rõ quyền quản lý, cách cấp và thu hồi quyền truy cập; tính năng này không có trên mọi model.', items: ['Ai sử dụng thường xuyên?', 'Có cần mã tạm thời cho khách không?', 'Có cần kết nối từ xa hoặc hub bổ sung không?'] },
      { title: 'Đừng bỏ qua dự phòng và bảo hành', text: 'Hỏi cách mở khi hết pin, vị trí chìa cơ hoặc cổng cấp nguồn khẩn cấp, loại pin và cách cảnh báo pin yếu. Yêu cầu xác nhận điều kiện bảo hành đúng model cùng phạm vi công lắp. Không xem thời lượng pin hay tính năng chống nước của một sản phẩm là tiêu chuẩn cho mọi khóa.', items: ['Cách mở cơ dự phòng và vị trí cất chìa.', 'Quy trình thay pin, khôi phục tài khoản.', 'Model, serial, phụ kiện và thông tin bảo hành.'] },
    ],
  },
  {
    slug: 'wifi-zigbee-matter', category: 'Hiểu công nghệ', readTime: '4 phút',
    title: 'WiFi, Zigbee và Matter: nên hỏi gì trước khi chọn thiết bị?',
    excerpt: 'Phân biệt công nghệ kết nối với khả năng tương thích, và vì sao tên một giao thức chưa đủ để chọn sản phẩm.',
    image: living,
    sections: [
      { title: 'WiFi và Zigbee mô tả cách thiết bị kết nối', text: 'Thiết bị WiFi thường kết nối với mạng không dây trong nhà. Thiết bị Zigbee thường cần một bộ điều phối hoặc hub tương thích. Một mạng ổn định còn phụ thuộc vùng phủ sóng, khoảng cách, nguồn điện và cách bố trí; không thể kết luận chỉ từ tên chuẩn.', items: ['Thiết bị có cần hub và kết nối Internet không?', 'Router hiện tại có đáp ứng số lượng thiết bị dự kiến không?', 'Những chức năng nào chạy cục bộ khi Internet gián đoạn?'] },
      { title: 'Matter là lớp tương thích, không phải tên một loại sóng', text: 'Matter là tiêu chuẩn kết nối ứng dụng, có thể hoạt động trên WiFi, Ethernet hoặc Thread. Nếu thiết bị dùng Thread, cần kiểm tra yêu cầu Thread Border Router. Không phải mọi thiết bị Zigbee hay WiFi đều hỗ trợ Matter, và tính năng trong ứng dụng của hãng có thể khác tính năng được nền tảng khác hỗ trợ.', items: ['Model cụ thể có chứng nhận và phiên bản Matter nào?', 'Nền tảng đang dùng hỗ trợ loại thiết bị này chưa?', 'Có cần bộ điều khiển hoặc Border Router bổ sung không?'] },
      { title: 'Kiểm tra trên cấu hình thực tế', text: 'Danh sách tương thích của nhà sản xuất và nền tảng là điểm bắt đầu, nhưng cần kiểm tra đúng model, firmware và vùng thị trường. Khi báo giá, nên ghi rõ ứng dụng sử dụng, phụ kiện kết nối và các kịch bản cần kiểm thử lúc bàn giao.', items: ['Ghi tên và phiên bản từng thiết bị.', 'Làm rõ quyền sở hữu tài khoản và dữ liệu.', 'Không mua chỉ vì thấy một logo hệ sinh thái.'] },
    ],
  },
];
