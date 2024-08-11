"use strict";
// Question 91
function FruitsArray(fruits) {
    fruits.push("Grapes");
    return fruits;
}
console.log(FruitsArray(["Apple", "Mango", "Orange"]));
// Question 92
console.log("_________________________________");
function removeFruits(fruits) {
    fruits.pop();
    return fruits;
}
console.log(removeFruits(["Apple", "Mango", "Orange"]));
// Question 93
console.log("_________________________________");
function ChangeFruit() {
    let value = fruits.indexOf("Apple");
    if (value !== -1)
        fruits[value] = "Grapes";
}
let fruits = ["Apple", "Mango", "Orange"];
ChangeFruit();
console.log(fruits);
