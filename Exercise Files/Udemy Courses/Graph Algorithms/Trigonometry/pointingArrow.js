

function setup() {
  
    let v1 = createVector(30, 50);
    print(v1.heading()); // 1.0303768265243125

    createCanvas(300, 300);

    //v1 = createVector(40, 50);
    //print(v1.heading()); // 0.8960553845713439

    //v1 = createVector(30, 70);
    //print(v1.heading()); // 1.1659045405098132

  }
  
  function draw() {
    
  
    background(240);

    let v0 = createVector(150, 150);
    let v1 = createVector(mouseX - 150, mouseY - 150);
  
    drawArrow(v0, v1, 'black');
  
    let myHeading = v1.heading();
    noStroke();
    text(
      'vector heading: ' +
        myHeading.toFixed(2) +
        ' radians or ' +
        degrees(myHeading).toFixed(2) +
        ' degrees',
      10,
      50,
      90,
      50
    );


  }
  
  function drawArrow(base, vec, myColor) 
  {
   
    push();
        stroke(myColor);
        strokeWeight(3);
        fill(myColor);
        translate(base.x, base.y);
        line(0, 0, vec.x, vec.y);
        rotate(vec.heading());
        let arrowSize = 7;
        translate(vec.mag() - arrowSize, 0);
        triangle(0, arrowSize / 2, 0, -arrowSize / 2, arrowSize, 0);
    pop();

  }