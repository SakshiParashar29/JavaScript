let score = true

console.log(typeof score);

let valueInNumber = Number(score);
console.log(typeof valueInNumber);

console.log(valueInNumber); // output is below depending on different values of score
/*
   "33" => 33
   "33abc" => NaN
   "true" => 1
   "false" => 0
   null => 0
   undefined => NaN
 */
