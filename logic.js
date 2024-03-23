"use strict";

const body = document.querySelector("body");
const mode = document.querySelector(".mode");
const homePage = document.querySelector(".homePage");
const homePageInvisibility = document.querySelector(".homePageInvisibility");
const homeText = document.querySelector(".homeText");
const homeTextDark = document.querySelector(".homeTextDark");
const startGame = document.querySelector(".startGame");
const choiceGamePage = document.querySelector(".choiceGamePage");
const choiceGamePageInvisibility = document.querySelector(".choiceGamePageInvisibility");
const vsComputer = document.querySelector(".vsComputer");
const vsMultiPlayer = document.querySelector(".vsMultiPlayer");
const cancel = document.querySelector(".cancel");



const vsMultiPlayerGamePage = document.querySelector(".vsMultiPlayerGamePage");
const multiPlayerGamePageInvisibility = document.querySelector(".multiPlayerGamePageInvisibility");
const lowOpacity = document.querySelector(".lowOpacity");
const gameBox = document.querySelector(".gameBox");
const boxes = document.querySelectorAll(".box");
const newGame = document.querySelector(".newGame");
const resetGame = document.querySelector(".resetgame");
let messege = document.querySelector(".messege");
let OScore = document.querySelector(".OScore");
let XScore = document.querySelector(".XScore");
const exitGame = document.querySelector(".exitGame");
const confirmBox = document.querySelector(".confirmBox");
const confirmBoxInvisibility = document.querySelector(".confirmBoxInvisibility");
const confirmExit = document.querySelector(".confirmExit");
const confirmCancel = document.querySelector(".confirmCancel");

let currenMode = "light";
let currentTurnO = true;
let OPlayerScore = Number.parseInt(0);
OScore.textContent = OPlayerScore;

let XPlayerScore = Number.parseInt(0);
XScore.textContent = XPlayerScore;

mode.addEventListener("click", () => {
    if (currenMode === "light") {
        currenMode = "dark";
        mode.textContent = "light mode";
        mode.style.color = "black";
        mode.style.backgroundColor = "white";
        body.style.backgroundColor = "black";
        homeText.style.color = "white";
        homeText.style.backgroundColor = "rgb(69,69,69)";
        cancel.style.color = "black"
        cancel.style.backgroundColor = "white";
    } else {
        currenMode = "light";
        mode.textContent = "dark mode";
        mode.style.color = "white";
        mode.style.backgroundColor = "black";
        body.style.backgroundColor = "white";
        homeText.style.color = "black";
        homeText.style.backgroundColor = "white";
        cancel.style.color = "white"
        cancel.style.backgroundColor = "black";
    }
})

startGame.addEventListener("click", ()=>{
    homePage.style.display = "none";
    choiceGamePage.classList.remove("choiceGamePageInvisibility");
})
cancel.addEventListener("click", ()=>{
    homePage.style.display = "flex";
    choiceGamePage.classList.add("choiceGamePageInvisibility");
})

/*
vsComputer.addEventListener("click", ()=>{

})
*/

vsMultiPlayer.addEventListener("click", ()=>{
    homePage.style.display = "none";
    choiceGamePage.classList.add("choiceGamePageInvisibility");
    vsMultiPlayerGamePage.classList.remove("lowOpacity");
    vsMultiPlayerGamePage.classList.remove("multiPlayerGamePageInvisibility");
})


boxes.forEach((box)=>{
    box.addEventListener("click", ()=>{
        if(currentTurnO){
            currentTurnO = false;
            box.textContent = "O";
        }else{
            currentTurnO = true;
            box.textContent = "X";
        }
        box.disabled = true;
        checkWinner();
        
    })
})

let winPattern = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
]

let checkWinner = ()=>{
    for(let pattern of winPattern){
        let position0 = boxes[pattern[0]].textContent;
        let position1 = boxes[pattern[1]].textContent;
        let position2 = boxes[pattern[2]].textContent;

        if (position0 != "" && position1 != "" && position2 != "") {
            if (position0 === position1 && position1 === position2){
                for(let box of boxes){
                    box.disabled = true;
                }
                messege.textContent = `winner is player ${position0}`;
                messege.style.backgroundColor = "green";
                
            }
           
        }
        
    }
}

let score = ()=>{
    if(messege.textContent = "Winner Is Player O"){
        OPlayerScore++;
    }else{
        XPlayerScore++;
    }
}

newGame.addEventListener("click",()=>{
    boxes.forEach((box)=>{
        box.textContent = "";
    })
    currentTurnO = true;
    for(let box of boxes){
        box.disabled = false;
        box.textContent = "";
    }
    messege.style.backgroundColor = "rgb(187, 178, 178)";
    messege.textContent = "play the game";
})


exitGame.addEventListener("click", ()=>{
    homePage.style.display = "none";
    choiceGamePage.classList.add("choiceGamePageInvisibility");
    /*vsMultiPlayerGamePage.classList.add("multiPlayerGamePageInvisibility");*/
    vsMultiPlayerGamePage.classList.add("lowOpacity");
    confirmBox.classList.remove("confirmBoxInvisibility");
})
confirmExit.addEventListener("click", ()=>{
    homePage.style.display = "flex";
    choiceGamePage.classList.add("choiceGamePageInvisibility");
    confirmBox.classList.add("confirmBoxInvisibility");
    vsMultiPlayerGamePage.classList.add("multiPlayerGamePageInvisibility");
    
})
confirmCancel.addEventListener("click", ()=>{
    confirmBox.classList.add("confirmBoxInvisibility");
    vsMultiPlayerGamePage.classList.remove("multiPlayerGamePageInvisibility");
    vsMultiPlayerGamePage.classList.remove("lowOpacity");
})







/*
const showHomePage = ()=>{
    homePage.style.display = "flex"
};
const removeHomePage =()=>{
    homePage.style.display = "none"
};
const showChoiceGamePage = ()=>{
    choiceGamePage.classList.remove("choiceGamePageInvisibility")
};
const removeChoiceGamePage =()=>{
    choiceGamePage.classList.add("choiceGamePageInvisibility")
};


const showMultiPlayerGamePage = ()=>{
    vsMultiPlayerGamePage.classList.remove("multiPlayerGamePageInvisibility")
};
const removeMultiPlayerGamePage = ()=>{
    vsMultiPlayerGamePage.classList.add("multiPlayerGamePageInvisibility")
};

startGame.addEventListener("click", removeHomePage, showChoiceGamePage);
cancel.addEventListener("click", showHomePage, removeChoiceGamePage);

/*
vsComputer.addEventListener("click", ()=>{

})


vsMultiPlayer.addEventListener("click", removeHomePage, removeChoiceGamePage, showMultiPlayerGamePage);*/