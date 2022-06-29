const userScore = 0;
const computerScore = 0;
const userScoreSpan = document.getElementById("userscore");
const computerScoreSpan = document.getElementById("computerscore");
const scoreBoardDiv = document.querySelector(".scoreboard");
const resultDiv = document.querySelector(".result");
const rockButton = document.getElementById("r");
const paperButton = document.getElementById("p");
const scissorsButton = document.getElementById("s");

function getComputerChoice(){
    const choices = ['r','p','s'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber]
}

function win(user,){
    userScore++;
    userScoreSpan.innerHTML = userScore;
    computerScoreSpan.innerHTML = computerScore;
}

function lose(){
}
function game(userChoice){
    const computerChoice = getComputerChoice();
    switch (userChoice + computerChoice){
        case "rs":
        case "pr":
        case "sp":
            console.log("USER WINS");
            win();
        case "rp":
        case "ps":
        case "sr":
            console.log("USER LOSES");
            console.log(computerChoice);
            break;
        case "rr":
        case "pp":
        case "ss":
            console.log("TIE");
            console.log(computerChoice);
            break;
    }

}
function main(){
    rockButton.addEventListener('click',function(){
        game("r");
    })
    paperButton.addEventListener('click',function(){
        game("p");
    })
    scissorsButton.addEventListener('click',function(){
        game("s");
    })
}

main()
















// const selectionButtons = document.querySelectorAll('[data-selection]')

// selectionButtons.forEach(selectionButton=>{
//     selectionButton.addEventListner('click',e=>{
//         const selectionName = selectionButton.dataset.selection
//         makeSelection(selectionName)
//     })
// })

// function makeSelection(selection){
//     console.log(selection)
// }



// let playGame = confirm("Shall we play rock, paper, scissors?");
// if (playGame) {
//     let playerChoice = prompt("Please enter rock, paper, or scissors.");
//     if (playerChoice) {
//         let playerOne = playerChoice.trim().toLowerCase();
//         if(playerOne === "rock" || playerOne === "paper" || playerOne === "scissors"){
//             let computerChoice = Math.floor(Math.random() * 3 + 1);
//             let computer = computerChoice === 1 ? "rock" 
//               : computerChoice === 2? "paper"
//               : "scissors";
//               const result =
//               playerOne === computer
//                 ? "Tie game!"
//                 : playerOne === "rock" && computer === "paper"
//                 ? `playerOne: ${playerOne}\nComputer: ${computer}\nComputer wins!`
//                 : playerOne === "paper" && computer === "scissors"
//                 ? `playerOne: ${playerOne}\nComputer: ${computer}\nComputer wins!`
//                 : playerOne === "scissors" && computer === "rock"
//                 ? `playerOne: ${playerOne}\nComputer: ${computer}\nComputer wins!`
//                 : `playerOne: ${playerOne}\nComputer: ${computer}\nplayerOne wins!`;
//             alert(result);
//         } else {
//             alert("You didn't enter a valid command")
//         }
//     } else {
//         alert("I guess you changed your mind. Maybe next time.");
//     }
// } else {
//     alert("Ok, maybe next time.");
// }


