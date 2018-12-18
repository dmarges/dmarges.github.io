var Delta7 = Delta7 || {};

Delta7.Platform = function(game, floorPool, numTiles, x, y, speed, hoverbotsPool, enemySoldierPool) {
  Phaser.Group.call(this, game);
  
  this.tileSize = 32;
  this.game = game;
  this.enableBody = true;
  this.floorPool = floorPool;
  this.hoverbotsPool = hoverbotsPool;
  this.enemySoldierPool = enemySoldierPool;
  this.prepare(numTiles, x, y, speed);
};

Delta7.Platform.prototype = Object.create(Phaser.Group.prototype);
Delta7.Platform.prototype.constructor = Delta7.Platform;

Delta7.Platform.prototype.prepare = function(numTiles, x, y, speed) {

  this.alive = true;

  //var tileDistanceFromBottom = Math.round((this.game.world.height - y) / 32) + 1;
  for(i = 0; i < numTiles; i++) {
	    if(this.floorPool !== null) {
	    	floorTile = this.floorPool.getFirstExists(false);
	    } else {
	    	floorTile = undefined;
	    }

	    if(!floorTile) {
	      floorTile = new Phaser.Sprite(this.game, x + i * this.tileSize, y, 'floor');
	    } else {
	      floorTile.reset(x + i * this.tileSize, y);
	    }

 		this.add(floorTile);
  }

  //set physics properties
  this.setAll('body.immovable', true);
  this.setAll('body.allowGravity', false);
  this.setAll('body.velocity.x', speed);

  this.addHoverbots(speed);
  this.addEnemySoldiers(speed);
};

Delta7.Platform.prototype.kill = function() {
	this.alive = false;
	this.callAll('kill');

	var sprites = [];
	
	this.forEach(function(tile) {
		sprites.push(tile);
	}, this);

	sprites.forEach(function(tile) {
		this.floorPool.add(tile);
	}, this);
};

Delta7.Platform.prototype.addHoverbots = function(speed) {
	var hoverbotY = 90 + Math.random() * 110;

	var hasHoverbot;

	this.forEach(function(tile){
		//40% chance of HoverBot
		hasHoverbot = Math.random() <= 0.4;

		if(hasHoverbot) {
			var hoverbot = this.hoverbotsPool.getFirstExists(false);

			if(!hoverbot) {
				hoverbot = new Phaser.Sprite(this.game, tile.x, tile.y - hoverbotY, 'hoverbot');
				hoverbot.animations.add('alive', [0], 15, true);
				hoverbot.animations.add('killed', [1, 2, 3, 4, 5, 6, 7], 15, false);
				hoverbot.play('alive');
				this.hoverbotsPool.add(hoverbot);
			} else {
				hoverbot.reset(tile.x, tile.y - hoverbotY);
				hoverbot.play('alive');
			}

			hoverbot.body.velocity.x = speed;
			hoverbot.body.allowGravity = false;
		}
	}, this);
};

Delta7.Platform.prototype.addEnemySoldiers = function(speed) {
	var enemySoldierY = 30;

	var hasEnemySoldier;

	this.forEach(function(tile){
		//5% chance of enemy soldier
		hasEnemySoldier = Math.random() <= 0.2;

		if(hasEnemySoldier) {
			var enemy = this.enemySoldierPool.getFirstExists(false);

			if(!enemy) {
				enemy = new Phaser.Sprite(this.game, tile.x, tile.y - enemySoldierY, 'enemysoldier');
				enemy.animations.add('alive', [0, 1, 2, 3], 15, true);
				enemy.animations.add('killed', [4, 5, 6, 7, 8, 9, 10], 15, false);
				enemy.play('alive');
				this.enemySoldierPool.add(enemy);
			} else {
				enemy.reset(tile.x, tile.y - enemySoldierY);
				enemy.play('alive');
			}

			enemy.body.velocity.x = speed;
			enemy.body.allowGravity = false;
		}
	}, this);
};
