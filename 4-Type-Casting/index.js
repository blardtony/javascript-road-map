/** Type Conversions */


/** String conversion */
let bool = true; // boolean
let string = String(bool); // string

/** Numeric conversion */
let stringNumber = "16"; // string
let number = Number(stringNumber); // number

let stringNumber2 = "16px"; // string
let number2 = Number(stringNumber2); // NaN

/** Boolean conversion */
let one  = 1; // number
let zero = 0; // number
let stringEmpty = ""; // string
let hello = "Hello"; // string

let boolOne = Boolean(one); // true
let boolZero = Boolean(zero); // false
let boolStringEmpty = Boolean(stringEmpty); // false
let boolHello = Boolean(hello); // true


