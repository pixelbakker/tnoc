/*function setup() {
    createCanvas(400, 400);
    background(220);
}

function draw() {
    ellipse(mouseX, mouseY, 50, 50);
}*/

let prevMouseX, prevMouseY;

function setup() {
    createCanvas(400, 400);
    background(220);
    prevMouseX = mouseX;
    prevMouseY = mouseY;
}

function draw() {
    // Calculate speed
    let dx = mouseX - pmouseX;
    let dy = mouseY - pmouseY;
    let speed = sqrt(dx * dx + dy * dy);
    
    // Map speed to a color (e.g., hue in HSB mode)
    let hue = map(speed, 0, 50, 0, 255); // Adjust max speed for your preference
    hue = constrain(hue, 0, 255);       // Ensure the value stays within range

    colorMode(HSB); // Switch to Hue-Saturation-Brightness color mode
    stroke(255, 100, hue);
    strokeWeight(35);

    
    // Draw line following the mouse
    if (mouseIsPressed) {
        rect(pmouseX, pmouseY, mouseX, mouseY);
    }

    // Reset back to RGB color mode for other elements if needed
    colorMode(RGB);
}