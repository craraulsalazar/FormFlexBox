
let angle = 0;
let r = 150;

function setup() {
    createCanvas(400, 400);
    background(0);

  }
  
  function draw() {
    
  
    //move origin to the     
    translate(200,200);

    strokeWeight(5);
    stroke(252, 238,33);

    let x = r * cos(angle);
    let y = r * sin(angle);

    point(x,y);

    angle += 0.05;
    r -= 0.2;
  
    if (r < 0) {
        noLoop();
    }

  }
  