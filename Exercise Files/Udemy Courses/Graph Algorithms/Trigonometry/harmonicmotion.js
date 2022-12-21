 function setup() {
    createCanvas(400, 400);
  }
 
   let angle = 0;
   let angleV = 0;
  function draw() {
    background(0);
  
    translate(200,200);
    fill(252,238,33);

    let r = map(sin(angle),-1,1, 0, 200);
    circle(0,0, r);

    //oscillation motion
    
    //this code create constant motion
    //let increment = TWO_PI /60
    //angle += increment;

    //this code creates accelerated motion
    angle += angleV;
    
    angleV += 0.0001;

    //console.log(frameRate());
  
  }
  