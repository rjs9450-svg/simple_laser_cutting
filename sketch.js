function setup() {
  createCanvas(400, 400, SVG);
  rectMode(CENTER);
  textAlign(CENTER, CENTER);
}

function draw() {
  background(220);
  fill(0, 255, 0);
  ellipse(200, 200, 100, 100);
  text(height, 10, 20);
  displayMouseCoordinates();
}

function keyPressed() {
  heightbehavior();
    widthbehavior();
    shapebehavior();
}

function displayMouseCoordinates() {
    text(floor(mouseX) + ", " + floor(mouseY), 25, 40);
}


function exportSVG() {
    noLoop();
    background(255);
    // Draw the shapes and text saved
    save("mySVG.svg");
    loop();
}