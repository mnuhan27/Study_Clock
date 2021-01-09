let clockFont;

class TimerCircle{
  constructor(x,y,size){
    this.x = x;
    this.y = y;
    this.size = size;
  }
  
  show(){
    ellipse(this.x,this.y,this.size);
  }
  
  
}

class CircleButton{
  
  constructor(x,y,startText,stopText){
    this.x = x;
    this.y = y;
    this.startText = startText;
    this.stopText = stopText;
    
  }
  
  clicked(){
    
    
  }
  
  show(){
    ellipse(x,y,100)
    
  
}
  
}


function setup() {
  createCanvas(windowWidth, windowHeight);
  clockFont = loadFont("digital-7.ttf");
}

function windowResized()
{
 resizeCanvas(windowWidth, windowHeight);
}

function draw() {
  background(0);
clock();
}

function clock()
{
 fill("orange");
  textFont(clockFont);
  textAlign(CENTER, CENTER);
  textSize(width/4.25);
  let Hour = hour();
  let min = minute();
  let secs = second()
  let noon = Hour >= 12? " PM" : " AM"
  if(min < 10)
    min = "0"+min
  Hour%=12
  text(Hour+":"+min+":"+secs+noon, width/2, height/2); 
}