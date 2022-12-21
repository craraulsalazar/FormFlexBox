
let angle = 0;
let angleV = 0.01;
let angleA = 0.0001;

function setup() {
    createCanvas(400, 400);
    angleMode(RADIANS);
  }
  
  function draw() {

    //move origin to the     
    translate(200,200);

    angleA = map(mouseX, 0, width, -0.01, 0.01);
    angleV = constrain(angleV, -0.2, 0.2);

    background(0);

    noStroke();
    fill(240,99,164);
    rectMode(CENTER);

    rotate(angle);
    rect(0,0,256,32);
    
    angle += angleV;
    angleV += angleA;


  }
  