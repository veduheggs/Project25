class Rain {
  constructor(x,y,width, height){
    var options = {
        'restitution':0.5,
        'friction':0.5,
        'density':2
    }
    this.body = Bodies.rectangle(x,y,width, height, options);
    this.width = width;
    this.height = height;
    World.add(world, this.body);
    
  }
  display(){
      var loc = this.body.position;
     stroke("blue")
      rect(loc.x,loc.y,4,20);
    }

}