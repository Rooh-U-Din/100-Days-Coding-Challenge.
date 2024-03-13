//  Question_11:No Users

let users_Names:string[]=[]
if (users_Names.length===0) {
    console.log("we need to find users.")
}else{
    console.log(`Welcome ${users_Names} to our company.`);
}


//  Question_2:Checking  UserNames.

let current_users=["Thanos","Thor","Admin","Wanda","Peter"]
let unique_users = ["Thanos", "THOR", "ironman", "Wanda", "Peter"];

unique_users.forEach(uniqueUsers => {
    if (current_users.some(currentUsers =>currentUsers.toLowerCase() === uniqueUsers.toLowerCase())) {
        console.log(`${uniqueUsers} will you need to enter a new username.`);
        
    }else{
        console.log(`${uniqueUsers} is available.`);
        
    }
});


//  Question_3:Ordinal Numbers.

let numbers= [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (let i = 0; i < numbers.length; i++) {
    let ordinalEnding;
    if (numbers[i] === 1) {
        ordinalEnding = "st";
    } else if (numbers[i] === 2) {
        ordinalEnding = "nd";
    } else if (numbers[i] === 3) {
        ordinalEnding = "rd";
    } else {
        ordinalEnding = "th";
    }
    console.log(numbers[i] + ordinalEnding);
}