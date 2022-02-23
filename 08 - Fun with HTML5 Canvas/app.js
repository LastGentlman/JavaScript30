const canvas = document.querySelector('#draw');
const context = canvas.getContext('2d');
let color = 0;
let direction = true;

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

context.strokeStyle = '#BADA55';
context.lineJoin = 'round';
context.lineCap = 'round';
context.globalCompositeOperation = 'hue';
let isDrawing = false;
let lastX = 0;
let lastY = 0;

function draw(event) {
    if (!isDrawing) {
        return;
    }

    context.strokeStyle = `hsl(${color}, 99%, 41%)`;
    context.beginPath();
    context.moveTo(lastX, lastY);
    context.lineTo(event.offsetX, event.offsetY);
    context.stroke();

    [lastX, lastY] = [event.offsetX, event.offsetY]; //seting volues to 2 variables at the same time

    color++;
    if (color > 359) {
        color = 0;
    }

    if (context.lineWidth >= 30 || context.lineWidth <= 1) {
        direction = !direction;
    }

    if (direction) {
        context.lineWidth++;
    } else {
        context.lineWidth--;
    }

}

canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mousedown', (event) => {
    isDrawing = true;
    [lastX, lastY] = [event.offsetX, event.offsetY];
})
canvas.addEventListener('mouseup', () => {
    isDrawing = false;
});
canvas.addEventListener('mouseout', () => {
    isDrawing = false;
})