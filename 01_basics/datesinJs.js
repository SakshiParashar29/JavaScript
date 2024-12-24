// Dates

let myDate = new Date()
// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleTimeString());
console.log(myDate.toLocaleString());
// console.log(myDate.toTimeString());


let myCreatedDate = new Date("01-29-2005"); //("month-date-year")
//console.log(myCreatedDate.toString())


//time

let myTime = Date.now()
console.log(myTime) //output in miliseconds - Date.now() provides a timestamp from January 1, 1970, not from 2024 or any other specific year.

//console.log(myCreatedDate.getTime()); //get the time from your created date in miliseconds


//printing created month, date, and day individually
// console.log(myCreatedDate.getMonth() + 1);
// console.log(myCreatedDate.getDate());
// console.log(myCreatedDate.getFullYear());

myCreatedDate.toLocaleString('default', {
    weekday : "long"
})
/*
    long: Full name of the weekday, e.g., "Monday", "Tuesday", etc.
    short: Abbreviated name of the weekday, e.g., "Mon", "Tue", etc.
    narrow: Shortest single letter representation, e.g., "M", "T", etc.
 */
console.log(myCreatedDate)
