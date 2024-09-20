/*

let score = "33"

console.log(typeof score);
console.log(typeof (score));

let valueInNumber = Number(score);
console.log(typeof valueInNumber);
console.log(valueInNumber);

// "33"=> 33
// "33abc"=>NaN
// true=>1, false=>0

let isLoggedIn = "1"
let booleanisloggedIn = Boolean(isLoggedIn)
console.log(booleanisloggedIn);

// let isLoggedin ="0" => False

let IsLoggedIn = ""
let booleanIsloggedIn = Boolean(IsLoggedIn)
console.log(booleanIsloggedIn);

let isloggedin = "Harsh"
let booleanisloggedin = Boolean(isloggedin)
console.log(booleanisloggedin);

let someNumber = 33
let stringNumber =String(someNumber)
console.log(stringNumber);
console.log(typeof stringNumber);

// Operations
let digit =4;
let negdigit =-digit;


// console.log(negdigit);
console.log(2+2);
console.log(2-2);
console.log(2*2);
console.log(2/2);
console.log(2**3);
console.log(2%3);
console.log(3%2); //

let str1 = "Hello"
let str2 = " Harsh"
let str3 = str1+str2
console.log(str3);

console.log("1"+2);
console.log(1+"2");
console.log("1"+2+2);
console.log(1+2+"2");
console.log((3+4) * (5/4) *(5-2)); //uses more small parenthesis to make clean code.
console.log(true);
// console.log(true+) not valid
console.log(+true);
console.log(+"");
let num1,num2,num3
num1=num2=num3=3+3

let gamecounter=100
gamecounter ++  //read the detail of prefix and postfix from mdnJS documenation.
console.log(gamecounter);

*/
console.log("2">1);
console.log("02">1);

console.log(null > 0);
console.log(null == 0);
console.log(null >= 0);
console.log(null <= 0);

console.log(undefined == 0); //==,=<,>=,<,> in this all scenerio it shows the false in answer//

console.log("2"===2); // it shows false beacause here it is check (=== means strict check), here it shows false because both datatypes are differnt , so it is False//
console.log("2"==2); // it shows true because here we use eqality check operator and it check only the vlues not datatypes , so it is True//

//****************Datattypes Summary***************

// Primitive

// 7 Types:- String, Boolean, Number, Symbol, null, undefined, BigInt. 

const score = 100
const scorevalue = 100.3
const isloggedin = false
const outsideTemp = null
let userEmail; /* let usermail=undefined (Both are undefined)*/
console.log(userEmail);
const bigNumber = 213215456132151154n /* here in last small n represent the bigInt number */
const Id =Symbol('123')
const anotherId =Symbol('123')

console.log(Id===anotherId);

//Reference(Non-Premitive)

// 3 Types:- Array, Object,Function 

const heros = ["shaktimaan","kohli","Demon"]; /* array insquare Bracket */
let myObj = {
    name: "Harsh", age: 22 } /* Object in Carly Braces */
const myFunction = function(){
    console.log("Hello World");
}
console.log(typeof myFunction); /* typeof is used to know the type of data type */

// ***********STACK AND HEAP MEMORY***********

//Stack memory is used in (Primitive Datatypes)     it gives us the copy of variable.

//Heap Memory is Used in Refernce (Non-Primitive Datatypes)  it gives us the reference of original value.

     // concept of stack memory 
let myyoutubename = "Harshit"
let anothername = myyoutubename
anothername = "Harsh"

console.log(myyoutubename);
console.log(anothername);


    //  concept of Heap Memory
let userone = {
    userEmail : "user1@google.com",
    userUpi : "user1@axl"
}

let usertwo = userone
usertwo.userUpi = "modi1@axl"

console.log(userone.userUpi);
console.log(usertwo.userUpi);


