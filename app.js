// game values
let min = 1,
max = 10,
winningNum = getWinningNum(min, max),
guessesLeft = 3;

// ui element
const  game =  document.getElementById('game'),
       minNum = document.querySelector('.min-num'),
       maxNum = document.querySelector('.max-num'),
       guessBtn = document.querySelector('#guess-btn'),
       guessInput =document.querySelector('#guess-input'),
       message = document.querySelector('.message');

    //    Assing UI min and max
    minNum.textContent = min;
    maxNum.textContent = max;

    // Play Agian event listener
    game.addEventListener('mousedown', function(e){
        if(e.target.className === 'paly-again'){
            window.location.reload();
        }
    });

    // listen for guess
    guessBtn.addEventListener('click', function(){
     let guess = parseFloat(guessInput.value);

    //  Valid data
    if(isNaN(guess) || guess < min || guess > max){
        setMessage(`please enter a number berween ${min} and ${max}`, 'red');
    }

    // ckeck if won
    if(guess === winningNum){

        //Game over  - won
        gameOver(true,`${winningNum}is correct, You WIN!`); 
        
    } else {
        // wrong number
        guessesLeft -= 1;
         
        if(guessesLeft === 0){
            //   game over  - lost
            gameOver(false,`Game Over, you lost, The correct number was ${winningNum}`);
        
        } else {
            // Game coninues - answer wrong

            // chang border color
            guessInput.style.borderColor = 'red';
                
            // clear input
            guessInput.value = '';

            //  Tell user its the worng number
            setMessage(`${guess} is not corret, ${guessesLeft} guess left`,'red');
        }
    }
});
    
    // game over
    function gameOver(won, msg){
        let color;
        won === true ? color = 'green' : color = 'red';

        // Disaable input
        guessInput.disabled = true;
        // chang border color
        guessInput.style.borderColor = color;
        // ste text color
        message.style.color = color;
        // set massage
        setMessage(msg);

        // play Again
        guessBtn.value = 'Paly Again';
        guessBtn.className += 'paly-again';

    }

    // get winning number
    function getWinningNum(min, max){
      return Math.floor(Math.random()*(max-min+1)+min);
    }
    //set message
    function setMessage(msg, color){
        message.style.color = color;
        message.textContent = msg;
    } 