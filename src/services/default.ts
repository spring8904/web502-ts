export const formatMoney = (price: number | string) => {
  // Chuyển số thành chuỗi nếu chưa phải là chuỗi
  let str = price.toString()

  // Xóa các ký tự không phải là số (nếu có)
  str = str.replace(/\D/g, '')

  // Thêm dấu chấm mỗi 3 chữ số từ cuối lên
  return str.replace(/\B(?=(\d{3})+(?!\d))/g, '.')
}
