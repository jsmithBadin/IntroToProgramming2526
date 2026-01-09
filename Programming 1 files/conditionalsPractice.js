// // // Notes and practice for conditionals

// // // Conditionals: a way to control whether or not a block of code executes based
// // // on whether prior conditions are met.

// // console.log(Date());
// // // Example:  Greet the user with "Good morning!", "Good afternoon!", or "Good Evening!"
// // // Morning: before noon
// // // Afternoon: before 6pm (18)
// // // Night: 6pm (18) and after 

// // let currentHour = +(Date().slice(16,18));
// // console.log(currentHour);

// // if(currentHour < 12){
// //     console.log("Good Morning!")
// // } else if (currentHour < 18) {
// //     console.log("Good Afternoon!")
// // } else {
// //     console.log("Good Evening!")
// // }

// // // Logical operators:  are symbols that allow you to combine multiple conditions
// // //  || - OR - this will evaluate to "true" when either statement is true
// // //  && - AND - this will evaluate to "true" ONLY if both statements are true
// // //  ! - NOT - this will flip the "truthiness" of the value.

// // console.log(true || true);
// // console.log(true || false);
// // console.log(false || true);
// // console.log(false || false);

// // some values are "truthy" or "falsy".  They'll behave like "true" and "false" without
// // BEING true or false.

// // 1 is truthy, 0 is falsy

// // console.log(1 || 0);  
// // console.log(0 || 0);

// // Most of the time, you're essentially using || to test if ANY of the 
// // given conditions is true.  EXAMPLE:

// // let hour = 9;

// // if (hour < 9 || hour > 18){
// //     console.log("We're closed");
// // } else {
// //     console.log("We're open!");
// // }

// // if (!(hour < 9 || hour > 18)){
// //     console.log("We're open!");
// // } else {
// //     console.log("We're closed");
// // }

// // if (!(hour < 9) && !(hour > 18)){
// //     console.log("We're open!");
// // } else {
// //     console.log("We're closed");
// // }

// // if (hour >= 9 && hour <= 18){
// //     console.log("We're open!");
// // } else {
// //     console.log("We're closed");
// // }

// // We can apply more than two conditions:
// // let hour = 8;
// // let isWeekend = true;

// // if (hour < 7.5 || hour > 14.5 || isWeekend) {
// //     console.log("School's closed");
// // } else {
// //     console.log("School's open")
// // }

// // Functionally, javaScript's OR function finds the FIRST truthy value, then returns it
// // If NO truthy value is found, it returns the last value.

// // let firstName = "";
// // let lastName = "";
// // let nickName = "Da Goat";

// // console.log(firstName || lastName || nickName || "Anonymous");

// // Functionally, javaScript's AND function finds the first "falsy" value, then returns it
// // If NO falsy values are found, it returns the last value.

// // console.log(10 && 5 && 0 && 1);
// // console.log(10 && 5 && 1);
// // console.log(10 && 5 && 15);

// // // && has higher "precedence" than || (pemdas)
// // console.log(true && false || true && false);

// // some people use || or && as a replacement for "if".  DON'T.
// // let x = -3;

// // (x > 0) && console.log("greater than 0");

// // if(x > 0){
// //     console.log("greater than 0");
// // }

// // ! - NOT - First it converts the value to a Boolean, 
// // then it flips the "truthyness" of the value.

// console.log(!true);
// console.log(0);
// console.log(!0);

// // because of this conversion element, you can use "!!" to convert something
// // to a boolean value
// console.log(!!0); //returns false

// // NOT has highest precedence of all logical operators.

// // ? is a "conditional operator" (ternary)
// //Example: traditional approach - let a person sign up for a 
// // social media site if they are over the age of 13.

// // TRADITIONAL METHOD
// // let registrationAllowed;
// // let age = prompt("How old are you (in years)?", "");

// // if (age > 13){
// //     registrationAllowed = true;
// // } else {
// //     registrationAllowed = false;
// // }

// // console.log(registrationAllowed);

// // USING CONDITIONAL OPERATOR (?)
// // let age = prompt("How old are you (in years)?","");
// // let registrationAllowed = (age > 13) ? true : false;
// // console.log(registrationAllowed);

// // You can use multiple ?s.  Example:
// let age = prompt("age?", "");

// let message = (age < 3) ? "You're just a baby!" :
//     (age < 10) ? "Hi there, kiddo" :
//     (age < 60) ? "Hello" :
//     (age < 100) ? "Howdy, Grandpa" :
//     "Dang, you're OLD.";

// console.log(message);

// SWITCHES - a switch is a different way to do an if/else if/ else if ... chain
// switches test for "Strict Equality".  "===" is how you test for strict equality. 
// Strict equality is when the values are the same AND the data types match.

console.log(3 == "3");   //true
console.log(3 === "3");  //false

// example switch:
let a = +prompt("Enter a number","");

switch (a) {
    case 3: 
        alert("Too Small");
        break;
    case 4:
        alert("Exactly right!");
        break;
    case 5: 
        alert("Too Big");
        break;
    default: 
        alert("What are you even doing?")
} 