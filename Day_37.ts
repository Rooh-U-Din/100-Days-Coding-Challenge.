// Question_1: if statement that log  "Good Morning" or "Good Evening" According to Current time 

let time = new Date()

if (time.getHours() > 13 ){
    console.log("Good Evening");
}else if (time.getHours() <13) {
    console.log("Good Morning");
    
}

// Question_2:Function that assigns a grade based on a students grade

function Grade(Marks:number) {
    if(Marks >= 90){
        console.log(`Your Marks is ${Marks} and Your Grade is (A) `); 
    }else if(Marks >=75){
        console.log(`Your Marks is ${Marks} and Your Grade is (B) `); 
    }else if(Marks >=60){
        console.log(`Your Marks is ${Marks} and Your Grade is (C) `); 
    }else if(Marks >=50){
        console.log(`Your Marks is ${Marks} and Your Grade is (D) `); 
    }else if(Marks >=33){
        console.log(`Your Marks is ${Marks} and Your Grade is (E) `); 
    }else{
        console.log("Your Failed"); 
    }
    }
Grade(91)
Grade(76)
Grade(61)
Grade(51)
Grade(34)
Grade(32)


// Question_3:Categorized  A person`s  age group

function person(age:number) {
    if (age <= 13) {
        console.log("You`re A Kid");
    }
    else if (age <= 19) {
        console.log("You`re A Teenager");
    }
    else {
        console.log("You`re A Adult");
    }
}
person(20);
person(16)
person(12)