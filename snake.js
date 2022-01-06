function Snake(){
    this.x = Math.floor((canvas.height/scale)/2) * scale - scale*2;
    this.y =  Math.floor((canvas.width/scale)/2) * scale;
    console.log(Math.floor((canvas.width/scale)/2));
    this.xSpeed = scale *1;
    this.ySpeed = 0;

    this.draw = function(){
        ctx.fillStyle = 'white';
        ctx.fillRect(this.x, this.y, scale, scale);
    }

    this.update = function(){
        this.x += this.xSpeed;
        this.y += this.ySpeed;     
        
         if(this.x > canvas.width){
            console.log("GG");
        }else if(this.x < 0){
            console.log("GG");
        }else if(this.y > canvas.height){
            console.log("GG");
        }else if(this.y < 0){
          console.log("GG");
        }
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