


                    let buttons = document.querySelectorAll("button");
                    let playerScore = document.getElementById('playerScore');
                    let computerScore = document.getElementById("computerScore");
                    let blinking = document.getElementsByClassName("blinking");
                    let result;
                    let computerSelection;
                  


function game() {
    let pS = 0;
    let cS = 0;
    
        buttons.forEach((button) => {
            button.addEventListener('click', () => {
                for (let i = 1; i <= 5; i++) {
                let playerSelection = button.value;
                playRound(playerSelection, computerSelection);
                if (result.includes("You win")) {
                    pS++;
                    playerScore.innerText = pS;

                } if (result.includes("You lost")) {
                    cS++;
                    computerScore.innerText = cS;

                } else {
                    //display its a tie
                    blinking.innerText = "It's a tie!";
                    pS++;
                    playerScore.innerText = pS;
                    cS++;
                    computerScore.innerText = cS;
                }
            };
        }
        );
    })
    if(pS > cS){
        blinking.innerText = "You win!";
    }else{
        blinking.innerText = 'You lost, try again!';
    }
}                                          
                      


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
                   
                   
                function playRound(playerSelection, computerSelection){
                    let gameOn = true;
                    while(gameOn){
                        computerSelection = computerPlay();   
                if(playerSelection == "rock" && computerSelection =="paper"){
                    return result = "You lost Paper beats rock!";
                }if(playerSelection == "paper" && computerSelection == "rock"){
                    return result = "You win Paper beats rock";
                }if(playerSelection == "scissors" && computerSelection == "rock"){
                    return result = "You lost Rock beats scissors!"
                }if( playerSelection =="rock" && computerSelection == "scissors"){
                    return result = "You win Rock beats scissors!"
            }if(playerSelection == "scissors" && computerSelection == "paper"){
              return result =  "You win Scissors beats paper!"
            }if(playerSelection =="paper" && computerSelection =="scissors"){
                return result = "You lost Scissors beats paper!"
            }
        if(playerSelection == computerSelection){
           gameOn = false;
           return result = "It's a tie";
          
        }
        
    }
    
}


        











           

            
            