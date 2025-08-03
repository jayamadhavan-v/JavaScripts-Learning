// learning setTimeout Function 

function setTimeoutExample() {
    console.log("This message will be logged after 2 seconds");
}

setTimeout(setTimeoutExample, 2000);

// using the arrow function syntax

setTimeout(() => {
    console.log("This message will be logged after 3 seconds using arrow function syntax");
}, 3000);   

function sayMyName(name) {
    console.log(`My name is ${name}`);
}

setTimeout(() => sayMyName("Jayamadhavan"), 4000);

setTimeout(() => {
    window.location.href = "https://www.example.com";
}, 2000);

