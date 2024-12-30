
// if(true)
// {
//     console.log("executed");
// }

// <, >, <=, >=, ==, !=, ===, !==

if(2 !== 2) 
{
    console.log("executed")
}

const userEmail = "abc@gmail.com"; 
if(userEmail) // if a useremail string is empty then else will run because empty string considered as false
    console.log("Got user email")
else console.log("Don't have user email");

/*
    False values - false, 0, -0, BigINT 0n, empty string "", null, undefined, NaN

    rest is true values. empty array is true.

    truth values - "0"(zero inside the stirng is truthy value), 'false'(inside string so true), " ", [], {}, function(){} (empty function is true)
*/

// checking if object is empty or not
const emptyObj = {}
if(Object.keys(emptyObj).length === 0)
{
    console.log("Object is empty");
}

//checking array is empty or not
const arr = []
if(arr.length === 0)
{
    console.log("Array is empty");
}

// false == 0 && false == '' && 0 == '' output comes true;

// Nullish Coalescing Operator (??) : null undefined
//The Nullish Coalescing Operator (??) is a logical operator in JavaScript that returns the right-hand operand when the left-hand operand is null or undefined

let val1;
val1 = 5 ?? 10; // output 5
val1 = null ?? 10 // output 10