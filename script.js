var player1Health=100;
var player2Health =100;

let roundCounter=0;


let player1Score=0;
let player2Score=0;

function shootBtn(){
    var player1Fire =   Math.floor(Math.random() * 5);
    var player2Fire =  Math.floor(Math.random() * 5);

     
    document.getElementById("p1FireScore").innerHTML=player1Fire;
    document.getElementById("p2FireScore").innerHTML=player2Fire;

    player1Health = player1Health-player2Fire;
    player2Health= player2Health-player1Fire;

    roundCounter++;

    if(roundCounter==5){
        document.getElementById("ShootBtn").disabled = true;
        document.getElementById("ShootBtn").innerHTML="Game Over";
        document.getElementById("ShootBtn").style.backgroundColor = "grey";
      }

      if(player1Fire>player2Fire){
        player1Score = player1Score+1;

      }

      if(player2Fire>player1Fire){
        player2Score=player2Score+1;

      }


      if(player1Score==3){
       
        gameOver("Player 1 Won!")

      }

      if(player2Score==3){
        gameOver("Player 2 Won!")
       
      }


      if(roundCounter==5){
        if(player1Score>player2Score){
          
            gameOver("Player 1 Won!")
            
          }
        
          if(player2Score>player1Score){
            gameOver("Player 2 Won!")
            
          }


          if(player2Score==player1Score){
            gameOver("Match Draw")
            
          }
     } 

     
}



function gameOver(playercomment){
    document.getElementById("grid-item-9").innerHTML = playercomment;
    document.getElementById("ShootBtn").disabled = true;
    document.getElementById("ShootBtn").innerHTML="Game Over";
    document.getElementById("ShootBtn").style.backgroundColor = "grey";
  }
  
  
  
  function resetBtn(){
      location.reload();
      
  
  }