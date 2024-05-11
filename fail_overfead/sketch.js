let heightOfscrollDiv = document.getElementById("scrollDiv").scrollHeight;
console.log("heightOfscrollDiv", heightOfscrollDiv)

function preload(){
cat = loadImage('cat.png');
street = loadImage('street.jpeg');
music = loadSound('RachelTheme.mp3');
}




function setup() {

  let canvas = createCanvas(windowWidth, windowHeight);
  canvas.parent("canvasContainer");
  street.resize(width,height);
  cat.resize(200,0);

}

function draw() {
  background(0);
  console.log(mouseX,mouseY);
  availableScrollSpace = heightOfscrollDiv - windowHeight;
  let scrollDistance = window.scrollY;
  let scrollPercentage = scrollDistance/availableScrollSpace;

  document.getElementById("textDisplay2").innerText = "You don't know how to resist the temptation to eat.With the soaring weight and increased demand for food, it's harder for you to survive"
 

 

  let transparency = map(scrollPercentage,0,1,0,510);
  if(transparency>255){transparency = 510-transparency;}

  let length = map(scrollPercentage,0,1,150,250);
  push();
  tint(255,transparency*2);
  image(street,0,0);

  imageMode(CENTER);
  image(cat,450,530,length,300);
  pop();


}



document.getElementById("center-text").onclick = function(){
  window.location.href = '../page2/game.html';
}
