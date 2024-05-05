// Question 37 
function T_Shirt(size, message) {
    if (size === void 0) { size = "Large"; }
    if (message === void 0) { message = "I Love this T-Shirt"; }
    console.log("The size of T-Shirt is  ".concat(size, " , ").concat(message));
}
T_Shirt();
T_Shirt("Medium", "Is the best T-shirt for me");
T_Shirt("Small");
// Question 39
console.log("___________________________________");
function Cities(City, Country) {
    if (Country === void 0) { Country = "Pakistan"; }
    console.log("".concat(City, " City is in ").concat(Country));
}
Cities("Karachi");
Cities("Lahore");
Cities("Tokyo", "Japan");
// Question 40
console.log("___________________________________");
function city_(city, country) {
    return "".concat(city, " , ").concat(country);
}
console.log(city_("Karachi", "Pakistan"));
console.log(city_("Beijing", "China"));
console.log(city_("Berlin", "Germany"));
