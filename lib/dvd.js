let x, y;
let xSpeed, ySpeed;
let dvd, r, g, b;


function preload(){
  dvd = loadImage("img/cacaop21.png");
}

function pickColor() {
  r = random(0, 256);
  g = random(0, 256);
  b = random(0, 256);
}

function setup() {
    createCanvas(windowWidth, windowHeight);
    x = 400;
    y = 300;
    xSpeed = 8;
    ySpeed = 8;
}

function draw(){
    background(0); 
    //rect( x, y, 80, 60);
    tint(r, g, b);
    x = x + xSpeed;
    y = y + ySpeed;
    image(dvd, x, y);

    if (x + dvd.width >= width) {
      xSpeed = -xSpeed;
      x = width - dvd.width;
      pickColor();
    } else if (x <= 0) {
      xSpeed = -xSpeed;
      x = 0;
      pickColor();
    }
  
    if (y + dvd.height >= height) {
      ySpeed = -ySpeed;
      y = height - dvd.height;
      pickColor();
    } else if (y <= 0) {
      ySpeed = -ySpeed;
      y = 0;
      pickColor();
    }
}