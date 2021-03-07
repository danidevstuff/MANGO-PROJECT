
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint = Matter.Constraint;
var treeObj, stoneObj, groundObject, launcherObject;
var sling,hand;
var mango1,mang2,mang3;
var world, boy;

function preload() {
	boy = loadImage("images/boy.png");
}

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;

	mango1 = new mango(1100, 100, 30);
	mang2 = new mango(1000, 100, 30);
	mang3 = new mango(1050, 180, 30);
	stoneObj = new Stone(220, 400);
	treeObj = new tree(1050, 580);
	 
	
	groundObject = new ground(width / 2, 600, width, 20);

	sling = new SlingShot(stoneObj.body , {x:220 , y:400});


	Engine.run(engine);

}

function draw() {

	background(230);
	//Add code for displaying text here!
	image(boy, 200, 340, 200, 300);


	treeObj.display();
	mango1.display();
	mang2.display();
	mang3.display();
	stoneObj.display();
	sling.display();
	
	groundObject.display();
};

function mouseDragged(){
	Matter.Body.setPosition(stoneObj.body , {x:mouseX , y:mouseY});
};

function mouseReleased(){
	sling.fly();
};

function keyPressed(){
	if(keyCode == 32){
		sling.attach(stoneObj.body);
	}
}