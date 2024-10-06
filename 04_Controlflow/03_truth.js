const useremail =[]
if(useremail){
    console.log("GOt user Email");
}else{
    console.log("Don't have user Email");
}

//Falsy value
//False , 0, -0, Bigint 0n, null,undefined, Nan

//truthy values
//"0", 'False',"" ,[],{}, function(){}

if(useremail.length ===0){
    console.log("Array is empty");
}

const emptyobj ={}
if(Object.keys(emptyobj).length ===0){
console.log("Object is Empty");
}


//Nullish Coalescing OPerator (??) : null undefined

let val1;
val1 =5??10
console.log(val1);
val2 =null??10
console.log(val2);
val3 = undefined??10
console.log(val3);
val4 = null ??10??20
console.log(val4);


//Terniary Operator
// condition ? true:false

const iceteaprice =100
iceteaprice <=80 ?console.log("less than 80") : console.log("more than 80");