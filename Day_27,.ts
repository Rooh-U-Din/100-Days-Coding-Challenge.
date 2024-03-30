// Question_1:Creating And Accessing Object Properties

let car = {
    company:"lamborghini",
    model:"gallardo",
    year:2008,
    
}
console.log(car.company);
console.log(car.model);
console.log(car.year);


//Question_2:Updating Object Properties

// car.color="black"
car.year=2013

console.log(car);

//Question_3:Iterating Over Objects Properties


function properties(objects:object){
    for (let Property in objects) {
        console.log(`${Property}:${(objects as any) [Property]}`);
    }
}
properties({
    company:"lamborghini",
    model:"gallardo",
    year:2008,
});
