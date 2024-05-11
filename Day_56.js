let value = true;
alert (typeof value); // boolean type

value = String(value);// now value is a string "true"
alert(typeof value);// string

alert ("6"/"2");// 3, string are converted to number

let str =("1234");
alert(typeof str);// string

let num = Number(str);// become a number
alert(typeof num);// number

let age = Number("an arbitrary string instead of number");
alert(age);// NaN conversion failed

alert(Number("     123    "));// 123
alert(Number("123z"));// NaN (error reading a number at "z")
alert(Number (true));// 1
alert(Number (false));// 0

alert(Boolean(1));// true
alert(Boolean(0));// false 

alert(Boolean("hello"));// true
alert(Boolean("") );// false

alert(Boolean("0"));// true
alert(Boolean(" "));// spaces, also true (any non-empty string is true)


//operators

let a= 1,b=1;

let c = ++a;
let d=b;
alert(a);
alert(b);
alert(c);
alert(d);

let a1 = 2;
let x = 1+(a*=2);
alert(x);

let y="" +1+0;
alert(y);
let z = "" -1+0;
alert(z);
let t= true+false;
alert(t);
let n = 6/"3";
alert(n);
let f="2"*"3";
alert(f);
alert(ns);
let sn="$"+4+5;
alert(sn);
let sm="4"-2;
alert(sm);
let m="4px"-2;
alert(m);
let sp= "     -9    " +5;
alert(sp);
let s= "     -9    "-5;
alert(s);
let e= null+1;
alert(e);
let u =undefined+1
alert(u);

alert(mi);