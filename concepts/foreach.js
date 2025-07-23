let numbers =[1,2,3,4,5];
console.log(numbers);


numbers.forEach(double);
numbers.forEach(triple);
numbers.forEach(display);

function display(nummber){
    console.log(nummber);
}

function double(element , index, array){
    array[index] = element * 2;
    display(array[index]);
}
function triple(element , index, array){
    array[index] = element * 3;
}