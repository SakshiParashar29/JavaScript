// Singleton
/*
   const tinderUser = new Object() // output - {} while printing but it is singleton object
   const tinderUser = {} // output - {} while printing but it is non-singleton object
 */



// Object Literals

/*const mySym = Symbol("Key1");
const JsUser = {
    name : "Sakshi",
    [mySym] : "KeyValue1",
    age : 19,
    location : "Jaipur",
    email : "Sakshi@google.com",
    isLoggedIn : false,
    lastLoginDays : ["Monday", "Saturday"]
}

// console.log(typeof JsUser[mySym]);
// console.log(JsUser.email);
// console.log(JsUser["email"]);

//console.log(JsUser)

//Object.freeze(JsUser) // after freezing we can't change any value of JsUser

JsUser.greeting = function ()
{
    console.log("Hello Users");
}

JsUser.greeting();
*/


const obj1 = {1 : "a", 2 : "b"}
const obj2 = {3 : "C", 4 : "d"} 

//const obj3 = {obj1, obj2}

//const obj3 = Object.assign({},obj1, obj2) //good practice to put curly braces

const obj3 = {...obj1, ...obj2} //...means spread - spread the obj1 and obj2 in obj3

console.log(obj3)



