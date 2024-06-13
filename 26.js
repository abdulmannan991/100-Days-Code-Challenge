//  Question 76
function add(num1, num2) {
    var result = num1 + num2;
    return result;
}
console.log(add(5, 5));
// Question 77 
console.log("______________________________");
function GreetUser(username) {
    if (username) {
        username = "Hello ".concat(username, " how are you!");
        console.log(username);
    }
    else {
        console.log("Hello Anonymous how are you!");
    }
}
GreetUser();
// Question 78
console.log("______________________________");
function declaration(number) {
    var result = number * number;
    console.log("This is function declaration = ", result);
}
declaration(4);
var Expression = function (number) {
    var result = number * number;
    console.log("This is function expression = ", result);
};
Expression(4);
