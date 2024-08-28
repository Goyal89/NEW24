function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(249, 250, 119 ,100);
 rect(200, 200, 100, 150);
  fill(215, 103, 169)
  noStroke()
   arc(200, 200, 80, 80, 0, PI + HALF_PI);
  arc(mouseX, 200, 83, 40, 0, PI + HALF_PI);
  
  rect(30, 20, 55, 50, 20, 15, 10, 5);
  
  
}