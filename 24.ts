// Question 70

function Loops(){
    for(let i = 1 ; i <=5;i++){
        console.log(i);
    }
}

Loops();

// Question 71

function let1(){
    let i = 3;
     i = 4;
     console.log(i)
    //  In let you can reassign an variable 

}

// function const1(){
//     const1 i = 3;
//      i = 4;
//      console.log(i)
//     //  In const you can't reassign an variable

// }

// Question 72

{
    let a = 22;
    const b = 34
    console.log(a) // Output 22

    console.log(b) // 34

    // they both are insdie the block that's why we can access both of them
}

console.log(a) //Error because blocklet is not accessible outside the block

console.log(b)  //Error because blockconst is not accessible outside the block
