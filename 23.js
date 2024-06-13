// Question 67 
function add(num1, num2) {
    num1;
    num2;
    var sum = num1 + num2;
    return sum;
}
console.log(add("5", 5));
// Question 68
function DecimalNums(num1, num2) {
    num1;
    num2;
    var result = num1 * num2;
    return result.toFixed(2);
}
console.log(DecimalNums(5.34, 72.3354));
// Question 69
function DivideValues(divide, modulous) {
    divide;
    modulous;
    var quotient = Math.floor(divide / modulous);
    var remainder = (divide % modulous);
    return { quotient: quotient, remainder: remainder };
}
console.log(DivideValues(55, 6));
