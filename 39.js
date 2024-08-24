// Question 115
console.log("\"Please select number under 1-7 to find what day is todya?\"");
function FindDay(day) {
    switch (day) {
        case 1:
            console.log("Monday");
            break;
        case 2:
            console.log("Tuesday");
            break;
        case 3:
            console.log("Wednesday");
            break;
        case 4:
            console.log("Thursday");
            break;
        case 5:
            console.log("Friday");
            break;
        case 6:
            console.log("Saturday");
            break;
        case 7:
            console.log("Sunday");
            break;
        default: console.log("Please enter the correct number");
    }
}
FindDay(5);
// Question 116
console.log("\"Please select a season to see its outcome\"");
function Months(month) {
    switch (month) {
        case 'Spring':
            console.log("March");
            console.log("Aprail");
            break;
        case 'Summer':
            console.log("May");
            console.log("June");
            console.log("July");
            console.log("Augest");
            break;
        case 'Autumn':
            console.log("September");
            console.log("October");
            console.log("November");
            break;
        case 'Winter':
            console.log("December");
            console.log("January");
            console.log("February");
            break;
        default: console.log("You choose an invalid Season!");
    }
}
Months("Autumn");
// Question 117
console.log("\"Select an operator and two number to perform an operation\"");
function Expression(operator, num1, num2) {
    switch (operator) {
        case '+':
            console.log(num1 + num2);
            break;
        case '-':
            console.log(num1 - num2);
            break;
        case '/':
            if (num2 == 0) {
                console.log("A number cannot be divided by zero");
            }
            else {
                num1 / num2;
            }
            break;
        case '%':
            console.log(num1 % num2);
            break;
        default: console.log("Kindly choose correct operator");
    }
}
Expression('-', 5, 5);
