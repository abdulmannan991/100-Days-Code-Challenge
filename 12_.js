// Question 34
var Pizzas = ["Fajita", "Chicken Tikka", "BBQ Chicken", "Lava Pizza"];
for (var i = 0; i < Pizzas.length; i++) {
    console.log("I Like this pizza so ", Pizzas[i], "much!");
}
console.log("____________________________________________");
// Question 35
var Animals = ["Cat", "Dog", "Rabbit",];
Animals.forEach(function (i) {
    console.log("A ".concat(i, " Would make a great pet"));
});
console.log("All of these animals would make a great pet ");
console.log("____________________________________________");
// Question 36
function TShirt(colorr, sizee) {
    var color = colorr;
    var size = sizee;
    console.log("The color of T-Shirt is ".concat(color, " and the Size is ").concat(size));
}
TShirt("Yellow", "Medium");
TShirt("White", "Small");
TShirt("Blue", "Excel");
