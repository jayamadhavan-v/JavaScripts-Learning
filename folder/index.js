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

let circumference ;
let radius;
radius = window.prompt("enter a radius of the circle : " );
const pi = 3.14;
circumference = 2*pi*radius;
console.log(circumference);
document.getElementById("myBtn").onclick = function(){
    document.getElementById("output").textContent = circumference;
}
