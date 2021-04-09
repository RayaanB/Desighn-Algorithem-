//declaring the variabls 
var ironman;
var batman;

function setup() {
  // Creates the area you are working on
  createCanvas(800,400);

  //creating the two sprites and giving them color
  ironman =createSprite(400, 200, 50, 50);
  ironman.shapeColor= "red";

  batman =createSprite(500, 200, 50, 50);
  batman.shapeColor = "black"
}

function draw() {
  //colour the canvas as well as clears the screen of trails of the variabls 
  background("powderblue");  

  //to make the ironman sprite move with the mouse
  ironman.x = mouseX;
  ironman.y = mouseY;

  // algorithem for is touching comand 
  if(ironman.x -batman.x < ironman.width/2 + batman.width/2
    && batman.x - ironman.x < ironman.width/2 + batman.width/2 
    && ironman.y - batman.y < ironman.height/2 + batman.height/2
    && batman.y - ironman.y < ironman.height/2 + batman.height/2){
      //if they touch change their color to purple
    ironman.shapeColor= "purple";
    batman.shapeColor = "purple";
  }
  else{
    //else the color remains whatever it was
    ironman.shapeColor= "red";
    batman.shapeColor = "black";
  }

  //
  drawSprites();
}