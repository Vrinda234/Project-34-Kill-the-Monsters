class Flyy{
    constructor(bodyA,pointB){
        var options={
            bodyA:bodyA,
            pointB:pointB,
            stiffness:0.01,
            length:10
        }
        this.pointB=pointB
        this.fly=Constraint.create(options)
        World.add(world,this.body)
    }
    fly(){
        this.fly.bodyA=null
    }

    Lanch(bodyA){
        this.fly.bodyA=bodyA
    }
    display(){

    }
}