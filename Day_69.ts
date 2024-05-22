//ENUMS

enum Days{
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday,
}

const Today:Days=Days.Wednesday;
console.log(`Today is ${Days[Today]}`);
