let now = Date();
console.log(now); // "Sun Aug 03 2025 19:42:30 GMT+0530 (India Standard Time)"
let  dates= new Date("2025-8-04");
console.log(dates.toDateString());

let dateWithMon = new Date(2025,7,4,14,30,0);
console.log(dateWithMon.toString());

let first = new Date(0);
console.log(first);

let second = new Date(1);

console.log(second); // same u 

let milli = new Date(1000 * 60);

//1 second = 1000 millisecond mental

// setInterval(() => {
//   console.log("Hello every 2 seconds");
// }, 2000);

// for getting date and time 
// setInterval(() => {
//   let now = new Date();
//   let h = now.getHours();
//   let m = now.getMinutes();
//   let s = now.getSeconds();

//   console.log(`${h}:${m}:${s}`);
// }, 1000);

//stopping and using clerInterval

// let count = 0;

// let timer = setInterval(() => {
//   console.log("Count:", count);
//   count++;

//   if (count === 5) {
//     clearInterval(timer);  // Stops the interval
//     console.log("Stopped!");
//   }
// }, 1000);
// let cnt = 0;

// let c=setInterval(() => {
//   console.log("Tick!");
//   cnt++;
//   console.log(`cnt ${cnt}`);
//   if(cnt === 5){
//     clearInterval(c);
//   }
// }, 1000);
// 
// let isVisible = true;
// 
// setInterval(() => {
  // let p = document.getElementById("blink");
  // p.style.visibility = isVisible ? "hidden" : "visible";
  // isVisible = !isVisible;
// }, 2000);  // Blinks every 500ms
// 
// 

let ms = Date.now();
// console.log(startTime);


// let ms = 7265000; // 2 hours, 1 minute, 5 seconds

let totalSeconds = Math.floor(ms / 1000);
let totalMinutes = Math.floor(ms / (1000 * 60));
let totalHours   = Math.floor(ms / (1000 * 60 * 60));
let day = Math.floor(totalHours/24);
let mon = Math.floor(day/30);
let year = Math.floor(mon/12);

console.log("Seconds:", totalSeconds); // 7265
console.log("Minutes:", totalMinutes); // 121
console.log("Hours:", totalHours);     // 2
console.log("Days:", day);    
console.log("mon:", mon); 
console.log("year:",year);    

