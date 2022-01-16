const secsHand = document.querySelector('.second-hand');
const minsHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');
const digital = document.querySelector('h1');

function setDate() {
    const secs = new Date().getSeconds();
    const secsDegrees = ((secs / 60) * 360) + 90;
    const mins = new Date().getMinutes();
    const minsDegrees = ((mins / 60) * 360) +90;
    const hour = new Date().getHours();
    const hourDegrees = ((hour / 60) * 360) +90;

    secsHand.style.transform = `rotate(${secsDegrees}deg)`;
    minsHand.style.transform = `rotate(${minsDegrees}deg)`;
    hourHand.style.transform = `rotate(${hourDegrees}deg)`;

    digital.textContent = `${new Date().getHours() + ':' + new Date().getMinutes() + ':' + new Date().getSeconds()}`
    console.log(`${new Date().getHours() + ':' + new Date().getMinutes() + ':' + new Date().getSeconds()}`)

    if (secs === 0) {
        const hands = document.querySelector('.hand');
        hands.style.transition = 'all 0.0s';
    }
}

setInterval(setDate, 1000);
setDate();
