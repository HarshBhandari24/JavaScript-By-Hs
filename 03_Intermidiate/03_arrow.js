const user = {
    username : "Harsh",
    price : 999,
    welcomemessage(){
        console.log(`${this.username} , welcome to website`);   //here, this. refers to current context.
        console.log(this);
        
    }
}
// user. welcomemessage()
// user.username ="Bhandari"
// user.welcomemessage()
// console.log(this);

// function chai (){
//     let username = "harsh"
//     console.log(this.username);
// }
// chai()   

// const coffee = function() {
//     let username = "harsh"
//     console.log(this.username);
// }
// coffee()

const vodka = () =>{        //[=>] this is an arrow function
    let username = "harsh"
    console.log(this.username);
}
vodka()

const addtwo =(num1,num2)=>{
    return num1+num2;
}
console.log(addtwo(3,3));

//above this is normal arrow function but the main thing is that if we use curly braces{} like this then we have to always use return keyword when itherwise code is not run.

const addthree =(num3, num4)=>(num3+num4)
console.log(addthree(4,4));
//above this is called IMPLICIT arrow function but the main thing is that if we use parenthisis() like this then we dont want to use return keyword without return keyword it also works properly.
//alternate way to write the same IMPLICIT function 
const addfour=(num5,num6)=>num5+num6
console.log(addfour(5,5));
//It is also works without using PArenthisis Braces alternatively we also can do this.

const addfive = () => ({ username:"HARSH"})
console.log(addfive());
//for creating Object in function we have to always use parenthesis braces().