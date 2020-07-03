
var database, gameState=0;
var form,player,game;
var playerCount=0;
function setup(){
    database= firebase.database();
    createCanvas(400,400);
  game= new Game();
  game.getState();
  game.start();
}

function draw(){
    
    
}

