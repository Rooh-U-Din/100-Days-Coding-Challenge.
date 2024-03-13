// Question_1:Stages Of Life

let age=20

if (age<3) {
    console.log("Your Baby.");
    
}else if (age<8) {
    console.log("Your Child. "); 
}else if (age<18) {
    console.log("Your Teenager. "); 
}else if (age<49){
    console.log("Your adult. "); 
}else{
    console.log("Your old age"); 
}

// Question_2:Favorite Fruit

let Favorite_Fruit=["WaterMalone","Orange","Strawberry","Apple"]

if (Favorite_Fruit.includes("WaterMalone")) {
    console.log("I love to eat WaterMalone.");
    
}
if (Favorite_Fruit.includes("Orange")) {
    console.log("This Orange is Sour.");
    
}
if (Favorite_Fruit.includes("Strawberry")) {
    console.log("Strawberries are expensive.");
    
}
if (Favorite_Fruit.includes("Apple")) {
    console.log("An apple a day keeps the doctor away.");
    
}

// Question_3:Hello admin.

let users=["Thanos","Thor","Admin","Wanda","Peter"]

users.forEach(users => {
    if (users==="Admin") {
        console.log("Hello Admin, these are our new users. And i am looking for some more users");
        
    }else{
        console.log(`Welcome ${users} to our company.`);
        
    }
});

// Day_10 complete.