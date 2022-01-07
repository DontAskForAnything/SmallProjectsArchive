function Snake(){
    this.x = Math.floor((canvas.height/scale)/2) * scale - scale*2;
    this.y =  Math.floor((canvas.width/scale)/2) * scale;
    this.xSpeed = scale *1;
    this.ySpeed = 0;
    this.total = 0;
    this.tail = [];


    this.draw = function(){
        ctx.fillStyle = 'white';


        for(let i = 0; i < this.tail.length ; i++){
            ctx.fillRect(this.tail[i].x, this.tail[i].y, scale, scale);
        }
        
        ctx.fillRect(this.x , this.y , scale, scale);
    }

    // this.drawEyes = function(){
    //     ctx.fillStyle = 'black';
    //     if(direction == 'Down'){
    //         ctx.fillRect(this.x + scale/4 , this.y + scale/1.5 ,4,4);
    //         ctx.fillRect(this.x + scale/2 , this.y + scale/1.5 ,4,4);
    //     }
    //     else if(direction == 'Up'){
    //         ctx.fillRect(this.x + scale/4 , this.y + scale/5 ,4,4);
    //         ctx.fillRect(this.x + scale/2 , this.y + scale/5 ,4,4);

    //     }
    //     else if(direction == 'Left'){
    //         ctx.fillRect(this.x + scale/5 , this.y + scale/4 ,4,4);
    //         ctx.fillRect(this.x + scale/5 , this.y + scale/2 ,4,4);
    //     }
    //     else{
    //         ctx.fillRect(this.x + scale/1.5 , this.y + scale/4 ,4,4);
    //         ctx.fillRect(this.x + scale/1.5 , this.y + scale/2 ,4,4);
    //     }
    // }

    this.update = function(){
        for(let i = 0; i < this.tail.length - 1; i++){
            this.tail[i] = this.tail[i +1];
        }
        
        this.tail[this.total - 1] = {x: this.x, y: this.y};

            this.x += this.xSpeed;
            this.y += this.ySpeed;     

            if(this.x >= canvas.width){
                this.x = 0;
            }else if(this.x < 0){
                this.x = canvas.width - scale;
            }else if(this.y >= canvas.height){
                this.y = 0;
            }else if(this.y < 0){
                this.y = canvas.height - scale;
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

    this.eat = function(fruit){
        if(this.x == fruit.x && this.y == fruit.y){
            this.total++;
            return true;
        }
        return false;
    }

    this.checkCollision = function(){

            for(var i = 0; i < this.tail.length; i++){
                if(this.x == this.tail[i].x &&
                    this.y == this.tail[i].y){
                        return false;
                    }
            }
   
        return true;
    }

    this.reset = function(){
        
    }
}