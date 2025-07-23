function1();

function function1(){
    console.log("calling the another function by using the ");
    hello(function2,function3);
}

function hello(callback1,callback2){
    callback1(bye);
    console.log("it hello function ");
    callback2();
}

function function2(calling){
    console.log("it a function 2");
    calling();
}

function function3(){
    console.log("third function");
}
function bye(){
    console.log("say bye ");
}