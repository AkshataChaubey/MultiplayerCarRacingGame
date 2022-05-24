var canvas;
var backgroundImage;
var bgImg;
var database;
var myform,myplayer,mygame
var myPlayerCount,myGameState
var Car1,Car2,track,Car1Img,Car2Img,trackImg
var Cars=[]

var allPlayerInfo
var fuels
var fuelImg,coinImg
var coins

function preload() {
  backgroundImage = loadImage("./assets/background.png");
  Car1Img= loadImage("../Multiplayer-v4-stage-1-activity-main/assets/car1.png")
  Car2Img=loadImage("../Multiplayer-v4-stage-1-activity-main/assets/car2.png")
  trackImg=loadImage("../Multiplayer-v4-stage-1-activity-main/assets/track.jpg")
fuelImg=loadImage("../Multiplayer-v4-stage-1-activity-main/assets/fuel.png")
coinImg=loadImage("../Multiplayer-v4-stage-1-activity-main/assets/goldCoin.png")
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);

  // intialise the firebase

  database=firebase.database()
  mygame=new Game ()
  mygame.start()
  mygame.getState()
}

function draw() {
  background(backgroundImage);
  // when the 2 players enter the game update gamestate to 1
  if(myPlayerCount === 2){
    mygame.updateState(1)

  }
  if(myGameState=== 1){
   mygame.play()
  }
}
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
