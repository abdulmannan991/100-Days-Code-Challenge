// Question 67 


function add(num1,num2){
    num1;
    num2;
    let sum = num1 + num2
    return sum
}

console.log(add("5",5));

// Question 68

function DecimalNums (num1 : number ,  num2 : number){
    num1;
    num2;
    let result = num1 * num2;
    return result.toFixed(2);
}

console.log(DecimalNums(5.34,72.3354));

// Question 69

function DivideValues (divide : number , modulous : number, ){
divide;
modulous;
let quotient = Math.floor(divide / modulous)
let remainder = (divide % modulous)
return {quotient ,remainder}
}

console.log(DivideValues(55,6))















