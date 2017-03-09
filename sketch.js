var m;

function setup() {
	createCanvas(600,600);
    m = new Mover();
}

function draw() {
	background(51);

	var gravity = createVector(0,0.3);
	m.applyForce(gravity);

	if(mouseIsPressed){
	  var wind = createVector(0.2,0);
	  m.applyForce(wind);
    }
	m.update();
	m.display();
	m.edges();
}