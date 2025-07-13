/*
console.log(`hello`);
console.log(`madhavan weds teju`);
window.alert("love u teju ");
window.alert("love u teju ");
window.alert("teju weds madhavan ");
*/
/*
document.getElementById("myh1").textContent = "--->teju";
document.getElementById("myp").textContent = "love u ";
*/

/*
let x ;
x = 100;
console.log(x);

let age = 20 ;
console.log(age);

let a =`madhavan`;
console.log(typeof a);
console.log(`my ${a}`); 
*/

/*
let name = `jayamadhavan`;
let age = 20;
let student = true;

document.getElementById("p1").textContent = name;
document.getElementById("p2").textContent = age;
document.getElementById("p3").textContent = student;
*/


// window prompt 
/*
let age;
age = window.prompt("enter your age :");
console.log(age);
console.log(typeof age);
age = Number(age);
age = age + 6;
console.log(age);
console.log(typeof age);
*/


/*
let userName;
document.getElementById("mySubmit").onclick = function(){
    userName = document.getElementById("myInput").value;
    console.log(userName);
    document.getElementById("myPra").textContent = userName;
}
*/

// Day- 4
// Learning Math Functions

let x = 3.4;
let z = Math.round(x);
console.log(z);

//randam number genarator 
let ranNum = Math.floor(Math.random() * 6) + 1;
console.log("1 to 6-" + ranNum);
let ranNum1 = Math.floor(Math.random() * 100) + 1;
console.log("1 to 100-" + ranNum1);
const min = 50;
const max = 100;
let ranNum2 = Math.floor(Math.random() * (max - min)) + min;
console.log("50 to 100-" + ranNum2);