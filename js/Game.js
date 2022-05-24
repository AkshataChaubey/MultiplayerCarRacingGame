class Game {
  constructor() {}

  getState() {
    var stateRoot = database.ref("gameState");
    stateRoot.on("value", function (data) {
      myGameState = data.val();
    });
  }

  updateState(state) {
    database.ref("/").update({
      gameState: state,
    });
  }

  // gamestate=0
  start() {
    myplayer = new Player();
    myplayer.getplayercount();

    myform = new Form();
    myform.display();

    Car1 = createSprite(width / 2 - 50, height - 100);
    Car1.addImage("Car1", Car1Img);
    Car1.scale = 0.07;

    Car2 = createSprite(width / 2 + 100, height - 100);
    Car2.addImage("Car2", Car2Img);
    Car2.scale = 0.07;

    Cars = [Car1, Car2];

    fuels = new Group();
    coins = new Group();

    // calling fules
    this.addSprites(fuels, 20, fuelImg, 0.1);
    // calling coins
    this.addSprites(coins, 30, coinImg, 0.1);
  }
  addSprites(spriteGroup, numberSprites, spriteImage, scale) {
    for (var i = 0; i < numberSprites.length; i++) {
      var x, y;
      x = random(width / 2 + 150, width / 2 - 150);
      y = random(-height * 5, height - 400);

      var sprite = createSprite(x, y);
      sprite.addImage("sprite", spriteImage);
      sprite.scale = scale;
      spriteGroup.add(sprite);
    }
  }
  // gamestate=1
  play() {
    myform.hide();
    myform.titleImag.position(40, 50);
    myform.titleImag.class("gameTitleffect");

    Player.getPlayerInfo();
    console.log(allPlayerInfo);
    // !== undefined means 2 cars entered === undefined means not entered
    if (allPlayerInfo !== undefined) {
      // image(loadImageName,x,y,w,h)
      image(trackImg, 0, -height * 5, width, height * 6);

      // index of the array
      var index = 0;
      for (var i in allPlayerInfo) {
        console.log(i);

        // add 1 to the index for every loop
        index = index + 1;

        // getting x and y position of i th player from firebase
        var x = allPlayerInfo[i].positionX;
        var y = allPlayerInfo[i].positionY;

        // index=1 index-1=1-1=0
        // cars[0]=car1 cars[1]= car2
        Cars[index - 1].position.x = x;
        Cars[index - 1].position.y = y;
      }

      if (keyIsDown(UP_ARROW)) {
        myplayer.positionY += 10;
        myplayer.updatePlayer();
      }
      drawSprites();
    }
  }
  // gamestate=2
  end() {}
}
