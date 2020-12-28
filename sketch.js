var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage;
var FoodGroup, obstacleGroup;
var survivalTime = 0;

function preload(){
  
  monkey_running = loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png");
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 }

function setup() {
  createCanvas(500, 500);
  
  monkey = createSprite(80, 315, 20, 20);
  monkey.addAnimation("moving", monkey_running);
  monkey.scale = 0.1;
  
  
  ground = createSprite(400, 490, 995, 20);
  ground.velocityX = -5;
  ground.x = ground.width/2;
  console.log(ground.x);
  
  obstacleGroup = createGroup();
  foodGroup = createGroup();
}

function draw() {
  background("lavender");
  
  if (ground.x < 0){
      ground.x = ground.width/2;
    }
  
  if(keyDown("space")){
    monkey.velocityY = -13;
  }
  
  monkey.velocityY = monkey.velocityY + 0.5;
  monkey.collide(ground);
  
  
  spawnFood();
  spawnObstacles();
  
  stroke("black");
  textSize(20);
  fill("violet");
  survivalTime = Math.ceil(frameCount/frameRate());
  text("survivalTime:" + survivalTime, 350, 40);
  
  drawSprites();
}

function spawnFood() {
  if (frameCount % 80 === 0) {
    var banana = createSprite(500,120,40,10);
    banana.y = Math.round(random(200,300));
    banana.addImage(bananaImage);
    banana.scale = 0.1;
    banana.velocityX = -3;
    
    //assign lifetime to the variable
    banana.lifetime = 200;
    
    //add each cloud to the group
    foodGroup.add(banana);
}
}
  
function spawnObstacles() {
  if (frameCount % 300 === 0) {
    var obstacle = createSprite(500,450,40,10);
    obstacle.addImage(obstacleImage);
    obstacle.scale = 0.2;
    obstacle.velocityX = -3;
    
    //assign lifetime to the variable
    obstacle.lifetime = 200;
    
    //add each cloud to the group
    obstacleGroup.add(obstacle);
}
}