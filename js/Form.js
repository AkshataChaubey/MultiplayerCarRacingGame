class Form {
  constructor() {
    this.titleImag = createImg(
      "../Multiplayer-v4-stage-1-activity-main/assets/title.png"
    );
    this.input = createInput("").attribute("placeholder", "Enter the Name");
    this.button = createButton("Play");
    this.greeting = createElement("h2");
  }

  // setPosition
  setPosition() {
    this.titleImag.position(width / 4 - 300, height / 2 - 250);
    this.input.position(width / 2 - 100, height / 2);
    this.button.position(width / 2 - 80, height / 2 + 50);
    this.greeting.position(width / 2, height / 2);
  }

  // setStyle
  setStyle() {
    this.titleImag.class("gameTitle");
    this.input.class("customInput");
    this.button.class("customButton");
    this.greeting.class("greeting");
  }
  hide() {
    this.input.hide();
    this.button.hide();
    this.greeting.hide();
  }

  HandlemousePressed() {
    this.button.mousePressed(() => {
      this.input.hide();
      this.button.hide();
      var message = `Hello ${this.input.value()}`;
      this.greeting.html(message);

      myPlayerCount += 1;
      myplayer.updatecount(myPlayerCount);
      myplayer.name = this.input.value();
      myplayer.index = myPlayerCount;
      myplayer.addPlayer();
      myplayer.getDistance();
    });
  }
  // display
  display() {
    this.setPosition();
    this.setStyle();
    this.HandlemousePressed();
  }
}
