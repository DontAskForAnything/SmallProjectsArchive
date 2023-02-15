var canvas = document.querySelector('canvas'),
    ctx = canvas.getContext('2d'),
    scale = 20,
    lastDirection, usedDirection,
    points = 0,
    rows = canvas.height / scale,
    columns = canvas.width / scale;
    canvas.setAttribute('tabindex', 1); 
    canvas.focus();
    canvas.style.outline = 'none';

document.querySelector("#StartButton").addEventListener("click", () => {    snake = new Snake();
    points = 0;
    document.querySelector("#Score").innerHTML = "Points: " + points;
    document.querySelector("#StartButton").style.display = "none";
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
            points++;
           document.querySelector("#Score").innerHTML = "Points: " + points;
        }
        if(!snake.checkCollision()){
             
             clearInterval(refreshIntervalId);
             console.log("U toched yourself");
             document.querySelector("#StartButton").style.display = "block";
             document.querySelector("#StartButton").innerHTML = "RESTART!"
             ctx.clearRect(0, 0, canvas.width, canvas.height);

        }else{
            snake.draw();
        }


    },200);
});
window.addEventListener("keydown" , (ev) => {
    let direction;
   
    if(ev.key == "W" || ev.key == 'w'){
        direction = 'Up';
    }
    else if(ev.key == "S" || ev.key == "s"){
        direction = 'Down';
    }
    else if(ev.key == "A" || ev.key == "a"){
        direction = 'Left';
    }
    else if(ev.key == "D" || ev.key == "d"){
        direction = 'Right';
    }else{
        direction =  ev.key.replace("Arrow" , '');
    }
    if (typeof snake !== 'undefined') {
        snake.changeDirection(direction);
    }

})

