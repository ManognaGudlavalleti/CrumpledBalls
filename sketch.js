var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper1,ground1;
var dustbin1,dustbin2,dustbin3;

function preload()
{
	
}

function setup() {
	createCanvas(800, 500);

	engine = Engine.create();
	world = engine.world;
	paper1 = new Paper(100,1,15);
	ground1 = new Ground(400,490,800,58);
	dustbin1 = new Dustbin(670,450,100,20);
	dustbin2 = new Dustbin(620,435,20,50);
	dustbin3 = new Dustbin(720,435,20,50);
	
	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("yellow");
 Engine.update(engine); 
  paper1.display();
  ground1.display(); 
  dustbin1.display();
  dustbin2.display();
  dustbin3.display();
  }
 
  function keyPressed() {
	  if(keyCode === UP_ARROW) {
		  Matter.Body.applyForce(paper1.Body,paper1.Body.Position, {x:200,y:-200});
	  }
  }
