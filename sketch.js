var bullet, wall;
var thickness, speed, weight;

function setup(){
  createCanvas(1600,400);

  thickness=random(22,83);
  speed=random(223,321);
  weight=random(30,52);

wall=createSprite(1200,200,thickness,height/2);
wall.shapeColor=color(80,80,80);
}


function draw(){



  drawSprites();
}

function hasCollided(Lbullet, Lwall){
  bulletRightEdge=lbullet.x +lbullet.width;
  wallLeftEdge=lwall.x;
  if(bulletRightEdge>=wallleftEdge){
    return true;
  }

  return false;


  }

  if(hasCollided(bullet,wall))
  {
    bullet.velocityX=0;
    var damage=0.5 * weight * speed * speed/(thickness* thickness* thickness);
    
    if(damage>10){
     wall.shapeColor=color(255,0,0);
    }

   if(damage<10){
     wall.shapeColor=color(0,255,0);
   }



















  }
