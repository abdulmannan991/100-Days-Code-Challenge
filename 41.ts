// Question 121

for(let i = 0; i <=10;i++){

    if (i === 5) {

        continue;
    }
    console.log(i)

}

// Question 122
console.log("___________________________");
let i = 10
while(i>0){
    if (i===5) {
        break;
    } 
 
    console.log(i);
    i--;

}

// Question 123
console.log("___________________");

function logUntilVowel(str: string): void {
    const vowels = "aeiouAEIOU";
    for (const char of str) {
      if (vowels.includes(char)) {
        console.log(`First vowel found: ${char}`);
        break; 
      }
      console.log(char); 
    }
  }
  
  logUntilVowel("Flutter");











