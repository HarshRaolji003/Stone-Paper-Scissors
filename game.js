let userScore =0;
let compScore= 0;
const choices = document.querySelectorAll(".choice");
const msg= document.querySelector("#msg");
const userScorePara= document.querySelector("#user-score");
const compScorePara= document.querySelector("#comp-score");


const genCompChoice= ()=>{
    // rock, paper, scissors
    const options=['rock','paper','scissors'];
    const randIdx=Math.floor(Math.random()*3);
    return options[randIdx]
};
const drawGame = ()=>{
    // console.log("You Draw!");
    msg.innerText ="Game was Draw. Play Again!";
    msg.style.backgroundColor ="#081b31";
}
const showWinner= (userWin,userChoice,compChoice)=>{
    if (userWin){
        // console.log("You Win!");
        userScore++;
        userScorePara.innerText=userScore;
        msg.innerText =`You Win. Your ${userChoice} beats ${compChoice}`
        msg.style.backgroundColor ="green";
    } else{
        // console.log("You lose.");
        compScore++;
        compScorePara.innerText=compScore;
        msg.innerText =`You lost.${compChoice} beats Your ${userChoice}`
        msg.style.backgroundColor ="red";
    }
}


const playGame=(userChoice)=>{
    // console.log("user choice =", userChoice);
    // Generate computer choice -> modular
    const compChoice=genCompChoice();
    // console.log("comp choice =", compChoice);

    if (userChoice === compChoice){
        // Draw Game
        drawGame();
    }
    else{
        let userWin=true;
        if (userChoice === 'rock'){
            //scissors, paper
            userWin = compChoice==="paper" ? false:true;
        } else if(userChoice === "paper"){
            // rock, scissors
            userWin = compChoice === "scissors" ? false:true;
        } else {
            // rock, paper
            userWin = compChoice ==="rock"? false:true;
        }
        showWinner(userWin, userChoice, compChoice);
    }
};

choices.forEach((choice)=>{
    // console.log(choice);
    choice.addEventListener("click",()=>{
        const userChoice= choice.getAttribute("id");
        // console.log("choice is clicked",userChoice);
        playGame(userChoice);
    });
});