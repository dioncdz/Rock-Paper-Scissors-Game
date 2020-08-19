function playRound(playerSelection, computerSelection) {

   // IF USER IS ROCK
   if (playerSelection.toLowerCase() === 'rock' &&
      computerSelection === 'scissors') {
      return 'You Win!'
   } else if (playerSelection.toLowerCase() === 'rock' &&
   computerSelection === 'rock') {
   return 'Try Again!'
   } else if (playerSelection.toLowerCase() === 'rock' &&
   computerSelection === 'paper') {
   return 'Computer Wins!'
   }

   // IF USER IS SCISSORS
   else if (playerSelection.toLowerCase() === 'scissors' &&
      computerSelection === 'paper') {
      return 'You Win!'
   } else if (playerSelection.toLowerCase() === 'scissors' &&
   computerSelection === 'scissors') {
   return 'Try Again!'
   } else if (playerSelection.toLowerCase() === 'scissors' &&
   computerSelection === 'rock') {
   return 'Computer Wins!'
   }

   // IF USER IS PAPER
   else if (playerSelection.toLowerCase() === 'paper' &&
      computerSelection === 'rock') {
      return 'You Win!'
   } else if (playerSelection.toLowerCase() === 'paper' &&
   computerSelection === 'paper') {
   return 'Try Again!'
   } else if (playerSelection.toLowerCase() === 'paper' &&
   computerSelection === 'scissors') {
   return 'Computer Wins!'
   } else {
      return 'Please input rock, paper or scissors';
   }

}

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

const playerSelection = 'PAPER';
const computerSelection = computerPlay();
console.log(playRound(playerSelection, computerSelection));