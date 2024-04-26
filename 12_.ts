// Question 34

let Pizzas = ["Fajita","Chicken Tikka","BBQ Chicken","Lava Pizza"];
 
for (let i = 0; i <Pizzas.length; i++) {
   console.log("I Like this pizza so ",Pizzas[i],"much!");
    
}

console.log("____________________________________________");
// Question 35

let Animals = ["Cat","Dog","Rabbit",];

Animals.forEach(i => {
    console.log(`A ${i} Would make a great pet`);
});

console.log("All of these animals would make a great pet ");

console.log("____________________________________________");


// Question 36

function TShirt(colorr :String,sizee:String){
    let color = colorr;
    let size = sizee;
    console.log(`The color of T-Shirt is ${color} and the Size is ${size}`);
}

TShirt("Yellow","Medium");
TShirt("White","Small");
TShirt("Blue","Excel");