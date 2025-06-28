let random;
let max;
const message = document.getElementById("message");
let attempts = 5;
const maxAttempts = 5;


function startGame(){
    max = Number(document.getElementById("maxInput").value);
    random = Math.floor(Math.random() * max) + 1;
    console.log(random);
    attempts == maxAttempts;

    document.getElementById("setup").style.display = "none";
    document.getElementById("game").style.display = "block";
    document.getElementById("rangeText").textContent = `Guess a number between 1 and ${max} Attemps left ${attempts}`;
    message.textContent="";

    document.getElementById("guessInput").addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
    checkGuess();
  }
});

}
function checkGuess(){
    const userGuess = Number(document.getElementById("guessInput").value);
    
    if(!userGuess || userGuess < max || userGuess > max){
        message.textContent = "Please Enter Below the maximum number";
    }

    attempts--;

    if(userGuess === random){
        message.textContent = `7 CRORE!! ${random}, You Got The Right Answer!!`;
        endGame();
    } else if(attempts >= 0){
        message.textContent = userGuess < random ? "📉 Too low!" : "📈 Too high!";
        document.getElementById("rangeText").textContent = `Guess a number between 1 and ${max} Attemps left ${attempts}`;
    }
    else{
        message.textContent = `GAME OVER!! The answer was ${random}`;
        endGame();
    }
}

function endGame(){
  document.getElementById("resetBtn").style.display = "inline-block";
  document.getElementById("guessInput").disabled = true;
}

function resetGame(){
    attempts = 5
    document.getElementById("setup").style.display = "block";
    document.getElementById("game").style.display = "none";
    document.getElementById("maxInput").value = "";
    document.getElementById("guessInput").disabled = false;
    message.textContent = "";
    document.getElementById("guessInput").value = "";
    document.getElementById("resetBtn").style.display = "none";
}