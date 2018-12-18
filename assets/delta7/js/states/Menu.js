var Delta7 = Delta7 || {};

//setting game configuration and loading the assets for the loading screen
Delta7.MenuState = {
  init: function() {
      //level speed
      this.levelSpeed = 300;
  },
  create: function() {
      //moving background
      this.background = this.game.add.tileSprite(0, 0, this.game.world.width, this.game.world.height, 'background');
      this.background.autoScroll(-this.levelSpeed / 6, 0);
      this.game.world.sendToBack(this.background);

      this.title = this.add.sprite(130, 32, 'title');

      var style = {font: '10px Arial', fill: '#fff'};
      this.add.text(this.game.world.width / 2, this.game.world.height / 2 + 120, 'Tap or press spacebar to start', style).anchor.setTo(0.5);

      //this.game.input.onDown.add(this.start, this);
      this.background.inputEnabled = true;
      this.background.events.onInputDown.add(this.start, this);
      this.spaceKey = this.game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
      this.spaceKey.onDown.addOnce(this.start, this);
      //this.game.input.gamepad.start();
      //this.gamePad = this.game.input.gamepad.pad1;
      //this.gamePad.addCallbacks(this, { onConnect: this.addButtons });

      this.soundOnButton = this.game.add.button(this.game.world.width - 60, this.game.world.height - 40, 'soundbutton', this.onSoundOnButtonUp, this, 0, 0, 0);
      //this.game.world.bringToTop(this.soundOnButton);
  },
  update: function() {
  },
  onSoundOnButtonUp: function(button) {
      if(Delta7.soundEnabled) {
          Delta7.soundEnabled = false;
          button.setFrames(1);
      } else {
          Delta7.soundEnabled = true;
          button.setFrames(0);
      }
  },
  start: function(event) {
      this.state.start('Instruction');
  }//,
  //addButtons: function() {
    //this.buttonA = this.gamePad.getButton(Phaser.Gamepad.XBOX360_A);
    //this.buttonA.onDown.addOnce(this.start, this);
  //}
};