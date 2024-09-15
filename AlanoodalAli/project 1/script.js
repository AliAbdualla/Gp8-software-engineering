const basket = document.getElementById('basket');
const fruit = document.getElementById('fruit');
const gameArea = document.getElementById('gameArea');
const scoreDisplay = document.getElementById('score');

let basketWidth = basket.offsetWidth;
let fruitSize = fruit.offsetWidth;
let gameWidth = gameArea.offsetWidth;
let basketX = (gameWidth - basketWidth) / 2;
let fruitX = Math.random() * (gameWidth - fruitSize);
let fruitY = 0;
let speed = 5; // Falling speed
let score = 0;

function updateBasketPosition(x) {
    basketX = Math.max(0, Math.min(gameWidth - basketWidth, x));
    basket.style.left = `${basketX}px`;
}

function dropFruit() {
    fruitY += speed;
    fruit.style.top = `${fruitY}px`;
    
    // Check for collision
    if (fruitY + fruitSize > gameArea.offsetHeight - basket.offsetHeight &&
        fruitX + fruitSize > basketX &&
        fruitX < basketX + basketWidth) {
        score++;
        scoreDisplay.textContent = `Score: ${score}`;
        fruitY = -fruitSize; // Reset position
        fruitX = Math.random() * (gameWidth - fruitSize); // Randomize new position
    }

    // Reset fruit if it goes out of bounds
    if (fruitY > gameArea.offsetHeight) {
        fruitY = -fruitSize;
        fruitX = Math.random() * (gameWidth - fruitSize);
    }

    fruit.style.left = `${fruitX}px`;
}

function gameLoop() {
    dropFruit();
    requestAnimationFrame(gameLoop);
}

document.addEventListener('mousemove', (event) => {
    updateBasketPosition(event.clientX - basketWidth / 2);
});

gameLoop(); // Start the game loop
