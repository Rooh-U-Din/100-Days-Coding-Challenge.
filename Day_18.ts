//Question_1:Smart_Phone
let mobile = {
    company:"Redme",
    brand:"9T",
    price:27000,
    released:2021,
    specs:{ram:6,
    rom:128,
    screen:"6.5 inch",
    battery:"6000mah",
},   
}
console.log(mobile);

//Question_2:PUlling Apart a Nested List.

let programer={
    languages:["HTML","CSS","JavaScript","TypeScript","Python"],
    learned:"YouTube",
    websites:["W3Schools","Bootstrap","ChatGPT"]
}
console.log(`Languages: ${programer.languages}: learned from  ${programer.learned}: for understanding code logic: ${programer.websites}`);

// Question_3:Making Flexible Object Keys


interface Flexible_List {
    [sectionName: string]: string[];
  }
  
  function create_Flexible_List(): Flexible_List {
    return {};
  }

  const my_List: Flexible_List = create_Flexible_List();
  
  my_List["Section A"] = ["Laptop","Phone"];

  
  function adjust_Section_Name(old_Name:string,new_Name:string, list:Flexible_List): void {
    const items = list[old_Name];
    delete list[old_Name];
    list[new_Name] = items;
  }
  

  adjust_Section_Name("Section A", "New Section", my_List);
  console.log(my_List);
  