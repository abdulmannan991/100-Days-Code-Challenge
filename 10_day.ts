
// Question 28

let age: number = 25;

if (age < 2) {
    console.log("The person is a baby.");
} else if (age < 4) {
    console.log("The person is a toddler.");
} else if (age < 13) {
    console.log("The person is a kid.");
} else if (age < 20) {
    console.log("The person is a teenager.");
} else if (age < 65) {
    console.log("The person is an adult.");
} else {
    console.log("The person is an elder.");
}

console.log("__________________________________");

// Question 29

let favorite_fruits: string[] = ["apples", "bananas", "cherries"];

if (favorite_fruits.indexOf("bananas")) {
    console.log("You really like bananas!");
}
if (favorite_fruits.indexOf("apples")) {
    console.log("You really like apples!");
}
console.log("__________________________________");

// Qusetion 30 

let usernames: string[] = ["admin", "user1", "user2", "user3", "user4"];

usernames.forEach(username => {
    if (username === "admin") {
        console.log("Hello admin, would you like to see a status report?");
    } else {
        console.log(`Hello ${username}, thank you for logging in again.`);
    }
});