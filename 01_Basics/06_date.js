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
