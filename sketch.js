var box;
function setup() {
  createCanvas(400,400);
  console.log("sprite created");
  box=createSprite(200,200,30,30);
}

function draw() 
{
  console.log("displaying sprites");
  box.shapeColor="red";
  background("grey");
  drawSprites();
  if(keyDown(RIGHT_ARROW)){
    box.position.x+=5;
  }
  if(keyDown(UP_ARROW)){
    box.position.y-=5;
  }
  if(keyDown(DOWN_ARROW)){
    box.position.y+=5;
  }
  if(keyDown(LEFT_ARROW)){
    box.position.x-=5;
  }
}