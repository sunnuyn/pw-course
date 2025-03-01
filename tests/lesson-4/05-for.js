1. 

const student = {
  studentName : "Alex",
  age: 20
}
for (let property in student){
  console.log(`${property}=${student[property]}`)
}
2. 

const student1 = {
  student1Name: "Alex",
  age: 10,
  salary: 20
}

let sum = 0;
for (const property in student1){
  if (typeof student1[property] === "number"){
    sum += student1[property];
  }
}

console.log(sum);

3. 
const student3 = {
  student3Name: "Alex",
  age: 10,
}
const arr = [];
for (const property in student3){
  arr.push(property);
}
console.log(arr);

