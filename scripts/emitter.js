function Emitter(point, velocity, spread, start, duration, drawColor) {
  this.position = point; // Vector
  this.velocity = velocity; // Vector
  this.spread = spread || Math.PI / 6; // possible angles = velocity +/- spread
  this.startTime = start;
  this.duration = duration;
  this.endTime = this.startTime + this.duration;
  this.drawColor = drawColor || 'white';
  this.emitterType = 'fountain';
}
Emitter.prototype.emitParticle = function() {
  // Use an angle randomized over the spread so we have more of a "spray"
  var angle = this.velocity.getAngle() + this.spread - (Math.random() * this.spread * 2);

  // The magnitude of the emitter's velocity
  var magnitude = this.velocity.getMagnitude();

  // The emitter's position
  var position = new Vector(this.position.x, this.position.y);

  // New velocity based off of the calculated angle and magnitude
  var velocity = Vector.fromAngle(angle, magnitude);

  // return our new Particle!
  return new Particle(position,velocity, undefined, Math.floor((Math.random() * 150) + 100), this.drawColor);
};
