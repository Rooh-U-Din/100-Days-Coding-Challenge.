//Type annotation with function
function rectangle(height:number,width:number){
    return height*width
};
console.log(rectangle(6,5));
console.log("---------------------------");

// optional and default parameters

function greet(name:string,age?:number){
    if(age!== undefined){
        console.log(`Hello, ${name}! You are ${age} is years old`);
        
    }else{
        console.log(`Hello, ${name}!`)
}
}

console.log(greet("fida",20));
console.log(greet("Thanos"));

console.log("------------------------------");

//Arrow Function

const arrow=(a:number,b:number)=>{console.log(a+b);
}

arrow(4,6);

console.log("------------------------------");


// Anonymous Function

const add= function(a:number,b:number){return a+b}

console.log(add(5,7));

console.log("------------------------------");



//Void & Never

// void
function greeting(name: string): void {
    console.log(`Hello, ${name}!`);
  }
  console.log(greeting("thanos"));
  
  
  function no_return_value(): void {
    // This function doesn't return a value (implicitly returns undefined).
  }
  console.log(no_return_value());
  
  
  // never
  function throwError(message: string): never {
    throw new Error(message);
  }

  //console.log(throwError("Hello World")); // this function trows error when we call
  
  function infiniteLoop(): never {
    while (true) {
      // This function never exits (infinite loop)
    }
  }
  console.log(infiniteLoop());
  
  