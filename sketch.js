
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var boy,boyImage;
var mango1,mango2,mango3,mango4,mango5,mango6;
var tree1,slingshot;
function preload()
{
	boyImage=loadImage("sprites/boy.png")
}

function setup() {
	createCanvas(900, 700);
    boy=createSprite(300,600,1,1)
	boy.addImage(boyImage)
	boy.scale=0.2
	engine = Engine.create();
	world = engine.world;
    slingshot=new Chain(boy,{x:200,y:50})
	//Create the Bodies Here.
	mango1=new Mango(850,200,30)
	mango2=new Mango(800,300,30)
	mango3=new Mango(750,400,30)
	mango4=new Mango(700,300,30)
	mango5=new Mango(650,250,30)
	mango6=new Mango(700,350,30)
	tree1=new Tree(700,500,20,20)
	
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  tree1.display();
  drawSprites();
 
}



