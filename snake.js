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

    this.update = function(){
    for(let i = 0; i < this.tail.length - 1; i++){
        this.tail[i] = this.tail[i +1];
    }
    
    this.tail[this.total - 1] = {x: this.x, y: this.y};

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

    this.eat = function(fruit){
        if(this.x == fruit.x && this.y == fruit.y){
            this.total++;
            return true;
        }
        return false;
    }
}