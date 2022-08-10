// function to get computer choice //

function getComputerChoice(){
  const choices = ["Rock", "Paper", "Scissors"];
  let randomIndex = Math.floor(Math.random() * 3 );
  return choices[randomIndex];
}

// function to reset the game

function resetGame(){
  playerScore = 0;
  computerScore = 0;
  player.textContent = "";
  computer.textContent = "";
  winner.textContent = "";
  resultDiv.textContent = "";
}

// function to check and announce winner

function checkWinner(){
  if (playerScore === 5 && computerScore === 5) {
    winner.textContent === "Ladies And gentlmen it is a tieeeeeeeee!";
    setTimeout(resetGame, 2000);
  }
  if (playerScore === 5) {
    winner.textContent = "winner is player!";
    setTimeout(resetGame, 2000);

  } else if (computerScore === 5) {
    winner.textContent =  "winner is computer!";
    setTimeout(resetGame, 2000);

  }
}

// function to play one round of Rock,Paper,Scissors //

function playRound(playerSelection, computerSelection){
  // to uppercase to make choice case-insensitive
  computerSelection = computerSelection.toUpperCase();
  playerSelection = playerSelection.toUpperCase();

  // if player inputs invalid choice
  if(playerSelection !== "ROCK" && playerSelection !== "PAPER" && playerSelection !== "SCISSORS"){
    return "- Invalid Choice!!!";
  }

  // if player and computer pick same choice
  if(playerSelection === computerSelection){
    playerScore++;
    computerScore++;
    player.textContent = playerScore;
    computer.textContent = computerScore;
    checkWinner();
    return "- Tie!";
  }

  // if player picks rock
  if(playerSelection === "rock".toUpperCase()){
    if (computerSelection === "scissors".toUpperCase()) {
      playerScore++;
      player.textContent = playerScore;
      checkWinner();
      return "- You Win! Rock beats Scissors";
    }
    if (computerSelection === "paper".toUpperCase()) {
      computerScore++;
      computer.textContent = computerScore;
      checkWinner();
      return "- You Lose! Paper beats Rock";
    }
  }

  // if player picks paper
  if (playerSelection === "paper".toUpperCase()) {
    if (computerSelection === "rock".toUpperCase()) {
      playerScore++;
      player.textContent = playerScore;
      checkWinner();
      return "- You Win! paper beats rock";
    }
    if (computerSelection === "scissors".toUpperCase()) {
      computerScore++;
      computer.textContent = computerScore;
      checkWinner();
      return "- You Lose! Scissors beats Paper";
    }
  }

  // if player picks scissors
  if(playerSelection === "scissors".toUpperCase()){
    if (computerSelection === "paper".toUpperCase()) {
      playerScore++;
      player.textContent = playerScore;
      checkWinner();
      return "- You Win! Scissors beats Paper";
    }
    if (computerSelection === "rock".toUpperCase()) {
      computerScore++;
      computer.textContent = computerScore;
      checkWinner();
      return "- You Lose! Rock beats Scissors";
    }
  }
}

let computerScore = 0;
let playerScore = 0;
const player = document.querySelector(".score .player");
const computer = document.querySelector(".score .computer");
const winner = document.querySelector(".winner")

const resultDiv = document.querySelector(".result");
const btns = document.querySelectorAll(".btn");

// playRound when player chooses
// show result in resultDiv
btns.forEach( function(btn) {
   btn.addEventListener("click", (e) => {
      resultDiv.textContent = "";
      setTimeout(() => {
        resultDiv.textContent = playRound(btn.textContent,getComputerChoice());
      }, 70)
   })
});


