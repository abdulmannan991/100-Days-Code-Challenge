//  Question 76

function add(num1 : number, num2 : number){
    let result = num1 + num2;
    return result;
}

console.log(add(5,5));


// Question 77 
console.log("______________________________");
function GreetUser (username? : string){
    if (username) {
    username = `Hello ${username} how are you!`
    console.log(username);
        
    } else {
 console.log("Hello Anonymous how are you!") 
        
    }

}

GreetUser();

// Question 78

console.log("______________________________");
function declaration(number : number){
   
    let result = number * number;
    console.log("This is function declaration = ",result);
}

declaration(4)

const Expression = function (number : number){

   
    let result = number * number;
    console.log("This is function expression = ",result);
}
Expression(4)