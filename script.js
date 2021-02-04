// let
// let win = 0;
// let lose = 0;
// let draw = 0;
let rock = 0;
let paper = 1;
let scissor = 2;

let rockButton = document.querySelector("button.rock");
let paperButton = document.querySelector("button.paper");
let scissorButton = document.querySelector("button.scissor");
let player = document.querySelector("#player1");
let computer = document.querySelector("#player2");

// start
start ();
// window.addEventListener("load", start);

function start() {
    console.log("start");
    //animation closed hand 3 times
    //or later

    playerChoose();
}

// player choose
function playerChoose() {
    console.log("playerChoose");
    rockButton.addEventListener("click", rock);
    paperButton.addEventListener("click", paper);
    scissorButton.addEventListener("click", scissors);
    computerRandomChoice();
}

// computer random pick
function computerRandomChoice() {
    console.log("computerRandomChoice");
    let rndNumber = Math.floor(Math.random()*3);
    if (rndNumber == 0) {
        console.log("rock");
        computer = rock;
        computer.classList.add("rock");
    }
    if (rndNumber == 1) {
        console.log("paper");
        computer = paper;
        computer.classList.add("paper");
    }
    if (rndNumber == 2) {
        console.log("scissor");
        computer = scissors;
        computer.classList.add("scissor");
    }

    showFinalChoice();
}

// show final choice
function showFinalChoice() {
    console.log("showFinalChoice");
    //player rock 
    if (player == rock && computer == rock) {
        showDraw();
    }
    if (player == rock && computer == paper) {
        showLose();
    }
    if (player == rock && computer == scissor) {
        showWin();
    }
    //player paper
    if (player == paper && computer == rock) {
        showWin();
    }
    if (player == paper && computer == paper) {
        showDraw();
    }
    if (player == paper && computer == scissor) {
        showLose();
    }
    //player scissors
    if (player == scissors && computer == rock) {
        showLose();
    }
    if (player == scissors && computer == paper) {
        showWin();
    }
    if (player == scissors && computer == scissor) {
        showDraw();
    }
    determineWinner();
} 

// determine winner
// function determineWinner() {
//     console.log("determineWinner");
//     //computer wins
//     //player wins
// }

// show win
function showWin() {
    console.log("showWin");
    replay();
}

// show lose
function showLose() {
    console.log("showLose");
    replay();
}

// show draw
function showDraw() {
    console.log("showDraw");
    replay();
}

// restart game/replay
function restart() {
    console.log("replay");
}