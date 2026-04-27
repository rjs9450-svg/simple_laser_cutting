let height = 50

function heightbehavior() {
    if(keyCode === UP_ARROW) {
       if(keyIsDown(SHIFT)) {
            height = height + 5
        } else {
            height = height + 1
        }
    }
    if(keyCode === DOWN_ARROW) {
        if(keyIsDown(SHIFT)) {
            height = height - 5
        } else {
            height = height - 1
        }
    }
}

let width = 50

function widthbehavior() {
    if(keyCode === RIGHT_ARROW) {
        if(keyIsDown(SHIFT)) {
            width = width + 5
        } else {            width = width + 1
        }
    }
    if(keyCode === LEFT_ARROW) {
       if(keyIsDown(SHIFT)) {
            width = width - 5
        } else {
            width = width - 1
        }
    }
}

let rotation = 0

function rotationbehavior() {
    if(key === "q") {
        if(keyIsDown(SHIFT)) {
            rotation = rotation - 5
        } else {
            rotation = rotation - 1
        }
    }
    if(key === "e") {
        if(keyIsDown(SHIFT)) {
            rotation = rotation + 5
        } else {
            rotation = rotation + 1
        }
}
}

let shapes = ["ellipse", "rectangle", "line", "freedraw"]

let shapeSelector = 0;

function shapebehavior() {
    if(key === "c") {
        shapeSelector = 0
    }
    if(key === "r") {
        shapeSelector = 1
    }
    if(key === "l") {
        shapeSelector = 2
    }
    if(key === "f") {
        shapeSelector = 3
    }
}

