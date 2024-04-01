// Question_1:Create an array of favorites

let favorite_fruit = ["Apple","Grapes","Banana"]
favorite_fruit.push("Papaya")
console.log(favorite_fruit);

// Question_2:function to remove the last element

function remove(element:string[]) {
    return element.pop()
}
console.log(remove(["Apple","Grapes","Banana"]));

// Question_3:Find the indexof

function find(fruits:string[]) {
    let index = fruits.indexOf("Banana")
    if (index !== -1) {
        fruits[index] = "Mango"
    }
}
let fruits =["Apple", "Grapes", "Banana"]
find(fruits)
console.log(fruits);

