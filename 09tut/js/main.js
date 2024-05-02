// ternary operator
// condition ? ifTrue: ifFalse

// example 1
let soup;
let isCustomerBanned = true;
let soupAccess = isCustomerBanned ? "Sorry, no soup for you" : soup ? "Yes, we have soup" : "Sorry, no soup today";
let response = soup ? "Yes, we have soup" : "Sorry, no soup today";
console.log(response);

// example 2
let testScore = 33;
let myGrade = testScore > 89 ? "A" : testScore > 79 ? "B" : testScore > 69 ? "C" : testScore > 59 ? "D" : "F";
console.log(myGrade);

// example 3
let playerOne = "rock";
let computer = "scissors";
let result =
  playerOne === computer
    ? "It's a tie"
    : playerOne === "rock" && computer === "paper"
    ? "Computer wins"
    : playerOne === "paper" && computer === "scissors"
    ? "Computer wins"
    : playerOne === "scissors" && computer === "rock"
    ? "Computer wins"
    : "Player One wins";
console.log(result);
