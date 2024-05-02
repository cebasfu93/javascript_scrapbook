// Code Challenge

// Write code that will return a random letter from your name

const myName = "Sebastian";
const numberLetters = myName.length;

const randomNumber = Math.random() * numberLetters;
const randomIndex = Math.floor(randomNumber);
const randomLetter = myName.charAt(randomIndex);
console.log(randomLetter);
