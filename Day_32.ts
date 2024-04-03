//Question_1:Use The .map()

let words:string[]=["Hello","World",]
let words_length = words.map( words=> words.length)
console.log(words_length);

//Question_2: function that uses .filter()

function filter (numbers:number[]){
    return numbers.filter(numbers =>numbers >10)
}
console.log(filter([1,2,3,4,65,68,22,5,4,4,3,7]));

//Question_3:Demonstrate how to use the .reduce()

function reduce (numbers:number[]){
    return numbers.reduce((value,current)=> value+current,0);
}
console.log(reduce([1,2,3,4,65,68,22,5,4,4,3,7]));
