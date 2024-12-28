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