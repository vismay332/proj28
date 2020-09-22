

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var TREE;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	TREE = new Tree(200,350,10,20);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  TREE.display();
  
  drawSprites();
 
}



