import { greet } from './class';
// INTERFACE INTRO

interface Person {
    name:string;
    age:number;
}

const person:Person={
    name:"Fida",
    age:20
}
console.log(person);


//  INTERFACE METHOD AND PARAMETERS

interface Person2{
    name:string;
    age:number;
    greet(message:string):void;
}

const person2:Person2={
    name:"Fida",
    age:20,
    greet(message:string) {
        console.log(`${this.name} says: ${message}`)
    },
}

person2.greet("Hello World!");

//REOPEN THE INTERFACE AND USE CASES


interface Settings {
  readonly theme: boolean;
  font: string;
}


interface Settings {
  sidebar: boolean;
}


interface Settings {
  external: boolean;
}


const userSettings: Settings = {
  theme: true,
  font: "Open Sans",
  sidebar: false,
  external:true,
};
console.log(userSettings);

// //HTML IMAGE ELEMENT

////This Code will run in HTML file
// const imagElement: HTMLImageElement= document.createElement("img");

// imagElement.src ="image.jpg";
// imagElement.alt="My Image";
// if(imagElement.complete){
//     console.log(`Image dimension: ${imagElement.naturalWidth}x${imagElement.naturalHeight}`);
    
// }else{
//     imagElement.addEventListener("load",()=>{
//         console.log(`Image dimensions:${imagElement.naturalWidth}x${imagElement.naturalHeight}`);
//     })
// }





 //INTERFACE VS. TYPE ALIASES



// Interface
interface PersonExInterface {
    name: string;
    age: number;
  }
  
  // Type
  type PersonExType = {
    name: string;
    age: number;
  };
  
  // Extending And Implementing:
  
  // Interface
  interface AnimalExInterface {
    type: string;
  }
  
  interface Dog extends AnimalExInterface {
    bark(): void;
  }
  
  class Labrador implements Dog {
    type: string = "dog";
    bark() {
      console.log("Woof!");
    }
  }
  
  // Type
  type AnimalExType = {
    type: string;
  };
  
  type Cat = AnimalExType & {
    bark(): void;
  };
  
  const labrador: Cat = {
    type: "cat",
    bark() {
      console.log("Meow!");
    },
  };
  console.log(labrador.bark());
  
  

  interface Car {
    brand: string;
  }
  
  interface Car {
    model: string;
  }
  
  const myCar: Car = {
    brand: "Lamborghini",
    model:"Garllado",
  };
  console.log(myCar);
  