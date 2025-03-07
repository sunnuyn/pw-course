# Lesson 5 : DOM terminology & Playwright basic

## 1. DOM (Document Object Model):

- Các thẻ HTML thường gặp

| Tên thẻ | Công dụng |
|---------|-----------|
| < div > | chia các khối trong trang web |
| < h1 > < /h1>... < h6 > < /h6 >| tạo ra các header phân cấp theo thứ tự từ lớn đến bé |
| < form > < /form > | chứa một form thông tin |
| < input > | nhập dữ liệu: text, email, radio, checkbox, file, color, range, date |
| < textarea > | hiển thị ô input (dạng to) |
| radio button | tạo nút chọn 1 radio |
| checkbox | tạo nút chọn nhiều lựa chọn (checkbox) |
| list/ dropdown | hiển thị danh sách hoặc menu thả xuống |
| button | tạo nút bấm |
| table | hiển thị bảng dữ liệu |
| date picker | tạo bộ chọn ngày |
| slider | thanh trượt |
| iframe | hiển thị nội dung từ một trang web khác bên trong trang hiện tại |

## 2. Selector:

- Là cách chọn phần tử trên trang 
- Type: XPath selector, CSS selector, Playwright selector 

* XPath selector (XPath = XML Path)
  - Tuyệt đối: đi dọc theo cây DOM (bắt đầu bằng 1 "/")

    VD: /html/body/div/h1
  - Tương đối: tìm dựa vào đặc tính (bắt đầu bằng 2 "//")

        //tenthe[@thuoctinh= "giatri"]
  
  VD: //input[@id = "name"]

* Cú pháp bổ sung:  

          //div[text()=’This is a text’]

          //div[contains(text(), ‘Tôi là Alex’)]


## 3. Playwright basic syntax:

- Khai báo test: 

          import {test} from '@playwight/test';
          test('<tên test>', async ({ page }) => {
              // Code của test
          });
            await test.step('Tên step', async () => {
              // Code here
            });

> Step nên được map 1-1 với testcase để dễ dàng maintain

- Some basic syntax:

| Action | Công thức |
|---------|-----------|
| navigate | await page.goto('https://example.com'); |
| single click | await page.locator("//button").click(); |
| click chuột ... lần | await page.locator("//button").click({clickCount?: number; }); |
| double click | await page.locator("//button").dblclick();|
| double click | await page.locator("//button").dblclick();|
| click chuột phải/ trái/ giữa | await page.locator("//button").click({button: 'right/ left/ middle'});|
| click chuột kèm phím | await page.locator("//button").click({ modifier: ['Shift']/ ['Enter']/ ... });|
| fill | await page.locator("//input").fill('gia tri'); |
| pressSequentially | await page.locator("//input").pressSequentially('gia tri', {delay?: number,}); |
| check/ uncheck | await page.locator("//input").check(); await page.locator("//input").setChecked(false); |
| hover | await page.locator("< xpath here >").hover(); |

















