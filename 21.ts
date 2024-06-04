// Question 61

enum Carsinfo{
    trucks = "This is a Truck",
    Cars = "This is a Car",
    Motorcycles = "This is a Motorcycle",
}

console.log(Carsinfo.trucks);
console.log(Carsinfo.Cars);
console.log(Carsinfo.Motorcycles);

// Question 62 
console.log("____________________________________");

interface Studentsinfo {
    Name : string;
    age : number;
    calsses : string[];


}

let users : Studentsinfo = {
    Name : "Mannan",
    age  : 19,
    calsses : ["Generative Ai","English"]
}
console.log(users);

// Question 63
console.log("____________________________________");
type Shape = {
    kind: "circle" | "rectangle";
    radius?: number; 
    width?: number; 
    height?: number; 
};

let circle: Shape = {
    kind: "circle",
    radius: 5
};

let rectangle: Shape = {
    kind: "rectangle",
    width: 10,
    height: 20
};

console.log(circle); 
console.log(rectangle); 