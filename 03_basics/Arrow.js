// const user = {
//     username: "Hitesh",
//     price : 999,

//     welcomeMessage : function()
//     {
//         console.log(`${this.username}, welcom to Dark World!!`); // here we are using this means it is referring to current context. without using this throw error.
//     }
// }

// user.welcomeMessage();
// user.username = "Sakshi";
// user.welcomeMessage();

/*
   In the global scope, this refers to the global object:
   In a browser: window
   In Node.js: global  
 */

// function chai()
// {
//     let username = "Sakshi";
//     console.log(this.username); //undefined, can't use it inside the function
// }
// chai()


// const chai = () => {
//     let username = "abcd";
//     console.log(this.username);
// }
// chai();


// const addTwo = (num1, num2) => {
//     return num1 + num2;
// }
// console.log(addTwo(4, 9));

/* Implicit return
   const addTwo = (num1, num2) => num1 + num2;
   console.log(addTwo(3, 6));
*/