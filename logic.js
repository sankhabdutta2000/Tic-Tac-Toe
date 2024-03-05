"use strict";
const body = document.querySelector("body");
const frontPage = document.querySelector(".frontPage");
const navbar = document.querySelector(".navbar");
let mode = document.querySelector(".mode");
const bgContent = document.querySelector(".bgContent");
const bgAbout = document.querySelector(".bgAbout");
let gitlogoImg = document.querySelector("#gitlogoImg");
const portfoliologoImg = document.querySelector("#portfoliologoImg");
const choicePlayer = document.querySelector(".choicePlayer");
let vsComputer = document.querySelector(".vsComputer");
let vsMultiPlayer = document.querySelector(".vsMultiPlayer");
let workingBox = document.querySelector(".workingBox");
let confirmBox = document.querySelector(".confirmBox");
let vsComputerConfirmBox = document.querySelector(".vsComputerConfirmBox");
let confirmYes = document.querySelector(".confirmYes");
let confirmNo = document.querySelector(".confirmNo");
const gameArea = document.querySelector(".gamearea");
let startGame = document.querySelector(".startGame");
let exitGame = document.querySelector(".exitGame");
let vsComputerExit = document.querySelector(".vsComputerExit");
let vsMultiPlayerExit = document.querySelector(".vsMultiPlayerExit");
const gameZone = document.querySelector(".gameZone");
let boxes = document.querySelector(".box");
let newGame = document.querySelector(".newGame");
let resetGame = document.querySelector(".resetGame");
let winnerMsg = document.querySelector(".winnerMsg");
let msgBox = document.querySelector(".msgBox");
let resultBox1 = document.querySelector(".resultBox1");
let resultBox2 = document.querySelector(".resultBox2");
const email = document.querySelector(".email");

let currentMode = "dark";
let currentTurmO = true;

let darkChoiceMode = () => {
    vsComputer.style.color = "white";
    vsComputer.style.backgroundColor = "black";
    vsMultiPlayer.style.color = "white";
    vsMultiPlayer.style.backgroundColor = "black";

}
let lightChoiceMode = () => {
    vsComputer.style.color = "black";
    vsComputer.style.backgroundColor = "rgb(223, 219, 32)";
    vsMultiPlayer.style.color = "black";
    vsMultiPlayer.style.backgroundColor = "rgb(223, 219, 32)";

}


//adding dark mode feature,
mode.addEventListener("click", () => {
    if (currentMode === "dark") {
        currentMode = "light";
        mode.innerText = "light mode";
        mode.style.color = "black";
        mode.style.backgroundColor = "white";
        body.style.backgroundColor = "black";
        bgAbout.style.color = "white";
        gitlogoImg.style.backgroundColor = "white";
        workingBox.style.backgroundColor = "black";
        workingBox.style.color = "white";
        darkChoiceMode();

    } else {
        currentMode = "dark";
        mode.innerText = "dark mode";
        mode.style.color = "white";
        mode.style.backgroundColor = "black";
        body.style.backgroundColor = "white";
        bgAbout.style.color = "black";
        workingBox.style.backgroundColor = "white";
        workingBox.style.color = 'white';

        lightChoiceMode();
    }
})

let startingInvisibility = () => {
    choicePlayer.style.display = "none";
    workingBox.style.display = "none";
    confirmBox.style.display = "none";
    vsComputerConfirmBox.style.display = "none";
    newGame.style.display = "none";
    resetGame.style.display = "none";
    vsComputerExit.style.display = "none";
    vsMultiPlayerExit.style.display = "none";
    exitGame.style.display = "none";
    gameZone.style.display = "none";
    winnerMsg.style.display = "none";
    msgBox.style.display = "none";
}
startingInvisibility();

gitlogoImg.addEventListener("click", () => {
    URL("");
})

startGame.addEventListener("click", () => {
    bgContent.style.opacity = "0.4";
    choicePlayer.style.display = "grid";
    vsComputer.style.display = "grid";
    vsMultiPlayer.style.display = "grid";
    exitGame.style.display = "grid";
})
exitGame.addEventListener("click", () => {
    choicePlayer.style.display = "none";
    bgContent.style.opacity = "1";
    exitGame.style.display = "none";
})

vsComputer.addEventListener("click", () => {
    bgContent.style.display = "none";
    startGame.style.display = "none";
    choicePlayer.style.display = "none";
    workingBox.style.display = "grid";
    exitGame.style.display = "none";
    vsComputerExit.style.display = "grid";
    vsMultiPlayerExit.style.display = "none";
})
vsComputerExit.addEventListener("click", () => {
    workingBox.style.display = "none";
    vsComputerExit.style.display = "none";
    vsMultiPlayerExit.style.display = "none";
    exitGame.style.display = "none";
    bgContent.style.display = "grid";
    startGame.style.display = "grid";
    choicePlayer.style.display = "none";
    bgContent.style.opacity = "1";
    bgContent.style.display = "flex";
})
vsMultiPlayer.addEventListener("click", () => {
    workingBox.style.display = "none";
    vsComputerExit.style.display = "none";
    vsMultiPlayerExit.style.display = "grid";
    exitGame.style.display = "none";
    bgContent.style.display = "none";
    startGame.style.display = "none";
    choicePlayer.style.display = "none";
    gameZone.style.display = "grid";
    newGame.style.display = "grid";
    resetGame.style.display = "grid";
    winnerMsg.style.display = "grid";
    msgBox.style.display = "grid";
    resultBox1.style.display = "grid";
    resultBox2.style.display = "grid";
})
vsMultiPlayerExit.addEventListener("click", () => {

    confirmBox.style.display = "grid";
})
confirmYes.addEventListener("click", () => {
    workingBox.style.display = "none";
    vsComputerExit.style.display = "none";
    vsMultiPlayerExit.style.display = "none";
    exitGame.style.display = "none";
    bgContent.style.display = "grid";
    startGame.style.display = "grid";
    choicePlayer.style.display = "none";
    bgContent.style.opacity = "1";
    bgContent.style.display = "flex";
    confirmBox.style.display = "none";
    gameZone.style.display = "none";
    newGame.style.display = "none";
    resetGame.style.display = "none";
    winnerMsg.style.display = "none";
    msgBox.style.display = "none";
    resultBox1.style.display = "none";
    resultBox2.style.display = "none";
})
confirmNo.addEventListener("click", () => {
    confirmBox.style.display = "none";

})

//actual game logic,
boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if(currentTurmO) {
            box.innerText = "O";
            console.log("o");
            currentTurmO = false;
        }else{
            box.innerText = "X";
            console.log("x");
            currentTurmO = true;
        }
        box.disabled = true;
    })
})