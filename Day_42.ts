// //Question_1:Create a function inside an object that returns the objects own property using (this) keyword.

// let car = {
//     company:"lamborghini",
//     module:"Gallardo",
//     year:2005,
//     car_information:function() {
//         console.log(`Car company is ${this.company} Module ${this.module} and Launch year is ${this.year}.`);  
//     }
    
// }
// car.car_information()

// //Question_2:Modify a method in an object to use this keyword

// let area ={
//     length:5,
//     width:8,
//     rectangular: function (){
//         return this.length * this.width
//     }
// }
// console.log(area.rectangular());

// // Question_3:Explain how the this keyword changes its value when used inside a nested function within a method 

// const myObject = {
//     property: "Value",
//     outerMethod: function () {
//       console.log(this.property);
  
//       const innerMethod = () => {
//         console.log(this.property);
//       };
  
//       innerMethod();
//     },
//   };
  
//   myObject.outerMethod();