


                    let buttons = document.querySelectorAll(".choice");
                    let playerScore = document.getElementById('playerScore');
                    let computerScore = document.getElementById("computerScore");
                    let h3 = document.querySelector("h3");
                    let h2 =document.querySelector("h2");
                    let computerSelection;
                    let result;
                    let pS=0;
                    let cS=0;
                    let roundResult= document.getElementById("roundResult");
                    let resetButton= document.getElementById("reset");
                    let r=document.getElementById("r");
                    let p=document.getElementById("p");
                    let s=document.getElementById("s");

                    
                  

                    


buttons.forEach((button) => {
    button.addEventListener("click",() =>{
        let playerSelection = (button.textContent).toLowerCase();
        h3.textContent ="Game is on!"
        playRound(playerSelection, computerSelection);
        
    if (result.includes("You win")) {
        pS++;
        playerScore.textContent = pS;
        roundResult.textContent ="You won the round";

    }else if (result.includes("You lost")) {
        cS++;
        computerScore.textContent = cS;
        roundResult.textContent="You lost the round";

    }else{
        pS++;
        cS++;
        playerScore.textContent = pS;
        computerScore.textContent = cS;
        
    }
     if(pS ==5 || cS == 5){
        checkWinner();
        h3.textContent = "Game over!";
        buttons.forEach((button)=>{
            button.disabled=true;
        });
        
     }
    else{
           h3.textContent = "Choose wisely!";
       
    }
})
    
});
resetGame();


                    
                   
                function playRound(playerSelection, computerSelection){
    
                        computerSelection = computerPlay();   
                if(playerSelection == "rock" && computerSelection =="paper"){
                    h2.textContent="Computer's choice : PAPER!"
                    return result = "You lost Paper beats rock!";
                }if(playerSelection == "paper" && computerSelection == "rock"){
                    h2.textContent="Computer's choice : ROCK!"
                    return result = "You win Paper beats rock";
                }if(playerSelection == "scissors" && computerSelection == "rock"){
                    h2.textContent="Computer's choice : ROCK!"
                    return result = "You lost Rock beats scissors!"
                }if( playerSelection =="rock" && computerSelection == "scissors"){
                    h2.textContent="Computer's choice : SCISSORS!"
                    return result = "You win Rock beats scissors!"
            }if(playerSelection == "scissors" && computerSelection == "paper"){
                h2.textContent="Computer's choice : PAPER!"
              return result =  "You win Scissors beats paper!"
            }if(playerSelection =="paper" && computerSelection =="scissors"){
                h2.textContent="Computer's choice : SCISSORS!"
                return result = "You lost Scissors beats paper!"
            }
        if(playerSelection == computerSelection){
            h2.textContent="It's a tie!"
            roundResult.textContent="It's a tie!"
           return result = "It's a tie";
          
        }
        
    }
    


 //Check a winner and update the winner

 function checkWinner(){
    if(pS == cS){
        roundResult.textContent="It's a tie!";
        roundResult.style.color = "green";
    }else if(pS==5){
        roundResult.textContent="You're a winner";
        roundResult.style.color="red";
    }else if(cS ==5){
        roundResult.textContent="Computer won!";
        roundResult.style.color="blue";

    }
}
        
// Computer's choice

function computerPlay(){
                    
    let compChoice = Math.floor(Math.random() * 3)
    if (compChoice == 0){
        return "rock";
    }if (compChoice == 1){
        return "paper";
    }if (compChoice == 2){
        return "scissors";

    }
        
    }
   

function resetGame(){
    resetButton.addEventListener("click",()=>
    location.reload());
    }








           

            
            