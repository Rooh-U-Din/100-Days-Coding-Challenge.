//this function will run in browser 
function ask(question:any,yes:any,no:any){
    if (confirm(question))(yes());
    else no()
}
ask (
    "Do you agree?",
    ()=>{alert("You agreed")},
    ()=>{alert("You canceled the execution")}
)