var canvas = document.querySelector('canvas'),
    ctx = canvas.getContext('2d'),
    scale = 20,
    rows = canvas.height / scale,
    columns = canvas.width / scale

    canvas.setAttribute('tabindex', 1);
    canvas.focus();
    canvas.style.outline = 'none';
    let direction;

document.addEventListener('DOMContentLoaded', () => {
    snake = new Snake();
    fruit = new Fruit();
    fruit.newLocation();

    window.setInterval(() => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        snake.update();
        fruit.draw(); 
        snake.draw();
        // snake.drawEyes();
  

        if(snake.eat(fruit)) {
            fruit.newLocation();
        }

    },200);
});
window.addEventListener("keydown" , (ev) => {
// TODO: add WSAD
    direction =  ev.key.replace("Arrow" , '');
    snake.changeDirection(direction);
})

