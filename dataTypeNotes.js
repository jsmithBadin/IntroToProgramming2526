// these are notes on data types and conditionals in javascript

// javaScript is a dynamically typed language.  C/java/C++ are statically typed.
// in a dynamically typed language, you can change what "type" of value is stored
// in a given variable.

//example:
// let message = "hello";
// message = 123;

// // Number
// let n = 5;                      // "int", integer
// console.log(typeof(n));
// n = 254.23589752378;            // "float", floating point number (decimals)
// console.log(typeof(n));
//javascript lumps int and float into a single data type, "number".

// There are some special values included in the number datatype:
// Infinity, -Infinity, NaN  (NaN is "Not a Number");
// Mathematical operations in JavaScript is "safe", you can do anything

// console.log(1 / 0);


// BigInt, Big Integer, represents Big... Integers...
// "number" as a data type can't store an integer value larger than 
// (2^53 - 1) : 9,007,199,254,740,991

const sampleBigInt = 123456789123456789123456789123456789n;

// final "n" indicates that it's a bigInt

// String - text.  There are three ways to produce strings in JavaScript
// which are slightly different.

let string1 = 'this is a string.'
let string2 = "this is also a string."

// you usually select what string notation you're using based on the content of 
// your string.  For example:

//  let dialogue = "The man yelled, "Here we go!""   (won't work.)
let dialogue = 'The man yelled, "Here we go!"'

// If your text will include apostrophes, use double double quotes.  If your text
// will include dialogue, using single quotes.  

// Functionally, single and double quotes are the same.  The third method 
// of writing strings is fundamentally different.  Example:

let name = "Steve";

// alert(`Hello, ${name}!`);

// Backticks allow you to embed code into the string

console.log(`3 + 4 is equal to ${3 + 4}`);

// char doesn't exist in JavaScript, but does exist in C and Java. 
// it's basically a string of length 1.  

// Boolean Values:  named for George Boole.  has 2 values: true and false.  
let nameFieldValid = true;  // the person input a valid name
let ageFieldValid = false;  // the person did not input a valid age

console.log(3 > 1);

// null: null contains only 1 value: "null".  "nothing", "empty", "value unknown";


let age = null;


// undefined: which means that a value has not been assigned.
let fish;
console.log(fish);


// Objects and Symbols.  Objects can hold complex data structures.  Symbols
// are used to identify objects.



// Practice with strings:  