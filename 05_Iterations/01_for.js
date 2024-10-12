for (let i = 0; i <= 10; i++) {
    const element = i;
    if(element ==5){
        console.log("factorial of 5 is 120");
    }
    console.log(element);   
}


// for(i=0 ;i<=10;i++){
//     console.log(`Outer loop value: ${i}`);
    
//     for (let j = 0; j<=10;j++) {
//         console.log(`Inner loop Value ${j} and outer loop Value ${i}`);
//     }

// }


// for(i=1 ;i<=10;i++){
//     console.log(`Outer loop value: ${i}`);
    
//     for (let j = 1; j<=10;j++) {
//         console.log(i+ '*' +j +"=" + i*j);
//     }
// }


// let myarray =["ARJUN" , "NAkul", "Sehdev", "Bhim", "Yudhister"]

// console.log(myarray.length);

// for (let index = 0; index < myarray.length; index++) {
//     const element = myarray[index]
//     console.log(element);
// }

// for (let index = 1; index <=20; index++) {
//     if (index==5) {
//         console.log(`detected value is ${5}`);
//         break;
//     }
//     console.log(`value of i is ${index}`);
// }


for (let index = 1; index <=20; index++) {
    if (index==5) {
        console.log(`detected value is ${5}`);
        continue;
    }
    console.log(`value of i is ${index}`);
}