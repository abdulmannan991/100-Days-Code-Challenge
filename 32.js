"use strict";
// Question 94
let newname = ["Hello", "TypeScipt"];
const lengths = newname.map(newname => newname.length);
console.log(lengths);
// Question 95
function filterGreaterThanTen(numbers) {
    return numbers.filter(number => number > 10);
}
const numbers = [5, 10, 15, 20, 25];
console.log(filterGreaterThanTen(numbers));
// Question 96
function calculateSum(numbers) {
    return numbers.reduce((accumulator, current) => accumulator + current, 0);
}
const nums = [1, 2, 3, 4, 5];
console.log(calculateSum(nums));
