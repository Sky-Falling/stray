let hospital_type = 1;
let health = 100;
let positionX_room = 0;
let positionY_room = 0;
let cat_food_distribution = 1;
let cat_food_state = 0;
let speedX = 0;
let targetSpeedX = 0;
let latestNewKeyPress;
let building_size = 400;
let dayLength = 15000;
let weather = 0;
let state = "ongoing";
let score = 0;
let food_size = 50;
let energy = 90;
let health_decay = 0.006;
let HP_decay = 0.01;
let road_line = 660;
let person_state = false;
let currentMusic;

function preload() {
  h = loadImage('data/h.jpg');
  mouse = loadImage('data/mouse.png');
  q = loadImage('data/q.png');
  e = loadImage('data/e.png');
  r = loadImage('data/r.png');
  person_sitting = loadImage('data/person_sitting.png');
  rubbish_bin = loadImage('data/rubbish_bin.png');
  cat_food_full = loadImage('data/cat_food_full.png');
  cat_food_empty = loadImage('data/cat_food_empty.png');
  school_center1 = loadImage('data/school_center1.avif');
  school_center2 = loadImage('data/school_center2.jpg');
  school_right = loadImage('data/school_right.jpg');
  school_left = loadImage('data/school_left.jpg');
  hospital_treatment = loadImage('data/hospital_treatment.jpg');
  hospital_animal = loadImage('data/hospital_animal.jpg');
  hospital_human = loadImage('data/hospital_human.jpg');
  wasd = loadImage('data/wasd.jpg');
  room = loadImage('data/room.jpg');
  glass = loadImage('data/window.png');

  tree2 = loadImage("data/tree2.png");
  tree1 = loadImage("data/tree1.png");
  car = loadImage("data/car.png");
  house1 = loadImage("data/house1.jpg");
  house1.name = "house1"

  house2 = loadImage("data/house2.png");
  house3 = loadImage("data/house3.png");
  house4 = loadImage("data/house4.png");
  house5 = loadImage("data/house5.png");
  house = [house1, house2, house3, house4, house5];
  school1 = loadImage("data/school1.png");
  city = loadImage("data/city1.png");
  hospital = loadImage("data/hospital1.jpg");
  day = loadImage("data/day.png");
  night = loadImage("data/night.jpg");
  road = loadImage("data/road2.jpg");
  cat_left = loadImage("data/character_left.png");
  cat_right = loadImage("data/character_right.png");

  blueberry = loadImage("data/blueberry.jpg");
  blueberry.name = 'blueberry';
  boiled_chicken_breast = loadImage("data/boiled chicken breast.jpg");
  boiled_chicken_breast.name = 'boiled_chicken_breast';
  cat_grass = loadImage("data/cat grass.jpg");
  cat_grass.name = 'cat_grass';
  cooked_egg_yolk = loadImage("data/cooked egg yolk.jpg");
  cooked_egg_yolk.name = 'cooked_egg_yolk';
  cooked_pumpkin = loadImage("data/cooked pumpkin.jpg");
  cooked_pumpkin.name = 'cooked_pumpkin';
  potato = loadImage("data/potato.jpg");
  potato.name = 'potato';
  rice = loadImage("data/rice.jpg");
  rice.name = 'rice';

  salmon = loadImage("data/cooked salmon.jpg");
  salmon.name = 'salmon';
  cucumber = loadImage("data/cucumber.jpg");
  cucumber.name = 'cucumber';
  chicken = loadImage("data/freeze-dry chicken.jpg");
  chicken.name = 'chicken';

  avacado = loadImage("data/avacado.jpg");
  avacado.name = 'avacado';
  cookie = loadImage("data/cookie.jpg");
  cookie.name = 'cookie';
  grape = loadImage("data/grape.jpg");
  grape.name = 'grape';
  egg = loadImage("data/raw egg.jpg");
  egg.name = 'egg';

  BBQ_chicken = loadImage("data/BBQ_chicken.png");
  BBQ_chicken.name = 'BBQ_chicken';
  corn = loadImage("data/corn.png");
  corn.name = 'corn';
  flavored_can = loadImage("data/flavored_can.png");
  flavored_can.name = 'flavored_can';
  fried_snacks = loadImage("data/fried_snacks.png");
  fried_snacks.name = 'fried_snacks';
  tomato = loadImage("data/tomato.png");
  tomato.name = 'tomato';
  chocolate = loadImage("data/chocolate.png");
  chocolate.name = 'chocolate';
  cat_begging = loadSound('data/cat_begging.wav');
  // music1
  // musi2
  // music3 = loadSound()
}

function setup() {

  let canvas = createCanvas(800, 800);
  canvas.parent("canvasContainer");
  streetline = 0.618 * height;
  
  healthy_foods = [
    salmon,
    cucumber,
    chicken,
    blueberry,
    boiled_chicken_breast,
    cat_grass,
    cooked_egg_yolk,
    cooked_pumpkin,
    potato,
    rice,
  ];
  unhealthy_foods = [
    avacado,
    cookie,
    grape,
    egg,
    BBQ_chicken,
    corn,
    flavored_can,
    fried_snacks,
    tomato,
    chocolate,
  ];
  cat_left_frames = [];
  for(let i = 0; i < 92; i++){
    let imgPath = "walking_cat_left/trim.1ACDE6D3-9803-492A-A950-6ED9E06DE795-" + i + ".png";
    console.log(imgPath);
    let currentIMG = loadImage(imgPath);
    cat_left_frames.push(currentIMG)
  }
  cat_right_frames = [];
  for(let i = 0; i < 92; i++){
    let imgPath = "walking_cat_right/trim.1ACDE6D3-9803-492A-A950-6ED9E06DE795-" + i + ".png";
    console.log(imgPath);
    let currentIMG = loadImage(imgPath);
    cat_right_frames.push(currentIMG)
  }

currentMusic = cat_begging;
mouse.resize(30,30);
  q.resize(30,30);
  h.resize(30,30);
  e.resize(30,30);
  r.resize(30,30);
  wasd.resize(60,0);
  hospital_treatment.resize(width,0);
  hospital_animal.resize(0,height);
  hospital_human.resize(0,height);
  person_sitting.resize(175,0);
  cat_food_full.resize(food_size*2,food_size);
  cat_food_empty.resize(food_size*2,food_size);
  school_center2.resize(0,height);
  school_center1.resize(0,height);
  school_right.resize(0,height);
  school_left.resize(0,height);
  rubbish_bin.resize(150,0);
  glass.resize(width*2,0);
  room.resize(width*1.5,0);
  city.resize(1200, 0);
  tree2.resize(200, 0);
  house1.resize(building_size, 0);
  house2.resize(building_size, 0);
  house3.resize(building_size, 0);
  house4.resize(building_size, 0);
  house5.resize(building_size, 0);
  school1.resize(building_size, 0);
  hospital.resize(building_size, 0);
  road.resize(building_size, height * (1 - 0.618));
  car.resize(300, 0);
  day.resize(width, 0);
  night.resize(width, 0);

  cat_left.resize(100, 0);
  cat_right.resize(100, 0);

  for (let i = 0; i < healthy_foods.length; i++) {
    healthy_foods[i].resize(food_size, 0);
  }

  for (let i = 0; i < unhealthy_foods.length; i++) {
    unhealthy_foods[i].resize(food_size, 0);
  }

  stars = new Stars();
  script = new Script();
  buildings = [];
  let pre = 10000;
  for (let i = 0; i < 600; i++) {
    buildings.push(new Building(pre));
    pre = buildings[i].x;
  }
  character = new Cat();
  cars = [];
  script.update("System: ","click 'w,a,s,d' to move around",7000,'red');
  character.interaction = false;
  
}

function draw() {

  background('black');
  energy -= HP_decay;
  
  if (energy < 0) {
    state = "fail_starve";
  }
  if (energy > 160) {
    state = "fail_overfead";
  }
  if (score == 10) {
    state = "win_score";
  }
  if(health<0){
    state = "fail_sick";
  }

  switch (state) {
    case "ongoing":
      ongoing();
      currentMusic = cat_begging;
      break;
    case "fail_starve":
      window.location.href = '../fail_starve/index.html';
      break;
    case "fail_overfead":
      window.location.href = '../fail_overfead/index.html';
      break;
    case "fail_car":
      window.location.href = '../fail_car/index.html';
      break;
    case "win_score":
      window.location.href = '../win_score/index.html';
      break;
    case "house":
      house_enter();
      break;
    case 'school':
      school_enter();
      break;
    case 'hospital':
      hospital_enter();
      break;
    case 'fail_sick':
      window.location.href = '../fail_sick/index.html';
      break;
      case "win_campus_cat":
        window.location.href = '../win_campus_cat/index.html';
      break;
  }

  script.display();

  fill('black');
  rectMode(CENTER);
  rect( width - 110, 50,120,90);
  textSize(25);
  textAlign(CENTER);
  noStroke();
  if(energy<30||energy>130||health<20){fill(255*abs(sin(millis()/250)),0,0);}
  else{fill(255);}
  text("Energy:" + String(int(energy)), width - 110, 30);
  text("Score:" + String(score), width - 110, 60);
  text("Health:" + String(int(health)), width - 110, 90);
  //show energy
  
}

function hospital_enter(){
  push();
  imageMode(CENTER);
  if(keyIsPressed==true){
    if(latestNewKeyPress == 'a'&&positionX_room<200){positionX_room += 1;}
    else if(latestNewKeyPress == 'd'&&positionX_room>-200){positionX_room += -1;}
  }
if(hospital_type ==1){
  image(hospital_animal,positionX_room+width/2,height/2);
  instruction(r,"exit",60,'green');
  instruction(h,"to be treated",90,'green');
  if(key == 'h'){
    image(hospital_treatment,width/2,height/2);
    instruction(r,"exit",60,'green');
    
    script.update("You:", "Ahh, now I feel much better.",1000,'black');
    health = 100;
  }
  }

else{
  image(hospital_human,positionX_room+width/2,height/2);
  instruction(r,"exit",60,'green');
  instruction(wasd,"move",90,'green');
  if(keyIsPressed==true&&key == 'r'){script.update('System:',"It's a hospital for human.\n If you keep looking, you may find a animal hospital.",3500,'red');}
  
}

if(keyIsPressed==true&&key == 'r'){state='ongoing';}
imageMode(CORNER);
pop();
}

function cat_food_display(NUM,X,Y){

  imageMode(CENTER);
  if(cat_food_distribution == NUM&& cat_food_state == 1){
        
    image(cat_food_full,X,Y);
    script.update("You:", "Ah, I used to eat such food quite often\nbefore I had to stray.\nI really like its taste!",1000,'black');
  }
  else if(cat_food_distribution == NUM){
    image(cat_food_empty,X,Y);
    script.update("You:", "There's no food in this bowl...",1000,'black');
  }

  if(mouseIsPressed == true&&dist(mouseX,mouseY,X,Y)<cat_food_full.width/2&&cat_food_state==1){cat_food_state = 0;
    score += 2;
    energy+=50;
  }
  imageMode(CORNER);
}

function school_enter(){

    if(latestNewKeyPress == 'a'){
      image(school_left,0,0);

      cat_food_display(1,410  ,500 )
      instruction(mouse,"click food bowl",60,'green');
      instruction(r,"exit",85,'green')
    }
    else if(latestNewKeyPress == 'd'){
      image(school_right,0,0);
      
      cat_food_display(2,730  ,760)
      cat_food_display(3,70 , 673 )
      cat_food_display(4,300, 494.5 )

      instruction(mouse,"click the food on the ground",60,'green');
      instruction(r,"exit",85,'green')
    }
    else if(latestNewKeyPress == 's'){
      image(school_center2,0,0);
      instruction(r,'exit',90,'green');
      if(person_state == true){
        imageMode(CENTER);
        image(person_sitting,550,500);
        imageMode(CORNER);
        script.update("Man:", "There's a cat!!\nHello there, little cat",3500,'black');
        instruction(mouse,'play with him',60,'red');
        
        if(mouseIsPressed&&dist(mouseX,0,550,0)<person_sitting.width/2&&dist(0,mouseY,0,500)<person_sitting.height/2){
          state = 'win_campus_cat';
        }
      }
    }
    else if(latestNewKeyPress == 'w'||latestNewKeyPress == 'e'){image(school_center1,0,0); 
       instruction(wasd,"wander around",90,'green');}
    else if(latestNewKeyPress == 'r'){state = 'ongoing';
    script.update("You:", "Anyway, it's time to continue searching for food.",3500,'black');
    }
    console.log(mouseX,mouseY);

}

function house_enter(){
  let Scale = 1;
  imageMode(CENTER);
  push();
  translate(width/2,height/2);
  scale(Scale);


  if(keyIsPressed==true){
    if(latestNewKeyPress == 'a'&&positionX_room<200){positionX_room += 1;}
    else if(latestNewKeyPress == 'd'&&positionX_room>-200){positionX_room += -1;}
    else if(latestNewKeyPress == 's'&&positionY_room>-65){positionY_room += -0.5;}
    else if(latestNewKeyPress == 'w'&&positionY_room<65){positionY_room += 0.5;}
    else if(latestNewKeyPress == 'r'){state = 'ongoing';
    script.update("You:", "Anyway, it's time to continue searching for food.",3500,'black');
    }
  }

  
   image(room,positionX_room,positionY_room);
  image(glass,positionX_room*2,positionY_room*2);


  pop();

  instruction(wasd,"inspect the house",60,'green');
  instruction(r,'exit',95,'green');

  imageMode(CORNER);
}


// function win(SENTENCE) {
//   background("green");

//   textAlign(CENTER);
//   fill("black");
//   textSize(30);
//   text(SENTENCE, width / 2, height / 3);
// }

class Food {
  constructor(positionX,positionY) {
    this.x = positionX;
    this.y = positionY;
    let p = random(1);
    if (p < 0.3) {
      let i = floor(random(healthy_foods.length));
      this.food = healthy_foods[i];
      this.healthy = true;
    } else {
      let i = floor(random(unhealthy_foods.length));
      this.food = unhealthy_foods[i];
      this.healthy = false;
    }
    

    this.state = true;
    this.name = this.food.name;
  }

  detect() {
    if (key == "q") {
      character.interaction = true;
      console.log("this.food.width/2");
    } else {
      character.interaction = false;
    }

    if(dist(this.x, 0, character.x, 0) < 30 &&
    dist(0, this.y, 0, character.y) < 15&&this.state == true){
      instruction(q,'pick up '+ this.name,character.y+50,'red');
    }

    if (
      character.interaction == true &&
      this.state == true &&
      dist(this.x, 0, character.x, 0) < 30 &&
      dist(0, this.y, 0, character.y) < 15
    ) {
      if (this.healthy == true) {
        score += 1;
        this.state = false;
        energy += 30;
        script.update("You:", "Emmm, surprisingly, it tastes good!!\n(Energy point restored)",6000,'black');
      } else {
        this.state = false;
        health -= 30;
        script.update("You:", "Ah, is it poision?\nI can't understand why human eat such food.\n(Health point decreased)",6000,'black');
      }
    }
  }

  display() {
    if (this.state == true) {
      push();
      translate(this.x, this.y);
      imageMode(CENTER);
      image(this.food, 0, 0);
      imageMode(CORNER);
      pop();
    }
  }

  update() {
    this.x += character.speedX * character.scale;
  }
}

function instruction(IMAGE,SENTENCE,Y,COLOR){
  push();
  textAlign(LEFT,CENTER);
  imageMode(CENTER);
  fill(COLOR);
  stroke('orange');
  textSize(35);
  image(IMAGE,width/2-100,Y);
  text(SENTENCE,IMAGE.width/2+width/2-100,Y);
  pop();
}

class Rubbish_bin{
  constructor(positionX){
    this.x = positionX;
    this.y = 625;
    this.foodVal =floor(random(0,4));
    this.foods = [];
    for(let i = 0 ;i< this.foodVal; i++){
      this.foods.push(new Food(this.x+map(i,0,this.foodVal-1,-70,70),this.y+5));
    }
  }
  
  update(){
    for(let i = 0 ;i< this.foodVal; i++){
      this.foods[i].detect();
      this.foods[i].update();
    }
    this.x+=character.scale*character.speedX;
  }

  display(){
    for(let i = 0 ;i< this.foodVal; i++){
      this.foods[i].display();
    }
    image(rubbish_bin,this.x-rubbish_bin.width/2,this.y-rubbish_bin.height);
  }
}


// function fail(SENTENCE) {
//   background("brown");
//   fill("black");
//   textAlign(CENTER);
//   textSize(60);
//   text("You Lose---Please try again", width / 2, height / 3);
//   textSize(30);
//   text("Your Score:" + String(score), width / 2, height / 1.5);
//   textSize(20);
//   fill("white");
//   text(SENTENCE, width / 2, height / 1.5 + 20);
// }

class Script{
  constructor(){
    this.start_time = millis();
    this.speaker = '';
    this.sentence = '';
    this.color = color(0);
    this.duration = 1000;
  }

  display(){
    if(millis()-this.start_time<this.duration){
    textAlign(CENTER);
    textSize(30);
    fill(this.color);
    text(this.speaker+this.sentence,width/2,height-200);
    }
    
  }

  update(WHO,SENTENCE,TIME,COLOR){

    this.start_time = millis();
    this.speaker = WHO;
    this.sentence = SENTENCE;
    this.color = COLOR;
    this.duration = TIME;

  }
}



function ongoing() {
  background("brown");
  console.log(mouseY);
  

  let day_night = floor((millis() / dayLength) % 2);
  if (day_night == 0) {
    image(day, 0, 0);
  } else {
    image(night, 0, 0);
    stars.update();
    stars.display();
  }

  image(city, -100, streetline - city.height);

  building_display();

  if (character.y < 585) {
    // draw_cat();
    character.update();
  character.display();
    draw_tree();
    building_display_rubbish_bin();
  } 
    
  else{character.update();
    draw_tree();
    
    building_display_rubbish_bin();
    character.display();}

  draw_car();

  p = random(1);
  if (p > 0.9985) {
    weather = 1 - weather;
  }

  if (weather == 1) {
    rain();
    health -= health_decay;
  }

  
  
  if(energy<30){script.update("You:","I feel so hungry.\nI really need to find food now",1000,'red');}
  else if(energy>130){script.update("You:","I'm so full.\nI can't eat anymore",1000,'red');}
  else if(health<20){script.update("You:","I feel so dizzy. My human friend\nused to take me to a place call 'hospital',\nnow going there is my last chance",1000,'red');}
  building_enter();
 }


function draw_car() {
  p = random(1);
  if (p > 0.995) {
    cars.push(new Car());
  }

  for (let i = 0; i < cars.length; i++) {
    cars[i].update();
    cars[i].display();
    cars[i].collision();
  }

  for (let i = cars.length - 1; i >= 0; i--) {
    if (cars[i].x > width + 200) {
      cars.splice(i, 1);
    }
  }
}

function draw_tree() {
  for (let i = 0; i < buildings.length; i++) {
    imageMode(CORNER);
    image(tree2, buildings[i].x - tree2.width / 2, 600 - tree2.height);
  }
}

function building_update() {
  for (let i = 0; i < buildings.length; i++) {
    buildings[i].update();
  }
}

function building_display() {
  for (let i = 0; i < buildings.length; i++) {
    buildings[i].display();
  }
}
function building_display_rubbish_bin() {
  for (let i = 0; i < buildings.length; i++) {
    buildings[i].display_rubbish_bin();
  }
}
function building_enter() {
  for (let i = 0; i < buildings.length; i++) {
    buildings[i].enter();
  }
}

function keyPressed() {
  //
  latestNewKeyPress = key;
  if (key == "a") {
    targetSpeedX = -2;
  } else if (key == "d") {
    targetSpeedX = 2;
  }
}


class Cat {
  constructor() {
    this.x = width / 2+20;
    this.y = 550;
    this.speedY = 0;
    this.speedX = 0;
    this.direction = "left";
    this.scale = 1;
    this.interaction = false;
    this.frame = 0;
    this.currentFrame = 0;
    
  }

  update() {
    this.speedX = lerp(this.speedX, targetSpeedX, 0.05);
    
    if (keyIsPressed) {
      if (latestNewKeyPress == "d") {
        targetSpeedX = -4;
      } else if (latestNewKeyPress == "a") {
        targetSpeedX = 4;
      }
    } else {
      targetSpeedX = 0;
    }

    if (keyIsPressed) {
      if (key == "w" && this.y > 500) {
        this.speedY = -1;
      } else if (latestNewKeyPress == "s" && this.y < height) {
        this.speedY = 1;
      } else {
        this.speedY = 0;
      }
    }

    this.y += this.speedY;
    this.scale = map(this.y, 500, height, 0.5, 1);

    this.speedY *= this.scale;
    this.frame+=abs(this.speedX)*0.3;
    this.currentFrame = int(this.frame%cat_left_frames.length);

    if (this.speedX > 0 && targetSpeedX > 0) {
      this.direction = "left";
    }
    if (this.speedX < 0 && targetSpeedX < 0) {
      this.direction = "right";
    }

    building_update();
  }

  display() {
    imageMode(CENTER);
    push();
    translate(this.x, this.y);
    scale(this.scale*0.08);

    if (this.direction == "left") {
      
      image(cat_left_frames[this.currentFrame], 0, 0);
    }
    if (this.direction == "right") {
      image(cat_right_frames[this.currentFrame], 0, 0);
    }
    pop();
    imageMode(CORNER);
  }
}

class Building {
  constructor(preX) {
    let p = random(1);
    if (p < 0.6) {
      this.buildingType = "house";
    } else if (p < 0.8) {
      this.buildingType = "hospital";
    } else {
      this.buildingType = "school";
    }

    switch (this.buildingType) {
      case "house":
        let a = floor(random(house.length));
        this.building = house[a];
        break;
      case "hospital":
        this.building = hospital;
        break;
      case "school":
        this.building = school1;
        break;
    }

    this.x = preX - this.building.width;
    this.y = streetline - this.building.height;

    noStroke();

    this.road = createGraphics(building_size, height * (1 - 0.618));
    this.road.image(road, 0, 0);
    
    let q = random(1);
    this.rubbish_bin_state = false;
    if(q>0.6){this.rubbish_bin = new Rubbish_bin(preX-this.building.width/2);
      this.rubbish_bin_state = true;
    }
  }

  enter(){
    if(character.x>this.x&&character.x<this.x+this.building.width&&character.y>streetline&&character.y<streetline+30){
      instruction(e,"enter " + this.buildingType,character.y+50,'red');
      if(key == 'e'){state = this.buildingType;
        positionX_room = 0;
        positionY_room = 0;
        
        cat_food_distribution = floor(random(1,5));
        cat_food_state = 1;
        
        let t = random(1);
        if(t>0.5){person_state = true;}
        else{person_state = false;}
        
        if(t>0.5)
        {hospital_type = 1;}
        else{hospital_type = 2;}

        switch(this.buildingType){
          
          case 'school': script.update('You:',"Where is this place?\n Anyway, the human here seems safe\nSomething good may happen...Who knows?",3000,color(0));
          break;
          case 'house': script.update('You:',"This place reminds me of the old day\n when I live with my human friends.\n But I'm not part of it...anymore \n ",6500,color(0));
          break;
          case 'hospital': 
          if(hospital_type == 1){script.update('Vet:',"Ohhh, you're injured. Poor little kitty.\n Don't worry, you'll be ok soon",4000,color(0));}
          else {script.update('Patients:',"Why there's a cat? Hi Safety guard!\n Could you please get him out of here?",4000,color(0));}
          break;
        }
      }
    }

  }

  

  display() {
    image(this.building, this.x, this.y);
    image(this.road, this.x, streetline);
    
  }

   display_rubbish_bin(){if(this.rubbish_bin_state == true){this.rubbish_bin.display();}}
  update() {
    this.x += character.speedX*character.scale;
    if(this.rubbish_bin_state == true){this.rubbish_bin.update();} 
  }
}

class Star {
  constructor(positionX, positionY) {
    this.x = positionX;
    this.y = positionY;
    this.brightness = random(255);
    this.decay = random(-5, 5);
    this.radius = random(1, 4);
    this.colors = [
      color(255, 210, 125),
      color(166, 168, 255),
      color(95, 56, 129),
      color(255, 215, 215),
    ];
    this.i = floor(random(4));
  }

  update() {
    if (this.brightness < 0 || this.brightness > 255) {
      this.decay *= -1;
    }
    this.brightness += this.decay;
  }

  display() {
    noStroke();

    this.colors[this.i].setAlpha(this.brightness);
    fill(this.colors[this.i]);
    circle(this.x, this.y, this.radius);
  }
}

class Stars {
  constructor() {
    this.starNum = 400;
    this.star = [];
    for (let i = 0; i < this.starNum; i++) {
      this.star.push(new Star(random(width), random(streetline)));
    }
  }

  update() {
    for (let i = 0; i < this.star.length; i++) {
      this.star[i].update();
    }
  }

  display() {
    for (let i = 0; i < this.star.length; i++) {
      this.star[i].display();
    }
  }
}

class Car {
  constructor() {
    this.x = -100;
    this.y = random(680, height);
    this.speed = random(7, 10);
  }

  update() {
    this.x += this.speed;
  }

  display() {
    push();
    translate(this.x, this.y);
    imageMode(CENTER);
    image(car, 0, 0);
    
    drawSpinningWheel(-100, 50, this.speed);
    // circle(25, 40, 30);
    drawSpinningWheel(100, 50, this.speed);
    imageMode(CORNER);
    pop();
  }

  collision() {
    if (
      dist(this.x, 0, character.x, 0) < car.width / 2 + cat_left.width / 2 &&
      dist(0, this.y, 0, character.y) < 35
    ) {
      state = "fail_car";

    }
  }
}

function drawSpinningWheel(positionX, positionY, speed) {
  push();
  rectMode(CORNER);
  translate(positionX, positionY);
  rotate(radians(frameCount * speed));
  scale(1.4);
  // code here
  fill(0);
  circle(0, 0, 30);
  fill(120);
  rect(-10, -10, 20, 20);

  fill("green");
  circle(0, 0, 5);
  pop();
}

function rain() {
  for (let i = 1; i < 30; i++) {
    rain_x = random(width);
    rain_y = random(height);
    Scale_rain = random(0.5, 1);

    stroke("white");
    strokeWeight(0.5);
    noFill();
    bezier(
      rain_x - 6 * Scale_rain,
      rain_y + 15 * Scale_rain,
      rain_x,
      rain_y + 15 * Scale_rain,
      rain_x,
      rain_y - 12 * Scale_rain,
      rain_x + 4 * Scale_rain,
      rain_y - 12 * Scale_rain
    );
  }
}
