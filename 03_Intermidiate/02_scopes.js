let a =400;     //This is Global Scope
const b =200;
var c =300;

if(true){
    let a =100;     //thisis Block Scope
    const b =200;
    console.log("INNER :" ,a); 
    console.log(c);     //we are able to access values of global scope in block scope,  but block scope values are not accessible outside the scope.
}

console.log(a);
// console.log(b);
// console.log(c);


function one(){
    const username = "HARSH"
    function two(){
        const website ="VSCODE"
        console.log(username);
    }
    // console.log(website);
    two()
}
one()

if(true){
    const username = "HB"
    if(username==="HB") {
        const LINKED =" GITHUB"
        console.log(username +LINKED);
    }
    // console.log(LINKED);     i//it is not run because it is out of scope
}
// console.log(username); //same

console.log(addone(5));
function addone(num){
    return num +1
}
//addtwo (5)
console.log(addtwo (5));  //here, itis not acccessible like above because here we declare our function inside the variable but in above case its only declare.
const addtwo =function(num){
    return num +2
    console.log(num);   
}