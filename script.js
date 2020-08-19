let userScore = 0, compScore = 0;

function playRound(playerSelection, computerSelection) {

  // IF USER IS ROCK
  if (playerSelection.toLowerCase() === 'rock' && computerSelection === 'scissors') {
    userScore++;
  } else if (playerSelection.toLowerCase() === 'rock' &&  computerSelection === 'paper') {
    compScore++;
  }
    // IF USER IS SCISSORS
  else if (playerSelection.toLowerCase() === 'scissors' &&  computerSelection === 'paper') {
    userScore++;
  } else if (playerSelection.toLowerCase() === 'scissors' &&  computerSelection === 'rock') {
    compScore++;
  }
  // IF USER IS PAPER
  else if (playerSelection.toLowerCase() === 'paper' &&  computerSelection === 'rock') {
    userScore++;
  } else if (playerSelection.toLowerCase() === 'paper' &&  computerSelection === 'scissors') {
    compScore++;
  } 

}

// GENERATE RANDOM COMPUTER CHOICE
function computerPlay () {
  let hand = Math.ceil(Math.random() * 3);
  if (hand === 1) {
    return 'rock';
  } else if (hand === 2) {
    return 'paper';
  } else {
    return 'scissors';
  }
}

function game() {
  let playerSelection;
  let computerSelection;

  for(let i = 0; i < 5; i++) {
    playerSelection = prompt('Rock, paper or scissors?');
    computerSelection = computerPlay();
    playRound(playerSelection, computerSelection);
  }
  console.log(`Final score is user: ${userScore} | comp: ${compScore}`);
}

game()

if(userScore > compScore) {
  console.log('You won the game');
} else if(userScore < compScore) {
  console.log('Computer won the game');
} else {
  console.log(`It's a tie!`);
}




