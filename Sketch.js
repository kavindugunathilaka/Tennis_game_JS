
let playerPaddle;
let aiPaddle;
let ball; // define ball

function setup() {
    createCanvas(624, 351);
    playerPaddle = new Paddle(10);
    aiPaddle = new Paddle(width - 48);
    ball = new Ball(); // create the ball object
}


function draw(){
    background(0);

    playerPaddle.display();
    aiPaddle.display();

    playerPaddle.update(); 
    aiPaddle.update(); 
    processAI();

    ball.update();                  //middle net
    ball.display();

    ball.hasHitPlayer(playerPaddle);
    ball.hasHitPlayer(aiPaddle);

    stroke(230);   //white stroke
    line(width  /2,0,width/2,height); // draws a line between two points
    //line(x,y,x1,y1);


  

      //make the player move according to the flag
      if (playerPaddle.isUp){
        playerPaddle.up();
    }else if (playerPaddle.isDown){
        playerPaddle.down();
    }

    ball.update(); // call the update function within ball

    ball.display(); // call the display function within ball
}
   
    

function keyPressed() {
        if (keyCode == UP_ARROW) {
            playerPaddle.isUp = true;
          } else if (keyCode == DOWN_ARROW) {
            playerPaddle.isDown = true;
    }
}
    
    
function keyReleased(){
        if (keyCode == UP_ARROW){
            playerPaddle.isUp = false;
        }else if (keyCode == DOWN_ARROW){
            playerPaddle.isDown = false;
        }
}

function processAI(){
    let middleOfPaddle = aiPaddle.y + aiPaddle.height/2;

    if(middleOfPaddle > ball.y){
        aiPaddle.isUp = true;
        aiPaddle.isDown = false;
    }else{
        aiPaddle.isDown = true;
        aiPaddle.isUp = false;
    }
}


