const userloggedin =true
const temperature = 42

if (temperature === 42){
    console.log("Temperature is less than 50");
}else{
    console.log("Temperature is greater than 50");
}

console.log("Execute");
//<,>,<=,>=,==,===,!=,!==

const score =200
if (score>100){
    let power = "fly";
    console.log(`USer power:${power}`);
}

const balance = 1000
// if(balance>500) console.log("test");

if(balance<500){
    console.log("Balance is less than 500");
}else if(balance<750) {
    console.log("Balance is less tahn 750");
}else if(balance<900){
    console.log("BAlance is less than 900");
}else{
    console.log("Balance is less than 1100");
}

const userlogin = true
const debitcard = true
const googleloggedin = false 
const emailloggedin = true

if(userlogin && debitcard){
    console.log("ALlow user to buy Github Premium");
}
if(googleloggedin || emailloggedin){
    console.log("User have access to logged in");
}