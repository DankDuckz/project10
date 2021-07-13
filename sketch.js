var shipImg;
var seaImg;
var sea;

function preload(){
  shipImg = loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png");
  seaImg = loadImage("sea.png");
}

function setup(){
  createCanvas(400,400);
  sea = createSprite(625,200);
  sea.addImage(seaImg);
  sea.scale = 0.3
  sea.velocityX = -40
  var ship = createSprite(100,250,200,200);
  ship.addAnimation("yes",shipImg);
  ship.scale = 0.2
}

function draw() {
  background("blue");

  if (sea.x < -225) {
    sea.x = 625
  }
  
  drawSprites()
}