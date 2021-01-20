
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var bob;
var roof;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	bobObject1 = new bob();
	bobObject2= new bob();
	bobObject3= new bob();
	bobObject4= new bob();
	bobObject5= new bob();

	roof1 = new Roof(600,height,1200,20);
	rope1 = new Rope();
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();
  roof1.display();
  rope1.display();

  drawSprites();
 
}



