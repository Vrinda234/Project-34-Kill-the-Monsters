class Hero{
    constructor(x,y,r){
        var options={
            frictionAir:1,
            density:1
        }
        
        this.x=x
        this.y=y
        this.r=r
        this.image=loadImage("img/hero.png")
        this.body = Bodies.circle(x,y,(r)/2,options)
        World.add(world,this.body)
    }
    display(){
        var pos=this.body.position
        push()
        translate(pos.x, pos.y)
        ellipseMode(CENTER);
        image(this.image,0,0,this.width,this.height)
        pop()
    }
}