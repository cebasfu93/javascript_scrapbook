const initGame = () => {
  const startGame = confirm("Shall we play rock, paper, or scissors?");
  startGame ? playGame() : alert("Ok, maybe next time.");
};

const playGame = () => {
  while (true) {
    let playerChoice = getPlayerChoice();
    playerChoice = formatPlayerChoice(playerChoice);
    if (playerChoice === "") {
      invalidChoice();
      continue;
    }
    if (!playerChoice) {
      decidedNotToPlay();
      break;
    }
    playerChoice = evaluatePlayerChoice(playerChoice);

    if (!playerChoice) {
      invalidChoice();
      continue;
    }
    const computerChoice = getComputerChoice();
    const result = determineWinner(playerChoice, computerChoice);
    displayResult(result);
    if (askToPlayAgain()) {
      continue;
    } else {
      thanksForPlaying();
      break;
    }
  }
};

const getPlayerChoice = () => {
  return prompt("Please enter rock, paper, or scissors");
};

const formatPlayerChoice = (playerChoice) => {
  if (playerChoice || playerChoice === "") {
    return playerChoice.trim().toLowerCase();
  } else {
    return false;
  }
};

const invalidChoice = () => {
  alert("You didn't enter rock, paper, or scissors.");
};

const decidedNotToPlay = () => {
  alert("I guess you changed your mind. Maybe next time.");
};

const evaluatePlayerChoice = (playerChoice) => {
  if (playerChoice === "rock" || playerChoice === "paper" || playerChoice === "scissors") {
    return playerChoice;
  } else {
    return false;
  }
};

const getComputerChoice = () => {
  const randomNumber = Math.floor(Math.random() * 3);
  const rpsArray = ["rock", "paper", "scissors"];
  return rpsArray[randomNumber];
};

const determineWinner = (playerChoice, computerChoice) => {
  const winner =
    playerOne === computer
      ? `playerOne: ${playerOne}.\nComputer: ${computer}.\nIt's a tie.`
      : playerOne === "rock" && computer === "paper"
      ? `playerOne: ${playerOne}.\nComputer: ${computer}.\nComputer wins.`
      : playerOne === "paper" && computer === "scissors"
      ? `playerOne: ${playerOne}.\nComputer: ${computer}.\nComputer wins.`
      : playerOne === "scissors" && computer === "rock"
      ? `playerOne: ${playerOne}.\nComputer: ${computer}.\nComputer wins.`
      : `playerOne: ${playerOne}.\nComputer: ${computer}.\nPlayer One wins.`;
  return winner;
};

const displayResult = (result) => {
  alert(result);
};

const askToPlayAgain = () => {
  confirm("Play again?");
};

const thanksForPlaying = () => {
  alert("Ok, thanks for playing");
};
initGame();
