// Numbers
const myNumber = 42;

console.log(myNumber);

const myFloat = 42.0;

console.log(myFloat);

console.log(typeof myNumber);
console.log(typeof myFloat);

const myString = "42";

console.log(myString);

console.log(myNumber === myFloat);

console.log(myNumber === myString);

console.log(myNumber === Number(myString));

console.log(Number.parseFloat(myString));
console.log(Number.parseFloat("43.1abc"));

console.log(typeof myFloat.toFixed(2));

console.log(Number.parseFloat("4.237abc").toFixed(4));
