let heightOfscrollDiv = document.getElementById("scrollDiv").scrollHeight;
console.log("heightOfscrollDiv", heightOfscrollDiv)

function preload(){
cat = loadImage('cat.png');
balcony = loadImage('balcony.jpeg');
music = loadSound('fish in the pool.mp3');
}




function setup() {

  let canvas = createCanvas(windowWidth, windowHeight);
  canvas.parent("canvasContainer");
  balcony.resize(width,height);
  cat.resize(250,0);

}

function draw() {
  background(0);
  console.log(mouseX,mouseY);
  availableScrollSpace = heightOfscrollDiv - windowHeight;
  let scrollDistance = window.scrollY;
  let scrollPercentage = scrollDistance/availableScrollSpace;

  document.getElementById("textDisplay3").innerText = "You has been successfully living in this harsh city for so long---Undoubtedly, you're getting accustomed to the new chapter in your life. You know nothing can refine you now!"
 

 

  let transparency = map(scrollPercentage,0,1,0,510);
  if(transparency>255){transparency = 510-transparency;}

  push();
  tint(255,transparency*2);
  image(balcony,0,0);


  image(cat,width/2-40,height/2-60);
  pop();

   
  
  let currentSong = music;
  if(currentSong.isPlaying()== false){
    currentSong.play();

}

}

document.getElementById("center-text").onclick = function(){
  window.location.href = '../page2/game.html';
}
