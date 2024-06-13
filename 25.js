// Question 72
function update() {
    var num = 2;
    console.log(num);
    num = 4;
    console.log(num);
}
update();
// Question 73
console.log("________________________________________________");
function swap() {
    var a = 5;
    var b = 10;
    console.log("Before swap a = ", a, "b = ", b);
    var garbage = a;
    a = b;
    b = garbage;
    console.log("After swap a = ", a, "b = ", b);
}
swap();
// Question 74
console.log("________________________________________________");
function CompoundOperator() {
    var a = 6;
    a += 2;
    console.log("Addition = ", a);
    a -= 2;
    console.log("Subtraction = ", a);
    a *= 2;
    console.log("Multiplication = ", a);
    a /= 2;
    console.log("Division = ", a);
}
;
CompoundOperator();
