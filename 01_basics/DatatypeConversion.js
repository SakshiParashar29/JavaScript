let score = true

console.log(typeof score);

let valueInNumber = Number(score);
console.log(typeof valueInNumber);

console.log(valueInNumber); // output is below depending on different values of score
/*
   "33" => 33
   "33abc" => NaN
   "true" => 1
   "false" => 0
   null => 0
   undefined => NaN
 */


   // DataTypes
   /*
        --------PRIMITIVE----------
        1. String
        2. Number
        3. Boolean
        4. Null
        5. Undefined
        6. Symbol
        7. BigInt
        

        const num = 2;
        const numValue = 2;

        const temp = null;
        let userEmail; // Undefined

        const id = Symbol('123');
        const anotherId = Symbol('123');

        console.log(id);
        console.log(anotherId);

        console.log(id === anotherId); // not same
    */
    /*   ------------REFERENCE(NON-PRIMITIVE)----------------
        1. Array
        2. Object
        3. functions
    */

        const heros = ["shaktiman", "naagraj", "doga"]; //array
        let myObj = {
            name : 'Sakshi', // key-values pairs
            age : 19, 
        }// object creation

        const myFunction = function()
        {
          console.log("Dark World!!");
        }

        // Datatype of array, object and myFunction while checking return object
        /* 
            -------------DATATYPES SUMMARY-----------------
            Return type of variables in JavaScript
         1) Primitive Datatypes
            Number => number
            String  => string
            Boolean  => boolean
            null  => object
            undefined  =>  undefined
            Symbol  =>  symbol
            BigInt  =>  bigint

        2) Non-primitive Datatypes
           Arrays  =>  object
           Function  =>  function
           Object  =>  object


           Primitive DataTypes:


1.Number: Represents both integer and floating-point numbers. Example: 5, 3.14.
 
2.String: Represents a sequence of characters enclosed in single or double quotes. Example: "Hello, world!".

3,Boolean: Represents a binary value, either true or false, often used for conditional logic.

4.Undefined: Represents a variable that has been declared but hasn't been assigned a value yet. Example: let x;.

5.Null:  standalone value it is represenataion of empty value it is special type and it is a object type. Example: let y = null; 

6.Symbol (ES6): it is mostly used used to find uniqnece.

7.BigInt (ES11): Represents large integers that cannot be represented by the Number type.

 Refence (Object Data Types):

1.Object: Represents a collection of key-value pairs (properties and methods). Example: { name: "John", age: 30 }.

2.Array: Represents a list-like collection of values, indexed by numbers (integer indices). Example: [1, 2, 3, 4].

3.Function: Represents a reusable block of code that can be invoked or called with arguments. Example: function add(x, y) { return x + y; }.

4.Date: Represents dates and times.

5.RegExp: Represents regular expressions for pattern matching.


        */

/*  Heap Memory & Stack Meomory
      Primitive Types:
      1. Stored in stack.
      2. Passed or assigned by value (call by value).
      3. Changes to copies don't affect the original.

      Reference Types:
      1. Stored in heap; accessed via references (stored in stack).
      2. Changing the value through another reference affects the original.

*/


let userName = "Sakshi"
let anotherUser = userName
anotherUser = "Sweety"

console.log(userName)
console.log(anotherUser)

let oneObj = 
{
   userEmail : "abc@gmail.com"
}
let anotherObj = oneObj

console.log(oneObj)
console.log(anotherObj)

anotherObj.userEmail = "xyz@gmail.com" //changes in one reflected in original copies.
        
console.log(oneObj)  
console.log(anotherObj)
 

        
