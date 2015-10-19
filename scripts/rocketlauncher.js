function RocketLauncher(point, velocity, start, duration,  drawColor) {
  this.position = point; // Vector
  this.velocity = velocity; // Vector
  this.duration = duration || 100;
  this.startTime = start;
  this.drawColor = drawColor || 'Green';
  this.emitterType = 'rocket';
}
RocketLauncher.prototype.emitParticle = function() {
  var position = new Vector(this.position.x, this.position.y);

  // New velocity based off of the calculated angle and magnitude
  var velocity = new Vector(this.velocity.x, this.velocity.y);

  // return our new Particle!
  return new Rocket(position,velocity, undefined, this.duration, this.drawColor);
};
