var paperObj,groundObject;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var dustbin1 , dustbin2 , dustbin3;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	dustbin1 = new Dustbin(450, 630, 20, 120);
	dustbin2 = new Dustbin(530, 680, 180, 20);
    dustbin3 = new Dustbin(610, 620, 20, 100);

paperObj = new paper(100,550,40)
groundObject=new ground(600,height,1200,20);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  paperObj.display();
  groundObject.display();
  dustbin1.display();
  dustbin2.display();
  dustbin3.display();
  drawSprites();
 



  
}
function keyPressed(){

if(keyCode === UP_ARROW)
{
	Matter.Body.applyForce(paperObj.body,paperObj.body.position,{x:60,y:-60})
}

}


