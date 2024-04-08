// Question 22
var Fruits = ["Mango", "Apple", "Strawberry", "Banana"];
//"console.log(Fruits[4]); //Create an error by accessing a non-existent index value".
console.log(Fruits[3]); //Then correct the code.
console.log("____________________________________");
// Question 23
// Conditon # 1
var Marks = 75;
if (Marks >= 70) {
    console.log("Congratulations! You have passed the exam");
}
else {
    console.log("Unfortunately You failed :(");
}
// Condition # 2
var HouseRent = 15000;
if (HouseRent == 25000) {
    console.log(true);
}
else {
    console.log(false);
}
console.log("____________________________________");
// Question 24
console.log("Testing equality with String ");
console.log("apple" == "apple"); //True
// console.log("apple" == "Apple"); // False
// Using the lowercase funtion 
console.log("Apple".toLowerCase() == "apple"); // True
// Some Numerical tests 
console.log(5 > 10); // False
console.log(5 < 10); // True
// Test using 'AND' and 'OR' operator
console.log(true && false); // False 
console.log(true || true); // True
var Fruits1 = ["Mango", "Apple", "Strawberry", "Banana"];
console.log("Is 'Mango' is fruits?");
console.log(Fruits.indexOf("Mango")); // True
console.log("Is 'Orange' is fruits?");
console.log(Fruits.indexOf("Orange")); // False
