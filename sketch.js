const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
drops = [];
function setup() {
  createCanvas(600,400);
    engine = Engine.create();
    world = engine.world;
for (var i = 0; i<5000; i=i+20){
   drops[i] = new Rain(random(width),random(-100,-600),random(1,1000),20);
   
}
  }
function draw() {
  background("black"); 
  Engine.update(engine);
  
  for (var i = 0; i<5000; i=i+20){
    drops[i].display();
    
 }


 }
 
