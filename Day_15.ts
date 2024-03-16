// Question_1:Unchanged_Magicians
let Unchanged_Magicians: string[] = ['David', 'Harry', 'Penn', 'Teller','Dynamo'];
function GreatMagicians(Unchanged_Magicians: string[]): void {
    Unchanged_Magicians.forEach(Unchanged_Magicians => console.log(`The Great ${Unchanged_Magicians}`));
}
GreatMagicians(Unchanged_Magicians);
console.log(Unchanged_Magicians.splice(1));
console.log(Unchanged_Magicians.indexOf("Dynamo"));
console.log(Unchanged_Magicians.includes("paul"));

// Question_2:Sandwiches

function order_Sandwich(...items: string[]): void {
    console.log("Sandwich Order:");
    if (items.length === 0) {
        console.log("You haven't selected any items for your sandwich.");
    } else {
        console.log("You ordered a sandwich with the following items:");
        for (const item of items) {
            console.log(item);
        }
    }
    console.log("");
}
order_Sandwich()
order_Sandwich("Turkey", "Cheese", "Lettuce", "Tomato");
order_Sandwich("cheese", "Omelette");
order_Sandwich("Salad");

// Question_3:Cars

function Car(manufacturer: string, modelName: string,color:string,year:number): any {
    const car = {
        manufacturer: manufacturer,
        modelName: modelName,
        color:color,
        year:year,
    };
    return car
}

const myCar = Car("Lamborghini", "Gallardo","red",2024);
console.log(myCar);

// Day_15 complete.