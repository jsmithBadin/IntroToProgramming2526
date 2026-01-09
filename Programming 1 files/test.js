// alert(null || 2 || undefined);  // 2

//alert(alert(1) || 2 || alert(3)); // undefined || 2 || alert(3) -> 2 || alert(3) -> 2

//alert(1 && null && 2);  // null (first falsy value)

//alert(null || 2 && 3 || 4) // 2 && 3 - > 3 :: null || 2 & 3 || 4 -> null || 3 || 4 -> 3 || 4 -> 3

//console.log(console.log(1) && console.log(2));
// 1 (prints 1, returns undefined, then stops, because and sees a falsy)
// undefined

// let age = 94;
// if(age >= 14 && age <= 90){
//     console.log(age)
// }

// if(!(age >= 14 && age <= 90)){
//     console.log('version 1');
// }

// if(!(age >= 14) || !(age <= 90)){
//     console.log('version 2');
// }

// if(age < 14 || age > 90){
//     console.log('version 3')
// }


// // this
// if(-1 || 0) {
//     alert("first");
// }
// // not this
// if(-1 && 0){
//     alert('second');
// }
// //this too
// if(null || -1 && 1){
//     alert("third");
// }


var addend1 = prompt("Choose a number");
var addend2 = prompt("Choose a number");
var sum = addend1 + addend2;
alert(addend1 + ' + ' + addend2 + ' = ' + sum);