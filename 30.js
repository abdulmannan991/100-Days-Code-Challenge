"use strict";
// Question 88
function RoundOff(num) {
    return Math.round(num);
}
console.log(RoundOff(55.759));
console.log(RoundOff(75.4));
// Question 89
console.log("_____________________________");
function StringConverter(num) {
    return parseInt(num);
}
console.log(StringConverter("123"));
// Question 90
console.log("_____________________________");
function NanValue(nan) {
    return isNaN(nan);
}
;
console.log(NanValue(1));
console.log(NanValue("Good bye"));
