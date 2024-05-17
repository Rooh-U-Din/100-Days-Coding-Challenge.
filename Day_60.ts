const check_age=(age:number)=>{
    if(age>=18){
        return true
    }else{
        return "Did your parents allow you"
        //return confirm("Did your parents allow you") //this line runs in browser
    }
        
}

console.log(check_age(20));

//Without else

const check_age2=(age:number)=>{
    if(age>=18){
        return true
    };{
        return "Did your parents allow you"
        //return confirm("Did your parents allow you") //this line runs in browser
    }
}

console.log(check_age2(2));


const check_age_one_line=(age:number)=>{
    return (age>=18 ) ?true :"Did your parents allow you";
}
console.log(check_age_one_line(20));

console.log(check_age_one_line(2));

const check_age_one_line2=(age:number)=>{
    return (age>=18 ) || "Did your parents allow you";
}
console.log(check_age_one_line2(20));

console.log(check_age_one_line2(2));


function min(a:number,b:number){
    if (a>b) {
        return a
    } else {
        return b
    }
}
console.log(min(5,4));


function pow(x:number, n:number) {
    let result = x;
  
    for (let i = 1; i < n; i++) {
      result *= x;
    }
  
    return result;
  }
  console.log(pow(3,3));
  
  
