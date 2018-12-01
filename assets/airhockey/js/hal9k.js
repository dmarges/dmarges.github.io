var Hal9K = {};

Hal9K.calculateClosingVelocity = function(object, target) {

	var objVX = object.vX,
		objVY = object.vY,
		targetVX = target.vX,
		targetVY = target.vY,
		cX = 0,
		cY = 0;

	cX = targetVX - objVX;
	cY = targetVY - objVY;

	return {cX: cX, cY: cY};

};

Hal9K.calculateRangeToClose = function(object, target) {
	var objX = object.x,
	objY = object.y,
	targetX = target.x,
	targetY = target.y,
	sX = 0,
	sY = 0;

	sX = targetX - objX;
	sY = targetY - objY;

	return {sX: sX, sY: sY};
};

Hal9K.calculateTimeToClose = function(closing, range) {
	var tX = range.sX / closing.cX,
		tY = range.sY / closing.cY;

	return {tX: tX, tY: tY};		
};

Hal9K.calculatePredictedPosition = function(object, target) {
	var vr = this.calculateClosingVelocity(object, target);
	var sr = this.calculateRangeToClose(object, target);
	var tc = this.calculateTimeToClose(vr, sr);

	return {pX: sr.sX + (vr.cX / tc.tX), pY: sr.sY + (vr.cY / tc.tY)}
};

Hal9K.moveObjectTo = function(object, x, y) {
	if(object.x < x) {
		object.vX = 13;
	} else if(object.x > x) {
		object.vX = -13;
	} else if(object.x === x) {
		object.vX = 0;
	} else {
		object.vX = 0;
	}

	if(object.y < y) {
		object.vY = 13;
	} else if(object.y > y) {
		object.vY = -13;
	} else if(object.y === y) {
		object.vX = 0;
	} else {
		object.vY = 0;
	}
};