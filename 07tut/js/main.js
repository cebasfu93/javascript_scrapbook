// Example 1
let customerIsBanned = true;
let soup = "chicken noodle soup";
let reply;

if (customerIsBanned) {
  reply = "No soup for you!";
} else if (soup && crackers) {
  reply = `Here's your order of ${soup} & crackers`;
} else if (soup) {
  reply = `Here's your order of ${soup}`;
} else {
  reply = `Sorry, we're out of ${soup}`;
}
console.log(reply);

// Example 2
let testScore = 89;
let grade;
if (testScore >= 90) {
  grade = "A";
} else if (testScore >= 80) {
  grade = "B";
} else if (testScore >= 70) {
  grade = "C";
} else if (testScore >= 60) {
  grade = "D";
} else {
  if (collegeStudent) {
    grade = "U";
  } else {
    grade = "F";
  }
}
console.log(grade);

// Example 3
let playerOne = "paper";
let computer = "scissors";
let result;
if (playerOne === computer) {
  result = "It's a tie!";
} else if (playerOne === "rock") {
  if (computer === "paper") {
    result = "Computer wins!";
  } else {
    result = "Player One wins!";
  }
} else if (playerOne === "paper") {
  if (computer === "scissors") {
    result = "Computer wins!";
  } else {
    result = "Player One wins!";
  }
} else {
  if (computer === "rock") {
    result = "Computer wins!";
  } else {
    result = "Player One wins!";
  }
}
console.log(result);
