let dist = 10;

function setup() {
  createCanvas(600, 600);
}

function draw() {
  background(200);
  fill(151);
  noStroke();
  rect(dist, dist, width-(2*dist),50);
}
