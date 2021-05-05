const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var MyEngine;
var MyWorld;
var MyBodies;
var ball;

function setup() {
  createCanvas(400,400);

  MyEngine = Engine.create()
  MyWorld = MyEngine.world
  var one = {isStatic : true}
  var two = {restitution : 1}
  MyBodies = Bodies.rectangle(200,395,400,10,one)
  World.add(MyWorld, MyBodies)
  ball = Bodies.circle(200,200,25,two)
  World.add(MyWorld, ball)
    
}

function draw() {
  background(200,200,200);  

  Engine.update(MyEngine);
  rectMode(CENTER);
  rect(MyBodies.position.x,MyBodies.position.y,400,10);
  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,25,25)

}