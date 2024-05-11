let heightOfscrollDiv = document.getElementById("scrollDiv").scrollHeight;
console.log("heightOfscrollDiv", heightOfscrollDiv)

function preload(){
cat = loadImage('cat.png');
school = loadImage('school.jpg');
music = loadSound('Honesty.mp3');
}




function setup() {

  let canvas = createCanvas(windowWidth, windowHeight);
  canvas.parent("canvasContainer");
  cat.resize(150,0);
  school.resize(width,0);
}

function draw() {
  background(0);
  console.log(mouseX,mouseY);
  availableScrollSpace = heightOfscrollDiv - windowHeight;
  let scrollDistance = window.scrollY;
  let scrollPercentage = scrollDistance/availableScrollSpace;

  document.getElementById("textDisplay1").innerText = "You soon catch the heart of these college students and you are accepted as the campus cat. Your life won't be as comfortable as these domestic cats---as you still need to take care of yourself. But you're free to go anywhere you like It's the life you always dreamed of!";
 

 

  let transparency = map(scrollPercentage,0,1,0,510);
  if(transparency>255){transparency = 510-transparency;}

  push();
  tint(255,transparency*2);
  image(school,0,0);
  image(cat,width/2+40,height/2+70);
  pop();

  let currentSong = music;
  if(currentSong.isPlaying()== false){
    currentSong.play();
  }
}



document.getElementById("center-text").onclick = function(){
  window.location.href = '../page2/game.html';
}
