/** Primitives and objects */

const number = 1; // number
const bigInt = 1234567890123456789012345678901234567890n; // bigInt
const string = "string"; // string
const boolean = true; // boolean
const nullValue = null; // null
const undefinedValue = undefined; // undefined
const sym1 = Symbol("Foo"); // symbol

const object = { key: "value" }; // object
const array = [1, 2, 3]; // array
const date = new Date(); // date
const functionValue = function () {}; // function

/** Objects */

let user = new Object(); // "object constructor" syntax
let user2 = {}; // "object literal" syntax

user = {
  name: "Tony",
  age: 26,
};

user.isUnderage = false; // add new property

delete user.isUnderage; // remove property
