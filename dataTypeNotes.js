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