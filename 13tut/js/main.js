// functions

// example 1
// function sum(num1, num2) {
//   if (num2 === undefined) {
//     return num1 + num1;
//   }
//   console.log(num1);
//   console.log(num2);
//   return num1 + num2;
// }

// console.log(sum(2));
// console.log(sum(1, 2));

// example 2
// function getUserNameFromEmail(email) {
//   return email.slice(0, email.indexOf("@"));
// }

// console.log(getUserNameFromEmail("foo@bar.com"));

// example 3
// anonymous functions
// const getUserNameFromEmail = function (email) {
//   return email.slice(0, email.indexOf("@"));
// };

// example 4
// arrow functions
// const getUserNameFromEmail = (email) => {
//   return email.slice(0, email.indexOf("@"));
// };

// example 5
const toProperCase = (name) => {
  return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
};
console.log(toProperCase("sebAstian"));
