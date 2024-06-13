// Question 72

function update(){
    let num = 2
    console.log(num)
    num = 4;
    console.log(num);
}

update();

// Question 73
console.log("________________________________________________");

function swap(){
    let a = 5 ; let b = 10;
    console.log("Before swap a = ",a , "b = ",b);

    let garbage = a;
    a = b;
    b = garbage;
    console.log("After swap a = ",a , "b = ",b);

}

swap()

// Question 74
console.log("________________________________________________");
function CompoundOperator(){
    let  a = 6;
    a += 2;
    console.log("Addition = ",a)
    a-=2
    console.log("Subtraction = ",a)
    a *= 2;
    console.log("Multiplication = ",a)
    a /=2
    console.log("Division = ",a)
    
};
CompoundOperator();

