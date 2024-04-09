function days(day:number){
    switch (day) {
        case 1:
            console.log("Monday");
            break; 
        case 2:
            console.log("Tuesday");
            break;
        case 3:
            console.log("Wednesday");
            break;
        case 4:
            console.log("Thursday");
            break;
        case 5:
            console.log("Friday");
            break;
        case 6:
            console.log("Saturday");
            break;
        case 7:
            console.log("Sunday");
            
            break
        default:
            console.log("There are 7 Days in a week");
            break;
    }
}
days(1)

function Seasons(Season:number) {
    switch (Season) {
        case 1:
        case 2:
        case 12:
            console.log("Winter");
            break;
        case 3:
        case 4:
        case 5:
            console.log("Spring");
            break;
        case 6:
        case 7:
        case 8:
            console.log("Summer");
            break;
        case 9:
        case 10:
        case 11:
            console.log("Autumn(Fall)");     
            break;
        default:
            console.log("There are 12 months in month ");
            
    }
}
Seasons(4)


function Avengers(Avengers:string) {
    switch (Avengers){
        case "Captain America":
            console.log("Captain America is captain of the Avengers");
            break;
        case "Thor":
            console.log("Thor is strongest Avenger");
            break;
        case "Tony Stark":
            console.log("Tony Stark is genius");
            break;
        default:
            console.log("Your character is not Avenger");
    }
}
Avengers("Captain America")
Avengers("Thanos")