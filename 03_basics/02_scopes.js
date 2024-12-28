
var c = 400;
if(true)
{
    let a = 10
    const b = 22
    var c = 40
}


//console.log(a); // can't accessed a
//console.log(b); // can't accessed b
console.log(c); // can accessed c bqz var has global scope

/* let and const have local scope but var has global scope it is not braces bounded */


function one()
{
    const username = "Sakshi";

    function two()
    {
        const website = "youtube"
        console.log(username);
    }
    //console.log(website);
    two();
}
one()

// Interesting facts of functions
 
console.log(addOne(7)) // even we can write before fxn declaration no error
function addOne(num)
{
    return num + 1;
}

console.log(addOne(8)) 

//console.log(addTwo(5)) // can't accessed before fxn definition because we are writing fxn expression in which we are holding fxn return value in some variable.
const addTwo = function(num)
{
    return num + 2;
}
console.log(addTwo(6))