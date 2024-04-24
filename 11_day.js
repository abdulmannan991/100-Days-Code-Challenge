// Question 31
var empty_user = [];
if (empty_user.length == 0) {
    console.log("We need to find some users!");
}
else {
    console.log("Greet Users");
}
// Question 32 
console.log("_____________________________________________");
var users = ["name1", "name2", "name3", "name4"];
var New_users = ["Name1", "name6", "Name3", "name8"];
New_users.forEach(function (New_users) {
    if (users.some(function (users) { return users.toLocaleLowerCase() == New_users.toLocaleLowerCase(); })) {
        console.log("".concat(New_users, " Will need to enter a new username"));
    }
    else {
        console.log("".concat(New_users, " is available"));
    }
});
// Question 33
console.log("_____________________________________________");
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
numbers.forEach(function (number) {
    var suffix = "th";
    if (number === 1) {
        suffix = "st";
    }
    else if (number === 2) {
        suffix = "nd";
    }
    else if (number === 3) {
        suffix = "rd";
    }
    console.log("".concat(number).concat(suffix));
});
