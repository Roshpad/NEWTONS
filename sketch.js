var  roof,rope1,bobObject1,bobObject2,bobObject3,bobObject4,bobObject5,bobObject6
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
    

	roof = new Roof(200,100,250,50);
	World.add(world,roof);

	bobObject1 =new Bob(250,300);
	bobObject2 =new Bob(300,300);
	bobObject3 =new Bob(350,300);
	bobObject4 =new Bob(400,300);
	bobObject5 =new Bob(450,300);

    rope1 = new Rope(bobObject1.body,roof.body,-100,0);
World.add(world,rope1);

rope2 = new Rope(bobObject2.body,roof.body,-50,0);
World.add(world,rope2);

rope3 = new Rope(bobObject3.body,roof.body,0,0);
World.add(world,rope3);

rope4 = new Rope(bobObject4.body,roof.body,+50,0);
World.add(world,rope4)

rope5 = new Rope(bobObject5.body,roof.body,+100,0);
World.add(world,rope5);


	Engine.run(engine);
  
}


function draw() {

	background("white");
	Engine.update(engine);
  
  
	roof.display();


rope1.display();
rope2.display();
rope3.display();
rope4.display();
rope5.display();



}
function keyPressed(){
	if(keyCode===32){
	Matter.Body.applyforce(bobObject1.body,bobObject1.body.position,{x:-730,y:0});
	}
}