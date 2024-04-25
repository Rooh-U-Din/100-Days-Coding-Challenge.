setTimeout(()=> {
    console.log("This message is show after a 2-second delay.");
    
},2000)

console.log("Start");

setTimeout(() => {
    console.log("Callback executed");
    
}, 0);
console.log("End");



console.log("Before synchronous operation");

for (let i = 0; i < 1e9; i++) {}

console.log("after synchronous operation");


console.log("Before asynchronous operation");

setTimeout(() => {
    console.log("Asynchronous operation");
}, 1000);

console.log("After asynchronous setup");
