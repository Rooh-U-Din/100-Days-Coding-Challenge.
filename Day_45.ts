//Question_1:write a javascript object and convert it into a JSON string

let obj= {
    name:"fida",
    age:20
}
let json = JSON.stringify(obj)
console.log(json);

//Question_2:Take a JSON string and parse it into a javascript object

let object= '{"name":"fida","age":20}'
console.log(JSON.parse(object));

let person ={
    name:"fida",
    age:20
}

// Question_3:Explain how you can format a JSON string with proper indentation for readability

let json_string = JSON.stringify(person,null,1)

console.log(json_string);
