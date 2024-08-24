// Question 112

const countries1 = new Map<string , string>();
countries1.set("Pakistan","Islamabad",);
countries1.set("China","Beijing");
countries1.set("India","New Delhi");

console.log(countries1);


// Question 113
console.log("_________________________________");

function Check(countries1: Map<string, string>):void{
if(countries1.has("Pakistan")){
console.log(`The capital of Pakistan is ${countries1.get("Pakistan")}`)
}
else{
    console.log("Result not found!")
}
}

Check(countries1);


// Question 114
console.log("_________________________________");
const students = new Map<number, string>();
students.set(1, "Alice");
students.set(2, "Bob");
students.set(3, "Charlie");

students.forEach((name, id) => {
  console.log(`Student ID: ${id}, Name: ${name}`);
});
