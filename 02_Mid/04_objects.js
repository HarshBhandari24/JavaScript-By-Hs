const gptuser = new Object()
console.log(gptuser);       //it prints empty object its singletton

const gptuser2 = {}
console.log(gptuser2);      //it prints empty object its non singletton

const binguser = {}
binguser.id = "123abcd"
binguser.name = "vikram"
binguser.isLoggedin = false

console.log(binguser);
console.log(Object.keys(binguser));
console.log(Object.values(binguser));
console.log(Object.entries(binguser));
console.log(binguser.hasOwnProperty('isLoggedin'));


const user1 = {
    email: "user12gmail.com",
    fullname:{
        myname:{
            first:"Harsh" , Second: "Bhandari"
        }
    }
}

console.log(user1.fullname.myname.Second);

const obj1 ={1:"a",2:"b" } 
const obj2 ={3:"a",4:"b" }
const obj3 ={5:"a",6:"b" }

// const obj4 = Object.assign({} ,obj1, obj2, obj3)
// console.log(obj4);

// const obj5 = {...obj1,...obj2,...obj3}
// console.log(obj5);

const course ={
    coursename: "JAvascript",
    courseInstructor:"HiteshCHoudharhy",
    CourseFees:"999"
}
const {courseInstructor: Instructor} = course   // It is called destructure method::this is also method to print the objects elements, without typing the long syntax\\

console.log(Instructor);

{       //this is called JSON api. in this keys and values both are types in double colon [""] and they are look like string\\
    "name";"HArsh",
    "CourseDetail":"JS",
    "Price":"Free"
}