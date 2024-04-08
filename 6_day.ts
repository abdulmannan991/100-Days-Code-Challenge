
// Question 16

let guests: string[] =["Asim", "Hammad", "Fakhir"];

console.log("Great news! I found a bigger dinner table!");

// Adding more guests
guests.unshift("Sarim");
guests.splice(guests.length / 2, 0, "Razzaq");
guests.push("Faheem");

guests.forEach(guest => {
    console.log(`Dear ${guest}, would you like to join me for dinner?`);
});

console.log("____________________________________________________________");
// Question 17

console.log("Unfortunately, I can only invite two people for dinner.");

while (guests.length > 2) {
    let removedGuest = guests.pop();
    console.log(`Sorry, ${removedGuest}, I can't invite you to dinner.`);
}

guests.forEach(guest => {
    console.log(`Dear ${guest}, you're still invited to dinner.`);
});

guests.splice(0, guests.length);
console.log(guests);

console.log("____________________________________________________________");

// Question 18

let places = ["Palestine","Skardu","Saudia Arabia" ,"Hunza","Qatar"];

console.log("Original order:", places);

console.log("Alphabetical order:", [...places].sort());

console.log("Original order:", places);

console.log("Reverse alphabetical order:", [...places].sort().reverse());

console.log("Original order:", places);

places.reverse();
console.log("Reversed order:", places);

places.reverse();
console.log("Original order:", places);

places.sort();
console.log("Alphabetical order:", places);

places.reverse();
console.log("Reverse alphabetical order:", places);

