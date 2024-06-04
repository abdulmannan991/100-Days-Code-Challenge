// Question 58
function averagescore() {
    var scores = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        scores[_i] = arguments[_i];
    }
    var sum = 0;
    for (var i = 0; i < scores.length; i++) {
        sum += scores[i];
    }
    var result = sum / scores.length;
    console.log(result);
}
averagescore(45, 75, 88, 82, 32);
// Question 59
function createadder(addnumber) {
    return function (anothernumber) {
        return addnumber + anothernumber;
    };
}
var addfive = createadder(5);
var result1 = addfive(10);
console.log(result1);
// Question 60
var userinfo;
// This profile sets itself up and can share info about the user
var userProfile = (function () {
    // The user's details are kept inside
    var name = "John";
    var age = 30;
    // This part shares the user's details
    return {
        displayInfo: function () {
            console.log("Name: ".concat(name, ", Age: ").concat(age));
        }
    };
})();
// Asking the profile to tell us about the user
userProfile.displayInfo(); // It says the user's name and age
// We made a self-setup profile that can talk about the user.
