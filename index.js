let player_wins = 0 ;
let computer_wins = 0 ;
let playerSelection ;
let computerSelection ;
function getComputerChoice() {
    number = Math.floor(Math.random() * (9));
    if(number < 3){
        return "scissor";
    }else if (number > 2 && number < 6){
        return "rock" ;
    }else return "paper" ;
  }

const roundResult = document.getElementById('roundResult');
const roundInfo = document.getElementById('roundInfo');
const playerScore = document.getElementById('playerScore');
const computerScore = document.getElementById('computerScore');
const rockBtn = document.getElementById('rockBtn');
const paperBtn = document.getElementById('paperBtn');
const scissorBtn = document.getElementById('scissorBtn');

function playRound(playerSelection , computerSelection ){
    if(playerSelection === computerSelection){
        roundResult.textContent = `This is a tie` ;
    }else if(playerSelection === "rock" && computerSelection === "scissor"){
        player_wins++ ;
        roundResult.textContent = `You win!` ;
        roundInfo.textContent = `Rock beats Scissor`;
    }else if(playerSelection === "rock" && computerSelection === "paper"){
        computer_wins++;
        roundResult.textContent = `You lose!` ;
        roundInfo.textContent = `Paper beats Rock`;
    }else if(playerSelection === "paper" && computerSelection === "rock"){
        player_wins++ ;
        roundResult.textContent = `You win!` ;
        roundInfo.textContent = `Paper beats Rock`;
    }else if(playerSelection === "paper" && computerSelection === "scissor"){
        computer_wins++;
        roundResult.textContent = `You lose!` ;
        roundInfo.textContent = `Scissor beats Paper`;
    }else if(playerSelection === "scissor" && computerSelection === "rock"){
        computer_wins++;
        roundResult.textContent = `You lose!` ;
        roundInfo.textContent = `Rock beats Scissor`;
    }else{
        player_wins++ ;
        roundResult.textContent = `You win!` ;
        roundInfo.textContent = `Scissor beats Paper`;
    }

    if(player_wins === 3){
        endGame("Parabens voce ganhou o jogo");
    }else if(computer_wins === 3){
        endGame("E uma pena voce perdeu");
    }
}

function endGame(message) {
    roundResult.textContent = message;
    roundInfo.textContent = `Clique no botao reset para comecar outro game botao para reiniciar o jogo` ;
    rockBtn.style.display = 'none';
    paperBtn.style.display = 'none';
    scissorBtn.style.display = 'none';
    resetBtn.style.display = '';
    resetBtn.addEventListener('click', () => restartGame());
}

function restartGame() {
    player_wins = 0 ;
    computer_wins = 0 ;
    roundResult.textContent = 'Choose' ;
    roundInfo.textContent = 'First to get 3 points wins the game' ;
    playerScore.textContent = 'Player: 0' ;
    computerScore.textContent = 'Computer: 0' ;
    rockBtn.style.display = '';
    paperBtn.style.display = '';
    scissorBtn.style.display = '';
  }


function handleButtonClick(choice){
    playerSelection = choice ;
    computerSelection = getComputerChoice();
    playRound(playerSelection,computerSelection);
    playerScore.textContent = `Player : ${player_wins}` ;
    console.log(player_wins);
    computerScore.textContent = `Computer : ${computer_wins}`;
    console.log(computer_wins);
}

function playGame(){
    resetBtn.style.display = 'none';
    rockBtn.addEventListener('click', () => handleButtonClick('rock'));
    paperBtn.addEventListener('click', () => handleButtonClick('paper'));
    scissorBtn.addEventListener('click', () => handleButtonClick('scissor'));
 
}

playGame() ;


