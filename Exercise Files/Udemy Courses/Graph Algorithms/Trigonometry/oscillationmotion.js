function setup() {
    createCanvas(400, 400);
  }
 
   let angle = 0;
   let angleV = 0;
  function draw() {
    background(0);
  
    translate(200,200);
    fill(252,238,33);

    let y = map(sin(angle),-1,1, -200, 200);
    
    stroke(255);
    line(0,0,0,y);
    circle(0,y,32);
    
    //usin acceleration
    //angle += angleV;
    
    //angleV += 0.0001;

    //maintaining constant velocity (60 frames per second)
    let increment = TWO_PI /60
    angle += increment;


    //console.log(frameRate());
  
  }
  