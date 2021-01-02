class Roof {
    constructor(x,y,width,height){
        var options = {
            isStatic : true
        }
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.body = Bodies.rectangle(x,y,width,height,options)

        World.add(world,this.body)

    }
    display(){
        var pos = this.body.position
        push();
        translate(pos.x,pos.y);
        rectMode (CENTER)
        fill("yellow")
        rect(400,100,50,90);
        pop();
    }
}