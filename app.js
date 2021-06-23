const keys = document.querySelectorAll('.key');
// const whitekeys = document.querySelectorAll('.key.white');
// const blackkeys = document.querySelectorAll('.key.black');

keys.forEach(key => {
    key.addEventListener('click', () => playNote(key));
        });

let playNote = (key) => {
    const noteSound = document.getElementById(key.dataset.note);
    noteSound.currentTime = 0;
    noteSound.play();
    key.classList.add('active');
    noteSound.addEventListener('ended', () => {
        key.classList.remove('active');
    });
};
