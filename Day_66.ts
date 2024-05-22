// Union type
let myVar:string|number;

myVar="Hello World!";
console.log(myVar);
myVar=24;
console.log(myVar);

//Literal type

let direction:"left"|"right"|"up"|"down";


function color(color:"red"|"green"|"blue"){
    return color
}
console.log(color("red"));
//console.log(color("white")); this line getting error because Literal type

//Nullable Types+

let username:null|string= "Glicher";
let age:number|null=null;

function greetUser (name:string|null){
    if (name === null){
        console.log("Hello User");
    }else{
        console.log(`Hello ${name}`);
        
    }
}
greetUser(null);
greetUser("Fida");

//Intersection Type

type FirstType = {
    name: string;
    age: number;
  };
  
  type SecondType = {
    address: string;
    phone: string;
  };
  
  type CombinedType = FirstType & SecondType;
  
  const person: CombinedType = {
    name: "Fida",
    age: 20,
    address: "Pakistan",
    phone: "123-456-7890",
  };


  