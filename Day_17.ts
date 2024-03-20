// Question_1:Function with rest parameter.
function hobbies(...hobbies:string[]) {
    hobbies.forEach(hobbies => {
        console.log(`I enjoy ${hobbies}.`);
    });
    
    
}
hobbies("tekken_7","cricket","coding")

//Question_2:template literals

let my_hobbies = `My hobbies.
1. I love to solve errors in my code.
2. I love to play Tekken_7 after coding.
3.I play cricket for exercise.
`;
console.log(my_hobbies);

// Question_3: Arrow Function

let rectangle=(height:number,width:number)=>{
    return height*width
}
console.log(rectangle(24,60));
