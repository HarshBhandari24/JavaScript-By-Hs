// const language = ['c++','js', 'php','mysql','react']

// const values =language.forEach((item) => {
//     console.log(item);
//     return item     //foreach never return value
// })
// console.log(values);

const mynum =[1,2,3,4,5,6,7,8,9,10]

const newnum = []  

// for returning value in foreach array method function then we have to use if () condition..

mynum.forEach((num) => {
    if (num > 2 ) {
        newnum.push(num)
    }
})
console.log(newnum);

const mynums =[1,2,3,4,5,6,7,8,9,10]
const newnums =mynums.filter((num) => num>5 )
//if we use parenthesis brackets then we dont want to use return keyword with condition

console.log(mynums);
console.log(newnums);

// const newnums =mynums.filter((num) => {
//     return num>5;
// } )
//if we dont use curly braces then we have to use return keyword with it to execute the code.
// console.log(newnums);

console.log("\n");
console.log("\n");
console.log("\n");
console.log("\n");

const Books = [
    {title: 'Book1',genre:'scince',publish:2004},
    {title: 'Book2',genre:'scince',publish:2005},
    {title: 'Book3',genre:'Data',publish:2006},
    {title: 'Book4',genre:'Data',publish:2007},
    {title: 'Book5',genre:'NFT',publish:2008},
]
let userboooks =Books.filter((BK)=>BK.genre === 'NFT')
console.log(userboooks);
userboooks =Books.filter((BK) => BK.publish >=2005 && BK.genre==="Data" )
console.log(userboooks);
