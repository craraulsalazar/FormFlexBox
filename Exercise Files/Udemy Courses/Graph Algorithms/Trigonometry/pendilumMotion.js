
let angle = 0;
let r = 150;

function setup() {
    createCanvas(400, 400);
    background(0);

  }
  
  function draw() {
    
  
    //move origin to the     
    translate(200,200);

    //get unit vector
    v = p5.Vector.random2D();

    //multiply for an scalar
    v.mult(random(50,100));

    strokeWeight(4);
    stroke(255, 50);

    line (0,0,v.x, v.y);

  }
  