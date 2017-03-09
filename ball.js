function Mover() {
	var location = createVector(width/2, height/2);
	var velocity = createVector(0,0);
	var acceleration = createVector(0,0);


	this.applyForce = function(force) {
		acceleration.add(force);
	}

	this.update = function() {
		velocity.add(acceleration);
		location.add(velocity);
		acceleration.mult(0);
	}

	this.edges = function() {
	  if (location.x > width) {
        location.x = width;
        velocity.x *= -1;
      }
    
      if (location.x < 0) {
        location.x = 0;
        velocity.x *= -1;
      }
    
      if (location.y > height) {
        location.y = height;
        velocity.y *= -1;
      }
    
      if (location.y < 0) {
        location.y = 0;
        velocity.y *= -1;
	  }
	}

	this.display = function() {
	  ellipse(location.x, location.y, 30, 30);
	  fill(200);
	}

  
}