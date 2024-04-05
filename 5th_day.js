// Question 13
var my_array = ["Honda Civic", "Sonata", "Lamborghini", "Grande"];
for (var i = 0; i < my_array.length; i++) {
    var element = my_array[i];
    console.log("I Would like to own a :-", my_array[i]);
}
console.log("_________________________________________________");
// Question 14
var guests = ["Asim", "Hammad", "Fakhir"];
guests.forEach(function (guest) {
    console.log("Dear ".concat(guest, ", would you like to join me for dinner?"));
});
console.log("_________________________________________________");
// Qustion 15
var unableToAttend = "Hammad";
console.log("".concat(unableToAttend, " can't make it to dinner."));
// Replace the guest
var newGuest = "Nouman";
guests[guests.indexOf(unableToAttend)] = newGuest;
// New invitations
guests.forEach(function (guest) {
    console.log("Dear ".concat(guest, ", would you like to join me for dinner?"));
});
