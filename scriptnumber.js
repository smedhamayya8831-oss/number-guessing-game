const secretNumber = Math.floor(Math.random() * 10) + 1;
let attempts = 0;

function checkGuess() {
    const guess = Number(document.getElementById("guessInput").value);
    const message = document.getElementById("message");

    if (guess < 1 || guess > 10 || !guess) {
        message.textContent = "Enter a number from 1 to 10.";
        return;
    }

    attempts++;

    if (guess === secretNumber) {
        message.textContent = `Correct! You won in ${attempts} attempts.`;
    } else if (attempts >= 5) {
        message.textContent = `Game over! The number was ${secretNumber}.`;
    } else if (guess < secretNumber) {
        message.textContent = "Too low! Try again.";
    } else {
        message.textContent = "Too high! Try again.";
    }
}