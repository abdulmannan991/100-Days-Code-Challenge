// Questioon 106


function isLeapYear(year: number): boolean {
    return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
  }
  
  console.log(isLeapYear(2020)); 
  console.log(isLeapYear(1900)); 
  
//   Question 107


function newFunc(number : number) : boolean{

    return (number %2 === 0 && number % 3===0);
}

console.log(newFunc(50));
console.log(newFunc(12));


// Question 108

function ComparingStrings(string1 : string , string2 : string): boolean{

    return string1.toLowerCase() === string2.toLowerCase();
}

console.log(ComparingStrings("hello","Hello"));
console.log(ComparingStrings("world","word"));




