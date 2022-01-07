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

    var refreshIntervalId = window.setInterval(() => {

        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = "grey";
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        snake.update();
        fruit.draw(); 

        if(snake.eat(fruit)) {
            fruit.newLocation();
        }
        if(!snake.checkCollision()){
             
             clearInterval(refreshIntervalId);
             console.log("DEAD");
        }else{
            snake.draw();
        }


    },200);
});
window.addEventListener("keydown" , (ev) => {
// TODO: add WSAD
    direction =  ev.key.replace("Arrow" , '');
    snake.changeDirection(direction);
})

