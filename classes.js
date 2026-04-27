let shapeHolder = []

function mousePressed() {
    if(shapeSelector !== 3) {
    noLoop();
    shapeHolder.push(new object(mouseX, mouseY, shapeHeight, shapeWidth, shapeSelector, strokeval, rotation, engraving, textval));
    loop();
}
}






class object {
    constructor(x, y, length, width, shapeselector, strokeval, rotation, engraving, textval) {
        this.x = x;
        this.y = y;
        this.height = length;
        this.width = width;
        this.strokeval = strokeval;
        this.rotation = rotation;
        this.engraving = engraving;
        this.shape = shapes[shapeselector];
        this.text = textval;

        if(engraving === true) { fill(0); noStroke(); } 
        else { noFill(); stroke(255, 0, 0); }
       strokeWeight(this.strokeval);
            textSize(this.height/3);
        push();
        translate(this.x, this.y);
        rotate(this.rotation);
        if(this.shape === 'ellipse') {
            ellipse(0, 0, this.height, this.width);
    }
        if(this.shape === 'rectangle') {
            rect(0, 0, this.height, this.width);
    }
        if(this.shape === 'line') {
            line(0, 0, this.height, this.width);
    }
         if(this.shape === 'freedraw') {
            ellipse(0, 0, this.height, this.height);
    }
         if(this.shape === 'text') {
            text(this.text, 0, 0);
    }
        pop();
    }


    display() {
        if(this.engraving === true) { fill(0); noStroke(); } 
        else { noFill(); stroke(255, 0, 0); }
         strokeWeight(this.strokeval);
         textSize(this.height/3);
        push();
        translate(this.x, this.y);
        rotate(this.rotation);
        if(this.shape === 'ellipse') {
            ellipse(0, 0, this.height, this.width);
    }
        if(this.shape === 'rectangle') {
            rect(0, 0, this.height, this.width);
    }       
        if(this.shape === 'line') {
            line(0, 0, this.height, this.width);
    }
            if(this.shape === 'freedraw') {
            ellipse(0, 0, this.height, this.height);
    }
         if(this.shape === 'text') {
            text(this.text, 0, 0);
    }
        pop();
    }
}


function unsavedObjectsDisplay() {if(engraving === true) { fill(0); noStroke(); } 
        else { noFill(); stroke(255, 0, 0); }
         strokeWeight(strokeval);
         textSize(shapeHeight/3);
        push();
        translate(mouseX, mouseY);
        rotate(rotation);
        if(shapes[shapeSelector] === 'ellipse') {
            ellipse(0, 0, shapeHeight, shapeWidth);
    }
        if(shapes[shapeSelector] === 'rectangle') {
            rect(0, 0, shapeHeight, shapeWidth);
    }       
        if(shapes[shapeSelector] === 'line') {
            line(0, 0, shapeHeight, shapeWidth);
    }
            if(shapes[shapeSelector] === 'freedraw') {
            ellipse(0, 0, shapeHeight, shapeWidth);
    }
         if(shapes[shapeSelector] === 'text') {
            text(textval, 0, 0);
    }
        pop();
    }