// Size of the game area (in px)
const GAME_AREA_WIDTH = 900;
const GAME_AREA_HEIGHT = 800;

// Size of the paddles (in px)
const PADDLE_HEIGHT = 100;
const PADDLE_WIDTH = 20;

const gameArea = document.querySelector('.game-area')

// Size of the ball (in px)
const BALL_SIZE = 20;
const  ball = document.querySelector('.ball');

// Get the computer paddle element
const computerPaddle = document.querySelector('.computer-paddle');
const leftPaddle = document.querySelector('.player-paddle');
computerPaddle.style.borderRadius = '10px'
leftPaddle.style.borderRadius = '10px'
leftPaddle.style.backgroundColor = 'limegreen'

function handleKeyboardInput (event){
    if (event.key=== 'ArrowDown'){
        leftPaddleYPosition +=50
    } else if (event.key === 'ArrowUp'){
        leftPaddleYPosition -=50
    }
}

document.addEventListener('keydown', handleKeyboardInput)

let computerPaddleYPosition = 0;
let computerPaddleYVelocity = 1;

let leftPaddleYPosition = 0;
let leftPaddleYVelocity = 1;

let ballXPosition = 20;
let ballXVelocity = 5;
let ballYPosition = 0;
let ballYVelocity = 5;
// Update the pong world

function update() {

    // Update the computer paddle's position
    computerPaddleYPosition = ballYPosition-PADDLE_HEIGHT/2;

    // If the computer paddle goes off the edge of the screen, bring it back
    if (computerPaddleYPosition > GAME_AREA_HEIGHT-PADDLE_HEIGHT) {
        computerPaddleYPosition = GAME_AREA_HEIGHT-PADDLE_HEIGHT;
    } else if(computerPaddleYPosition<0){
        computerPaddleYPosition = 0
    }

    if (leftPaddleYPosition > GAME_AREA_HEIGHT-PADDLE_HEIGHT) {
        leftPaddleYPosition = GAME_AREA_HEIGHT-PADDLE_HEIGHT;
    } else if(leftPaddleYPosition<0){
        leftPaddleYPosition = 0;
    }

    // Update ball's position   
    ballXPosition = ballXPosition + ballXVelocity
    ballYPosition = ballYPosition + ballYVelocity

    if(ballYPosition > GAME_AREA_HEIGHT - BALL_SIZE){
        ballYVelocity = ballYVelocity*(-1)
    } else if (ballYPosition === 0) {
        ballYVelocity = ballYVelocity*(-1)
    }

    if (ballXPosition>GAME_AREA_WIDTH-PADDLE_WIDTH*2 && ballYPosition>computerPaddleYPosition && ballYPosition<computerPaddleYPosition+PADDLE_HEIGHT){
        ballXVelocity = ballXVelocity*(-1)
    } else if (ballXPosition <= PADDLE_WIDTH && ballYPosition>leftPaddleYPosition&& ballYPosition<leftPaddleYPosition+PADDLE_HEIGHT){
        ballXVelocity = ballXVelocity * (-1)
    }else if (ballXPosition>GAME_AREA_WIDTH-PADDLE_WIDTH*2 || ballXPosition <= PADDLE_WIDTH){
        ballXPosition = 20
        ballYPosition = 0
        ballXVelocity = 5;
        ballYVelocity = 5;
        ballXPosition = ballXPosition + ballXVelocity
        ballYPosition = ballYPosition + ballYVelocity
    }
    // Apply the y-position 
    computerPaddle.style.top = `${computerPaddleYPosition}px`;
    ball.style.left = `${ballXPosition}px`;
    ball.style.top = `${ballYPosition}px`;
    leftPaddle.style.top = `${leftPaddleYPosition}px`
}

function loop() {
    update();
    window.requestAnimationFrame(loop);
}
window.requestAnimationFrame(loop);