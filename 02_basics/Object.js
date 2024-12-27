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

//Array of Objects
const users = [
     {
        id: 1,
        email: "abc@gmail.com"
     },
     {
        id: 2,
        email: "xyz@gmail.com"
     },
     {
        id: 3,
        email: "123@gmail.com"
     },
     {
        id: 4,
        email: "!1!@gmail.com"
     },
]

console.log(users[0].email)

const JsUser = {
    name : "Sakshi",
    // [mySym] : "KeyValue1",
    age : 19,
    location : "Jaipur",
    email : "Sakshi@google.com",
    isLoggedIn : false,
    lastLoginDays : ["Monday", "Saturday"]
}
console.log(JsUser);
console.log(Object.keys(JsUser)); // all the keys of JsUser - datatype array
console.log(Object.values(JsUser)); // all the values of Jsuser - datatype array
console.log(Object.entries(JsUser));

console.log(JsUser.hasOwnProperty(isLoggedIn)); // return true if present else false;


