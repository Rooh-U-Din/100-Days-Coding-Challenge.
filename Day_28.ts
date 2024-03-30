// Question_1:Find The Length Of String

function string_lenth(string:string){
    return string.length
}
console.log(string_lenth("thanos was right"));

//Question_2:Converting tolowercase And TOUPPERCASE

function string_case(string:string,string2:string){
    return string.toLowerCase()+string2.toUpperCase()
}
console.log(string_case("TO LOWER CASE","to upper case"));

//Question_3:Replacing Text in a String

function replace(str:string) {
    return str.replace("earth","Sun")
}
console.log(replace("earth is hot"));
