//Question_1:function that return current date

function getCurrentDate(): string {

    const currentDate: Date = new Date();
    const day: number = currentDate.getDate();
    const month: number = currentDate.getMonth() + 1; 
    const year: number = currentDate.getFullYear();
    const paddedDay: string = day < 10 ? '0' + day : day.toString();
    const paddedMonth: string = month < 10 ? '0' + month : month.toString();
    const formattedDate: string =` ${paddedDay}-${paddedMonth}-${year}`;
    return formattedDate;
}

console.log(getCurrentDate());

//Question_2: create a function calculate and logs how many days are left until new year

function daysUntilNewYear(): number {

    const currentDate: Date = new Date();
    const newYearDate: Date = new Date(currentDate.getFullYear() + 1, 0, 1);
    const timeDifference: number = newYearDate.getTime() - currentDate.getTime();
    const daysLeft: number = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));

    return daysLeft;
}
console.log("Days left until New Year:", daysUntilNewYear());

//Question_3:Generate a date object

function getNextBirthday(): Date {
    const currentDate: Date = new Date();
    const currentYear: number = currentDate.getFullYear();
    const birthdayMonth: number = 3;
    const birthdayDate: number = 27; 
    let nextBirthdayYear: number;

    if (currentDate.getMonth() > birthdayMonth || (currentDate.getMonth() === birthdayMonth && currentDate.getDate() > birthdayDate)) {
        nextBirthdayYear = currentYear + 1;
    } else {
        nextBirthdayYear = currentYear; 
    }
    const nextBirthday: Date = new Date(nextBirthdayYear, birthdayMonth, birthdayDate);
    return nextBirthday;
}


const nextBirthday: Date = getNextBirthday();
console.log("Next birthday:", nextBirthday.toDateString());