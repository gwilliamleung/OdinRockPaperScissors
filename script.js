const selectionButtons = document.querySelectorAll('[data-selection]')

selectionButtons.forEach(selectionButton=>{
    selectionButton.addEventListner('click',e=>{
        const selectionName = selectionButton.dataset.selection
        makeSelection(selectionName)
    })
})

function makeSelection(selection){
    console.log(selection)
}



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


