let keys = document.querySelectorAll('.key');

window.addEventListener('keydown', playAudio);

function playAudio(e) {
    let audio = document.querySelector(`audio[data-key="${e.key}"]`);
    let key = document.querySelector(`.key[data-key="${e.key}"]`)
    
    if (!audio) return;
    else {
        audio.currentTime = 0;
        audio.play();
        key.classList.add('playing');
    }
}

function removeTransition() {
    this.classList.remove('playing');
}

keys.forEach((key) => {
        key.addEventListener('transitionend', removeTransition);
})
