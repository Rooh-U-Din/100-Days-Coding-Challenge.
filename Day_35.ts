//Question_1:Function that returns Boolean

function Greater():boolean{
    return Math.random()>0.5
}
console.log(Greater());

//Question_2:Hexadecimal color

function Hexadecimal():string{
    let color= '#' + Math.floor(Math.random() * 0xFFFFFF).toString(16)
    return color
}
console.log(Hexadecimal());


//Question_3:A dice roll

function dice():number{
    return  Math.floor(Math.random()* 6 + 1);
    
}

console.log(dice());
