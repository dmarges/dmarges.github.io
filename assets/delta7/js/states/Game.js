var Delta7 = Delta7 || {};

Delta7.GameState = {

  init: function() {

    //pool of floors
    this.floorPool = this.add.group();

    //pool of platforms
    this.platformPool = this.add.group();

	//pool of coins
	this.hoverbotsPool = this.add.group();
	this.hoverbotsPool.enableBody = true;

	//pool of enemy soldiers
	this.enemySoldierPool = this.add.group();
	this.enemySoldierPool.enableBody = true;

    //gravity
    this.game.physics.arcade.gravity.y = 1000;    

    //Max jumping distance
    this.maxJumpDistance = 120;

    //Move the player with up key
    this.cursors = this.game.input.keyboard.createCursorKeys();

    //Space makes the player jump
    this.spaceKey = this.game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);

    //Enables gamepad for use in the game
    //this.game.input.gamepad.start();
    //this.gamePad = this.game.input.gamepad.pad1;
	//this.buttonA = this.gamePad.getButton(Phaser.Gamepad.XBOX360_A);
	//this.buttonA.onDown.add(this.playerJump, this);

    //Player kills
    this.myKills = 0;

    //level speed
    this.levelSpeed = 350;
  },
  create: function() {
	//moving background
	this.background1 = this.add.tileSprite(0, 0, this.game.world.width, this.game.world.height, 'background1');
	this.background2 = this.add.tileSprite(0, 0, this.game.world.width, this.game.world.height, 'background2');
	this.background3 = this.add.tileSprite(0, 0, this.game.world.width, this.game.world.height, 'background3');
	this.background4 = this.add.tileSprite(0, 0, this.game.world.width, this.game.world.height, 'background4');
	this.background5 = this.add.tileSprite(0, 0, this.game.world.width, this.game.world.height, 'background5');
	//this.background.tilePosition.y = 25;
	this.background1.autoScroll(-this.levelSpeed / 6, 0);
	this.game.world.sendToBack(this.background1);

	this.background2.autoScroll(-this.levelSpeed / 8, 0);
	this.game.world.sendToBack(this.background2);

	this.background3.autoScroll(-this.levelSpeed / 10, 0);
	this.game.world.sendToBack(this.background3);

	this.background4.autoScroll(-this.levelSpeed / 12, 0);
	this.game.world.sendToBack(this.background4);

	this.background5.autoScroll(-this.levelSpeed / 14, 0);
	this.game.world.sendToBack(this.background5);

    //Create the player
    this.player = this.add.sprite(32, 170, 'player');
    this.player.anchor.setTo(0.5);
    this.player.animations.add('running', [1, 2, 3, 4, 5, 6, 7, 8, 7, 6, 5, 4, 3, 2, 1], 15, true);
    this.player.animations.add('jumping', [11], 15, true);
    this.game.physics.arcade.enable(this.player);
    
    //Change player bounding box
    this.player.body.setSize(32, 33, 0, 0);
    this.player.play('running');

    //Particle emitter for debris
    this.emitter = this.game.add.emitter(0, 0, 100);
    this.emitter.makeParticles('debris');
    this.emitter.gravity = 200;

    //hard-code first platform
    this.currentPlatform = new Delta7.Platform(this.game, this.floorPool, 12, 40, 200, -this.levelSpeed, this.hoverbotsPool, this.enemySoldierPool);
    this.platformPool.add(this.currentPlatform);

	//explosion sound
	this.explosionSound = this.add.audio('explosion', 0.04);

	this.mainMusic = this.add.audio('mainmusic', 0.5, true);
	this.mainMusic.allowMultiple = false;

    this.loadLevel();

	//show number of coins
	var style = {font: '30px Arial', fill: '#fff'};
	this.coinsCountLabel = this.add.text(10, 20, '0', style);
  },   
  update: function() {
		if(!this.mainMusic.isPlaying && !Delta7.musicIsPlaying) {
			Delta7.musicIsPlaying = true;

			if(Delta7.soundEnabled) {
				this.mainMusic.play();
			}
		}

		if(this.player.alive) {
			this.platformPool.forEachAlive(function(platform, index) {
				this.game.physics.arcade.collide(this.player, platform);
				
				if(platform.length && platform.children[platform.length-1].right < 0) {
					platform.kill();
				}
			}, this);

			this.game.physics.arcade.overlap(this.player, this.hoverbotsPool, this.collectCoin, null, this);
			this.game.physics.arcade.overlap(this.player, this.enemySoldierPool, this.destroyEnemySoldier, null, this);

			if(this.player.body.touching.down) {
				this.player.body.velocity.x = this.levelSpeed;
			} else {
				this.player.body.velocity.x = 0;
			}

			if(this.cursors.up.isDown || this.game.input.activePointer.isDown || this.spaceKey.isDown /*|| this.buttonA.isDown*/) {
				this.playerJump();
			} else if(this.cursors.up.isUp || this.game.input.activePointer.isUp || this.spaceKey.isUp /*|| this.buttonA.isUp*/) {
				this.isJumping = false;
				this.player.play('running');
			}

			if(this.currentPlatform.length && this.currentPlatform.children[this.currentPlatform.length-1].right < this.game.world.width) {
				this.createPlatform();
			}

			//kill coins that leave the screen
			this.hoverbotsPool.forEachAlive(function(coin) {
				if(coin.right <= 0) {
					coin.kill();
				}
			}, this);

			//kill powerups that leave the screen
			this.enemySoldierPool.forEachAlive(function(powerup) {
				if(powerup.right <= 0) {
					powerup.kill();
				}
			}, this);

			//check if player needs to die
			if(this.player.top >= this.game.world.height || this.player.left <= 0 ) {
				this.gameOver();
			}
		}
  },
  playerJump: function() {
    if(this.player.body.touching.down) {
      //starting point of the jump
      this.startJumpY = this.player.y;

      //keep track of the jumping state
      this.isJumping = true;
      this.jumpPeaked = false;

      this.player.body.velocity.y = -300;
      this.player.play('jumping');
    } else if(this.isJumping && !this.jumpPeaked) {
      var distanceJumped = this.startJumpY - this.player.y;

      if(distanceJumped <= this.maxJumpDistance) {
        this.player.body.velocity.y = -300;
      } else {
        this.jumpPeaked = true;
      }
    }
  },
  loadLevel: function() {
		this.createPlatform();   
  },
  createPlatform: function() {
		var nextPlatformData = this.generateRandomPlatform();

		if(nextPlatformData) {
			this.currentPlatform = this.platformPool.getFirstDead();

			if(!this.currentPlatform) {
				this.currentPlatform = new Delta7.Platform(this.game, this.floorPool, nextPlatformData.numTiles, this.game.world.width + nextPlatformData.separation, nextPlatformData.y, -this.levelSpeed, this.hoverbotsPool, this.enemySoldierPool);
				this.platformPool.add(this.currentPlatform);
				this.currIndex++;
			} else {
				this.currentPlatform.prepare(nextPlatformData.numTiles, this.game.world.width + nextPlatformData.separation, nextPlatformData.y, -this.levelSpeed);
			}
		}
	},
	generateRandomPlatform: function() {
		
		var data = {};

		//distance from prev platform
		var minSeparation = 60;
		var maxSeparation = 180;

		data.separation = minSeparation + Math.random() * (maxSeparation - minSeparation);
		
		//y relative to previous platform
		var minDifY = -180;
		var maxDifY = 180;
		data.y = this.currentPlatform.children[0].y + (minDifY + Math.random() * (maxDifY - minDifY));
		data.y = Math.max(150, data.y);
		data.y = Math.min(this.game.world.height - 50, data.y);

		//number of tiles
		var minTiles = 5;
		var maxTiles = 9;
		data.numTiles = Math.ceil(Math.random() * (maxTiles - minTiles)) + 2;

		return data;
	},
	collectCoin: function(player, coin) {
		coin.play('killed', 15, false, true);
		this.myKills++;

		if(Delta7.soundEnabled) {
			this.explosionSound.play();
		}

		this.shakeCamera();
		this.emitter.x = coin.x;
		this.emitter.y = coin.y;
		this.emitter.start(true, 1000, null, 3);
		this.coinsCountLabel.text = this.myKills;
	},
	destroyEnemySoldier: function(player, enemy) {
		enemy.play('killed', 15, false, true);
		this.myKills++;

		if(Delta7.soundEnabled) {
			this.explosionSound.play();
		}

		this.emitter.x = enemy.x;
		this.emitter.y = enemy.y;
		this.emitter.start(true, 1000, null, 3);
		this.shakeCamera();
		this.coinsCountLabel.text = this.myKills;
	},
	shakeCamera: function() {
		this.game.camera.shake(0.009, 200);
	},
	gameOver: function() {
		this.player.kill();
		this.updateHighscore();

		//game over overlay
		this.overlay = this.add.bitmapData(this.game.world.width, this.game.world.height);
		this.overlay.ctx.fillStyle = '#000';
		this.overlay.ctx.fillRect(0, 0, this.game.world.width, this.game.world.height);

		//sprite for overlay
		this.panel = this.add.sprite(0, this.game.world.height, this.overlay);
		this.panel.alpha = 0.55;

		//overlay raising tween
		var gameOverPanel = this.add.tween(this.panel);
		gameOverPanel.to({y: 0}, 500);

		//stop all movement after overlay reaches top
		gameOverPanel.onComplete.add(function() {
			this.background1.stopScroll();
			this.background2.stopScroll();
			this.background3.stopScroll();
			this.background4.stopScroll();
			this.background5.stopScroll();

			var style = {font: '30px Arial', fill: '#fff'};
			this.add.text(this.game.world.width / 2, this.game.world.height / 2, 'GAME OVER', style).anchor.setTo(0.5);
			
			var style = {font: '20px Arial', fill: '#fff'};
			this.add.text(this.game.world.width / 2, this.game.world.height / 2 + 50, 'High Score: ' + this.highScore, style).anchor.setTo(0.5);
			
			this.add.text(this.game.world.width / 2, this.game.world.height / 2 + 80, 'Your Score: ' + this.myKills, style).anchor.setTo(0.5);
			
			var style = {font: '10px Arial', fill: '#fff'};
			this.add.text(this.game.world.width / 2, this.game.world.height / 2 + 120, 'Tap or press spacebar to play again', style).anchor.setTo(0.5);

			this.game.input.onDown.addOnce(this.restart, this);
			this.spaceKey.onDown.addOnce(this.restart, this);
			//this.buttonA.onDown.addOnce(this.restart, this);
		}, this);
	
		gameOverPanel.start();	
	},
	restart: function() {
		this.game.world.remove(this.background);
		//this.game.world.remove(this.water);
		this.game.state.start('Game');
	},
	updateHighscore: function() {
		this.highScore = +localStorage.getItem('highScore');

		//Do we have a new high score?
		if(this.highScore < this.myKills) {
			this.highScore = this.myKills;

			//save new high score
			localStorage.setItem('highScore', this.highScore);
		}
	}
};
