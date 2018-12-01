var Delta7 = Delta7 || {};

//loading the game assets
Delta7.PreloadState = {
  preload: function() {
    //show loading screen
    this.preloadBar = this.add.sprite(this.game.world.centerX, this.game.world.centerY, 'preloadbar');
    this.preloadBar.anchor.setTo(0.5);
    this.preloadBar.scale.setTo(3);

    this.load.setPreloadSprite(this.preloadBar);

    //load game assets

    //menu screen
    this.load.image('title', 'assets/images/title.png');
    this.load.spritesheet('soundbutton', 'assets/images/soundbutton.png', 30, 30, 2);
    
    this.load.image('floor', 'assets/images/floor.png');
    this.load.spritesheet('enemysoldier', 'assets/images/enemy-soldier.png', 32, 32, 11);
    this.load.spritesheet('explosion1', 'assets/images/explosion1.png', 8, 8, 4);
    this.load.spritesheet('explosion2', 'assets/images/explosion2.png', 32, 32, 4);
    this.load.spritesheet('hoverbot', 'assets/images/hoverbot_spritesheet.png', 32, 32, 8);
    this.load.image('background', 'assets/images/background.png');
    this.load.image('background1', 'assets/images/bg_city_1.png');
    this.load.image('background2', 'assets/images/bg_city_2.png');
    this.load.image('background3', 'assets/images/bg_city_3.png');
    this.load.image('background4', 'assets/images/bg_city_4.png');
    this.load.image('background5', 'assets/images/bg_city_5.png');
    this.load.spritesheet('player', 'assets/images/player_spritesheet.png', 32, 33, 14);
    this.load.image('debris', 'assets/images/debris.png');

    this.load.audio('explosion', ['assets/audio/explosion.mp3', 'assets/audio/explosion.ogg']);
    this.load.audio('mainmusic', ['assets/audio/main-music.mp3', 'assets/audio/main-music.ogg']);

    Delta7.soundEnabled = true;
  },
  create: function() {
    this.state.start('Menu');
  }
};