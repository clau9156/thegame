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
    rockButton.addEventListener("click", );
    paperButton.addEventListener("click", );
    scissorButton.addEventListener("click", );
    computerRandomChoice();
}

// computer random pick
function computerRandomChoice() {
    console.log("computerRandomChoice");
    let rndNumber = Math.floor(Math.random()*3);
    if (rndNumber==0) {
        console.log("rock");

    }
    if (rndNumber==1) {
        console.log("paper");

    }
    if (rndNumber==2) {
        console.log("scissor");

    }

    showFinalChoice();
}

// show final choice
function showFinalChoice() {
    console.log("showFinalChoice");
    determineWinner();
} 

// determine winner
function determineWinner() {
    console.log("determineWinner");

    //computer wins

    //player wins

}

// show win
function showWin() {
    console.log("showWin");

}

// show lose
function showLose() {
    console.log("showLose");

}

// show draw
function showDraw() {
    console.log("showDraw");

}