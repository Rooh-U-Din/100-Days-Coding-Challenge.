//Question_1:Map that stores countries and capitals

let countries = new Map <string , string>()
countries.set("Pakistan","Karachi")
countries.set("USA","New York")
countries.set("India","Mumbai")
console.log(countries);


//Question_2:function that check capitals

function check(countries: Map<string,string>){
    if (countries.has("Canada")) {
        console.log(countries.get("Canada")); 
    }else{
        console.log("Canada is not in map");
        
    }
}
check(countries)


//Question_3:Iterate over a map of student id


const student = new Map<string,number>()

student.set("Fida",4)
student.set("Fahad",2)
student.set("Peter",8)

student.forEach((name,id) => {
    console.log(`Id:${name} , Name:${id}`);
    
});




