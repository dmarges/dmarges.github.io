
var Morana = {};

var Actor = function(name, img, coords) {
    Morana.loadSprite(img);
};

Actor.prototype.draw = function() {
    Morana.drawSprite(this, this.x += this.vX, this.y += this.vY, 0, 1);
};


Morana.init = function() {
    var canvas = document.getElementById('airhockey');
    this.ctx = canvas.getContext('2d');
    this.ctx.canvas.width = 1024;
    this.ctx.canvas.height = 768;
    this.ctx.fillStyle = '#000000';
    this.ctx.fillRect(0, 0, 1024, 768);
    
    this.background = this.loadSprite('img/background.png');
    this.playerPaddle = this.loadSprite('img/paddle.png');
    this.playerPaddleObj = {name: 'player', x: 850, y: 350, width: 153, height: 153, radius: 72, dx: 0, dy: 0, vX: 0, vY: 0, aX: 0, aY: 0, mass: 10};
    this.cpuPaddleObj = {name: 'cpu', x: 200, y: 350, width: 153, height: 153, radius: 72, dx: 0, dy: 0, vX: 0, vY: 0, aX: 0, aY: 0, mass: 10};
    this.cpuPaddle = this.loadSprite('img/paddle.png');
    this.puck = this.loadSprite('img/puck.png');
    this.puckObj = {name: 'puck', x: 650, y: 350, width: 74, height: 74, radius: 34, dx: 0, dy: 0, vX: 1, vY: 1,  aX: 0, aY: 0, mass: 4};

    this.playerScore = 0;
    this.cpuScore = 0;
    this.goal = "";
    this.scored = false;
};

Morana.render = function() {

    PhysJS.detectCollision(this.playerPaddleObj, this.puckObj, 'round');
    PhysJS.detectCollision(this.cpuPaddleObj, this.puckObj, 'round');
    PhysJS.calculateAcceleration(this.puckObj);
    PhysJS.calculateFriction(this.puckObj);

    this.cpuMovement(this.cpuPaddleObj, this.puckObj);

    PhysJS.wallCollision(this.puckObj, {x1: 25 + this.puckObj.radius, y1: 25 + this.puckObj.radius, x2: 960, y2: 748});
    PhysJS.wallCollision(this.playerPaddleObj, {x1: 560, y1: 105, x2: 910, y2: 675});
    PhysJS.wallCollision(this.cpuPaddleObj, {x1: 105, y1: 105, x2: 430, y2: 675});
    this.goalArea(this.puckObj, this.playerPaddleObj, this.cpuPaddleObj);

    this.ctx.clearRect(0, 0, 1024, 768);
    this.drawSprite(this.background, 500, 390, 1.57, 1);

    if(!this.scored) {
        this.drawSprite(this.puck, this.puckObj.x += this.puckObj.vX, this.puckObj.y += this.puckObj.vY, 0, 1);        
    }

    this.drawSprite(this.playerPaddle, this.playerPaddleObj.x, this.playerPaddleObj.y, 0, 1);
    this.drawSprite(this.cpuPaddle, this.cpuPaddleObj.x += this.cpuPaddleObj.vX, this.cpuPaddleObj.y += this.cpuPaddleObj.vY, 0, 1);

    this.drawText(this.ctx, this.playerScore, 920, 80, 'blue', 'bold 16px Arial');
    this.drawText(this.ctx, this.cpuScore, 80, 80, 'blue', 'bold 16px Arial');
    this.drawText(this.ctx, this.goal, 470, 80, 'black', 'bold 20px Arial');

    var that = this;
    
    webkitRequestAnimationFrame(function(){
        that.run();
    });
};

Morana.run = function() {
    this.render();
};

Morana.loadSprite = function(imageName) {
    var image = new Image();
    image.src = imageName;
    return image;
};

Morana.drawSprite = function(imageObject, x, y, rotation, scale) {
    var w = imageObject.width;
    var h = imageObject.height;
    
    this.ctx.save();
    this.ctx.translate(x, y);
    this.ctx.rotate(rotation);
    this.ctx.scale(scale, scale);
    this.ctx.drawImage(imageObject, 0, 0, w, h, -w/2, -h/2, w, h);
    this.ctx.restore();
};

Morana.drawText = function(ctx, text, x, y, color, font) {
    ctx.fillStyle = color;
    ctx.font = font;
    ctx.fillText(text, x, y);
};

Morana.goalArea = function(puck) {

    var that = this;

    if(puck.x > 909 && puck.y < 595 && puck.y > 180){
        this.goal = 'GOAL!';
        this.cpuScore += 1;
        this.puckObj.x = 650;
        this.puckObj.y = 350;
        this.puckObj.vX = 0;
        this.puckObj.vY = 0;

        this.scored = true;

        setTimeout(function() {
            that.reset()
        }, 2000);
    }
    
    if(puck.x < 100 && puck.y < 595 && puck.y > 180){
        this.goal = 'GOAL!';
        this.playerScore += 1;
        this.puckObj.x = 650;
        this.puckObj.y = 350;
        this.puckObj.vX = 0;
        this.puckObj.vY = 0;
        this.scored = true;

        setTimeout(function() {
            that.reset()
        }, 2000);
    }
};

Morana.cpuMovement = function(object, target) {
    var dx = object.x - target.x;
    var distance = Math.sqrt(dx * dx);

    if(target.x < 500 && distance < object.x + target.radius) {
        Hal9K.moveObjectTo(object, target.x - (target.radius * 2), target.y);
    } 

    if(target.x > 510) {
        Hal9K.moveObjectTo(object, 200, 400);
    }

    if(target.x > 500 && target.vX < 2 && target.vY < 2) {
        object.vX = 0;
        object.vY = 0;
    }
};

Morana.reset = function() {
    this.puckObj.x = 650;
    this.puckObj.y = 350;
    this.puckObj.vX = 0;
    this.puckObj.vY = 0;
    
    this.playerPaddleObj.x = 850;
    this.playerPaddleObj.y = 350;
    this.playerPaddleObj.vX = 0;
    this.playerPaddleObj.vY = 0;

    this.cpuPaddleObj.x = 200;
    this.cpuPaddleObj.y = 350;
    this.cpuPaddleObj.vX = 0;
    this.cpuPaddleObj.vY = 0;

    this.goal = '';
    this.scored = false;
};

document.onkeypress = function(e) {
    if(e.keyCode === 114) { //r key
        Morana.reset();
    }
};

document.onmousemove = function(e) {
    Morana.playerPaddleObj.dx = Morana.playerPaddleObj.x;
    Morana.playerPaddleObj.dy = Morana.playerPaddleObj.y;


    Morana.playerPaddleObj.x = e.x;
    Morana.playerPaddleObj.y = e.y;
    
    Morana.playerPaddleObj.vX = Morana.playerPaddleObj.x - Morana.playerPaddleObj.dx;
    Morana.playerPaddleObj.vY = Morana.playerPaddleObj.y - Morana.playerPaddleObj.dy;
};

document.ontouchstart = function(e) {
    e.preventDefault();
    Morana.playerPaddleObj.x = e.pageX;
    Morana.playerPaddleObj.y = e.pageY;
};


document.ontouchmove = function(e) {
    e.preventDefault();
    Morana.playerPaddleObj.dx = Morana.playerPaddleObj.x;
    Morana.playerPaddleObj.dy = Morana.playerParddleObj.y;

    Morana.playerPaddleObj.x = e.pageX;
    Morana.playerPaddleObj.y = e.pageY;
    
    Morana.playerPaddleObj.vX = Morana.playerPaddleObj.x - Morana.playerPaddleObj.dx;
    Morana.playerPaddleObj.vY = Morana.playerPaddleObj.y - Morana.playerPaddleObj.dy;
};
