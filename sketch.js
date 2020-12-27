var monkey, monkey_running
var banana, bananaImage, obstacle, obstacleImage
var FoodGroup, ObstacleGroup
var score
var survivalTime = 0;

function preload() {


  monkey_running = loadAnimation("sprite_0.png", "sprite_1.png", "sprite_2.png", "sprite_3.png", "sprite_4.png", "sprite_5.png", "sprite_6.png", "sprite_7.png", "sprite_8.png")

  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");

}



function setup() {

  monkey = createSprite(80, 315, 20, 20);
  monkey.addAnimation("moving", monkey_running);
  monkey.scale = 0.1;

  ground = createSprite(400, 350, 900, 10);
  ground.velocityX = -4;
  ground.x = ground.width / 2;
  console.log(ground.x);

  FoodGroup = new Group();
  ObstacleGroup = new Group();

  score = 0;



}


function draw() {
  background(255);

  if (ground.x > 0) {
    ground.x = ground.width / 2;
  }

  if (keyDown("space") && monkey.y >= 300) {
    monkey.velocityY = -16;
  }



  monkey.velocityY = monkey.velocityY + 0.8;

  monkey.collide(ground);

  stroke("white");
  textSize(20);
  fill("white");
  text("Score: ", +score, 450, 100);

  stroke("black");
  textSize(15);
  fill("black");
  survivalTime = Math.round(frameCount / frameRate())
  text("Survival Time: ", +survivalTime, 50, 100);


  food();
  obstacles();

  drawSprites();

}

function food() {
  if (frameCount % 150 === 0) {
    banana = createSprite(200, 40);
    banana.addImage(bananaImage);
    banana.scale = 0.1;

    banana.y = Math.round(random(120, 200));

    banana.velocityX = -2;

    banana.lifetime = 200;

    monkey.depth = banana.depth;
    monkey.depth = monkey.depth + 1;

    FoodGroup.add(banana);
  }
}


function obstacles() {
  if (frameCount % 200 === 0) {
    obstacle = createSprite(100, 325);
    obstacle.addImage(obstacleImage);
    obstacle.scale = 0.15;

    obstacle.x = Math.round(random(150, 220));

    obstacle.velocityX = -2;

    obstacle.lifetime = 200;

    monkey.depth = obstacle.depth;
    monkey.depth = monkey.depth + 1;

    ObstacleGroup.add(obstacle);



  }

}