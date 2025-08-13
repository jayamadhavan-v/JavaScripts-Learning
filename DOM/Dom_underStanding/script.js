


//------------ create the element 

const newH1 = document.createElement("h1");

//----------- add the attribute or properties

newH1.textContent = "adding into the DOM";
newH1.style.textAlign = "center";

// adding id for it 
newH1.id = "myh1"

//-------------- append element to dom

// adding into last

// document.body.append(newH1);


// add into the first

// document.body.prepend(newH1);

//--------adding into the div

// appending into div------

// document.getElementById("box1").append(newH1);

// prepending into div---------

// document.getElementById("box1").prepend(newH1);

// adding in between the two element by using the id selector 

// const box2 = document.getElementById("box2");

// document.body.insertBefore(newH1, box2);

// aadding the query selecctor method

// const boxes = document.querySelectorAll(".box");

// console.log(boxes);

// Array.from(boxes).forEach(box =>{
//     box.style.backgroundColor ="red";
// })

// document.body.insertBefore(newH1,boxes[0]);

// removes element

// document.body.removeChild(newH1);