let heightOfscrollDiv = document.getElementById("scrollDiv").scrollHeight;
console.log("heightOfscrollDiv", heightOfscrollDiv)

function preload(){
cat = loadImage('cat.png');
street = loadImage('street.jpeg');
car = loadImage('car.png');
music = loadSound('white album.mp3');
}




function setup() {

  let canvas = createCanvas(windowWidth, windowHeight);
  canvas.parent("canvasContainer");
  street.resize(width,height);
  cat.resize(250,0);
  car.resize(100,0);

}

function draw() {
  background(0);
  availableScrollSpace = heightOfscrollDiv - windowHeight;
  let scrollDistance = window.scrollY;
  let scrollPercentage = scrollDistance/availableScrollSpace;

  document.getElementById("textDisplay1").innerText = "Today you want to cross the road as usual. But before you can react, the car is already close to you."
 

 

  let transparency = map(scrollPercentage,0,1,0,510);
  if(transparency>255){transparency = 510-transparency;}

  let positionX = map(scrollPercentage,0,1,width/2+100,width/2+20);
  let positionY = map(scrollPercentage,0,1,height-380,height-300);
  let Scale = map(scrollPercentage,0,1,1,2);
  push();
  tint(255,transparency*2);
  image(street,0,0);
  imageMode(CENTER);
  image(cat,width/2-50,height-200);
  translate(positionX,positionY)
  scale(Scale);
  image(car,0,0);
  pop();

  
  let currentSong = music;
  if(currentSong.isPlaying()== false){
    currentSong.play();

}

}

document.getElementById("center-text").onclick = function(){
  window.location.href = '../page2/game.html';
}
