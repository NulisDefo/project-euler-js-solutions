// const ceilingNum = 1000;
// let multiplesArr = [];

// // find all multiples of 3 and 5
// for (let i = 3; i < ceilingNum; i++) {
//     ((i%3 === 0) || (i%5 === 0)) && multiplesArr.push(i);
// }

// const sum = multiplesArr.reduce((prevVal, currVal) => prevVal + currVal);

// console.log(sum);

// REVISED
const ceilingNum = 1000;
let sum = 0;

// find all multiples of 3 and 5
for (let i = 3; i < ceilingNum; i++) {
    ((i%3 === 0) || (i%5 === 0)) && (sum += i);
}

console.log(sum);