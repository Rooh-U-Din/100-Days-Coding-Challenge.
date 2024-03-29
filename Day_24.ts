//Question_1:Understanding let in loops

function numbers() {
    for (let i = 1; i <= 5 ; i++) {
        console.log(i);
    }
}
numbers()

// Question_2:Compare let and const

let num= 1234567688
console.log(`let original is = ${num}`);
num =444444444
console.log(`let reassigned is =${num} `);

const num2= 987654321
console.log(num2);
// num2 =12312312 // error cannot reassign constant variable

// Question_3:Block scope with let and const

{
    let name="Fida"
    console.log(name);
    
}
// console.log(name);// error unknown word "name" 

{
    const name="thanos"
    console.log(name);
    
}
// console.log(name);// error unknown word "name" 



