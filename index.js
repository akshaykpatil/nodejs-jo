const add = require("./math.js");

let num1 = parseInt(process.argv[2]);
let num2 = parseInt(process.argv[3]);
let sum = add(num1, num2);
console.log(`The sum of ${num1} and ${num2} is ${sum}`);
console.log(`adding the sum yo and some changes`);