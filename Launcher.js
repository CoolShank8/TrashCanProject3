class Launcher{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB, 
            stiffness: 0.004,
            length: 10
        }
        this.pointB = pointB;
        this.band = Constraint.create(options);
        //this.didfly = false
        World.add(world, this.band);

        Sprites.push(this)
    }

    Update(){
        if (this.band.bodyA) // this.didfly != true
        {
        var pointA = this.band.bodyA.position;
        var pointB = this.pointB;
    
        strokeWeight(4);
        line(pointA.x, pointA.y, pointB.x, pointB.y);
        }
    }

    fly()
    {
        this.band.bodyA = null; 
        //this.didfly = true
    }
    
}