interface Inquiry { name: string; phone: string; email: string; projectType: string; note: string }

export function createInquiryMailto(recipient: string, inquiry: Inquiry) {
  const body = [
    'Yêu cầu tư vấn / báo giá từ website 3tsmart',
    `Họ tên: ${inquiry.name}`, `Số điện thoại: ${inquiry.phone}`,
    `Email: ${inquiry.email}`, `Loại hình: ${inquiry.projectType}`,
    '', 'Nhu cầu:', inquiry.note,
    '', 'Tôi đồng ý để 3tsmart sử dụng thông tin trên để trao đổi về yêu cầu này.',
  ].join('\n');
  return `mailto:${recipient}?subject=${encodeURIComponent('Yêu cầu tư vấn / báo giá – 3tsmart')}&body=${encodeURIComponent(body)}`;
}
