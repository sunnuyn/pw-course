1. 
 let sum = 0;
 for (i = 1; i <= 100; i++){
  sum += i;
 }
 console.log(sum);

2. 
for (let i = 2; i <= 9; i++) {
  for (let j = 1; j <= 10; j++) {
      console.log(`${i} * ${j} = ${i * j}`);
  }
}

3. 
let soLe = [];
for (let i = 1; i <= 99; i += 2) {
  soLe.push(i);
};

console.log(soLe);

4. 
for (let i = 1; i <= 10; i++){
  console.log(`user-${i}@example.com`)
};

5. 
const doanhThu = [
  { month: 1, total: 100 },
  { month: 2, total: 200 },
  { month: 3, total: 300 },
  { month: 4, total: 400 },
  { month: 5, total: 500 },
  { month: 6, total: 600 },
  { month: 7, total: 700 },
  { month: 8, total: 800 },
  { month: 9, total: 900 },
  { month: 10, total: 1000 },
  { month: 11, total: 1100 },
  { month: 12, total: 1200 }
];

let arr = [];
for (let i = 0; i < doanhThu.length; i++) {
  sum = sum + doanhThu[i].total;
}
console.log(`Tong doanh thu nam ${sum}`)




