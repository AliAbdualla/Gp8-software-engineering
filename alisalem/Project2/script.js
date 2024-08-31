const keys = document.querySelectorAll('.key');

keys.forEach(key => {
    key.addEventListener('click', () => {
        const note = key.getAttribute('data-note');
        playSound(note);
        addActiveClass(key);
    });
});

function playSound(note) {
    const audio = new Audio(`sounds/${note}.mp3`);
    audio.play();
}

function addActiveClass(key) {
    key.classList.add('active');
    setTimeout(() => {
        key.classList.remove('active');
    }, 200);
}
