let dist = 10;

function setup() {
  createCanvas(600, 600);
}

function draw() {
  background(225);
  fill(151, 75);
  noStroke();
  rect(dist, dist, width-(2*dist),50, 12);
}
