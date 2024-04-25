//Question_1:Create a promise that resolves with "Hello World!" after 2 seconds

setTimeout(() => {
    console.log("Hello World!");
    
}, 2000);

//Question_2:Show how to use the .then() and .catch() methods to handle Promise resolution and rejection 

const conditional_promise= new Promise<string>((resolve,reject) =>{
    const success = Math.random()>0.5;
    if(success){
        resolve("Success!")
    } else{
        reject(new Error("Failure"))
    }
});

conditional_promise
.then((result) => console.log(result))
.catch((error) => console.log(error.message));

//Question_3:Explain the use of the Promise.all() method with an example

const promise1= Promise.resolve(3);
const promise2=42;
const promise3= new Promise<string>((resolve) =>{
    setTimeout(resolve,100,"foo");
})
Promise.all([promise1,promise2,promise3]).then((values)=>{
    console.log(values);
    
})
