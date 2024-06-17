"use strict";
// Question 85
Object.defineProperty(exports, "__esModule", { value: true });
function CodeTask(code) {
    return code.indexOf("code");
}
console.log(CodeTask("Learn code with TypeScript"));
// Question 86
function Task() {
    let value = ["learn", "Code", "Withme"];
    console.log(value.includes("Code"));
}
Task();
// Question 87
function extractFirstTenChars(str) {
    return str.substring(0, 11);
}
console.log(extractFirstTenChars("Hello, JavaScript world!"));
