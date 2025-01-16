/*The promise object represents the eventual completion(or failure) of an asynchronous operation and its resulting value.
         A promise is one of these states:
         1. pending : initial state, neither fulfilled nor rejected.
         2. Fulfilled : meaning that the operation was completed successfully.
         3. rejected : meaning that the operation failed.
*/

const promiseOne = new Promise(function(resolve, reject){
      // Do an asyn tase 
      // DataBase calls, cryptography realted calls, network calls.

      setTimeout(function(){
        console.log('Async task is complete');
        resolve(); // This tells JavaScript: "The asynchronous task is done; now, execute the .then attached to this promise. // Without this, `.then` won't execute"
      },1000)
});
//If you don't call resolve, the promise will remain in the "pending" state forever.This means the .then callback will never execute, and the message "Promise consumed" will not be logged.


promiseOne.then(function(){
  console.log('Promise consumed')
})


new Promise(function(resolve, reject){
    setTimeout(function(){
      console.log("Asyn 2 is completed");
      resolve();
    },1000)
}).then(function()
{
  console.log('Async 2 is resolved');
})

const promiseThree = new Promise(function(resolve, reject){
     setTimeout(function(){
        resolve({username: "Chai", email: "abc@gmail.com"})
     }, 1000)
})

promiseThree.then(function(user){
  console.log(user);
})

const promisefour = new Promise(function(resolve, reject){
  setTimeout(function(){
     let error = false; // if false then reject not get called, else get called.
     if(!error)
       resolve({username: "Hazel", email: "abc@gmail.com"})
     else
        reject('ERROR : Something went Wrong');
  }, 1000)
})

promisefour
.then((user) => {
  console.log(user);
  return user.username;
})
.then((username)=>{
  console.log(username);
})
.catch(function(error){
  console.log(error); // we use .catch to catch the error and display it.
})
.finally(() => console.log("The promise is either resolved or rejected!!!")); // it will run irrespective of the fact promise is resolved or rejected.


const promiseFive = new Promise(function(resolve, reject){
      setTimeout(function(){
        let error = true
        if(!error)
          resolve({course: "JavaScrip", Channel: "Chai aur code"})
        else
           reject('ERROR: JS went Wrong');
      }, 1000)
})

async function consumePromisefive() {
   const response = await promiseFive;
   console.log(response);
}

consumePromisefive();