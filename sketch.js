var PLAY = 1;
var END = 0;
var gameState = PLAY;
var knife, knife_Img;
var score = 0;
var gameOver, gameOver_Img;
var fruitsGroup, alienGroup;
var swordSound, GO_sound;

function preload(){
  
  alien1_Img = loadImage("alien1.png");
  alien2_Img = loadImage("alien2.png");
  
  fruit1_Img = loadImage("fruit1.png");
  fruit2_Img = loadImage("fruit2.png");
  fruit3_Img = loadImage("fruit3.png");
  fruit4_Img = loadImage("fruit4.png");
  
  knife_Img = loadImage("sword.png");
  swordSound = loadSound ("knifeSwooshSound.mp3");
  
  gameOver_Img = loadImage("gameover.png");
  GO_sound = loadSound ("gameover.mp3"); 
}

function setup(){
  createCanvas (500,500);
  
  gameOver = createSprite(240,210);
  gameOver.scale = 1.5
  gameOver.addImage("GAMEOVER",gameOver_Img);
  gameOver.visible = false;

  knife = createSprite();
  knife.addImage("sword",knife_Img);
  knife.scale =0.7;

  
  score = 0;
 // knife.debug = true;
  knife.setCollider("rectangle",0,0,60,60);
 
  
  fruitsGroup = new Group ();
  alienGroup = new Group();
}

function draw(){
  background("lightblue");
  text(("Score:"+ score),230,50);
  
  
  knife.x = World.mouseX;
  knife.y = World.mouseY;
  
  if (gameState === PLAY){
    
    var pick_fruit = Math.round(random(1,6));
  if (frameCount % 80 == 0) {
    if (pick_fruit == 1) {
      fruit1();
    } else if (pick_fruit== 2) {
      fruit2();
    } else if (pick_fruit == 3) {
      fruit3();
    } else if (pick_fruit == 4){
      fruit4();
    } else if (pick_fruit == 5){
      alien1();
    } else {
      fruit4();
    }
   
   }
   
    if (alienGroup.isTouching(knife)){
      alienGroup.destroyEach();
      GO_sound.play();
      gameState = END;
    }
   
    if (fruitsGroup.isTouching(knife)){
      fruitsGroup.destroyEach();
      swordSound.play();
      score = score +2 ;
      }
    
  }
 
  if (gameState === END){
     gameOver.visible = true;
    fruitsGroup.velocityXEach = 0;
    alienGroup.velocityXEach = 0;
    knife.velocity = 0;
    
  }
 drawSprites();
}
  



function fruit1() {
  
  var fruit1;
  fruit1 = createSprite(0,Math.round(random(40, 330)), 10, 10);
  fruit1.addImage("fruit1",fruit1_Img);
  fruit1.scale = 0.3;
  fruit1.velocityX = 4;
  fruit1.lifetime = 130;
  fruitsGroup.add(fruit1);
}
    
function fruit2(){
  
  var fruit2;
  fruit2 = createSprite(0,Math.round(random(40, 330)), 10, 10);
  fruit2.addImage("fruit2",fruit2_Img);
  fruit2.scale = 0.3;
  fruit2.velocityX = 4;
  fruit2.lifetime = 130;
  fruitsGroup.add(fruit2);
}

function fruit3(){
  
  var fruit3;
  fruit3 =  createSprite(0,Math.round(random(40, 330)), 10, 10);
  fruit3.addImage("fruit3",fruit3_Img);
  fruit3.scale = 0.25;
  fruit3.velocityX = 3;
  fruit3.lifetime = 170;
  fruitsGroup.add(fruit3);
}

function fruit4(){
  var fruit4;
  fruit4 = createSprite(0,Math.round(random(40, 330)), 10, 10);
  fruit4.addImage("fruit4",fruit4_Img);
  fruit4.scale = 0.2;
  fruit4.velocityX = 4;
  fruit4.lifetime = 130;
  fruitsGroup.add(fruit4);
}

function alien1() {
  var alien1;
  
  alien1 =createSprite(0,Math.round(random(40, 430)), 10, 10);
  alien1.addImage("alien1",alien1_Img);
  alien1.scale = 0.8;
  alien1.velocityX = 4;
  alien1.lifetime = 130;
  alienGroup.add(alien1);
}
  
function alien2(){
  var alien2;
  alien2 = createSprite(0,Math.round(random(40, 330)),10,10);
  alien2.addImage("alien2",alien2_Img);
  alien2.scale = 0.8;
  alien2.velocityX = 4;
  alien2. lifetime = 130;
  alienGroup.add(alien2);
}


  
 

