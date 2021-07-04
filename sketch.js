const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var roof;
var bob1;
var bob2;
var bob3;
var bob4;
var bob5;
var rope1;
var rope2;
var rope3;
var rope4;
var rope5;



function setup() {
	createCanvas(800, 600);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	var roof_options={
		isStatic:true			
	}

	roof = Bodies.rectangle(400,100,230,20,roof_options);
    World.add(world,roof);
 
 
    var bob_options={
      restitution:0.95,
	  isStatic:true
	}

	bob1 = Bodies.circle(320,350,40,bob_options);
	World.add(world,bob1);
   
	bob2 = Bodies.circle(360,350,40,bob_options);
	World.add(world,bob2);
    
	bob3 = Bodies.circle(400,350,40,bob_options);
	World.add(world,bob3);

	bob4 = Bodies.circle(440,350,40,bob_options);
	World.add(world,bob4);

    bob5 = Bodies.circle(480,350,40,bob_options);
	World.add(world,bob5);

    rope1 = new Rope(roof,bob1);
	rope2 = new Rope(roof,bob2);
	rope3 = new Rope(roof,bob3);
	rope4 = new Rope(roof,bob4);
	rope5 = new Rope(roof,bob5);



	Engine.run(engine);
	
  
}

function draw() {
  rectMode(CENTER);
  background("#99004d");

  rect(roof.position.x,roof.position.y,230,20);
 

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  
  
  ellipse(bob1.position.x,bob1.position.y,40);
  ellipse(bob2.position.x,bob2.position.y,40);
  ellipse(bob3.position.x,bob3.position.y,40);
  ellipse(bob4.position.x,bob4.position.y,40);
  ellipse(bob5.position.x,bob5.position.y,40);



  drawSprites();
}


