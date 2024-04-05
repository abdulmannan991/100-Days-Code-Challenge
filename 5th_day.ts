
// Question 13

let my_array = ["Honda Civic","Sonata","Lamborghini","Grande"];

for (let i = 0; i < my_array.length; i++) {
    const element = my_array[i];
    console.log("I Would like to own a :-",my_array[i]  );
}

console.log("_________________________________________________");

// Question 14

let guests: string[] = ["Asim", "Hammad", "Fakhir"];

guests.forEach(guest => {
    console.log(`Dear ${guest}, would you like to join me for dinner?`);
});
console.log("_________________________________________________");

// Qustion 15

let unableToAttend = "Hammad";
console.log(`${unableToAttend} can't make it to dinner.`);

// Replace the guest
let newGuest = "Nouman";
guests[guests.indexOf(unableToAttend)] = newGuest;

// New invitations
guests.forEach(guest => {
    console.log(`Dear ${guest}, would you like to join me for dinner?`);
});

