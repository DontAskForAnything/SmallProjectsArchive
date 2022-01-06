var canvas = document.querySelector('canvas'),
    ctx = canvas.getContext('2d'),
    scale = 25,
    rows = canvas.height / scale,
    columns = canvas.width / scale

    canvas.setAttribute('tabindex', 1);
    canvas.focus();
    canvas.style.outline = 'none';

document.addEventListener('DOMContentLoaded', () => {
    snake = new Snake();

    window.setInterval(() => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        snake.update();
        snake.draw();
    }, 250);
});

window.addEventListener("keydown" , (ev) => {
// TODO: add WSAD
    const direction =  ev.key.replace("Arrow" , '');
    snake.changeDirection(direction);
})

