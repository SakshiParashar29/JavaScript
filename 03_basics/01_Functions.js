function sayMyName(){
    console.log("S");
    console.log("A");
    console.log("k");
    console.log("S");
    console.log("H");
    console.log("I");
}

// sayMyName()

// function addTwoNumbers(num1, num2) // (parameters in the parentheses)
// {
//     console.log(num1 + num2)
// }

//addTwoNumbers(4) // output - NaN //(arguments)
// addTwoNumbers(4, 4) // 8
// addTwoNumbers(4, "7") // 47
// addTwoNumbers(4, "a") // 4a
// addTwoNumbers("3", 4) // 34
// addTwoNumbers(3, null) // 3
// addTwoNumbers(4, undefined) //NaN

function addTwoNumbers(num1, num2) // (parameters in the parentheses)
{
    // let result = num1 + num2;
    // return result;

    return num1 + num2;
}

const result = addTwoNumbers(4, 9)
console.log("Result : ", result);


function loginUserMessage(username)
{
    if(username === undefined) // for empty we also have to print this so we can use if(!username)
    {
        return `Please Enter a valid userName.`
    }
    return `${username} just logged in`
}

console.log(loginUserMessage("Sakshi")) //Sakshi just logged in
console.log(loginUserMessage()) // if we don't send arguments it show undefined just logged in. to prevent this we will put an if condition in function so that it don't return unwanted values.



// ... - triple dot is a both restOf operator and spread of operator based on where they are used. In function parameters when triple dot are used then it called restOf operator

/* when we are making e-commerce website then we don't know how many numbers we are getting for calculation so we use restof operator */

function calculateCartPrice(...num1)
{
    let totalPrices = 0;
    for(let i = 0; i  < num1.length; i++)
    {
        totalPrices += num1[i];
    }
    return totalPrices;

    /* if we do return num1 then it store all the prices in num1 array and return it in array format*/
}
/* restof operator store all the prices in an array and we can calculate price by traversin over the array */
console.log(calculateCartPrice(40, 70, 700, 2000, 40000))


// Passin object

const user = {
    username : "Sakshi",
    price : 200
}

function handleObject(anyObject)
{
    return console.log(`Username is ${anyObject.username} & price is ${anyObject.price}`);
}

handleObject(user);

// Array as argument

const myNewArray = [200, 400, 600, 800]

function returnSecondValue(getArray)
{
    return getArray[1]
}

console.log(returnSecondValue(myNewArray));