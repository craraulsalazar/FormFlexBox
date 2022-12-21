
let angle = 0;

let r = 4;
function setup() {
    createCanvas(400, 400);
    

  }
  
  function draw() {
    background(0);
  
    //move origin to the 
    
    stroke(255);
    strokeWeight(4);
    noFill();

    translate(200,200);

    let r = 150;
    circle(0,0, r*2);

    strokeWeight(32);
    stroke(252, 238,33);

    //set point in static position
    //let angle = PI/4;

    let x = r * cos(angle);
    let y = r * sin(angle);

    point(x,y);

    angle += 0.01;
  
  }
  