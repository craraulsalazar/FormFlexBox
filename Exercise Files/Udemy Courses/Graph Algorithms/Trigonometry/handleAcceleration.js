let angle = 0;
let angleV = 0;
let angleA = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(RADIANS);
}

let pAngle = 0;

function mouseDragged() {
  let v = createVector(pmouseX - width / 2, pmouseY - height / 2);

  console.log('MouseDragged Event pmouse x=' + v.x + ' y=' + v.y);

  pAngle = v.heading();
}

function mouseReleased() {
  let v2 = createVector(mouseX - width / 2, mouseY - height / 2);

  console.log('MouseReleased Event mouse x=' + v2.x + ' y=' + v2.y);

  angleV = v2.heading() - pAngle;
  console.log(angleV);
}

function draw() {
  //angleA = map(mouseX, 0, width, -0.01, 0.01);
  //angleV = constrain(angleV, -0.2, 0.2);

  if (mouseIsPressed) {
    let v = createVector(mouseX - width / 2, mouseY - height / 2);
    angle = v.heading();

    //console.log(mouseX);
    //console.log(width / 2);
    //console.log(mouseX - width / 2);
    //console.log('mouse x=' + v.x + ' y=' + v.y);
    //console.log(v.y);
    //console.log(angle);

  }

  background(146, 83, 161);
  noStroke();
  fill(240, 99, 164);
  rectMode(CENTER);
  translate(width / 2, height / 2);
  rotate(angle);
  rect(0, 0, 256, 32);

  angle += angleV;
  angleV += angleA;

}
