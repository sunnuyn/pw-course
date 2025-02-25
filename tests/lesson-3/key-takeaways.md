# Lesson 3: Git and Javascript (cont)

## 1. Git 
### 1.1. Undo action
a. Thay đổi nội dung message    
                     
        Cách 1: git commit --amend
        - gõ i > vào chế độ insert
        - gõ Esc để thoát insert
        - gõ ":wq" > write and quit

        Cách 2: git commit --amend -m "message"

b. Đưa từ vùng Staging về vùng Working directory

        git restore --staged <file>

c. Đưa từ vùng Repository về vùng Working directory

        git reset HEAD~1 
        (thứ tự từ trên xuống dưới: commit mới nhất > cũ nhất)

### 1.2. Branching model
- Dùng branch để tạo ra một vùng làm việc mới, không ảnh hưởng tới nhánh làm việc hiện tại (main)

        - git branch <ten_branch>: tạo nhánh
        - git checkout <ten_branch>: di chuyển sang nhánh đã tạo
        - git checkout -b <ten_branch>: tạo nhánh và di chuyển tới nhánh tạo
      
### 1.3. Git ignore:

- Dùng để bỏ qua các file không cần git theo dõi

        .gitignore > Thêm vào các file, folder muốn bỏ qua

  
## 2. Javascript 
### 2.1. Conventions:
  
         - snake_ case: chưa dùng
         - kebab-case: tên file
         - camelCase: tên biến
         - PascalCase: tên Class

### 2.2. console.log với ' và "

          console.log ('Noi dung');
          console.log ("Noi dung");
          console.log (`${variable_name}`)

Example: 
  let name = "Uyen"
  console.log(`Toi la ${name}`); = console.log('Toi la' + name)

### 2.3. Object

- Kiểu dữ liệu dùng để lưu trữ một tập hợp các giá trị vào cùng một biến/ hằng số

          let/ const <ten_object> = {
            <thuoc_tinh1>: <gia_tri1>,
            <thuoc_tinh2>: <gia_tri2>,      
          };

      Trong đó: <thuoc_tinh>: giống quy tắc đặt tên biến
                <gia_tri>: có kiểu giống biến/ hoặc là 1 object khác

- Example: 

        const student ={

        name: "Uyen",

        age: 25,

        "local address": "Hanoi"

        };

        console.log(student.name);
        console.log(student["local address"]);


- Gán lại giá trị: không thể gán lại object khi khai báo = const, chỉ có thể gán lại giá trị cho từng thuộc tính trong object

### 2.4. Logical operator
a. &&: và- cả 2 vế của mệnh đề đều đúng
        
        const a = 1;
        const b = 2;
        const c = 3;

        if (a < b && b < c){
          console.log("A nho hon B va B nho hon C);
        };

b. ||: hoặc- một trong 2 vế đúng

        const student2 = {
          giaDinhCoCong: true;
          vungNui: false;
        }

        if (student2. ggiaDinhCoCong || student2.vungNui) {
          console.log("Cong diem vung mien len 2");
        }

    

c. ! : đảo ngược lại giá trị của mệnh đề

        const a = 1;
        const b = 2;
        const c = 3;
        
        if (!(a >= b)) {
          console.log ("A nho hon B);
        };


### 2.5. Array: mảng 

      const arr1 = [100, 200, 300, 400];
      console.log(arr1[3]); // in ra 400
      console.log(arr1.length); // in ra 4
      console.log(arr1[arr1.length - 2]); // in ra 300

### 2.6. Function

- Hàm- là 1 đoạn code được dùng lại nhiều lần

        function <nameFunction>(){
          //code
        }



  
      
      
- Example:  

      function goiTenToi() {
        console.log("Xin chao, K12")
      };

      goiTenToi(); // in ra "Xin chao, K12"

