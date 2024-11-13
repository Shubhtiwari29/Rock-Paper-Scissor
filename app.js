let userScore = 0;
let computerScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const computerScorePara = document.querySelector("#computer-score"); 

const generateComputerChoice = () => {
    const options =["rock", "paper", "scissor"];
    const randomIdx =  Math.floor(Math.random() * 3);
    return options[randomIdx];
};

const drawGame = () => {
    msg.innerText = "Game Was Draw, Play Agian";
    msg.style.backgroundColor = "#081b31";
};

const showWinner = (userWin, userChoice, computerChoice) => {
    if(userWin){
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `You Win! Your ${userChoice} beats ${computerChoice}`;
        msg.style.backgroundColor = "green";
    }
    else{
        computerScore++;
        computerScorePara.innerText = computerScore;
        msg.innerText = `You Lost ${computerChoice} beats Your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
};

const playGame = (userChoice) =>{
    console.log("User Choice =  ",userChoice);
    //Call or Generate Computer Choce(Randomly)
    const computerChoice = generateComputerChoice();
    console.log("Computer Choice =  ",computerChoice);

    if(userChoice === computerChoice) {
        //Draw Game
        drawGame();
    }else {
    let userWin = true;
    if(userChoice === "rock") {
        //Choices for computer are -> scissor,paper
        userWin = computerChoice === "paper" ? false : true;
    }
    else if(userChoice === "paper") {
        //Choices for computer are -> scissor,rock
        userWin = computerChoice === "scissor" ? false : true;
    }
    else{
        //Choices for computer are -> paper,rock
        userWin = computerChoice === "rock" ? false : true;
    }
showWinner(userWin, userChoice, computerChoice);
    }
};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});