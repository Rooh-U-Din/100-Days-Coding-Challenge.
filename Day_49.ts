//Question_1:Create a function that accepts a callback and invokes it with some arguments

function execute_call_back(
    callback: (arg1:number,arg2:number)=>void,
    arg1:number,
    arg2:number
):void{
    callback(arg1,arg2);
}
const add = (a:number,b:number)=>{
    console.log(a + b );
}

execute_call_back(add,5,6)

//Question_2Show an example of a callback function used to filter an array of numbers

let numbers:number[]= [1,2,3,4,5,6,7,8,9]

function filter_numbers(number:number[]){
    return number.filter((number)=> number > 5)
}
console.log(filter_numbers(numbers));

//Question_3:Explain how to handle errors in callback pattern

function fetch_data(
    callback:(error:Error | null, data?:string) => void
):void {
    const error = new Error("Failed to fetch data");
    const data="Some data";

    if(Math.random()>0.5){
        callback(null,data)
    }else{
        callback(error)
    }
}

fetch_data((error,data) =>{
    if(error){
        console.error(error.message);
    } else{
        console.log(data);
        
    }
}
)
