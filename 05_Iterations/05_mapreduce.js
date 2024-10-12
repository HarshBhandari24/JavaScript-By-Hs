const mynums =[1,2,3,4,5,6,7,8,9,10]

// const newnums = mynums.map((num) => num+10)


// const newnums = mynums.map((num) =>{return num+10})  //whenever we open scope we have to return the value for its execution.
// console.log(newnums);


//this is called chaining
// const newnumb = mynums.map((num) => num *10).map((num) =>num+1)
// console.log(newnumb);

const newnumb = mynums.map((num) => num *10).map((num) =>num+1).filter((num) => num>=40)
console.log(newnumb);
