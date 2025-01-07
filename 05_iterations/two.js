// All the loop are array and object specific

// for of
const arr = [1, 2, 3, 4, 5];
for (const num of arr) {
    //
    // console.log(num);
}

const greetings = "Hello World!!"
for (const greet of greetings) {
    // if(greet != ' ')
    //   console.log(`Each char is ${greet}`);
}

//Maps - It holds key-value pair and remembers the original insertion order of the keys, containes unique key value pairs.

const map = new Map()
map.set('IN', "INDIA");
map.set('USA', "United States of America");
map.set('Fr', "France");

// console.log(map);

for (const [key, value] of map) {
    // console.log(key, ' :-', value);
}

const myObj = 
{
    js : 'javascript',
    cpp : 'c++',
    rb : 'ruby',
    swift : "swift by apple"
}

// TypeError: myObj is not iterable
// for (const key of myObj) {
//     console.log(key);   
// }

// for iterating in object we use for in loop
for (const key in myObj) {
    // console.log(`${key} shortcut is for ${myObj[key]}`);
}

// for each

const coding = ["js", "ruby", "java", "python", "cpp"];

// coding.forEach(function (val)
// {
//     console.log(val);
// })

// coding.forEach( (item) => {
//     console.log(item);
// })

// function printMe(item)
// {
//     console.log(item);
// }

// coding.forEach(printMe);

// coding.forEach( (item, index, arr) =>
// {
//     console.log(item, index, arr);// it print item, index and whole array
// })


const mycoding = [
    {
        languageName : "javaScript",
        languageFileName : "js"
    },
    {
        languageName : "Java",
        languageFileName : "java"
    },
    {
        languageName : "Python",
        languageFileName : "Py"
    }
]

mycoding.forEach( (item) => {
    console.log(`${item.languageFileName} is ${item.languageName} file`);
})