let userScore = 0;
let computerScore = 0;
const userScoreSpan = document.getElementById("userscore");
const computerScoreSpan = document.getElementById("computerscore");
const scoreBoardDiv = document.querySelector(".scoreboard");
const resultP = document.querySelector(".result > p");
const rockButton = document.getElementById("r");
const paperButton = document.getElementById("p");
const scissorsButton = document.getElementById("s");
const message = document.getElementById("actionmessage");

function getComputerChoice(){
    const choices = ['r','p','s'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber]
}

function convertToWord(letter){
    if(letter === "r") return "Rock";
    if(letter === "p") return "Paper";
    return "Scissors"
}

function win(userChoice,computerChoice){
    userScore++;
    userScoreSpan.innerHTML = userScore;
    computerScoreSpan.innerHTML = computerScore; 
    resultP.innerHTML = `${convertToWord(userChoice)} beats ${convertToWord(computerChoice)}. You win!`;
}

function lose(userChoice,computerChoice){
    computerScore++;
    userScoreSpan.innerHTML = userScore;
    computerScoreSpan.innerHTML = computerScore; 
    resultP.innerHTML = `${convertToWord(userChoice)} beats ${convertToWord(computerChoice)}. You lose!`;
}

function draw(userChoice,computerChoice){
    resultP.innerHTML = `${convertToWord(userChoice)} equals ${convertToWord(computerChoice)}. Its a draw!`;
}

function disableButtons() {
    document.getElementById("r").disabled = true;
    document.getElementById("p").disabled = true;
    document.getElementById("s").disabled = true;
}

function testFor5 (){
    if (userScore === 5 ){
        message.innerHTML = `User wins congarts! Restart page to play again!`; 
        disableButtons()        
    }
    if (computerScore === 5 ){
        message.innerHTML = `Computer wins! Restart page to play again!`; 
        disableButtons()
    }
}

function game(userChoice){
    const computerChoice = getComputerChoice();
    switch (userChoice + computerChoice){
        case "rs":
        case "pr":
        case "sp":
            win(userChoice, computerChoice);
            testFor5();
            break;
        case "rp":
        case "ps":
        case "sr":
            lose(userChoice, computerChoice);
            testFor5();
            break;
        case "rr":
        case "pp":
        case "ss":
            draw(userChoice, computerChoice);
            testFor5();
            break;
    }

}
function main(){
    rockButton.addEventListener('click', ()=> game("r"));
    paperButton.addEventListener('click',()=>game("p"));
    scissorsButton.addEventListener('click',()=>game("s"));
}

main()

//Courtesy to whatsdev