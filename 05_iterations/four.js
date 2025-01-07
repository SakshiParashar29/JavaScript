//chaining of properties

const myNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const newNum = myNum
                .map( (num) => num * 10)
                .map( (num) => num + 1)
                .filter( (num) => num >= 40)

console.log(newNum);

// reduce
const nums = [1, 2, 3, 4]

// const myTotal = nums.reduce( function (acc, currVal) {
//     console.log(`acc: ${acc} && currVal: ${currVal}`);
//     return acc + currVal
// }, 0) // here 0 is initialisation of accumulator you can give any number.

const myTotal = nums.reduce( (acc, curr) => (acc + curr), 0)

console.log(myTotal);