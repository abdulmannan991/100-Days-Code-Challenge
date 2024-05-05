// Question 37 

function T_Shirt (size : String = "Large", message : String = "I Love this T-Shirt"){
              console.log(`The size of T-Shirt is  ${size} , ${message}`);
}


T_Shirt();
T_Shirt("Medium","Is the best T-shirt for me");
T_Shirt("Small",);


// Question 38
console.log("___________________________________");


function Cities (City :String , Country : String = "Pakistan" ){
console.log(`${City} City is in ${Country}`);
}

Cities("Karachi");
Cities("Lahore");
Cities("Tokyo","Japan");

// Question 39
console.log("___________________________________");

function city_ (city : String , country :String){
         return `${city} , ${country}`;
}

console.log(city_("Karachi","Pakistan"));
console.log(city_("Beijing","China"));
console.log(city_("Berlin","Germany"));

