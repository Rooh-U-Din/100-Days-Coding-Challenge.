
type Person={
    name:string;
    age:number;
    job_title?:string; //optional property
    address:{
        country:string;
        city:string
    }
}

let person:Person={
    name:"Rooh Din",
    age:20,
    job_title:"No job",
    address:{
        country:"pakistan",
        city:"karachi"
    }
}
console.log(person);


let person2:Person={
    name:"Fida",
    age:20,
    address:{
        country:"pakistan",
        city:"karachi"
    }
}

console.log(person2);
