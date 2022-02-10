// SELECTORS
const btnContainer = document.querySelector(".button-container");
const startBtn = document.querySelector(".startButton");
const startDiv = document.querySelector(".start-container");
const rockBtn = document.querySelector(".rock");
const paperBtn = document.querySelector(".paper");
const scissorsBtn = document.querySelector(".scissors");
let scoreboard = document.querySelector(".scoreboard");
let message = document.querySelector(".message");
let winnerMsg = document.querySelector(".winner");
let playScoreTxt = document.querySelector(".plyrScore");
let compScoreTxt = document.querySelector(".compScore");
const resetBtn = document.querySelector("button.reset");

// EVENT LISTENERS

startBtn.addEventListener("click", startGame);
resetBtn.addEventListener("click", e => location.reload());


// GLOBAL VARIABLES

let playerScore = 0;
let computerScore = 0;
let playerChoice = "";


// ********* FUNCTIONS *************

function startGame() {
  console.log("Your Start button works!");
  startBtn.removeEventListener("click", startGame);
  startDiv.remove();
  scoreboard.classList.add('animate'); //add .animate to enable slide-up
  console.log(scoreboard.classList);
  play();
}

function play() {
  
  
    
  rockBtn.addEventListener("click", playRock);
  paperBtn.addEventListener("click", playPaper);
  scissorsBtn.addEventListener("click", playScissors);

  

  function playRock() {
    playRound("rock");
  }

  function playPaper() {
    playRound("paper");
  }

  function playScissors() {
    playRound("scissors");
  }

  function getCompChoice() {
    
    const choices = ["rock", "paper", "scissors"];
    
    return choices[getRandomIntInclusive(0, 2)];
    
    function getRandomIntInclusive(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
    }
  }

  function playRound(playerChoice) {
    
    const buttons = document.querySelectorAll('button');
    
    let computerChoice = getCompChoice();
    console.log(`Player: ${playerChoice} Computer: ${computerChoice}`);
    
    // Output the player and computer choices into the 'message' selector
    //message.innerText = `Player: ${playerChoice} | Computer: ${computerChoice}`;
    
    if( playerChoice == computerChoice){
      message.innerText = `It's a tie! ${playerChoice} vs. ${computerChoice}.`;
    }
    else if( playerChoice == "rock" && computerChoice == "scissors"){
      message.innerText = `You win! ${playerChoice} beats ${computerChoice}.`;
      ++playerScore;
      playScoreTxt.innerText = playerScore;
    }
    else if( playerChoice == "paper" && computerChoice == "rock"){
      message.innerText = `You win! ${playerChoice} beats ${computerChoice}.`;
      ++playerScore;
      playScoreTxt.innerText = playerScore;
    }
    else if( playerChoice == "scissors" && computerChoice == "paper"){
      message.innerText = `You win! ${playerChoice} beats ${computerChoice}.`;
      ++playerScore;
      playScoreTxt.innerText = playerScore;
    }
    else{
      message.innerText = `You lose! ${computerChoice} beats ${playerChoice}.`;
      ++computerScore;
      compScoreTxt.innerText = computerScore;
    }
    
    if(playerScore == 5){
      message.innerText = `${playerChoice} vs. ${computerChoice}`;
      winnerMsg.innerText = `You win the game with 5 points`;
      btnContainer.remove();    //removing the div prevents further button clicks but is ugly
      resetBtn.style.visibility = "visible";
      resetBtn.classList.add("animate");
    }
    else if(computerScore == 5){
      message.innerText = `${playerChoice} vs. ${computerChoice}`;
      winnerMsg.innerText = "Sorry. You lost."
      btnContainer.remove();
      resetBtn.style.visibility = "visible";
      resetBtn.classList.add("animate");
    }
    else{ return; }
    
  }
  
}


