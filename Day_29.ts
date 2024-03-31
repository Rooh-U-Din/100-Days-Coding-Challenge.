//  Question_1:Finding the position of a Substring

function finding(code:string){
    return code.indexOf("code")
}
console.log(finding("I love to getting errors in my code"));

console.log(finding("I love coding"));

//Question_2:Checking Text Presence

function JavaScript(text:string){
    return text.includes("javascript")
}
console.log(JavaScript("I love javascript"));
console.log(JavaScript("HTML is a programming language"));

//Question_3:Extracting A Substring

const sub_string=(finding:string)=>{
    return finding.substring(0,10)
}

console.log(sub_string("HTML is a programming language"));
