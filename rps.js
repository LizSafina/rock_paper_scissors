
                    
                    
            
                    let rock = document.getElementById('rockButton');
                    let paper = document.getElementById('paperButton');
                    let scissors = document.getElementById('scissorsButton');
                   
                    rock.addEventListener('click', playRound);
                    paper.addEventListener('click', playRound);
                    scissors.addEventListener('click',playRound);
                    


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
                        if(rock.onclick){
                            playerSelection = "rock";
                        }if(paper.onclick){
                            playerSelection = "paper"
                        }else{
                            playerSelection = "scissors"
                        }
                    
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
/*
        function game(){
            let playerScore = 0;
             let compScore= 0;  
            for(let i = 1; i <=5 ; i++){
                playRound();
                if (result.includes("win")){
                    playerScore++;
                    
                }else{
                    compScore++;
                }  
                console.log(playerScore + " : " + compScore);
            }                                                                   
            
            if (playerScore > compScore){
                console.log ("You're the winner");
                }else{
                    console.log("You lost, try again");
                } 

        }

    */
        











           

            
            