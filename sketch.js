var soldier, soldierImg;
var snake, stone, backgroundImg;

function preload(){
  
  soldierImg = loadImage("soldier.png");
  backgroundImg = loadImage("bck.png");
}

function setup() {
  createCanvas(1200, 800);
  
  //create a soldier sprite
  soldier = createSprite(50,180,20,50);
 soldier.addImage("soldier", soldierImg );
  
  //adding scale and position to soldier
  soldier.scale = 0.2;
 
  
 
}

function draw() {
  background(backgroundImg);
 
  soldier.velocityX= 2;
  
 
  
 
  
 

  
  drawSprites();
}