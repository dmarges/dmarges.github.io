var Delta7 = Delta7 || {};

//setting game configuration and loading the assets for the loading screen
Delta7.InstructionState = {
  init: function() {
      //level speed
      this.levelSpeed = 300;
      this.content = [
        "You are DELTA-7.",
        "You are a near-indestructable super-soldier developed with the best technology the Resistance has to offer.",
        "Because of your enhancements, you can jump or run through enemies with minimal damage to yourself.",
        "We have dropped you ahead of our invasion forces to destroy as much of the Empire's defenses as you can.",
        "Your chances of survival are non-existent.",
        "However...",
        "The more damage you inflict upon the enemy, the greater our chance of success...",
        "And the less casualties we will suffer..."
      ];

      this.line = [];
      this.wordIndex = 0;
      this.lineIndex = 0;
      this.wordDelay = 120;
      this.lineDelay = 400;
      this.instructionText = undefined;

  },
  create: function() {
    //moving background
    this.background = this.add.tileSprite(0, 0, this.game.world.width, this.game.world.height, 'background');
    this.background.autoScroll(-this.levelSpeed / 6, 0);
    this.game.world.sendToBack(this.background);

    //instructions instructionOverlay
    this.instructionOverlay = this.add.bitmapData(this.game.world.width, this.game.world.height);
    this.instructionOverlay.ctx.fillStyle = '#000';
    this.instructionOverlay.ctx.fillRect(0, 0, this.game.world.width, this.game.world.height);

    //sprite for instructionOverlay
    this.panel = this.add.sprite(0, this.game.world.height, this.instructionOverlay);
    this.panel.alpha = 0.55;

    //instructionOverlay raising tween
    var instructionPanel = this.add.tween(this.panel);
    instructionPanel.to({y: 0}, 500);

    //stop all movement after instructionOverlay reaches top
    instructionPanel.onComplete.add(function() {
      this.background.stopScroll();

      var style = {font: '20px Arial', fill: '#fff'};
      this.add.text(this.game.world.width / 2, 20, 'Instructions', style).anchor.setTo(0.5);
      
      var style = {font: '9px Arial', fill: '#fff'};
      this.instructionText = this.game.add.text(this.game.world.width / 2, 90, '', style)
      this.instructionText.anchor.setTo(0.5);
      this.nextLine();

      var style = {font: '9px Arial', fill: '#fff'};
      this.add.text(this.game.world.width / 2, this.game.world.height / 2 + 70, 'Mobile Devices: Tap the screen to jump', style).anchor.setTo(0.5);
      this.add.text(this.game.world.width / 2, this.game.world.height / 2 + 80, 'Keyboard: Press the Spacebar to jump', style).anchor.setTo(0.5);
      //this.add.text(this.game.world.width / 2, this.game.world.height / 2 + 90, 'Gamepad: Press the "A" button to jump', style).anchor.setTo(0.5);
      this.add.text(this.game.world.width / 2, this.game.world.height / 2 + 120, 'Tap on the screen, press spacebar, or press "A" on your Gamepad to start playing', style).anchor.setTo(0.5);

      this.game.input.onDown.addOnce(this.start, this);
      this.spaceKey.onDown.addOnce(this.start, this);
      //this.buttonA = this.gamePad.getButton(Phaser.Gamepad.XBOX360_A);
      //this.buttonA.onDown.addOnce(this.start, this);
    }, this);
  
    instructionPanel.start();
    this.game.input.onDown.addOnce(this.start, this);
    this.spaceKey = this.game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
    this.spaceKey.onDown.addOnce(this.start, this);
    //this.game.input.gamepad.start();
    //this.gamePad = this.game.input.gamepad.pad1;
  },
  update: function() {
  },
  start: function() {
    this.state.start('Game');
  },
  nextLine: function() {

    if (this.lineIndex === this.content.length) {
        //  We're finished
        return;
    }

    //  Split the current line on spaces, so one word per array element
    this.line = this.content[this.lineIndex].split(' ');

    //  Reset the word index to zero (the first word in the line)
    this.wordIndex = 0;

    //  Call the 'nextWord' function once for each word in the line (line.length)
    this.game.time.events.repeat(this.wordDelay, this.line.length, this.nextWord, this);

    //  Advance to the next line
    this.lineIndex++;

  },
  nextWord: function() {
      //  Add the next word onto the text string, followed by a space
      this.instructionText.text = this.instructionText.text.concat(this.line[this.wordIndex] + " ");

      //  Advance the word index to the next word in the line
      this.wordIndex++;

      //  Last word?
      if (this.wordIndex === this.line.length) {
          //  Add a carriage return
          this.instructionText.text = this.instructionText.text.concat("\n");

          //  Get the next line after the lineDelay amount of ms has elapsed
          this.game.time.events.add(this.lineDelay, this.nextLine, this);
      }

  }
};