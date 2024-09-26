//singleton
//object.create

// object literls
const mySym = Symbol("key1")

const Jsuser = {
    name:"Harsh", age:18, location:"Neemuch", email:"harsh@stugmail.com",
    isloggedin:false, lastlogindays:["Monday","Friday"],
    [mySym]: "mykey1",
    "full name":"Harsh Bhandari"
}
console.log(Jsuser.email); 
console.log(Jsuser["email"]);      //it is the another method to call the object we have know this because when we get a string in an object then we are not able to call them with the above method for ex,["full name"].
console.log(Jsuser["full name"]);
console.log(Jsuser[mySym]);     //if we are not using Square[] brackets while defiing th esymbol then its typeof is Strng not Symbol., always define symbo in Suare[] brackets.

Jsuser.email = "harsh@chatgpt.com"
// Object.freeze(Jsuser)
Jsuser.email = "harshbhandari@meta.com"
console.log(Jsuser);
Jsuser.greeting = function(){
    console.log("Hello Js User");
}
console.log(Jsuser.greeting());

Jsuser.greetingtwo = function(){
    console.log(`Hello Js User, ${this.name} `);
}
console.log(Jsuser.greetingtwo());

