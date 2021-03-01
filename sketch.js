var knife,knifeImage;
var score =0;
var enemyGroup,fruiteGroup;
var fruite, enemy;
var PLAY=0;
var END=1;
var fruit1,fruit2, fruit3,fruit4,f;
var Monster,MonsterImage,MonsterImage2;
var gamestate=PLAY;
var gameover;
function preload(){
 knifeImage= loadImage("sword.png") 
 fruit1=loadImage("fruit1.png");
 fruit2=loadImage("fruit2.png");
 fruit3=loadImage("fruit3.png");
 fruit4=loadImage("fruit4.png");
 MonsterImage1=loadImage("alien1.png");
 MonsterImage2=loadImage("alien2.png");
 gameover=loadImage("gameover.png");
}
function setup(){
 createCanvas(600,600);
 
  knife=createSprite(40,300,20,20);
  knife.addImage("kinfe",knifeImage);
  knife.scale=0.7;
  
  
  enemyGroup=new Group();
  fruiteGroup=new Group();
}
function draw(){
   background("yellow");
    text("Score:"+score,500,40); 
  knife.y=mouseY;
  knife.x=mouseX;
  
  if(gamestate===PLAY){
     if(fruiteGroup.isTouching(knife)){
     score=score+1;
    fruiteGroup.destroyEach();
       
    
   }
   
  fruite();
  enemy();
  }
  
  if(enemyGroup.isTouching(knife)){
    enemyGroup.destroyEach();
    fruiteGroup.destroyEach();
    gamestate=END;
  }
  if(gamestate===END){
    fruiteGroup.setVelocityXEach=0;
    enemyGroup.setvelocityXEach=0;
    knife.addImage("gh",gameover);
    knife.x=50;
    knife.y=300;
    text("Gameover",100,260,textSize(90));
  }
  drawSprites();
 

}

   
  //fruiteGroup.add(knife);

function fruite (){
  if(World.frameCount%80===0){
   var fruit=createSprite(400,200,20,20); 
  f=Math.round(random(1,4));
    fruit.scale=0.2;
    fruit.velocityX=-7;
    if(f===1){
      fruit.addImage("jf",fruit1);
   } 
    if(f===2){
    fruit.addImage("J",fruit2);
    }
    if(f===3){
    fruit.addImage("frs",fruit3);
    }
    if(f===4){
    fruit.addImage("fd",fruit4);
    }
  console.log(fruit.y);
    fruiteGroup.add(fruit) ; 
  }
  
}
function enemy (){
  if(World.frameCount%200===0){
   var Monster=createSprite(400,200,20,20);
   Monster.velocityX=-8; 
    u=Math.round(random(1,2))
    if(u===1){
   Monster.addImage("f",MonsterImage1);}
    if(u===2){
   Monster.addImage("fh",MonsterImage2);}   
      
    
    enemyGroup.add(Monster);
    
  }


}
