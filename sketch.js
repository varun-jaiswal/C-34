const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, box2, box3,box4,box5,box6;
var Box1, Box2, Box3,Box4,Box5;
var BOX1, BOX2, BOX3,BOX4;
var box7, box8, box9,box10,box11,box12
var hero,monster,rope,ground;

function preload() {
  bg = loadImage("gamingbackground2.png");
}

function setup() {
  createCanvas(1500, 700);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(600, 620, 1600,30);

  hero = new Hero(400,800,150);
  rope = new Rope(hero.body, { x: 500, y: 150 });
  monster = new Monster(1250,450,150);

  box1 = new Box(700, 250, 50, 50);
  box2 = new Box(750, 250, 50, 50);
  box3 = new Box(800, 250, 50, 50);
  box4 = new Box(850, 250, 50, 50);
  box5 = new Box(900, 250, 50, 50);
  box6 = new Box(950, 250, 50, 50);

  Box1 = new Box(725, 200, 50, 50);
  Box2 = new Box(775, 200, 50, 50);
  Box3 = new Box(825, 200, 50, 50);
  Box4 = new Box(875, 200, 50, 50);
  Box5 = new Box(925, 200, 50, 50);

  BOX1 = new Box(750, 150, 50, 50);
  BOX2 = new Box(800, 150, 50, 50);
  BOX3 = new Box(850,150, 50, 50);
  BOX4 = new Box(900, 150, 50, 50);
  
  box7 = new Box(775, 100, 50, 50);
  box8 = new Box(825, 100, 50, 50);
  box9 = new Box(875, 100, 50, 50);

  box10 = new Box(800, 50, 50, 50);
  box11 = new Box(850, 50, 50, 50);
  box12 = new Box(825, 0, 50, 50);
  


}

function draw() {
  background(bg);
  Engine.update(engine);
  ground.display();
  box1.display();
  box2.display();
  box3.display();
  box4.display()
  box5.display()
  box6.display()
  box7.display()
  box8.display()
  box9.display()
  box10.display()
  box11.display()
  box12.display()

  Box1.display()
  Box2.display()
  Box3.display()
  Box4.display()
  Box5.display()

  BOX1.display()
  BOX2.display()
  BOX3.display()
  BOX4.display()

  hero.display();
  rope.display();
  monster.display();

}




function mouseDragged()  {
  Matter.Body.setPosition(hero.body,{x: mouseX, y: mouseY})
}


