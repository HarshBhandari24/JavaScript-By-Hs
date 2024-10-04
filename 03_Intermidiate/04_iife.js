// IMMEDIATELY INVOKED FUNCTION EXPRESSION[IIFE]

(function chai(){       //IT is called NAMED IIFE
    console.log(`DB CONNECTED`);
})();
//IIFE we use because it helps to remove the POLLUTION of Global Scope varible or whatever is declared there.
//whenever we use IIFE we always have to end that function so put th semi colon in the END[;].

(() => {        //It is unnamed IIFE
    console.log(`DB CONNECTED AGAIN`);
})();

((name) => {        //here we Pass Parameter in IIFE 
    console.log(`DB CONNECTED AGAIN ${name}`);
})("Harsh");
