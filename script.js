//elements
const statusDiv = document.querySelector(".status");
const resetButton = document.querySelector("#reset");

const cellDivs = document.querySelectorAll(".cell");

//game vars

var gameIsLive = true;
let xIsNext = true;

//functions
function handleWin(winLetter) {
    gameIsLive = false;
    statusDiv.innerHTML = `${winLetter.toUpperCase()} has WON!`;

}

function handleTie() {
    statusDiv.innerHTML = "It's a TIE! :(";
    gameIsLive = false;
}

function checkGameState() {
    const cS = [];
    for(const cell of cellDivs) {
        cS.push(cell.classList[2]);
    }

    if (cS[0] && cS[0] === cS[1] && cS[0] === cS[2]) {
        handleWin(cS[0]);
    }

    else if (cS[3] && cS[3] === cS[4] && cS[3] === cS[5]) {
        handleWin(cS[3]);
    }

    else if (cS[6] && cS[6] === cS[7] && cS[6] === cS[8]) {
        handleWin(cS[6]);
    }

    else if (cS[0] && cS[0] === cS[3] && cS[0] === cS[6]) {
        handleWin(cS[0]);
    }

    else if (cS[1] && cS[1] === cS[4] && cS[1] === cS[7]) {
        handleWin(cS[1]);
    }

    else if (cS[2] && cS[2] === cS[5] && cS[2] === cS[8]) {
        handleWin(cS[2]);
    }

    else if (cS[0] && cS[0] === cS[4] && cS[0] === cS[8]) {
        handleWin(cS[0]);
    }

    else if (cS[2] && cS[2] === cS[4] && cS[2] === cS[6]) {
        handleWin(cS[2]);
    }

    else if (cS[0] && cS[1] && cS[2] && cS[3] && cS[4] && cS[5] && cS[6] && cS[7] && cS[8]) {
        handleTie();
    }
}

//event handlers
function handleCellClick(e) {
    if(!gameIsLive) {
        return;
    }

    if(e.target.classList[2] === 'x' || e.target.classList[2] === 'o') {
        return;
    }

    if(xIsNext) {
        e.target.classList.add("x");
        xIsNext = !xIsNext;
    }

    else {
        e.target.classList.add("o");
        xIsNext = !xIsNext;
    }

    if(xIsNext) {
        document.querySelector(".status").innerHTML = "X is next";

    }
    else {
        document.querySelector(".status").innerHTML = "O is next";
    }

    checkGameState();
         
}

function handleReset(e) {
    for(const cell of cellDivs) {
        cell.classList.remove("x", "o");
    }
    gameIsLive = true;
    xIsNext = true;
    statusDiv.innerHTML = "X is next";
}
/*
function handleMouseEnter(e) {
    if(!gameIsLive) {
        return;
    }
    if(e.target.classList.contains("x") || e.target.classList.contains("o")) {
        return;
    }
    if (xIsNext) {
        e.target.classList.add("xHover");
    }
    else {
        e.target.classList.add("oHover");
    }

}

function handleMouseLeave(e) {
    if(!gameIsLive) {
        return;
    }
    if(e.target.classList.contains("x") || e.target.classList.contains("o")) {
        return;
    }
    e.target.classList.remove("xHover", "oHover");

} */

//event listeners
resetButton.addEventListener("click", handleReset);

for(const cell of cellDivs) {
    cell.addEventListener("click", handleCellClick);
    /*
    cell.addEventListener("mouseenter", handleMouseEnter);
    cell.addEventListener("mouseleave", handleMouseLeave);
    */
}

