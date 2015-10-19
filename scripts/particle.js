function Particle(point, velocity, acceleration, counter, color) {
  this.position = point || new Vector(0, 0);
  this.velocity = velocity || new Vector(0, 0);
  this.acceleration = acceleration || new Vector(0, 0);
  this.counter = counter || 0;
  this.particleType= 'regular';
  this.color = color || 'white';
}


Particle.prototype.move = function () {
 // Add our current acceleration to our current velocity
 this.velocity.add(this.acceleration);

 // Add our current velocity to our position
 this.position.add(this.velocity);
};
