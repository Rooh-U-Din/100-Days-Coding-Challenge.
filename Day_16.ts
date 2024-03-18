// Question_1:Laptop
let Laptop = {
    company:"Hp",
    module:"Zbook 15 g3",
    year:2017,
    discribe:  function() {
        console.log(`my laptop is ${this.company} and the module is ${this.module} released on year ${this.year}.`);
    }
}
Laptop.discribe()

// Question_2:Multiline

let laptops =[{company:"Hp",module:"Zbook 15 g3",year:2017,},
 {company:"Dell",module:"letitude 490",year:2016,}]
 let laptop1= laptops
 let laptop2=laptops
 console.log(laptop1,laptop2);

 // Question_3:Combining arrays

 let price = [72000,50000,45000]
 let price2=[79000,47000,53000]
 let original_price=[...price,...price2].sort((a,b)=> a-b)
 console.log(original_price);
 