
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;


function setup() {
	createCanvas(1600,700);


	engine = Engine.create();
	world = engine.world;
    
	//Create the Bodies Here.
	bob1 = new Bob(width/2-80,height/4+500,40);
	bob2 = new Bob(width/2-40,height/4+500,40);
	bob3 = new Bob(width/2,height/4+500,40);
	bob4 = new Bob(width/2+40,height/4+500,40);
	bob5 = new Bob(width/2+80,height/4+500,40);
	roof = new Roof(width/2,height/4,width/7,20);
	rope1 = new Rope(bob1.body,roof.body,-80,0);
	rope2 = new Rope(bob2.body,roof.body,-40,0);
	rope3 = new Rope(bob3.body,roof.body,0,0);
	rope4 = new Rope(bob4.body,roof.body,+40,0);
	rope5 = new Rope(bob5.body,roof.body,+80,0);

    

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
		background(0);
		bob1.display();
		bob2.display();
		bob3.display();
		bob4.display();
		bob5.display();
		rope1.display();
		rope2.display();
		rope3.display();
		rope4.display();
		rope5.display();
		roof.display();

  

  
 
 
}
function keyPressed(){
	if(keyCode === 32){
		Matter.Body.applyForce(bob1.body,bob1.body.position,{x : -50,y : -45});

	}
}
function drawLine(constraint){
	bobPosition = constraint.bodyA.position;
	roofPosition = constraint.bodyB.position;
	roofOffset = constraint.pointB;
	roofX = roofPosition.x+roofOffset.x;
	roofY = roofPosition.y+roofOffset.y;
	line(bobPosition.x,bobPosition.y,roofX,roofY)

}


