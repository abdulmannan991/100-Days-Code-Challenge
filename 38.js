"use strict";
// Question 112
Object.defineProperty(exports, "__esModule", { value: true });
const countries1 = new Map();
countries1.set("Pakistan", "Islamabad");
countries1.set("China", "Beijing");
countries1.set("India", "New Delhi");
console.log(countries1);
// Question 113
console.log("_________________________________");
function Check(countries1) {
    if (countries1.has("Pakistan")) {
        console.log(`The capital of Pakistan is ${countries1.get("Pakistan")}`);
    }
    else {
        console.log("Result not found!");
    }
}
Check(countries1);
// Question 114
console.log("_________________________________");
const students = new Map();
students.set(1, "Alice");
students.set(2, "Bob");
students.set(3, "Charlie");
students.forEach((name, id) => {
    console.log(`Student ID: ${id}, Name: ${name}`);
});
