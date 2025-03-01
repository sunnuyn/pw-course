1.
let departurePlanet = "Trái Đất";
let mission = "Khám phá Vũ trụ K12";
const crew = ["Uyên", "An", "Hà", "Châu", "Hạnh"];

function launchShip (crew, mission){
  return `Chuẩn bị khởi động! Phi hành đoàn gồm: ${crew} sẽ đồng hành cùng bạn trong chuyến phiêu lưu ${mission}`;
}

console.log(launchShip(crew, mission));


2. 
function calculateDistance(speed, time){
  return speed * time;
}

const speed = 1000;
const time = 24;

console.log(`Khoảng cách là : ${calculateDistance(speed,time)} km`);

3.
function convertTimeToHex(time1){
  return time1.toString(16);
}

const time1 = 120;
console.log(`Thời gian sau khi chuyển đổi là ${convertTimeToHex(time1)}`);

4.

function decryptCode (code){
 let lowercaseText = code.toLowerCase();
 let uppercaseText = code.toUpperCase();
 console.log(lowercaseText); 
 console.log(uppercaseText);
}

decryptCode ("K12 Challenge");


5. 
function returnToEarth(){
  console.log("Chuẩn bị trở về Trái Đất!");
}

returnToEarth();

