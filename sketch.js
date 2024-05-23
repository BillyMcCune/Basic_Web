var chick;
function setup() {
  createCanvas(1000, 400);
  chick = new Chicken;
}

function draw() {
  background(0,100,200);
  chick.drawc();
  if(frameCount > 100)
  chick.chickenWOAH();
  
}

 function Chicken() {
  this.black = 0;
  this.beak = 1;
  this.gobble = 3;
  this.x = width/2;
  this.y = height/2;
  this.drawc = function() {
    fill(80,100,160);
    circle(this.x,this.y,this.beak)};
  this.chickenWOAH = function() {
    if(this.beak < 250){
      this.beak +=1;
    }
  }
};
