// // Loops, while ->

// //loop to print even numbers less than 30:

// const startTimeI = performance.now();
// let i = 0;
// let x = 0;
// while (i < 30000){
//     if (i % 2 == 0){
//         x += 1;
//     }
//     //i = i + 1
//     i += 1
//     //i++;     
// }

// const endTimeI = performance.now();
// console.log(`i method took ${endTimeI - startTimeI} milliseconds`);


// const startTimeJ = performance.now();
// let j = 0
// while(j < 30000){
//     x += 1;
//     j += 2;
// }
// const endTimeJ = performance.now();
// console.log(`j method took ${endTimeJ - startTimeJ} milliseconds`);



// //do while is a while loop, but it always executes at least 
// //once
// let password = "";

// do{
//     password = prompt("Please enter your password");
// } while(password != "password");

// console.log("Access Granted");

// for loop:  for loops are like while loops, but they condense
// most of the loop control into the declaration:

// for(let i = 28; i > 0; i -= 2){
//     console.log(i);
// }

// ARRAYS:  Arrays are like variables, except they can store
//          multiple values in them.  They are imaginary 
//          partitioned boxes.  Each "partition" is identified 
//          by an "index" value, starting from 0.  You can store 
//          multiple data types in the same array.  

let numbers = [];
numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

console.log(numbers);

// what's the 15th value in the array?
console.log(numbers[14]);

// method: .push().  .push() will add a value to the end of an array

let numbers2 = [];
for(let i = 1; i < 20; i+=1){
    numbers2.push(i);
} 
console.log(numbers2);

// functions: are a way to package code such that it can be 
//              reused later, without needing to copy and paste
//              you can also use functions to make decisions based 
//              on what they're being applied to.

function integerArrayBuilder(target){
    let numbersArray = []
    for(let i = 1; i <= target; i += 1){
        numbersArray.push(i);
    }
    return numbersArray;
}

let numbersUpTo30 = integerArrayBuilder(30);
let numbersUpTo40 = integerArrayBuilder(40);


// If you need to repeat a group of steps multiple times in 
// a row, use a loop.  If you need to repeat a process at
// different moments, OR with different "settings", use 
// a function.  