// Question_1:enum

enum car {
     company="lamborghini",
     brand="gallardo",
     top_speed="350kmh",
}
console.log(car);
// Question_2:Student_Template
interface student_blueprint{
    name:string,
    age:number,
    class:string,
}

let student:student_blueprint = {
    name:"fida",
    age:20,
    class:"12"
}
console.log(student);

// Question_3:Shape_Shifter

type shape1 ={
    shapes:"circle"
    radius:number,

}
let circle : shape1={
    shapes:"circle",
    radius:9
}
console.log(circle);

type shape2 ={
    shapes:"rectangle",
    width:number,
    height:number
}

let rectangle:shape2={
    shapes:"rectangle",
    width:54,
    height:30
}

console.log(rectangle);




