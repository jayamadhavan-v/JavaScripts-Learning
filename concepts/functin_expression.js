const numbers =[1, 2, 3, 4, 5];

function square(element){
    return Math.pow(element, 2);
}

// maps() for for doing on operation and it will execute the new array 

const squaredArr = numbers.map(square);

console.log(squaredArr);

// 
let array =  [];
function sqaureValues(){
    for (let index = 0; index <= 20; index++) {
       array[index] = index
    }
    const arr = array.map(square);     
    console.log(array);
    console.log(arr);
}
sqaureValues();