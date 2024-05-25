// GENERIC 
function returnType<T>(val: T): T {
    return val;
  }
  
  // Usage of the generic function with different types
  const numValue: number = returnType<number>(100);
  const strValue: string = returnType<string>("Thanos");
  const boolValue: boolean = returnType<boolean>(true);
  const arrValue: number[] = returnType<number[]>([1, 2, 3, 4]);
  
  console.log(`Number Value: ${numValue}`);
  console.log(`String Value: ${strValue}`);
  console.log(`Boolean Value: ${boolValue}`);
  console.log(`Array Value:${arrValue}`);

  // Generic Function returnTypeEx
function returnTypeEx<T>(val: T): T {
    return val;
  }
  
  console.log(returnTypeEx<number>(100));
  console.log(returnTypeEx<string>("Fida")); 
  
  // Arrow Function with Generics returnTypeArrowSyntax
  const returnTypeArrowSyntax = <T>(val: T): T => val;
  
  console.log(returnTypeArrowSyntax<number>(100));
  console.log(returnTypeArrowSyntax<string>("Rooh")); 
  
  // Generic Function testType
  function testType<T>(val: T): string {
    return `The Value Is ${val} And Type Is ${typeof val}`;
  }
  
  console.log(testType<number>(100));
  
  console.log(testType<string>("Fida"));
  
  // Generic Function multipleTypes
  function multipleTypes<T, S>(valueOne: T, valueTwo: S): string {
    return `The First Value Is ${valueOne} And Second Value ${valueTwo}`;
  }
  
  console.log(multipleTypes<string, number>("Rooh", 100));

  console.log(multipleTypes<string, boolean>("Fida", true));


// Generic Class User
class User<T = string> {
  constructor(public value: T) {}

  show(msg: T): void {
    console.log(`${msg} - ${this.value}`);
  }
}


let userOne = new User<string>("Thor");
console.log(userOne.value); 
userOne.show("Message"); 

let userTwo = new User<number | string>(100);
console.log(userTwo.value);
userTwo.show("Message"); 



// Interface definitions for Book and Game
interface Book {
    itemType: string;
    title: string;
    isbn: number;
  }
  
  interface Game {
    itemType: string;
    title: string;
    style: string;
    price: number;
  }
  
  // Generic Class Collection
  class Collection<T> {
    public data: T[] = [];
  
    add(item: T): void {
      this.data.push(item);
    }
  }
  
  let itemOne = new Collection<Book>();
  itemOne.add({ itemType: "Book", title: "Atomic Habits", isbn: 150510 });
  itemOne.add({ itemType: "Book", title: "Follow Your Heart", isbn: 650650 });
  console.log(itemOne);
  

  let itemTwo = new Collection<Game>();
  itemTwo.add({ itemType: "Game", title: "Tekken 7", style: "Fighting", price: 16000 });
  console.log(itemTwo);
  