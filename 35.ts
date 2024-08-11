// Question 103

let Check = Math.random() > 0.9 ? true : false;
console.log(Check);

// Question 104

function getRandomHexColor(): string {
    const color = '#' + Math.floor(Math.random() * 0xFFFFFF).toString(16).padStart(6, '0');
    return color; 
}

console.log(getRandomHexColor());

// Question 105


let New = Math.floor(Math.random()*6+1) ;
console.log(New);




