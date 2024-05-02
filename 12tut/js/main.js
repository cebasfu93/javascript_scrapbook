// loops

// example 1
// let myNumber = 0;
// while (myNumber < 50) {
//   console.log(myNumber);
//   myNumber++;
// }

// example 2
// let myNumber = 0;
// do {
//   console.log(myNumber);
// } while (myNumber < 50);

// example 3
// basic for loop
// for (let i = 0; i < 10; i++) {
//   // run some code
// }

// example 4
// independent update
// for (let i = 0; i < 10) {
//   // run some code
//   i++
// }

// example 5
// independent counter declaration
// let i = 0;
// for ( ; i < 10; i++) {
//   // run some code
// }

// example 6
// let name = "Sebastian";
// let counter = 0;
// let myLetter;
// while (true) {
//   myLetter = name.charAt(counter);
//   console.log(myLetter);
//   if (myLetter === "b") break;
//   counter++;
// }

// example 7
let name = "Sebastian";
let counter = 0;
let myLetter;
while (counter <= 3) {
  myLetter = name.charAt(counter);
  console.log(myLetter);
  if (counter === 1) {
    counter += 2;
    continue;
  }
  if (myLetter === "b") break;
  counter++;
}
console.log(counter);
