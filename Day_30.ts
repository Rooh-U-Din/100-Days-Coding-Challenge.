// Question_1:Rounding to the Nearest Integer

function integer(decimal:number) {
    return  Math.round(decimal)
}
console.log(integer(2.3));
console.log(integer(2.6));

//Question_2:Converting String To Numbers

function string_numbers(number:string){
    return console.log(parseInt(number));
}
string_numbers("98765432")

//Question_3:Checking If Value Is NaN   

function NAN(not_number:number){
    return  isNaN(not_number)
}
console.log(NAN(232323));
console.log(NAN(NaN));

