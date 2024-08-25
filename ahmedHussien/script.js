let score = 0;
let timeLeft = 10;
let timerInterval;

const timerElement = document.getElementById('timer');
const scoreElement = document.getElementById('score');
const buttonElement = document.getElementById('click-button');
const endMessageElement = document.getElementById('end-message');

buttonElement.addEventListener('click', () => {
    if (timeLeft > 0) {
        score++;
        scoreElement.textContent = `Score: ${score}`;
    }
});

function startGame() {
    timerInterval = setInterval(() => {
        timeLeft--;
        timerElement.textContent = `Time left: ${timeLeft}s`;

        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            buttonElement.disabled = true;
            endMessageElement.textContent = `Game Over! Your final score is ${score}.`;
        }
    }, 1000);
}

startGame();
