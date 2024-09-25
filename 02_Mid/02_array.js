const marvel_hero =["Thor","Ironman","Captain"]
const dc_heros =["superman","batman","flash"]
// marvel_hero.push(dc_heros) //it is not push elements of array in other array rather than it push whole array inside the array as a element.
// console.log(marvel_hero);

marvel_hero.concat(dc_heros)
// console.log(marvel_hero); //this one also work like [Push] operation.
// console.log(marvel_hero[3][1]);

const allhero = marvel_hero.concat(dc_heros) //if we take a new element than we use [concat] operation then it works properly ans join all elements without taking an array.
// console.log(allhero);

const allnewhero = [...marvel_hero,...dc_heros]     //here we use spread operator [...] it can spread elements easily alll array elements. 
// console.log(allnewhero);

const array1 = [1,2,3,[4,5,],6,7,[4,5,[8,7,]]]

const array2 = array1.flat(Infinity) //flat is a property which can flat all the spread element inside the array<array,array... by writing the no. of layer like 3,2,4 etc or you can use [infinity] property so it can check it own self.
console.log(array2);

console.log(Array.isArray("harsh"));
console.log(Array.from("harsh"));
console.log(Array.from({name:"harsh"}));    //it prints empty array[] because it can't identity the {name:} property.

let score1 =100
let score2 =200
let score3 =300

console.log(Array.of(score1,score2,score3));

