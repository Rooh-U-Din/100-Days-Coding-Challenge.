//Type Annotation With Array

let fruits:string[]=["Apple","Banana","Watermelon","Orange","Mango"];

for (let i=0; i < fruits.length; ++i){
    console.log(`Fruit ${fruits[i].toUpperCase()}`);   
};

//Type Annotation With Multidimensional Arrays


let arrayOne:string[]=["A","B","C"];
let arrayTwo:number[]=[1,2,3,4,5,6,7,8];
let arrayThree:(string|number)[]=[1,2,3,4,5,"A","B","C"];
