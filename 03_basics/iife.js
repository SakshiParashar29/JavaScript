// Immediately Invoked function expressions (IIFE)

(function chai(){
    console.log(`Database CONNECTED`);
})();
// ()() in first we write fxn definiton and in second we will invoke/call the function

( (name) => {
    console.log(`DB connected two ${name}`)
})('Sakshi')


/* JavaScript Execution context
    
   JavaScript is considered single-threaded because it executes code in a single thread of execution, meaning it can handle only one task at a time in its main execution stack. 

   An execution context is like a container that holds everything JavaScript needs to run your code. It keeps track of:

   Where the code is running (global or inside a function).
   What variables and functions are available at that point in the code.

   three types of execution context : 1. Global execution context 2. Function execution context 3. eval execution context

   JS code runs in two phases : 1. Memory Creation phase (only memory allocation occured) 
   2. Execution phase (all the operations and airthmetic performance happened)

   refered video number 25.

   
*/