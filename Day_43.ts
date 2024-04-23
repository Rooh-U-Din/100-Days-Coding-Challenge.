//Question_1:Convert a traditional function expression  to an arrow function

const traditional = function (a:number,b:number) {
    return a+b
}

console.log(traditional(4,3));

const fat= (a:number,b:number)=>{
    return a+b
}
console.log(fat(4,3));

//Question_2:Arrow function

const Multiple = (...numbers:number[])=>{
     return numbers.reduce((total,number) => total* number,1)
}
console.log(Multiple(3,4,6,8));


// Question_3: Explain how (this) behaves differently in arrow function compared to the traditional function

// const trad_vs_fat = {
//     value:"traditional_vs_arrow",
//     traditional_function:function(){
//         console.log("traditional function:",this.value);
        
//     },
//     arrow_function:()=>{
//         console.log("Arrow function:", this.value);
//     }
// }

// trad_vs_fat.traditional_function()
// trad_vs_fat.arrow_function()

