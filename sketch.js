var thickness,wall;
var speed,wieght,bullet;

 

function setup() {
  createCanvas(1600,400);
  
  speed = random(223,321);
  wieght = random(30,52);
  thickness = random(22,83);

  bullet = createSprite(50,200,40,5);
  bullet.velocityX = speed;
  bullet.shapeColor = "white";

  wall = createSprite(1200,200,thickness,height/2);
  wall.shapeColor = rgb(80, 80, 80)

}

function draw() {
  background("black");  
  
  if(hasCollided(bullet,wall)){
    bullet.velocityX = 0;
    var damage = (0.5*wieght*speed*speed)/(thickness*thickness*thickness);
    
    if(damage >= 10){
      wall.shapeColor = rgb(225,0,0);
    
    }
    
    if(damage < 10){
      wall.shapeColor = rgb(0,225,0);
    
    }
    
  }
  
  drawSprites();
  text("damage "+damage,300,30);
}

function hasCollided(lbullet,lwall){
bulletRightEdge = lbullet.x+lbullet.width;
wallLeftEdge = lwall.x;
if(bulletRightEdge>=wallLeftEdge){
return true;
}
return false;

}