let dist = 10;
let rectH = 50;

function setup() {
  var cnv = createCanvas(1000, 700);
  var x = (windowWidth - width)/2;
  var y = (windowHeight - height)/2;
  cnv.position(x, y);
}

function draw() {
  background(255);
  noStroke();
  fill(51);
  textSize(32);
  textAlign(CENTER);
  text('TITOLO', width/2, rectH-dist/2);
  fill(151, 20);
  rect(dist, dist, width-(2*dist), rectH, 12);
  rect(dist, 2*dist + rectH, width-(2*dist), 10* rectH, 12);
}

/**
 * testo roteante con scritto suca
let inconsolata;
function preload() {
  inconsolata = loadFont('assets/inconsolata.otf');
}
function setup() {
  createCanvas(100, 100, WEBGL);
  textFont(inconsolata);
  textSize(width / 3);
  textAlign(CENTER, CENTER);
}
function draw() {
  background(0);
  let time = millis();
  rotateX(time / 1000);
  rotateZ(time / 1234);
  text('suca', 0, 0);
}
*/