const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const [firstNumber, ,thirdNumber, , fifthNumber] = numbers;
console.log(firstNumber, thirdNumber, fifthNumber);

///////////////
//                   0          1          2
//                0  1  2    0  1  2    0  1  2
const number = [ [1, 2, 3], [4, 5, 6], [7, 8, 9] ];


const [, [,,six]] = number;

console.log(six);