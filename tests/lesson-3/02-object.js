//1. Viết một hàm để tính chỉ số BMI (Body Mass Index) dựa trên chiều cao (mét) và cân nặng (kg) và trả về phân loại BMI (Thiếu cân, Bình thường, Thừa cân, Béo phì).
// Biết:
// ○ Chiều cao được tính theo đơn vị mét (VD: 1.75m)
// ○ Cân nặng tính theo kg
// ○ Công thức tính BMI: cân nặng / (chiều cao*chiều cao)
// ○ BMI < 18.5: Thiếu cân
// ○ BMI < 25: Bình thường
// ○ BMI < 30: Thừa cân
// ○ BMI >= 30: Béo phì

const { Dirent } = require("fs");

function bmi(height, weight) {
  let bmi = weight / (height * height);
  if (bmi < 18.5) {
    return `Thieu can - ${bmi}`
  }
  if (bmi < 25) {
    return `Binh thuong - ${bmi}`
  }
  if (bmi < 30) {
    return `Thua can - ${bmi}`
  };
  if (bmi >= 30) {
    return `Beo phi - ${bmi}`
  };
}
  console.log(bmi(1.60, 47));

// 2. Viết một hàm để chuyển đổi nhiệt độ từ độ C sang độ F và ngược lại. Hàm sẽ nhận vào giá trị nhiệt độ và loại nhiệt độ ('C' hoặc 'F') và trả về nhiệt độ đã chuyển đổi.
// Biết công thức chuyển đổi:
// ○ Từ độ C sang độ F: độ F = (độ C) * 9/5 + 32;
// ○ Từ độ F sang độ C: (độ F - 32) * 5 / 9;

function temp (value, type) {
  if (type === 'C') {
    return `${value}C = ${value * 9/5 + 32}F`
  }
  if (type === 'F') {
    return `${value}F = ${(value - 32) * 5 / 9}C`
  }
};
console.log (temp(25,'C'));
console.log (temp(70, 'F'));

// 3. Khai báo một mảng các phần tử bất kì. Viết một hàm để tính tổng của các phần tử trong một mảng số.
 
const arr = [1, 2, 3, 4, 5]
function tinhTong(arr) {
  let sum = 0
  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i]
  }
  return sum;
  }
  const result = tinhTong(arr);
  console.log(result);
 
  //4. 

  //5. Tạo một function để cập nhật email cho người dùng trong một danh sách, dựa trên tênngười dùng.
// Đoạn code giả mã (pseudo code) như sau:
// Khai báo mảng global các object có 2 thuộc tính: name, email
// Khai báo hàm có 2 tham số: name, newEmail
// Sử dụng vòng for, duyệt trong mảng, nếu gặp phần tử nào có tên trùng với tham số name, cập nhật giá trị email về newEma

const users = [
  { name: "Name 1", email: "name1@gmail.com" },
  { name: "Name 2", email: "name2@gmail.com" },
]

function updateEmail(name, newEmail) {
  for (let i = 0; i < users.length; i++) {
    if (users[i].name === name) {
      users[i].email = newEmail;
      return `${newEmail}`
    }
  }
}

console.log(updateEmail("Name 2", "name2new@example.com")); 
console.log(users);

//6. Viết một hàm tính điểm trung bình của các sinh viên dựa trên điểm số lưu trong một mảng các object.
// Biết object có cấu trúc như sau: {“name”: “Alex”, score: 85}

const students = [
  {studentName: "Alex", score: 85},
  {studentName: "Lan", score: 90},
  {studentName: "Nhu", score: 80}
];

function tinhDiemTrungBinh(){
  let sum = 0;
  for (let i = 0; i < students.length; i++) {
    sum = sum + students[i].score;
  }
  return sum / students.length;
};

const diemTb = tinhDiemTrungBinh(students);
console.log(diemTb);

//7. Viết một hàm để kiểm tra xem tất cả sản phẩm trong một mảng có giá lớn hơn 0 không.
// Biết giỏ hàng là một mảng chứa các object sản phẩm. Sản phẩm có cấu trúc: {“name”:“product 1”, price: 100 }

const gioHang = [
  {sp: "product1", price: 100},
  {sp: "product2", price: 200},
  {sp: "product3", price: 300}
]

function kiemTra(gioHang){
  for (let i = 0; i < gioHang.length; i++) {
    if (i < 0) { 
      return ("false");
    }
    if (i > 0) { 
      return ("true");
    }
  }
}

const kq = kiemTra(gioHang);
console.log(kq);

//8. Viết hàm có một tham số là giờ, in ra cửa hàng còn mở cửa hay không. Biết cửa hàng mở cửa từ 9 giờ sáng đến 9 giờ tối.

function gioLamViec(hour) {
  if (hour >= 9 && hour <= 21){
    return `Dang mo cua - ${hour}h`
  }
  if (hour < 9 || hour > 21){
    return `Dang dong cua - ${hour}h`
  }
}

const isOpened = gioLamViec(12);
console.log(isOpened);

// 9. Viết hàm có tham số là tuổi, in ra mức giá vé vào cổng tùy theo độ tuổi: trẻ em dưới 5 tuổi miễn phí, người lớn từ 18 tuổi trở lên là 100k, 
// và trẻ em từ 6 đến 17 tuổi là 50k.

function giaVe (tuoi) {
  if (tuoi <= 5) {
    return `gia ve mien phi`
  };
  if (tuoi >= 6 && tuoi <= 17) {
    return `gia ve la 50k`
  };
  if (tuoi >=18) {
    return `gia ve la 100k`
  };
}

const soTien = giaVe(12);
console.log(soTien);

//10.
//11. Viết hàm nhập vào điểm số. In ra phân loại điểm số của học sinh: giỏi (>= 8), khá (>=6.5 và < 8), trung bình (>= 5 và < 6.5), yếu (< 5).

function phanLoai(diemSo) {
  if (diemSo >= 8) {
    return `gioi`
  };
  if (diemSo >= 6.5 & diemSo < 8) {
    return `kha`
  };
  if (diemSo >= 5 && diemSo < 6.5) {
    return `trung binh`
  };
  if (diemSo < 5) {
    return `yeu`
  };
}

const xepHang = phanLoai(8.5);
console.log(xepHang);

//12. 12. Viết hàm có một tham số là nhiệt độ, in ra nhiệt độ và thông báo trạng thái thời tiết: nóng (>= 30 độ C), 
// mát (< 30 độ C và >= 20 độ C), lạnh (< 20 độ C)

function tBao(nhietDo){
  if (nhietDo >= 30){
    return `nong`
  };
  if (nhietDo < 30 && nhietDo >= 20){
    return `mat`
  };
  if (nhietDo < 20){
    return `lanh`
  };
}

const thoiTiet = tBao (35);
console.log(thoiTiet);

