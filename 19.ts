// Question 55

let array1: number[] = [1, 2, 3, 4, 5];
let array2: number[] = [];
for (let i = 0; i < array1.length; i++) {  
    array2[i] = array1[i] * 2;  
}
array1 = array2;  

console.log(array1);  

// Question 56

let MixedArray : unknown[] = [1,34,"I","Am","Working",true,false];

let StringArray = MixedArray.filter(value => typeof value == "string");



console.log(StringArray);


// Question 57

let GradeList = [76,86,90];
let sum = GradeList[0] + GradeList[1] + GradeList[2]

let newlist = sum / GradeList.length;

console.log(newlist);



