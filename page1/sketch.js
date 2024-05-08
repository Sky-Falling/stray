let heightOfscrollDiv = document.getElementById("scrollDiv").scrollHeight;
console.log("heightOfscrollDiv", heightOfscrollDiv)
let catFrames = [];
let currentMusic;
function preload(){
  for(let i = 1; i < 92; i++){
    let imgPath = "walking_cat/trim.1ACDE6D3-9803-492A-A950-6ED9E06DE795-" + i + ".png";
    console.log(imgPath);
    let currentIMG = loadImage(imgPath);
    catFrames.push(currentIMG)
  }
  sunny_afternoon = loadImage('sunny_afternoon.jpg');
  house = loadImage('house.jpg');
  street = loadImage('street.jpg');
  balcony = loadImage('balcony.png');
  song1 = loadSound('阳光下安静的猫.mp3');
  song2 = loadSound('月世界.mp3');
  song3 = loadSound('RachelTheme.mp3');
  song4 = loadSound('NYA.mp3');
}




function setup() {

  let canvas = createCanvas(windowWidth, windowHeight);
  canvas.parent("canvasContainer");

  walking_cat = new Cat(catFrames);
  availableScrollSpace = heightOfscrollDiv - windowHeight;
  sunny_afternoon.resize(1.5*width,0);
  house.resize(1.5*width,0);
  street.resize(1.3*width,0);
  balcony.resize(width,0);
  let currentImage = house;
  script = new Script();
  currentSong = song1;
}


function stopSongs(songs){
  for(let song of songs){
    // console.log(song)
    song.currentTime = 0;
    song.stop()
  }

}

function draw() {
  background(0);
  let scrollDistance = window.scrollY;
  let scrollPercentage = scrollDistance/availableScrollSpace;
  
  let dogY = map(scrollPercentage, 0, 1, 0, 4*catFrames.length);
  walking_cat.update(dogY,0.15);

  let imageMode = floor(map(scrollPercentage,0,1,0,4));
  

 
 

  if(imageMode == 0){
    stopSongs([song2, song3, song4])
    // if(song1.isPlaying() == false){
    //   song1.play();

    // }

    currentSong = song1;

    currentImage = sunny_afternoon;
    document.getElementById("textDisplay3").innerText = '';
    document.getElementById("textDisplay2").innerText = '';
    document.getElementById("textDisplay1").innerText = '';
    document.getElementById("textDisplay1").innerText = "You're a stray cat. As you wake up at a late fall afternoon, the warm sunshine reminds you of the distant days when you were still domestic."
  }
  else if(imageMode == 1){ 
    currentImage = house;
    stopSongs([song1, song3, song4])
    currentSong = song2;
    document.getElementById("textDisplay3").innerText = '';
    document.getElementById("textDisplay2").innerText = '';
    document.getElementById("textDisplay1").innerText = '';
    document.getElementById("textDisplay2").innerText = "You remembered your cozy home and your human friends. At that time, your food bowl is always full. And you never worry about your health."
    // document.getElementById("textDisplay").style.color = "blue"
    
  }
  else if(imageMode == 2){ 
    currentImage = street;
    stopSongs([song1, song2, song4])
    currentSong = song3;
    document.getElementById("textDisplay3").innerText = '';
    document.getElementById("textDisplay2").innerText = '';
    document.getElementById("textDisplay1").innerText = '';
    document.getElementById("textDisplay1").innerText ="But you forget when everything changed. And you also forget why you left home. A picture of stray life flashed through your mind: dim street corner, cold rainstorm night"
    
  }
  else{ currentImage = balcony;
   // script.update("What you only know is that you need to search for food and beg for care. Or you","black");
   currentSong = song4;
   stopSongs([song1, song3, song2])
   document.getElementById("textDisplay3").innerText = '';
   document.getElementById("textDisplay2").innerText = '';
    document.getElementById("textDisplay1").innerText = '';
   document.getElementById("textDisplay3").innerText = "Now you, a stray cat, need to find a way to live in this city.";
  }
  


 

  let transparency = map(walking_cat.currentFrame,0,catFrames.length,0,510);
  if(transparency>255){transparency = 510-transparency;}
  let volume = map(transparency,0,255,0,1);
  // let volumn = map(transparency,0,255,0,1);
  currentSong.setVolume(volume);

  if(currentSong.isPlaying()== false){
    console.log('1');
    currentSong.play();
  }

  let positionX = map(walking_cat.currentFrame,0,catFrames.length,0,400);
  let positionY = map(walking_cat.currentFrame,0,catFrames.length,0,300);
  push();
  tint(255,transparency*2);
  if(imageMode<3){
  image(currentImage,-positionX,height-currentImage.height);
  }
  else{image(currentImage,0,-positionY);}
  script.display();
  pop();
  if(imageMode<3)
    {
      walking_cat.display();
    }

}


class Cat{
  constructor(frames){
    this.frame = 0;
    this.scaleFactor = 1;
    this.frames = frames; // [img1, img2, img3, img4, ....]
    this.currentFrame = 0;
  }
  update(Y,Scale){
    this.frame = floor(Y);
    this.scaleFactor = Scale;
    this.currentFrame = this.frame%this.frames.length;
    }

  display(){
    push();
    translate(width/2,1.5*height/2);
    scale(this.scaleFactor);
    let currentIMG = this.frames[this.currentFrame]
    image(currentIMG, 0,0)
    pop();
  }
}


class Script{
  constructor(){
    this.start_time = millis();
    this.speaker = '';
    this.sentence = '';
    this.color = color(0);
    this.duration = 1000;
  }

  display(){
    textAlign(CENTER);
    textSize(60);
    fill(this.color);
    text(this.speaker+this.sentence,width/2,height/2-200);
  }

  update(SENTENCE,COLOR){

    this.start_time = millis();
    this.sentence = SENTENCE;
    this.color = COLOR;

  }
}


document.getElementById("center-text").onclick = function(){
  window.location.href = '../page2/game.html';
}

function mousePressed(){

}