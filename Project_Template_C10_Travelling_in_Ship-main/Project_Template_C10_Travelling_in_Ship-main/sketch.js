var sea,ship;
var seaImg,shipImg;
function preload(){
seaImg = loadImage("sea.png");
shipImg = loadAnimation("ship-1.png","ship-4.png","ship-3.png","ship-2.png");
}

function setup(){
  createCanvas(400,400);
  background("blue");
  sea = createSprite(500,200);
  sea.addImage(seaImg);
  sea.scale = 0.25;
  ship = createSprite(120,245,45,45);
  ship.addAnimation("movingShip",shipImg);
  ship.scale = 0.3;
}

function draw() {
  background(0);
 sea.velocityX = -3.25;
 if (sea.x < 0){
    sea.x = width/2;
 } 
 drawSprites();
}