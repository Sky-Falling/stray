
let particles = [];
let starting_time;
function setup() {
  let canvas = createCanvas(windowWidth, windowHeight);
  canvas.parent("canvasContainer");
  // generate particles

}

function draw() {
  background(220);


  let p = random(1);
  if(p<0.1){generate(random(width),random(height));}


  textSize(120);
  textAlign(CENTER);
  text('START',width/2,height/2);
  for (let i = particles.length - 1; i > 0; i--) {
    let p = particles[i];
    p.update();
    p.display();
    if (p.brightness < 50) {
      particles.splice(i, 1);
    }
      }
}

class Particle {
  // constructor function
  constructor(startX, startY) {
    // properties: particle's characteristics
    this.x = startX;
    this.y = startY;
    this.growth_max = random(1, 6);
    this.radius_max = random(50, 200);
    this.radius = int(random(10, this.radius_max));
    this.brightness = random(100, 255);
    this.thickness = random(0.5, 1.5);
    this.growth = random(this.growth_max);
    this.start_radius = random(2 * PI);
    this.arc = random(PI / 5, PI / 2);
    this.start_radius_speed = random(0.05);
    this.color1 = random(255);
    this.color2 = this.color1 + random(-100, 100);
    this.color3 = this.color1 + random(-100, 100);
  }
  // methods (functions): particle's behaviors
  update() {
    this.radius += this.growth;
    this.brightness *= 0.985;
    this.start_radius += this.start_radius_speed;
  }

  display() {
    // particle's appearance
    push();
    translate(this.x, this.y);
    noFill();
    strokeWeight(this.thickness);
    stroke(this.color1, this.color2, this.color3, this.brightness);

    arc(
      random(-1, 1),
      random(-1, 1),
      this.radius,
      this.radius,
      this.start_radius,
      this.start_radius + this.arc
    );
    pop();
  }
}

function generate(X,Y) {
  let NUM_OF_PARTICLES = random(60, 120);

  for (let i = 0; i < NUM_OF_PARTICLES; i++) {
    particles.push(new Particle(X,Y));
  }
}

function mousePressed(){
  if(mouseX > 0 && mouseX < width && mouseY > 0 && mouseY < height){
    // window.location.href = "garden/index.html";
    window.location.href = "page1/index.html";
  }
}