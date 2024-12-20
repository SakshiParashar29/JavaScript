const accoundId = 20231009
let accountEmail = "xyz@gmail.com"
var accountPassword = "12345"
accountCity = "Jaipur"

console.log(accoundId);

//accoundId = 2 // Not Allowed
/* Prefer not to use Var because of issue in block scope and functional scope */

accoundId = 20231019
accountEmail = "abc@gmail.com"
accountPassword = "212121"
accountCity = "chennai"

console.table([accoundId, accountEmail, accountPassword, accountCity]);

