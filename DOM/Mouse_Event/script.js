// learning javaScript

const myBox = document.getElementById("myBox");


myBox.addEventListener("click", event => {
    console.log(event);
    event.target.style.backgroundColor = "tomato";
    event.target.textContent = "OMG U clicked 😍";

}
);

myBox.addEventListener("mouseover", event => {
    event.target.style.backgroundColor = "pink";
    event.target.textContent = " its too good 😘";

});

myBox.addEventListener("mouseout", event => {
    event.target.style.backgroundColor = "yellow";
    event.target.textContent = " do again plzz 😉";

});
