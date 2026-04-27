function setup() {
  let container = document.getElementById('canvasContainer');

  let w = container.offsetWidth;
  let h = container.offsetHeight;
  
  let cnv = createCanvas(w, h, SVG);
  cnv.parent('canvasContainer');
  rectMode(CENTER);
  textAlign(CENTER, CENTER);
  angleMode(DEGREES);
 
}

function draw() {
  background(220);
  fill(0);
  textSize(12);
  noStroke();
  text(shapeHeight, 10, 20);
  displayMouseCoordinates();
  for(let i = 0; i < shapeHolder.length; i++) {
    shapeHolder[i].display();
  }
  unsavedObjectsDisplay();
  if(shapeSelector === 3 && mouseIsPressed) {
    shapeHolder.push(new object(mouseX, mouseY, shapeHeight, shapeWidth, shapeSelector, strokeval, rotation, engraving));}
}

function keyPressed() {
  heightbehavior();
    widthbehavior();
    shapebehavior();
    strokevalbehavior();
    rotationbehavior();
    engravingbehavior();
    // textbehavior(); is called by the text input field, not by a key press
    undoBehavior();
}

function displayMouseCoordinates() {
    text(floor(mouseX) + ", " + floor(mouseY), 25, 40);
}


function exportSVG() {
    noLoop();
    background(255);
    for(let i = 0; i < shapeHolder.length; i++) {
    shapeHolder[i].display();
  }
    save(document.getElementById("svgInput").value +".svg");
    loop();
}

function undoBehavior() {
    if(key === "z" || key === "Z") {
        shapeHolder.pop();
    }}
