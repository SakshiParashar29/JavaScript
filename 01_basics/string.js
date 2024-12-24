const name = "Alice" //creating a primitive string
const repoCnt = 50;

//console.log(name + repoCnt) // instead of it use backticks, it's better
console.log(name.length)
console.log(`Hello my name is ${name} and my repo count is ${repoCnt}`)

const gameName = new String ('HelloC') // creating a string object && rarely used mostly primitive used

//console.log(gameName.length);
//console.log(gameName.toUpperCase());

console.log(gameName.charAt(2)) //Return what is at index 2
console.log(gameName.indexOf('l')) //return at what index l is first occured


const newString = gameName.substring(0, 4); //doesn't include last number, just return 0,1,2,3 index char
// console.log(newString)

// const anotherString = gameName.slice(0, -4)
// console.log(anotherString);

/*slice() is a method in JavaScript used to extract a portion of a string or an array without modifying the original. It takes two arguments: startIndex (inclusive) and endIndex (exclusive). If endIndex is omitted, it extracts up to the end. It also supports negative indices to count from the end

slice() supports negative indices, which count positions from the end of the string or array:

-1 refers to the last element.
-2 refers to the second-to-last element, and so on.*/

const trimCheck = "    sakshi        ";
console.log(trimCheck);
console.log(trimCheck.trim()) // it trim the extra spaces which are not required 

const url = "https://hitesh.com/hitesh%20choudhary"
/* browser converts the spaces into %20 which causes trouble that's why we write a command for replacing it with something*/
console.log(url.replace('%20', '-'));
console.log(url.includes('sundar')); //if it is present then it will return true else false

/* ABOUT SPLIT
       split() is a method in JavaScript that divides a string into an array of substrings based on a specified separator. It does not modify the original string.

       If no separator is provided, the entire string is returned as one element.
       An empty string '' splits the string into individual characters.
       Commonly used for tokenizing text or processing delimited data

       split() divides a string into an array based on a separator, which can be a string or a regular expression.
*/