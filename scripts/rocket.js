function Rocket(point, velocity, acceleration, counter, color) {
  Particle.apply(this, arguments);
  this.position = point || new Vector(0, 0);
  this.velocity = velocity || new Vector(0, 0);
  this.acceleration = acceleration || new Vector(0, 0);
  this.counter = counter || 0;
  this.particleType = 'rocket';
  this.color = color || 'blue';
}

Rocket.prototype = Particle.prototype;
Rocket.prototype.constructor = Rocket;

Rocket.prototype.explode = function(){
  //console.log('cabum');
  var arr = new Array();

  /*
  var position = new Vector(this.position.x, this.position.y);
  var position1 = new Vector(this.position.x + 1, this.position.y -1);

  arr.push(new Particle(position1, new Vector(2, -2), undefined, 30, this.color));
  var position2 = new Vector(this.position.x, this.position.y - 1);

  arr.push(new Particle(position2, new Vector(0, -2), undefined, 30, this.color));
  var position3 = new Vector(this.position.x -1, this.position.y -1);
  arr.push(new Particle(position3, new Vector(-2, -2), undefined, 30, this.color));

  var position3 = new Vector(this.position.x -1, this.position.y -1);
  arr.push(new Particle(position3, new Vector(-2, -2), undefined, 30, this.color));
*/
  arr.push(new Particle(new Vector(this.position.x +1 , this.position.y -1), new Vector(2, -2), undefined, 30, this.color));
  arr.push(new Particle(new Vector(this.position.x , this.position.y -1), new Vector(0, -2), undefined, 30, this.color));
  arr.push(new Particle(new Vector(this.position.x -1 , this.position.y -1), new Vector(-2, -2), undefined, 30, this.color));
  arr.push(new Particle(new Vector(this.position.x -1 , this.position.y), new Vector(-2, 0), undefined, 30, this.color));
  arr.push(new Particle(new Vector(this.position.x +1 , this.position.y), new Vector(2, 0), undefined, 30, this.color));
  arr.push(new Particle(new Vector(this.position.x +1 , this.position.y +1), new Vector(2, 2), undefined, 30, this.color));
  arr.push(new Particle(new Vector(this.position.x , this.position.y +1), new Vector(0, 2), undefined, 30, this.color));
  arr.push(new Particle(new Vector(this.position.x -1 , this.position.y +1), new Vector(-2, 2), undefined, 30, this.color));



  return arr;
}
