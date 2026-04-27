let shapeHeight = 50

function heightbehavior() {
    if(keyCode === UP_ARROW) {
       if(keyIsDown(SHIFT)) {
            shapeHeight = shapeHeight + 5
        } else {
            shapeHeight = shapeHeight + 1
        }
    }
    if(keyCode === DOWN_ARROW) {
        if(keyIsDown(SHIFT)) {
            shapeHeight = shapeHeight - 5
        } else {
            shapeHeight = shapeHeight - 1
        }
    }
}

let shapeWidth = 50

function widthbehavior() {
    if(keyCode === RIGHT_ARROW) {
       if(keyIsDown(SHIFT)) {
            shapeWidth = shapeWidth + 5
        } else {            shapeWidth = shapeWidth + 1
        }
    }
    if(keyCode === LEFT_ARROW) {
       if(keyIsDown(SHIFT)) {
            shapeWidth = shapeWidth - 5
        } else {
            shapeWidth = shapeWidth - 1
        }
    }
}

let rotation = 0

function rotationbehavior() {
    if(key === "q" || key === "Q") {
        if(keyIsDown(SHIFT)) {
            rotation = rotation - 5
        } else {
            rotation = rotation - 1
        }
    }
    if(key === "e" || key === "E") {
        if(keyIsDown(SHIFT)) {
            rotation = rotation + 5
        } else {
            rotation = rotation + 1
        }
}
}

let shapes = ["ellipse", "rectangle", "line", "freedraw", "text"]

let shapeSelector = 0;

function shapebehavior() {
    if(key === "c" || key === "C") {
        shapeSelector = 0
    }
    if(key === "r" || key === "R") {
        shapeSelector = 1
    }
    if(key === "l" || key === "L") {
        shapeSelector = 2
    }
    if(key === "f" || key === "F") {
        shapeSelector = 3
    }
    if(key === "t" || key === "T") {
        shapeSelector = 4
    }
}

let strokeval = 1

function strokevalbehavior() {
 if(key === "s" || key === "S") {
    if(keyIsDown(SHIFT)) {
        strokeval = strokeval - 5
    } else {
        strokeval = strokeval - 1
    }
}
    if(strokeval < 1) {
        strokeval = 1
    }
    if(key === "w" || key === "W") {
        if(keyIsDown(SHIFT)) {
            strokeval = strokeval + 5
        } else {
            strokeval = strokeval + 1
        }
}
}

let engraving = false

function engravingbehavior() {
    if(key === "g" || key === "G") {
        engraving = !engraving
    }
}

let textval = "Hello!"

function textbehavior() {
    textval = document.getElementById("textInput").value;
}