1. 
const arr = [1, 2, 3];
arr.forEach(value => {
  console.log(value);
})

2. 
const arr1 = [1, 2, 3];

let sum = 0; 
let max = arr1[0];
let min = arr1[0];

arr1.forEach(value => {
  sum += value;

  if (value > max) {
    max = value;
  }

  if (value < min) {
    min = value;
  }
})

console.log(sum);
console.log(max);
console.log(min);

3. 
const arr2 = [1, 2, 3];

const doubleArr = [];
arr2.forEach(value => {
  doubleArr.push(value * 2);
})

console.log(doubleArr);


