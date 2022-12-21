
let angle = 0;
let r = 150;

function setup() {
    createCanvas(400, 400);
    

  }
  
  function draw() {
    
    background(0);

    //move origin to the     
    translate(100,100);

    //get unit vector
    let pos = createVector(200,200);
    let mouse = createVector(mouseX, mouseY);

    let v = p5.Vector.sub(mouse, pos);

    //manual process
    //let m = v.mag();
    //v.div(m);
    //v.mult(50);

    //using normalize 
    //v.normalize();
    //v.mult(150);

    v.setMag(100);

    strokeWeight(4);
    stroke(255);

    line (0,0,v.x, v.y);

  }
  