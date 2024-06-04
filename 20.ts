// Question 58


function averagescore (...scores :number[]){
let sum = 0
for(let i = 0 ; i < scores.length; i ++){
  
    sum += scores[i]
}
let result = sum / scores.length
console.log(result)
}


averagescore(45,75,88,82,32);

// Question 59


function createadder(addnumber){

    return function (anothernumber ){
        return addnumber + anothernumber;
    }
}

let addfive = createadder(5)
let result1 = addfive(10);
console.log(result1);

// Question 60

let userinfo : {

    name : string;
    age : number;

}

 userinfo = {

    name : "Mannan",
    age : 19,

}

console.log("The user name is ",userinfo.name,"The user age is",userinfo.age);









