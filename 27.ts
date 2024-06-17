// Question 79

type carobj = {
    make : string;
    model : string;
    year : number
};

let cars : carobj = {
    make : "Honda",
    model : "Civic",
    year : 2022,
}

console.log(cars);


// Question 80
console.log("_______________________________");

cars.year = 2021;
(cars as any).color = "Black"
console.log("Update car list =",cars); 

// Question 81
console.log("_______________________________");
function obj(obj: object) {
    for (let property in obj) {
        console.log(`${property}: ${obj[property]}`);
    }
}

obj({ make: "Honda", model: "Civic", year: 2021, color: "Black" });
