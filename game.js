// function to get computer choice

function getComputerChoice(){
  const choices = ["Rock", "Paper", "Scissors"];
  let randomIndex = Math.floor(Math.random() * 3 );
  return choices[randomIndex];
}