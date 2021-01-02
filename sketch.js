var car,wall;
var speed,weight;

function setup() {
  createCanvas(1600,400);

  car = createSprite(50, 200, 50, 50);

  wall = createSprite(1500,200,60,height/2);
  wall.shapeColor=("white");

  speed=random(55,90);
  weight=random(400,1500);
}

function draw() {
  background("pink");  
  car.velocityX = speed;
  drawSprites();


  if(wall.x-car.x < (car.width + wall.width)/2){
    car.velocityX=0;
    text("speed: " + speed,200,200);
    text("weight: " + weight,200,100);
    
    var deformation=0.5 *weight *speed*speed/25009;
    if(deformation>180){
      car.shapeColor="red";
      text("car is not safe",250,100);
    }
    if(deformation<180 && deformation>100){
      car.shapeColor="yellow";
      text("car is slightly fast",250,100);
    }
    if(deformation<100){
      car.shapeColor="green";
      text("car is safe to drive",250,100);
    }
    console.log(deformation);
  }
}
