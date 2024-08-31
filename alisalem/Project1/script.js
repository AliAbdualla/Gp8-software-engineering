let score = 0;
const scoreBoard = document.getElementById('score');
const note = document.getElementById('note');
const gameContainer = document.getElementById('gameContainer');

function dropNote() {
    let notePosition = 0;
    note.style.display = 'block';
    const randomPosition = Math.random() * 180; // Random horizontal position

    note.style.left = `${randomPosition}px`;

    const fallInterval = setInterval(() => {
        notePosition += 5;
        note.style.top = `${notePosition}px`;

        if (notePosition > 400) { // Reset note if it goes below the container
            clearInterval(fallInterval);
            note.style.display = 'none';
            dropNote(); // Start again
        }

        // Check if note is clicked
        note.onclick = () => {
            clearInterval(fallInterval);
            note.style.display = 'none';
            score += 1;
            scoreBoard.textContent = score;
            dropNote(); // Start another note
        };
    }, 100);
}

// Start the first note drop
dropNote();
