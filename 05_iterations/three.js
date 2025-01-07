// const coding = ["js", "ruby", "java", "python", "cpp"]

// const values = coding.forEach( (item) => 
// {
//      console.log(item);
//      return item;
// })

// console.log(values); //undefined, for each returns nothing

// Filter
const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// const newNums = myNums.filter( (num) =>  num > 4)

// const newNums = myNums.filter( (num) => {
//     return num > 4;
// }) 

//using for each printing above
const newNums = [] //for storing values greater than 4
myNums.forEach( () => 
{
    if(num > 4)
    {
        newNums.push(num);
    }
})
console.log(newNums);


//some users are applying filters that work can be done by using filter, let someone solving questions on leetcode and he wants to solve the questions tagged array then we can code it like this

// const userTag = topic.filter( (tp) => tp.tag === "Array");