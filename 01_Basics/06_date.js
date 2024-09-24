console.log("JS");
let myDate = new Date()
// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toLocaleTimeString());
// console.log(myDate.toTimeString());
console.log(typeof myDate);

let myDate1 = new Date(2023,0,23)
console.log(myDate1);
let myDate2 = new Date(2023,0,5,4,3)
console.log(myDate2);
let myDate3 = new Date("2023-01-14")
console.log(myDate3);
let myDate4 = new Date("01-24-2024")
console.log(myDate4.toLocaleDateString());

let myTimeStamp = Date.now()
console.log(myTimeStamp);

console.log(myDate4.getTime()); //from this we gaet value in miliseconds;
console.log(myDate4.getTimezoneOffset());
console.log(myDate4.getMinutes());
console.log(Math.floor(Date.now()/1000));   //for taking value in seconds;
let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() +1);     //+1 for normal people understand the month because we count from 0;
console.log(newDate.getDay());
console.log(newDate.getDate());
console.log(newDate.getFullYear());

let backtags =`${newDate.getDate()}and the year is ${newDate.getFullYear()}`
console.log(backtags);
newDate.toLocaleString('default',{weekday:"long"})
console.log(newDate);
let fordate = new Date()
fordate.toLocaleDateString('default',{dayPeriod: "narrow"}) //for suggestin use (ctrl+spacebar).
console.log(fordate);
