// Question 94

let newname = ["Hello","TypeScipt"];
const lengths: number[] = newname.map(newname => newname.length);
console.log(lengths);

// Question 95

function filterGreaterThanTen(numbers: number[]): number[] {
    return numbers.filter(number => number > 10);
}

const numbers: number[] = [5, 10, 15, 20, 25];
console.log(filterGreaterThanTen(numbers)); 


// Question 96

function calculateSum(numbers: number[]): number {
    return numbers.reduce((accumulator, current) => accumulator + current, 0);
}

const nums: number[] = [1, 2, 3, 4, 5];
console.log(calculateSum(nums)); 