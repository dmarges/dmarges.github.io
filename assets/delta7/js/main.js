var Delta7 = Delta7 || {};

Delta7.game = new Phaser.Game(480, 293, Phaser.CANVAS);

Delta7.game.state.add('Boot', Delta7.BootState);
Delta7.game.state.add('Preload', Delta7.PreloadState);
Delta7.game.state.add('Menu', Delta7.MenuState);
Delta7.game.state.add('Instruction', Delta7.InstructionState);
Delta7.game.state.add('Game', Delta7.GameState);

Delta7.game.state.start('Boot');
