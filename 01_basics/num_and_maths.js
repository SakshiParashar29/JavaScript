const score = 400; //number 
console.log(score); //400

const newNum = new Number(100.7567); //creates object
console.log(newNum);//output - [Number: 100]

console.log(newNum.toString()); //output - 100 and it is converted into string and we can apply the property of string on it now.

console.log(newNum.toFixed(2)) // to show the precision after decimal places mostly use 2 like in ecommerce website etc.


const num = 123.496 // for 123.496 output - 123 but for 123.896 output - 124
console.log(num.toPrecision(3));
/* The toPrecision() method in JavaScript is used to format a number to a specified precision (number of significant digits). It returns the number as a string and can be used for fixed or scientific notation, depending on the input.

if given 3 then it will return upto 3 numbers with roundoff

Rounding:

The method rounds the number if necessary to match the specified precision.
Scientific Notation:

If the number is very large or very small, scientific notation may be used.
String Output:

The result is always returned as a string, even if the number is an integer.

   const intNum = 98765; //working with large integers
   console.log(intNum.toPrecision(3)); // "9.88e+4"
   console.log(intNum.toPrecision(5)); // "98765" (all digits included)

 */


   const hundreds = 1000000 
   console.log(hundreds.toLocaleString())// output 1000,000 a/america standards
   console.log(hundreds.toLocaleString('en-IN'));//output - 10,00,000 a/India standards


   /* ++++++++++++++++++++ MATHS ++++++++++++++++++++++ */
   /*console.log(Math.abs(-4));
   console.log(Math.round(4.6));
   console.log(Math.ceil(4.2)) //5
   console.log(Math.floor(4.2)) //4

   console.log(Math.min(8, 4, 3, 9, 7));//minimum value return
   console.log(Math.max(8, 7, 4, 2, 3));// return maximum value*/

   console.log(Math.random()) // return random numbers used while making dice game to generate random number between 1 & 6.

   console.log(Math.ceil(Math.random()* 6));//generate random between range [1,6]

