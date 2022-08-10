// function to get computer choice

function getComputerChoice(){
  const choices = ["Rock", "Paper", "Scissors"];
  let randomIndex = Math.floor(Math.random() * 3 );
  return choices[randomIndex];
}

// function to play one round of Rock,Paper,Scissors

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
    return "- Tie!";
  }

  // if player picks rock
  if(playerSelection === "rock".toUpperCase()){
    if (computerSelection === "scissors".toUpperCase()) {
      return "- You Win! Rock beats Scissors";
    }
    if (computerSelection === "paper".toUpperCase()) {
      return "- You Lose! Paper beats Rock";
    }
  }

  // if player picks paper
  if (playerSelection === "paper".toUpperCase()) {
    if (computerSelection === "rock".toUpperCase()) {
      return "- You Win! paper beats rock";
    }
    if (computerSelection === "scissors".toUpperCase()) {
      return "- You Lose! Scissors beats Paper";
    }
  }

  // if player picks scissors
  if(playerSelection === "scissors".toUpperCase()){
    if (computerSelection === "paper".toUpperCase()) {
      return "- You Win! Scissors beats Paper";
    }
    if (computerSelection === "rock".toUpperCase()) {
      return "- You Lose! Rock beats Scissors";
    }
  }
}



