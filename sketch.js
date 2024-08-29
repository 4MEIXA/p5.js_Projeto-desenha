function setup() {
  createCanvas(600, 400);
  background("white")
}

function draw() {
  stroke("green");
  fill("white");
  
  
  if (mouseIsPressed) {
    rect(mouseX, mouseY, 40, 40);
  }
}
