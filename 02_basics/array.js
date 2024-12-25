//array

const myArr = [0, 1, 2, 3];
console.log(myArr[0]);

/* Shallow Copy & Deep Copy
     
    shallow copy - It is a copy whose properties shares the same references as those of the souce object from which the copy was made. 

    Deep Copy - It is a copy whose properties don;t share the same references. as those of the source objeect from which the copy was made.
*/


// const myHeroes = ["Batman", "IronMan"];
// const myArr2 = new Array(1, 2, 3, 4);
// console.log(myArr2); // Output - [1, 2, 3, 4]

// myArr.push(6) //push element at last
// //console.log(myArr);
// myArr.pop() //removes last element

// //console.log(myArr);

// myArr.unshift(9) //add elements at first
// // console.log(myArr);

// myArr.shift();//removes first elements;
// // console.log(myArr);


// console.log(myArr.includes(9))//if present then true else return false;
// console.log(myArr.indexOf(9)) //if present then return the index else return -1;

// const newArr = myArr.join() // Adds all the elements of an array into a string, separated by the specified separator string.

// console.log(myArr)
// console.log(newArr);


/* Slice and Splice  
     
    Splice - Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements.
    slice - Returns a copy of a section of an array. For both start and end, a negative index can be used to indicate an offset from the end of the array. range [A, B)

console.log("A ", myArr);
const myn1 = myArr.slice(1, 3)

console.log(myn1)
console.log("B ", myArr);

const myn2 = myArr.splice(1, 3);
console.log("C ", myArr);
console.log(myn2);

*/


// const marvelHeroes = ['thor', 'IronMan', 'SpiderMan'];
// const DC_heros = ['superman', 'flash', 'batman'];

//marvelHeroes.push(DC_heros); // it push dc heros array as a single element in marvel heroes array
//console.log(marvelHeroes); // [ 'thor', 'IronMan', 'SpiderMan', [ 'superman', 'flash', 'batman' ] ]

// const allHeros = marvelHeroes.concat(DC_heros); // concat return a new array including both array values
// console.log(allHeros); //[ 'thor', 'IronMan', 'SpiderMan', 'superman', 'flash', 'batman' ]


// const numArr = [1, 2, 3, [4, 5, 6, [7, 8]], 9, [10, 11]];
// const numArrSpread = numArr.flat(Infinity)

// console.log(numArrSpread)




console.log(Array.isArray(["Sakshi", "Parashar"])) // if array then true else false
console.log(Array.from("Sakshi")) // converts it into array -[ 'S', 'a', 'k', 's', 'h', 'i' ]

console.log(Array.from({name : "Sakshi"})) // return empty arr in output because we don't specify that how we want our as key or as a value. interesting cases for interviews

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1, score2, score3));