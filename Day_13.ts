// Question_1:Large_shirt.

const  make_shirts=(size:string = "Large",massage:string="I am learning Typescript") =>{
    console.log(`we have only ${size} shirts and only massage on them is ${massage}`);
    
}
make_shirts()
make_shirts("small")

// Question_2:cities.

function cities(city:string, country:string ="Pakistan") {
    console.log(`${city} in ${country}.`);
}
cities("Islamabad")
cities("Lahore")

// Question_3:City_Name

function city(city:string, country:string) {
   return  console.log(`${city} is in ${country}.`);
}

city("Karachi","Pakistan")
city("HongKong","China")


// Day_13 complete.
