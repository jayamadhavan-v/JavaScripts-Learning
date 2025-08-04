// using an filter 

numbers =[1,2,3,4,5,6,7,8,9,10];

const evennumber = numbers.filter(num);

const oddNumber = numbers.filter(num => num % 2 == 1);
function num(number){
    return number % 2  == 0;
}
console.log(evennumber);
console.log(oddNumber);
