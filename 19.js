// Question 55
var array1 = [1, 2, 3, 4, 5];
var array2 = [];
for (var i = 0; i < array1.length; i++) {
    array2[i] = array1[i] * 2;
}
array1 = array2;
console.log(array1);
// Question 56
var MixedArray = [1, 34, "I", "Am", "Working", true, false];
var StringArray = MixedArray.filter(function (value) { return typeof value == "string"; });
console.log(StringArray);
// Question 57
var GradeList = [76, 86, 90];
var sum = GradeList[0] + GradeList[1] + GradeList[2];
var newlist = sum / GradeList.length;
console.log(newlist);
