// example 1
// var doesnt raise an error, but let and const do
// var x = 1;
// var x = 2;

// let y = 1;
// let y = 2;

// const z = 1;
// const z = 2;

// example 2
// global scope
// var x = 1;
// let y = 2;
// const z = 3;

// local scope
// block scope
// {
//   let y = 4; // not available in the global scope
// }
// function scope
// function myFunc() {
//   const z = 5;
// }

// example 3
var x = 1;
let y = 2;
const z = 3;
console.log(`global: ${x}, ${y}, ${z}`);

function myFunc() {
  // function scope
  var x = 10;
  const z = 5;
  {
    // block scope
    var x = 11; // function scoped
    const z = 6; // block scoped
    console.log(`block: ${x}, ${y}, ${z}`);
  }
  console.log(`function: ${x}, ${y}, ${z}`);
}
