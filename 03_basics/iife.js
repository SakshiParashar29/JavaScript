// Immediately Invoked function expressions (IIFE)

(function chai(){
    console.log(`Database CONNECTED`);
})();
// ()() in first we write fxn definiton and in second we will invoke/call the function

( (name) => {
    console.log(`DB connected two ${name}`)
})('Sakshi')