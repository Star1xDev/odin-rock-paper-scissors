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

// function 'game' to play five rounds
function game(){

  for (let i = 1; i <= 5; i++) {
    let playerChoice = prompt("Enter Your Choice : ").trim();
    let computerChoice = getComputerChoice();
    console.groupCollapsed(playRound(playerChoice,computerChoice));
    console.log(`player choice is : ${playerChoice}`);
    console.log(`computer choice is : ${computerChoice}`);
    console.groupEnd(playRound(playerChoice,computerChoice));
  }

  // check if player wants to play again
    let playAgain = prompt("play again (Yes/No): ");
    if(playAgain.toLowerCase() === "no" || playAgain.toLowerCase() === "n"){
      return;
    }else if(playAgain.toLowerCase() === "yes" || playAgain.toLowerCase() === "y"){
      console.info("**  starting again  **")
      game();
    }else {
      console.error("invalid input!!...shutting down you computer in 10 ");
      let num = 9;
      let interval = setInterval( () => {
        console.error(num);
        num--;
        if (num < 0) {
          console.warn("I'm just kidding! lol");
          clearInterval(interval);
        }

      }, 1000);

    }

}

// start game
game();

