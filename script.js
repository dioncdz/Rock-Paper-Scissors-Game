<<<<<<< HEAD
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
=======
let userScore = 0, compScore = 0;

>>>>>>> 9a0d6c38e3ed4739fafdbfc8112ea7a01bcb654d
function playRound(playerSelection, computerSelection) {
   let userScore = 0;
   let compScore = 0;

<<<<<<< HEAD
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
=======
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
>>>>>>> 9a0d6c38e3ed4739fafdbfc8112ea7a01bcb654d

   console.log(userScore, compScore);
}

<<<<<<< HEAD
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
=======
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




>>>>>>> 9a0d6c38e3ed4739fafdbfc8112ea7a01bcb654d
