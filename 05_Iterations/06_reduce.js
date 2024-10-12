const mynums =[1,2,3,4,5,6]

// const newnum =mynums.reduce(function (acc,curval) {
//     console.log(`accumulator:${acc} and curren value: ${curval}`);
//     return acc+curval   },0)
// in reduce function we have to always paas a accumulaor initial value like here we paas 0

//now , we can write this thing with arrow => funtion

const newnum =mynums.reduce((acc,curval) => acc+curval , 0 )
console.log(newnum);

const shoppingcart = [
    {itemname :"JS", price:299 },
    {itemname :"MOBD", price:399 },
    {itemname :"DATAS", price:499 },
    {itemname :"AI", price:599 }
] 

const cartvalue =shoppingcart.reduce((acc,item) => acc + item.price ,0)

console.log(cartvalue);
