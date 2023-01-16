var bgImg,bunnyImg,bunny;
var bowl,bowlImg;


function preload(){
  bgImg=loadImage("continuous_grass.png");
  bunnyImg=loadImage("cuteanimals_bunny.png");
  bowlImg=loadImage("bowl.png");
}




function setup(){
    createCanvas(1200,600);
    var x=100;
   for(i=0;i<5;i++){
    bunny=createSprite(x,100);
    x=x+50;
    bunny.addImage(bunnyImg);
    bunny.scale=0.1;
  }
  bowl=createSprite(100,520);
  bowl.addImage(bowlImg);
  bowl.scale=1.5;
    
}




function draw(){
  background(bgImg)
  bowl.x=mouseX;
  drawSprites()
}