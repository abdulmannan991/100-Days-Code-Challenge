// Question 79
var cars = {
    make: "Honda",
    model: "Civic",
    year: 2022,
};
console.log(cars);
// Question 80
console.log("_______________________________");
cars.year = 2021;
cars.color = "Black";
console.log("Update car list =", cars);
// Question 81
console.log("_______________________________");
function obj(obj) {
    for (var property in obj) {
        console.log("".concat(property, ": ").concat(obj[property]));
    }
}
obj({ make: "Honda", model: "Civic", year: 2021, color: "Black" });
