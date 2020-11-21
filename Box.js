class Box{
    constructor(x, y, width, height) {
        var options = {
            'restitution':0.8,
            'friction':0.5,
            //'density':1.0
        }
        this.body = Bodies.rectangle(x, y, width, height, options);

        this.width = width;
        this.height = height;
        //this.image = loadImage("sprites/base.png");
        World.add(world, this.body);
      }

      score(){
        if(this.visibility<0 && this.visibility>-105){
            score++;
        }
      }
      
      display(){

        var pos = this.body.position;
        var angle = this.angle;
        push();
        if (this.body.speed < 3) {
            rectMode(CENTER);
            translate(pos.x, pos.y);
            rotate(angle);
            strokeWeight(4);
            rect(0, 0, this.width, this.height);
            pop();
        } else {
            push();
            World.remove(world, this.body);
            this.visibility = this.visibility - 5;
            tint(255, this.visibility);
            pop();
        }

        block1.score();
        block2.score();
        block3.score();
        block4.score();
        block5.score();
        block6.score();
        block7.score();
        block8.score();
        block9.score();
        block10.score();
    

      }
}