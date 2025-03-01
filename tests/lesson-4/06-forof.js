1.
const arr = [1, 2, 3, 4, 3, 55, 23];
const firstNumb = 3;

let firstArr = -1;
let lastArr = -1;
let index = 0;

for (const value of arr) {
  if (value === firstNumb) {
    if (firstArr === -1) {
      firstArr = index;
    }
    lastArr = index;
  }
  index++;
}


console.log(firstArr);
console.log(lastArr);

2. 

const str = "Playwright";
let newStr = [];

for (let i = str.length -1; i >=0; i--){
  newStr.push(str[i]);
}

console.log(newStr);

3. 

const arr1 = [1, 2, 3, 1, 2, 4, 5];
let numbDisplay = {};

for (const num of arr1){
  numbDisplay[num] = (numbDisplay[num] || 0) + 1;
}

let onceTime = [];
for (const num of arr1) {
  if (numbDisplay[num] === 1) {
    onceTime.push(num);
  }
}

console.log(onceTime);
