function Myname () {
    console.log("H");
    console.log("A");
    console.log("R");
    console.log("S");
    console.log("H");
}
Myname()    //Myname is reference of function () and this is execution of function;

function Addtwono(number1,number2){  //(number1,number2) this values called Paarameters
    console.log(number1 + number2);
}
Addtwono(4,4)   //(4,4) this values called Arguments or values.
Addtwono(4,"4") //44
Addtwono(4,"a") //4a
Addtwono(4,null) //4

// function Addingno (Digit1,Digit2){
//     console.log( Digit1 +Digit2);
// }
// Addingno(5,5)         

// const result = Addingno(3,6)    //it's result is 9 but the lower console it'snot returning the the resdult value it's undefined.

// console.log("Result:",result);

//we use othey type for getting correct result

function Addingnumber (Digit1,Digit2){
    let Answer = Digit1 + Digit2
    return Answer   //return Digit1 + Digit2  {Alternate Way}
}
const Answer = Addingnumber(4,2) 
// console.log("Final Result:",Answer);

function loginusername (username = "HB")  //here we directly assign a values to username [HB] if we do not pass any value then HB is logged in is print;
{
    if(username=== undefined)   //if(!username) it is also written ike this.
        {
        console.log("Please enter a username");
        return;
    }

    return `${username} Just Logged in`
}

console.log(loginusername("Harsh"));
