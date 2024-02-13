/** Declarations */
var x = 10;
let y = 20;
const z = 30;

/** Scope */
{
  let a = 40;
}
// a cannot be accessed here

{
  var b = 50;
}
// b can be accessed here

function scope() {
  let c = 60;
  // c can be accessed here
}
// c cannot be accessed here



/** Hoiting */

hoiting = 5; // Assigning value to hoiting
console.log(hoiting); // 5
var hoiting; // Declaring hoiting

var hoiting; // Declaring hoiting
hoiting = 5; // Assigning value to hoiting
console.log(hoiting); // 5

hoitingLet = 5; // Assigning value to hoitingLet
console.log(hoitingLet); // ReferenceError: Cannot access 'hoitingLet' before initialization
let hoitingLet; // Declaring hoitingLet