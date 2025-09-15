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

// console.log(`3 + 4 is equal to ${3 + 4}`);

// char doesn't exist in JavaScript, but does exist in C and Java. 
// it's basically a string of length 1.  

// Boolean Values:  named for George Boole.  has 2 values: true and false.  
let nameFieldValid = true;  // the person input a valid name
let ageFieldValid = false;  // the person did not input a valid age

// console.log(3 > 1);

// null: null contains only 1 value: "null".  "nothing", "empty", "value unknown";


let age = null;


// undefined: which means that a value has not been assigned.
let fish;
// console.log(fish);


// Objects and Symbols.  Objects can hold complex data structures.  Symbols
// are used to identify objects.



// Practice with strings:  
// Quick voacbulary distinction to make:  functions vs. methods.
// functions are "generic".  
// a method is a function that is bound to a specific data type
// functions are usually called by stating the name of the function, and 
// what you want it applied to.  e.g. average(dataSet)
// whereas a method usually follows what it is being applied to
// e.g. text.at(2)

// here are several string methods:

// length (technically a property, not strictly a method)

// let text = "QWERTYUIOPASDFGHJKLZXCVBNM";
// console.log(text.length);

// // ways to extract characters from a string:
// // charAt(): returns the character at the indicated "slot" in the string

text = "Stevie T. Badin";
// console.log(text.charAt(3));

// // charCodeAt(): returns the UTF-16 code of the character at the specified index
// console.log(text.charCodeAt(3));

// let shrug = "¯\_(ツ)_/¯";
// console.log(shrug.charCodeAt(0));
// console.log(shrug.charCodeAt(4));

// .at() is a more useful and preferable option to charAt();

// console.log(text.at(-3));

// .concat() stands for concatenation, allows you to concatenate 2 or more strings
// let text1 = "Hello";
// let text2 = "Stevie";

// text3 = text1.concat(", ", text2, " ", shrug);
// console.log(text3);

// text4 = text1 + " " + text2;
// console.log(text4);

// if you want to extract a "substring" you can use three methods:
// .slice(): returns a string that starts from the given index and ends before the second index.
console.log(text);
console.log(text.slice(3,8))

// if you leave out the second value you will get the rest of the string.
// you can also use negative indexing.

console.log(text.slice(-5));

// [] is a notation that allows to do something similar to .at().
// but, it can be somewhat unpredicatble in javaScript.  

console.log(text[5]);

// .substring(); similar to slice, but start and end values that are less than 0 are
// treated as 0.  

// .substr(); where the second number was how long you wanted the string to be;
// this is deprecated, so don't use it.


// .toUpperCase() 
console.log(text.toUpperCase());

// .toLowerCase()
console.log(text.toLowerCase());

text = "                   Stevie T. Badin                              ";

console.log(text);

// .trim() to remove whitespace from both ends of a string
console.log(text.trim());

// you can also .trimStart() and .trimEnd()


// .padStart() allows you to add "padding" to the start of a string to get to given length
let newText = "Rams";
let padded = newText.padStart(10, "*")
console.log(padded);

// .repeat() a method that returns a string with a number of copies.  This returns a
// new string, it does not modify the original.

let newNewText = newText.repeat(4);
console.log(newNewText);

// .replace(): replaces a speicfied value with another value.  Only applied to the 
// first instance of the matching key phrase
newNewText = newNewText.replace("Rams", "Badin");
console.log(newNewText)

//.replaceAll() - replaces ALL instances of the matching key phrase, BUT doesn't 
// work with 100% of browsers. 
newNewText = newNewText.replaceAll("Rams", "Badin");
console.log(newNewText)

// You also need to be careful when implementing something like a replaceAll:
// Example:

let startingText = "First elected to parliament in 1991, he served in numerous other ministerial positions and was the Leader of the Opposition from 2011 to 2013, as the parliamentary party leader of the Nepali Congress."
console.log(startingText);

let replacedText = startingText.replaceAll(" he ", " she ");
console.log(replacedText);

// When doing something to EVERYTHING be careful to think about special cases

