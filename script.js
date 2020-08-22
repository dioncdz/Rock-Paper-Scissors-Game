let choices = document.querySelectorAll('.buttons');
let comp = document.querySelector('.computer-select');
let result = document.querySelector('#result');

choices.forEach(choice => choice.addEventListener('click', (e)=>{
   let playerSelection = e.target.innerText;

   let computerSelection = computerPlay();

   function computerPlay() {
   let hand = Math.ceil(Math.random() * 3);
      if (hand === 1) {
         comp.textContent = 'Rock';
         return 'rock';
      } else if (hand === 2) {
         comp.textContent = 'Paper';
         return 'paper';
      } else {
         comp.textContent = 'Scissors';
         return 'scissors';
      }
   }
   
   console.log(playerSelection, computerSelection);

   function playRound(playerOne, playerTwo) {
      if (playerOne.toLowerCase() === 'rock' &&
      playerTwo === 'scissors') {
         result.textContent = 'Player 1 wins!';
      } else if (playerOne.toLowerCase() === 'rock' &&
      playerTwo === 'paper') {
         result.textContent = 'Player 2 wins!';
      }

      else if (playerOne.toLowerCase() === 'scissors' &&
      playerTwo === 'paper') {
         result.textContent = 'Player 1 wins!';
      } else if (playerOne.toLowerCase() === 'scissors' &&
      playerTwo === 'rock') {
         result.textContent = 'Player 2 wins!';
      }

      else if (playerOne.toLowerCase() === 'paper' &&
      playerTwo === 'rock') {
         result.textContent = 'Player 1 wins!';
      }  else if (playerOne.toLowerCase() === 'paper' &&
      playerTwo === 'scissors') {
         result.textContent = 'Player 2 wins!';
      } 

      else if (playerOne.toLowerCase() === playerTwo) {
         result.textContent = 'It\'s a tie!';
      }
   }

   playRound(playerSelection, computerSelection);


}));






/*****
function playRound(playerSelection, computerSelection) {
   let userScore = 0;
   let compScore = 0;

   // IF USER IS ROCK
   if (playerSelection.toLowerCase() === 'rock' &&
      computerSelection === 'scissors') {
      userScore++;
   } else if (playerSelection.toLowerCase() === 'rock' &&
      computerSelection === 'paper') {
      compScore++;
   }

   // IF USER IS SCISSORS
   else if (playerSelection.toLowerCase() === 'scissors' &&
      computerSelection === 'paper') {
      userScore++;
   } else if (playerSelection.toLowerCase() === 'scissors' &&
      computerSelection === 'rock') {
      compScore++;
   }

   // IF USER IS PAPER
   else if (playerSelection.toLowerCase() === 'paper' &&
      computerSelection === 'rock') {
      userScore++;
   }  else if (playerSelection.toLowerCase() === 'paper' &&
      computerSelection === 'scissors') {
      compScore++;
   } 

   // IF ITS A TIE
   else if (playerSelection.toLowerCase() === computerSelection) {
      return 'Try Again!';
   }

   console.log(userScore, compScore);
}

function computerPlay() {
   let hand = Math.ceil(Math.random() * 3);
   if (hand === 1) {
      // return 'rock';
      console.log('rock');
   } else if (hand === 2) {
      // return 'paper';
      console.log('paper');
   } else {
      // return 'scissors';
      console.log('scissors');
   }
}


let playerSelection = 'scissors';
let computerSelection = computerPlay();


function game() {
   for (var i = 0; i < 5; i++) {
      computerPlay();
      playRound(playerSelection, computerSelection);
   }
}

game();
***/