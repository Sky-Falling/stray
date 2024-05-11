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
  cat.resize(150,0);

}

function draw() {
  background(0);
  console.log(mouseX,mouseY);
  availableScrollSpace = heightOfscrollDiv - windowHeight;
  let scrollDistance = window.scrollY;
  let scrollPercentage = scrollDistance/availableScrollSpace;

  document.getElementById("textDisplay2").innerText = "With the reduced number of rubbish bins in the city, it's harder for you to find food. You feel so hungry that you faint."
 

 

  let transparency = map(scrollPercentage,0,1,0,510);
  if(transparency>255){transparency = 510-transparency;}

  let positionX = map(scrollPercentage,0,1,width/2+100,width/2+20);
  let positionY = map(scrollPercentage,0,1,height-380,height-300);
  let rotation = map(scrollPercentage,0,1,0,-PI/2);
  push();
  tint(255,transparency*2);
  image(street,0,0);
  translate(width/2-40,height/2+170);
  rotate(rotation);
  image(cat,0,-cat.height);
  pop();

  
  let currentSong = music;
  if(currentSong.isPlaying()== false){
    currentSong.play();

}

}

document.getElementById("center-text").onclick = function(){
  window.location.href = '../page2/game.html';
}
