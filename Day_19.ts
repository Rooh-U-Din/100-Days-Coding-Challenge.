// Question_1: Double_Numbers
let number =[9,8,7,6,5,4,3,3,2] 
let double_number = number.map((number)=>number  * 2)
console.log(double_number);

// Question_2:Keep_Only_Strings

let strings=[2,"I",true,"Love",2,false,"Coding"]

let only_string= strings.filter(string => typeof string ==='string')
console.log(only_string);

// Question_3: Average grade

let avg= [43,55,76,87,99]
let sum = avg.reduce((add,divide) => add+divide,0)
let average= sum / avg.length
console.log(average);
