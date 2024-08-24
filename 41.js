// Question 121
for (var i_1 = 0; i_1 <= 10; i_1++) {
    if (i_1 === 5) {
        continue;
    }
    console.log(i_1);
}
// Question 122
console.log("___________________________");
var i = 10;
while (i > 0) {
    if (i === 5) {
        break;
    }
    console.log(i);
    i--;
}
// Question 123
console.log("___________________");
function logUntilVowel(str) {
    var vowels = "aeiouAEIOU";
    for (var _i = 0, str_1 = str; _i < str_1.length; _i++) {
        var char = str_1[_i];
        if (vowels.includes(char)) {
            console.log("First vowel found: ".concat(char));
            break; // Stops the loop at the first vowel found
        }
        console.log(char); // Logs each character until a vowel is encountered
    }
}
logUntilVowel("Flutter , Dart");
