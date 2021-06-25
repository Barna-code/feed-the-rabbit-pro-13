/*var garden,rabbit;
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
    }*/


var garden,rabbit,apple,orangeL,redL;
var gardenImg,rabbitImg,carrotImg,orangeImg,redImg;


function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png");
  orangeImg = loadImage("orangeLeaf.png");
  redImg = loadImage("redImage.png");
}


function setup(){
  
  createCanvas(400,400);
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);


//creating boy running
rabbit = createSprite(160,340,20,20);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
}

function draw() {
  background(0);
  
  // boy moving on Xaxis with mouse'
  rabbit.x = World.mouseX;
  
  edges= createEdgeSprites();
  rabbit.collide(edges);
  
   drawSprites();
  
  var select_sprites = Math.round(random(1,3));
  
  if (frameCount % 80 == 0) {
    if (select_sprites == 1) {
      createApples();
    } else if (select_sprites == 2) {
      createOrange();
    }else {
      createRed();
    }
  }

}

function createApples() {
apple = createSprite(random(50, 350),40, 10, 10);
apple.addImage(appleImg);
apple.scale=0.07;
apple.velocityY = 3;
apple.lifetime = 150;
  
}

function createOrange() {
orangeL = createSprite(random(50, 350),40, 10, 10);
orangeL.addImage(orangeImg);
orangeL.scale=0.08;
orangeL.velocityY = 3;
orangeL.lifetime = 150;
}

function createRed() {
redL = createSprite(random(50, 350),40, 10, 10);
redL.addImage(redImg);
redL.scale=0.06;
  redL.velocityY = 3;
  redL.lifetime = 150;
}

