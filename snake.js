function Snake(){
    this.x = 0;
    this.y =0;
    this.xSpeed = scale *1;
    this.ySpeed = 0;

    this.draw = function(){
        ctx.fillStyle = 'blue';
        ctx.fillRect(this.x, this.y, scale, scale);
    }

    this.update = function(){
        this.x += this.xSpeed;
        this.y += this.ySpeed;       
    }

    this.changeDirection = function(direction){
        if(direction == 'Down'){
            this.xSpeed = 0;
            this.ySpeed = scale * 1;
        }
        else if(direction == 'Up'){
            this.xSpeed = 0;
            this.ySpeed = -scale * 1;
        }
        else if(direction == 'Left'){
            this.xSpeed = -scale * 1;
            this.ySpeed = 0;
        }
        else if(direction == 'Right'){
            this.xSpeed = scale * 1;
            this.ySpeed = 0;
        }
    }
}