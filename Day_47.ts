//Question_1:List three reserved words

//Conditional statement if, if else  , else  are (Reserved) Words
let i = 9

if (i<7){
    console.log("I is greater");
} else if (i>8){
    console.log("I is lesser");
    
}else{
    console.log("invailid word");
    
}
 
//Function is (Reserved) Word
function naam(naam:string){
    return `Hello ${naam}`
}

console.log(naam("thanos"));


//Variables var , let , const are (Reserved) Words
let name="Thanos"
console.log(name);

//Question_2:Explain the error that occurs when trying to use a reserved word as a variable name

//let function = "Function"
console.log("Function is reserved word as a variable names causes syntax error in typescript and javascript ");



async function fetch_data(){
    const data = await fetch_data()
    console.log(data);
    
}