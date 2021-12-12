fishies =[]
fishcolors = ['turquoise','lightblue','blue','darkblue','lightgreen',]


function setup() {
  setInterval(spawn,2)
  createCanvas(windowWidth, windowHeight );
}
function Fish(x,y,filler,speed,size){
this.x = x
  this.y = y
  this.filler = filler
  this.speed = speed
  this.size = size

//movement
this.swim = function(){
this.x -= speed

}
this.drawFish = function(){
fill(this.filler)
  ellipse(this.x,this.y,this.size,this.size-((this.size)/2))
  triangle(this.x+30,this.y,this.x+80,this.y-30,this.x+80,this.y+30)
fill(20)
  ellipse(this.x-20,this.y,10,10)

}
}

function spawn(){
var n = new Fish(random(windowWidth,windowHeight),random(1,windowHeight),random(fishcolors),random(1,4),random(90,100))
fishies.push(n)
}

function mouseFish(x,y,mirror){
  ellipse(100,20,100,40);
  triangle(130,20,180,-15,180,60)
  fill(0);
  ellipse(80,20,10,10);

    translate(x,y);
    if (mirror == true){
    scale(-1,1);
    }


}

function draw() {
  background(162,226,253);
  noStroke();
  noCursor();


  for(var n of fishies){
  n.drawFish()
  n.swim()
  }

  push();
  fill(100);
  translate(mouseX,mouseY);
  mouseFish();
  pop();

}
