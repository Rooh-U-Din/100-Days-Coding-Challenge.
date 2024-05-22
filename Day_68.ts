//TUPLE

let article:readonly [number,string,boolean]= [70,"Hello",true];

article=[125,"World",false];

//article.push(100)//Trying to push a new element into tuple(will result in an error)
console.log(article);
//Destructing the tuple into individual variables
const [id,title,published]=article
console.log(id);
console.log(title);
console.log(published);





