// Question 46

interface specificationlaptop {

make : String,
model : String,
year  : number,

describe : ()=> void,

};

let specification : specificationlaptop = {

    make : "Dell",
    model : "XPS 14",
    year : 2024,
    describe(){
        console.log(`this laptop is a ${this.year} ${this.model} ${this.make}`);
    },
};




specification.describe();

// Question 47

console.log("___________________________________________");
let laptops = [
    { make: "Dell", model: "XPS 15", year: 2021 },
    { make: "Apple", model: "MacBook Pro", year: 2020 },
    { make: "HP", model: "Spectre x360", year: 2021 }
];
let [laptop1, laptop2,laptop3] = laptops;
console.log(laptop1);
console.log(laptop2);
console.log(laptop3);

// Question 48
console.log("___________________________________________");


let pricesSet1 = [1200, 1500, 1100];
let pricesSet2 = [1000, 1300, 1600];
let combinedPrices = [...pricesSet1, ...pricesSet2].sort((a, b) => a - b);
console.log(combinedPrices);


