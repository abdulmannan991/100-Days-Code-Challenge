// Question 109
var currentTime = new Date();
if (currentTime.getHours() < 12) {
    console.log("Good Morning");
}
console.log(currentTime);
// Question 110
function Checkgrade(percentage) {
    if (percentage > 70) {
        console.log("Congratulations your grade is A");
    }
    else if (percentage > 60) {
        console.log("Congratulations your grade is B");
    }
    else if (percentage > 50) {
        console.log("Congratulations your grade is c");
    }
    else {
        console.log("You are fail :(");
    }
}
Checkgrade(80);
// Question 111
function Agerestriction(Age) {
    if (Age >= 20) {
        console.log("You are Adult");
    }
    else if (Age > 13) {
        console.log("You are Teenager");
    }
    else {
        console.log("You are a Cute Child :)");
    }
}
Agerestriction(19);
