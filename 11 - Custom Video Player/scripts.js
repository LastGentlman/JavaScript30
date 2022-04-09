const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const playBtn = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('.player__slider');
const fullBtn = player.querySelector('#full'); /**/

video.addEventListener('click', togglePlay);
video.addEventListener('play', toggleBtn);
video.addEventListener('pause', toggleBtn);
video.addEventListener('timeupdate', videoProgress);

playBtn.addEventListener('click', togglePlay);

skipButtons.forEach(btn => {
    btn.addEventListener('click', skip)
})

ranges.forEach(range => {
     range.addEventListener('change', rangeUpdate)
})

progressBar.addEventListener('click', videoProgress)

let down = false;
progress.addEventListener('click', manipulateProgress)
progress.addEventListener('mousemove', (e) => down ? manipulateProgress(e) : false)
progress.addEventListener('mousedown', () => down = true)
progress.addEventListener('mouseup', () => down = false)

fullBtn.addEventListener('click', fullScreen); //

function togglePlay() {
    video[video.paused ? 'play' : 'pause']()
}

function toggleBtn() {
    playBtn.textContent = this.paused ? '►' : '❚❚';
}

function skip() {
    video.currentTime += parseInt(this.dataset.skip);
}

function rangeUpdate() {
    video[this.name] = this.value;
}

function videoProgress() {
    let percent = (video.currentTime / video.duration) * 100
    progressBar.style.flexBasis = `${percent}%`
}

function manipulateProgress(e) {
    video.currentTime = (e.layerX / progress.offsetWidth) * video.duration
}

function fullScreen() {
    video.requestFullscreen();
}