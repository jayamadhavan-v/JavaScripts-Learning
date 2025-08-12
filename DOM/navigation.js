// today im gonna learn about the DOM Navigation

// ----------------fisrtElementChild

// const element = document.getElementById("fruits");

// const firstChild = element.firstElementChild;
// firstChild.style.backgroundColor = "red";


// ----------------.lastElementChild



// const lastChild = element.lastElementChild;

// lastChild.style.backgroundColor = "red";

// const ulElement  = document.querySelectorAll("ul");

// console.log(ulElement);

// // using an array method

// ulElement.forEach(ulElement =>{
//     const lastChildren = ulElement.lastElementChild;
//     lastChildren.style.backgroundColor="pink";
// })


//  ----------------nextSibiling ------------


// const  ele1 = document.getElementById("fruits");

// const nextSibiling = ele1.nextElementSibling;

// nextSibiling.style.backgroundColor = "black";
// nextSibiling.style.color = "white";

// ----------previous Element sibiling

// const ele1 = document.getElementById("vegtable");

// const prevSibiling  = ele1.previousElementSibling;

// prevSibiling.style.backgroundColor = "blue";

// ----------parentElement

// const apple = document.getElementById("apple");

// const parent = apple.parentElement;

// parent.style.backgroundColor = "pink";

// const ice = document.getElementById("ice");

// const iceParent = ice.parentElement;
// iceParent.style.backgroundColor = "red";

//------------- children

// const fruits = document.getElementById("fruits");

// const fruitsChildren = fruits.children;

// console.log(fruitsChildren);
// console.log(fruits);

// not having built-in method so using array method

// Array.from(fruitsChildren).forEach(child => {
//     child.style.backgroundColor = " blue";
// })

