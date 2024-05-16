console.log(null||2||undefined);

//console.log(console.log(1) ||2||console.log(3) ); // this line getting error in typescript but run after compile to javascript.

console.log(1&& null && 2);

//console.log(console.log(1) && console.log(2));// this line getting error in typescript but run after compile to javascript.

console.log(null || 2 && 3 || 4);

let age:number = 20;

if (age >=13 && age<=90){
    console.log("Inclusively");
}

let age2:number = 20;

if(!(age2 >= 14 && age <=90)){
    console.log("Inclusively");
}
if (age<14 || age >90) {
    console.log("Inclusively");
}

if(-1||0){
    console.log('first');
}
if(-1&&0){
    console.log('second');
}
if (null|| -1 && 1 ) {
    console.log("third");
}

//This code will run on html file there is another file fro this code (Day_58.html)


// let userName = prompt("Who's there?", '');

// if (userName === 'Admin') {

//   let pass = prompt('Password?', '');

//   if (pass === 'TheMaster') {
//     alert( 'Welcome!' );
//   } else if (pass === '' || pass === null) {
//     alert( 'Canceled' );
//   } else {
//     alert( 'Wrong password' );
//   }

// } else if (userName === '' || userName === null) {
//   alert( 'Canceled' );
// } else {
//   alert( "I don't know you" );
// }


