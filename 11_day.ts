// Question 31

let empty_user = [];

if (empty_user.length==0) {
    console.log("We need to find some users!")
} else {
    console.log("Greet Users");
}

// Question 32 
console.log("_____________________________________________");

let users = ["name1","name2","name3","name4"];
let New_users = ["Name1","name6","Name3","name8"];

New_users.forEach(New_users => {
    if (users.some(users=>users.toLocaleLowerCase()==New_users.toLocaleLowerCase())) {
        console.log(`${New_users } Will need to enter a new username`);
    } else {
        console.log(`${New_users} is available`);
    }
});

// Question 33
console.log("_____________________________________________");

let numbers : number[] = [1,2,3,4,5,6,7,8,9];
numbers.forEach(number => {
    let suffix = "th";
    if(number===1){
        suffix = "st";
    }
    else if (number===2){
        suffix = "nd";
            }
            else if (number===3){
                suffix = "rd";
                    }
                    console.log(`${number}${suffix}`);
});