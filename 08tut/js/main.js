// example 1

switch (2) {
  case 1:
    console.log(1);
    break;

  case 2:
    console.log(2);
    break;

  case 3:
    console.log(3);
    break;

  default:
    console.log("default");
}

// example 2

let playerOne = "rock";
let computer = "scissors";

switch (playerOne) {
  case computer:
    console.log("It's a tie!");
    break;

  case "rock":
    if (computer === "paper") {
      console.log("Computer wins!");
    } else {
      console.log("Player One wins!");
    }
    break;

  case "paper":
    if (computer === "scissors") {
      console.log("Computer wins!");
    } else {
      console.log("Player One wins!");
    }
    break;

  default:
    if (computer === "rock") {
      console.log("Computer wins!");
    } else {
      console.log("Player One wins!");
    }
}
