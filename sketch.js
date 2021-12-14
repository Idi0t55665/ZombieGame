/*
Idi0t55665

NEED TO ADD:
Zombies spawing every round
round increasing
difficulty increasing over time(increase health by 100 until round 9 then add 1.1x multiplier) 
PAP
More Perks
Proper shooting

I've got a lot of work to you!

Might give up!



*/



let dogmode;
let round;
let zombie, player;
let x, y;
let health, speed, damage, playerhealth;
let MENU = 0

function setup() {
  createCanvas(400, 400);
dogmode = false;
  
  round = 1;

  bullet = {
    damage: 20
  };
  //Player and zombie paramaters
  zombie = {
    pos: createVector(500, 200),
    //increase by 100 each round until round 9
    health: 150,
    speed: 1,

  };
  player = {
    points:500,
    pos: createVector(200, 200),

    //default
    health: 100,
  };
 //Perks
  Juggernog={
    cost:2500,
    x:300,
    y:0
  };
  fill(0);

}

function draw() {
  
  background(255);
  fill(0, 255, 0);
  rect(100, 50, 200, 75);
  fill('Blue');
  rect(100, 200, 200, 75);
 
  textSize(50)
  fill(255);
  text('START', 120, 106);
 
  textSize(26);
  text('INSTRUCTIONS', 102, 248);


  if (MENU == 1) {
     //Low Health Indicator
  if(player.health < 30){
    console.log('Low Health')
    
  }
   
  //Debug purposes
  if (dogmode === true) {
    player.health = player.health + 100;

  }
  background(220);
  //Points display
  fill('red');
  textSize(15);
  text('Points: '+player.points,300,380);
  //Perk machines
 fill(255,0,0);
  //Juggernog
  rect(Juggernog.x,Juggernog.y+10,20,30); 
  fill(255);
  rect(Juggernog.x+3.3,Juggernog.y+20,13,13);
  ellipse(Juggernog.x+9.5,Juggernog.y+10,22,22);
  //Buying system
  if(dist(Juggernog.x,player.pos.x,Juggernog.y,player.pos.y)<=500){
    if(player.points>=2500){
 
  }else{
    
    console.log('Not Enough funds')
  }
  fill('red')
  textSize(15);
  text('Round ' + round, 10, 380);

  stroke(0);

  line(player.pos.x, player.pos.y, mouseX, mouseY);
  fill('gray')
  ellipse(mouseX, mouseY, 10, 10);
  push();
  //player
  fill("green");
  ellipse(player.pos.x, player.pos.y, 20, 20);
  //HUD or something
  fill("black");
  text("" + player.health, 10, 10);
  //zombie(s)
  fill("gray");
  rect(zombie.pos.x, zombie.pos.y, 20, 20);
  //Damage system
  if (p5.Vector.sub(player.pos, zombie.pos).mag() <= 30) {

    player.health = player.health - 1;

  }

  //Health detection
  if (player.health <= 0) {
    background(0);
    textSize(20);
    fill(' red')
    text("You died \n Round " + round, 165, 200);
  }

  if (keyIsDown(87)) {
    player.pos.y -= 2;

  }
  if (keyIsDown(83)) {
    player.pos.y += 2;

  }
  if (keyIsDown(65)) {

    player.pos.x -= 2;
  }
  if (keyIsDown(68)) {

    player.pos.x += 2;
  }

  zombie.pos.add(p5.Vector.sub(player.pos, zombie.pos).limit(zombie.speed))
  pop();
  
    
 
  }


  
  }
  
    
    
    
    
  } // START GAME
  if (MENU == 2) {
    background(255, 0, 255)
    textSize(20)
    text('Right Click to return to MENU', 525, 30)
    textSize(30)
    text('Kill zombies', 50, 150)
    text('Survive', 50, 200)
    text('Pack-a-Punch your gun', 80, 240)
    text('Buy Perks', 50, 290)
    if (mouseButton == RIGHT) {
      MENU = 0
    }
   


}

function mouseClicked() {
  if (MENU == 0) {
    if (mouseX < 250 && mouseX > 100) {
      if (mouseY < 125 && mouseY > 50) {
        MENU = 1
      }
      if (mouseY < 275 && mouseY > 200) {
        MENU = 2
      }
      
    }
  }

}
