const name ="Harsh"
const repocounts = 4
console.log(name + repocounts +"Value");
console.log(`Hello my name is ${name} and my repocount is ${repocounts}`); //follow the backtags rule not the + operator pattern
const company = new String ('amdocs-dsa-mernstack-php-sql')
console.log(company[1]);
console.log(company.__proto__) ;
console.log(company.length);
console.log(company.toUpperCase());
console.log(company.charAt(2));
console.log(company.indexOf('d'));
const newstring = company .substring(0,4)
console.log(newstring);
const new1string = company .slice(-8,3)
console.log(new1string);


const new2string = "        AmdocsFaang  ";
console.log(new2string);
console.log(new2string .trim());

const url = "https:/bhandari.com/harsh bhandari"
console.log(url);
const url2 = "https:/bhandari.com/harsh%20bhandari"
console.log(url2.replace('%20','_'));
console.log(company.includes('c#sharp'));
console.log(company.split('-'));