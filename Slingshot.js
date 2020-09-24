class Slingshot {
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.5,
            lenght: 12
        }

        this.sling = Constraint.create(options);
        this.pointB = pointB; 
        World.add(world, this.sling)
    }

    fly(){
        this.sling.bodyA = null;
    }

    display(){
        if(this.sling.bodyA){
            var posA = this.sling.bodyA.position;
            var posB = this.pointB;
            stroke("green");
            strokeWeight(2);
            line(posA.x, posA.y, posB.x, posB.y);
        }

    }

}