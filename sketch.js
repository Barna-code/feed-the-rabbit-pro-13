var garden,rabbit;
var gardenImg,rabbitImg;
var appleImage,leafImage;
var apple,leaf;

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  leafImage = loadImage("leaf.jpg");
  appleImage = loadImage("apple image.jpg")
}

function setup(){

  createCanvas(400,400);
  
// Moving background
garden=createSprite(150,180);
garden.addImage(gardenImg);

//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
}


function draw() {
  background(0);
  
  edges= createEdgeSprites();
  rabbit.collide(edges);

  rabbit.x=World.mouseX;

  createApples();
  createLeaves();
  drawSprites();
}


function createApples(){
  if(frameCount % 80 === 0){
   apple = createSprite(Math.round(random(50,350)),0,10,10);
   apple.addImage(appleImage);
  apple.scale=0.19;
  apple.velocityY = 4;
  apple.lifetime=70;
    }
  }


  function createLeaves(){
    if(frameCount % 80 === 0){
     leaf = createSprite(Math.round(random(80,300)),0,10,10);
     leaf.addImage(leafImage);
    leaf.scale=0.10;
    leaf.velocityY = 3;
    leaf.lifetime=100;
      }
    }

