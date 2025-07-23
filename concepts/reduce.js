// USING REDUCE

const marks = [80, 75, 90, 85];

const total = marks.reduce((acc, number) =>
    acc + number, 0
);
console.log(total);

const  average = marks.reduce((acc,number) => acc* number,1);
console.log(average);

const price = [1,2,3,4,5];

const totalprice = price.reduce(sum);

function sum(a,b){
    return a+b;
}

console.log(totalprice);

const multiply = [0,2,3,4,5];

const product = multiply.reduce(doMultiply);

function doMultiply(a,b){
    return a*b;
}
console.log(product);