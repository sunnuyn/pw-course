# Lesson 2: Git and Javascript

## 1. Git
**States of Git:**

    - Working Directory: chứa các file đang làm việc(file mới/ các file có thay đổi)
    - Staging Area: Vùng tạmm, chứa các file được "git add" nhưng chưa được commit
    - Repository: Chứa các committed files 

**Các lệnh cơ bản của git:**

    - git init: Khởi tạo git
    - git add <file_name>: add 1 file vào vùng staging 
    - git add <file_name1> <file_name2>: thêm file 1 và file 2 vào vùng staging
    - git add . : add tất cả các file vào vùng staging
    - git commit -m "message": dùng để tạo ra 1 phiên bản dựa vào các file đã được thêm ở vùng staging vào Repository với thông điệp là "message"
    - git status: check trạng thái files (xanh: vùng staging, đỏ: vùng working directory)
    - git log: kiểm tra lịch sử commit

**Commit convention:**
- Message chứa: Types + Short description
  
      - chore: sửa nhỏ, chính tả, xoá files,...

      - feat: thêm tính năng mới

      - fix: sửa lỗi 1 test trước đó

**Cấu hình git:**
- Cấu hình chung: 

      git config --global user.name "user"

      git config --global user.email "email"

- Cho 1 repo riêng: 

      git config user.name "user"

      git config user.email "email"

## 2. Javascript

### 2.1. Biến, hằng số
- **Biến- variable**: giá trị có thể thay đổi 

      let <ten_bien> = <gia_tri>;

      var <ten_bien> = <gia_tri>;

- **Hằng số- const**: khai báo các giá trị không thể thay đổi

      const <ten_bien> = <gia_tri>;

      >> Dùng console.log(giatri): kiểm tra kết quả trả ra

### 2.2. Data type: Kiểu dữ liệu 

    - String
    - Number
    - Boolean
    - Bigint
    - Boolean
    - Undefined 
    - Null
    - Symbol
    - Object

### 2.3. Toán tử:

 **a. Comparison:** 
 
    >, <, >=, <=, ===
 
 **b. Unary:** toán tử 1 ngôi: tăng/ giảm giá trị
  
    i++ (i= i+1) 
 
    i-- (i= i-1) 
 
**c.Arithmetic:** + - * /

**d.Conditional:** điều kiện, kiểm tra nếu điều kiện đúng sẽ trả ra code
  
    if (<điều kiện>) {
    //code
    };

**e.Loops:** vòng lặp- dùng để thực hiện 1 đoạn logic một số lần nhất định

    for (<khởi tạo>; <điều kiện dừng>; <điều kiện tăng>) {
    //code
    };

  