// Question 64
function info(textt, numberr) {
    return textt + numberr + "\"";
}
console.log(info("\"Age: ", 30));
// Question 65
function modulus(num1, num2) {
    var result = num1 % num2;
    return result;
}
console.log(modulus(2, 4));
// Question 66
function CheckIfTrue(Checktrue, Checkfalse) {
    if (Checktrue && Checkfalse) {
        return true;
    }
    else {
        return false;
    }
}
console.log(CheckIfTrue(true, false));
