//for of loop

const arr = [1,2,3,4,5]

for (const num of arr) {
    // console.log(num);
}

const greetings = "Hello World"
for (const greet of greetings) {
    // console.log(`each char is:${greet}`);
}

//MAPS
const map =new Map()
map.set('IN',"India")
map.set('FR','France')
map.set('GR','Germany')

// console.log(map);

for (const [CODE,value] of map) {
    // console.log(CODE ,':-', value);
}

//for in loop

const myobj ={
    js :'Javascript',
    cpp : 'C++',
    PY : 'Python'
}
for (const key in myobj) {
    // console.log(key);
    // console.log(`${key} is shortcut for ${myobj[key]}`);
    }


const mahabharat = ["ARJUN" , "NAkul", "Sehdev", "Bhim", "Yudhister"]
for (const key in mahabharat) {
    // console.log(mahabharat[key]);
}

const domain =new Map()
map.set('IN',"India")
map.set('FR','France')
map.set('GR','Germany')

for (const CODE in domain) {
    // console.log(domain); //in maps we are no able to iterate the objects.
}

//For each loop

const language = ['c++','js', 'php','mysql','react']

// language.forEach( function (devops) {
    // console.log(devops);
// });

// language.forEach((entry) => {
    // console.log(entry);
// })
// function printme(choose){
    // console.log(choose);
// }
// language.forEach(printme)

// language.forEach( (item,index,arr) => {
//     console.log(item,index,arr);
// } )

const mycoding = [
    {
        languagename : "Javascript",
        languagefilename: "js"
    },
    {
        languagename : "Hypertext Preprocessor",
        languagefilename: "php"
    },
    {
        languagename : "C++",
        languagefilename: "cpp"
    },
    {
        languagename : "REact",
        languagefilename: "Database"
    },
]
mycoding.forEach((item) =>{
    console.log(item.languagename);
})