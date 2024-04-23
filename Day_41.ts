// Question_1:Implement a for loop that counts from 1 to 10 but skip 5 

for (let num = 1; num < 11; num++) {
    let number = num;
    if (number===5){
        continue
    }
    console.log(number); 
}

//Question_2:Use a while loop to count down from 10 to 1 and breaks the loop when it reaches 5

let numbers=10
while (numbers > 0) {
    if(numbers===5){
        break
    }
    console.log(numbers);
    numbers--
}

//Question_3:Create a loop that iterates through a string and stops when it finds the first vowel

function log_until_vowel(str:string):void{
    const vowels="aeiouAEIOU"
    for (let char of str) {
        if(vowels.includes(char)){
            console.log(`First vowel found: ${char}`);
            break
        }
        console.log(char);
        
    }
}

log_until_vowel("qwwdftyu")
