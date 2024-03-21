// Question_1: Average score calculator
let average = (numbers:number[]):number=> {
    if (numbers.length===0) return 0

    const sum = numbers.reduce((add,val) => add+val, 0)
    return sum / numbers.length
}
let number = [43,55,76,87,99]
let  avg =average(number)
console.log(avg);

// Question_2:Custom adder

function adder(num:number):(input:number) =>number{
    return function (input:number):number {
        return input + num
    }
}
let add=adder(9)
console.log(add(3));

// Question_3:Self Running Profile


function profile(Name:string,Age:number) {
    return console.log(`Name:${Name}\n Age:${Age}`);
}
profile("Fida",20)