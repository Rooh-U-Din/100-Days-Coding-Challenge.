// Question_1:Leap Year

function leap_year(year:number):boolean {
    return ((year % 4===0 && year % 100 !== 0 )|| (year % 400 === 0))
}

console.log(leap_year(2024));
console.log(leap_year(2023));

//Question_2:Number Divisible by Both 2 & 3

function divisible(number:number) {
    return number % 2==0&&number % 3==0
}
console.log(divisible(18));
console.log(divisible(20));

//Question_3:Compare 2 Strings 

function compare(str1:string, str2:string) {
    return str1.toLowerCase() === str2.toLowerCase();
}
console.log(compare("TYPESCRIPT","TYPESCRIPT"));
console.log(compare("JavaScript","javascript"));
