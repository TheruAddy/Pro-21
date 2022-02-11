
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball;

function preload()
{
	
}

function setup() {
	createCanvas(1500, 1000);


	engine = Engine.create();
	world = engine.world;

	var ball_options={
		isStatic:false,
		restitution:0.3,
		friction:0,
	    density:1.2

	}

	//Create the Bodies Here.
	ball=Bodies.circle(200,800,50,ball_options)
	World.add(world,ball)
    

	
	Engine.run(engine);
   
	groundObj = new Ground(width/2,670,width,20);
    leftSide = new Ground(1100,600,20,120);
	rightSide = new Ground(400,600,20,120);
}


function draw() {
  rectMode(CENTER);
  background(0);
  groundObj.show();
  leftSide.show();
  rightSide.show();
  
 
  ellipse(ball.position.x,ball.position.y,20)
 
  
}


function keyPressed() {
  if (keyCode === UP_ARROW)
  
  Matter.Body.applyForce(ball,ball.position.x,{x:85,y:-85})


}



