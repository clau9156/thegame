let rock = 0;
let paper = 1;
let scissor = 2;
let playerChoice = "";
let computerChoice = "";

let rockButton = document.querySelector("button.rock");
let paperButton = document.querySelector("button.paper");
let scissorButton = document.querySelector("button.scissor");
let player = document.querySelector("#player1");
let computer = document.querySelector("#player2");
let win = document.querySelector("#win");
let lose = document.querySelector("#lose");
let draw = document.querySelector("#draw");

// start

function start() {
    console.log("start");
    //animation closed hand 3 times
    //or later

    playerChoose();
}
start();
// player choose
function playerChoose() {
    console.log("playerChoose");
    paperButton.addEventListener("click", pickedpaper);
    scissorButton.addEventListener("click", pickedscissor);
    rockButton.addEventListener("click", pickedrock);
}
function pickedrock() {
    playerChoice = "rock";
    rockButton.removeEventListener("click", pickedrock);
    paperButton.removeEventListener("click", pickedpaper);
    scissorButton.removeEventListener("click", pickedscissor);
    player.classList.add("rock");
    computerRandomChoice();
    
}

function pickedpaper() {
    playerChoice = "paper";
    showFinalChoice()
    rockButton.removeEventListener("click", pickedrock);
    paperButton.removeEventListener("click", pickedpaper);
    scissorButton.removeEventListener("click", pickedscissor);
    player.classList.add("paper");
    computerRandomChoice();
}

function pickedscissor() {
    playerChoice = "scissor";
    showFinalChoice()
    rockButton.removeEventListener("click", pickedrock);
    paperButton.removeEventListener("click", pickedpaper);
    scissorButton.removeEventListener("click", pickedscissor);
    player.classList.add("scissor");
    computerRandomChoice();
}


// computer random pick
function computerRandomChoice() {
    console.log("computerRandomChoice");
    let rndNumber = Math.floor(Math.random() * 3);
    if (rndNumber == 0) {
        console.log("rock");
        computerChoice = rock;
        computer.classList.add("rock");
    }
    if (rndNumber == 1) {
        console.log("paper");
        computerChoice = paper;
        computer.classList.add("paper");
    }
    if (rndNumber == 2) {
        console.log("scissor");
        computerChoice = scissor;
        computer.classList.add("scissor");
    }

    showFinalChoice();
}

// show final choice
function showFinalChoice() {
    console.log("showFinalChoice")
    if (playerChoice == "rock" && computerChoice == "rock") {
        showDraw();
    }else if (playerChoice == "rock" && computerChoice == "paper") {
        showLose();
    }else if (playerChoice == "rock" && computerChoice == "scissor") {
        showWin();
    }else if (playerChoice == "paper" && computerChoice == "rock") {
        showWin();
    }else if (playerChoice == "paper" && computerChoice == "paper") {
        showDraw();
    }else if (playerChoice == "paper" && computerChoice == "scissor") {
        showLose();
    }else if (playerChoice == "scissor" && computerChoice == "rock") {
        showLose();
    }else if (playerChoice == "scissor" && computerChoice == "paper") {
        showWin();
    }else {
        showDraw();
    }
} 

// show win
function showWin() {
    console.log("showWin");
    win.classList.remove("hidden");
    replay();
}

// show lose
function showLose() {
    console.log("showLose");
    lose.classList.remove("hidden");
    replay();
}

// show draw
function showDraw() {
    console.log("showDraw");
    draw.classList.remove("hidden");
    // replay();
    setTimeout(replay, 1200);
}

// restart game/replay
function replay() {
    console.log("replay");
    let playerChoice = "";
    let computerChoice = "";
    player.classList.remove("rock");
    player.classList.remove("paper");
    player.classList.remove("scissor");
    computer.classList.remove("rock");
    computer.classList.remove("paper");
    computer.classList.remove("scissor");
    win.classList.add("hidden");
    lose.classList.add("hidden");
    draw.classList.add("hidden");
    start();
    // setTimeout(start, 5000);
}