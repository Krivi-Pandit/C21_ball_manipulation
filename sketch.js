const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;

var ground;
var left;
var right;
var top_wall;
var ball;
var rightArrow
var upArrow, upArrowImg

function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;
  
  ground =new Ground(200,390,400,20);
  right = new Ground(390,200,20,400);
  left = new Ground(10,200,20,400);
  top_wall = new Ground(200,10,400,20);

  var ball_options = {
    restitution: 0.5,
    frictionAir:0.05
  };
 
  ball = Bodies.circle(200,200,30,ball_options);
  World.add(world,ball);

  rightArrow = createImg ("right.png");
  rightArrow.position(50,50);
  rightArrow.size(50,50);

  rightArrow.mouseClicked(Xforce);

  upArrow = createImg ("up.png");
  upArrow.position(300,50);
  upArrow.size(50,50);

  upArrow.mouseClicked(Yforce);

  rectMode(CENTER);
  ellipseMode(RADIUS);
}

function draw() 
{
  background(51);
  ground.show();
  top_wall.show();
  left.show();
  right.show();

  ellipse (ball.position.x,ball.position.y,30);

  Engine.update(engine);
}

function Xforce(){
Body.applyForce(ball,{x:0,y:0},{x:0.1,y:0});
}

function Yforce (){
  Body.applyForce(ball,{x:0,y:0},{x:0,y:-0.1});
}