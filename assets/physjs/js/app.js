/*jslint browser: true*/
/*global console, PhysJS*/

(function() {
    'use strict';

    window.PhysJS = {
        Constants: {
            Gravity: -9.8
        },

        Kinematics: {
            calculateVelocity: function (displacement, time) {
                return displacement / time;
            },

            calculateTime: function (displacement, velocity) {
                return displacement / velocity;
            },

            calculateDisplacement: function (time, velocity) {
                return time * velocity;
            },

            calculateVector2D: function (scalar, angle) {

                var scalarX = 0,
                    scalarY = 0;

                //convert angle to radians for function
                angle = angle * (Math.PI / 180);

                //vertical
                scalarY = Math.sin(angle) * scalar;

                //horizontal 
                scalarX = Math.cos(angle) * scalar;

                return {
                    x: scalarX,
                    y: scalarY
                };
            },

            calculateDistanceOfProjectile: function (scalar, angle) {
                var initialVelocity = 0,
                    finalVelocity = 0,
                    changeInVelocityX = 0,
                    changeInVelocityY = 0,
                    changeInTime = 0,
                    scalarObj = null;

                scalarObj = this.calculateVector2D(scalar, angle);
                initialVelocity = scalarObj.y;
                finalVelocity = -(scalarObj.y);
                changeInVelocityY = finalVelocity - initialVelocity;
                changeInTime = changeInVelocityY / PhysJS.Constants.Gravity;
                changeInVelocityX = scalarObj.x * changeInTime;

                return changeInVelocityX;
            },

            calculateTimeInAir: function (initialVector) {

                //Two points when displacement is 0: start and landing
                //One point when time is 0: start

                var displacement = 0,
                    changeInTime = 0,
                    gravity = PhysJS.Constants.Gravity;

                //displacement = initialVector * changeInTime + (gravity * (Math.pow(changeInTime, 2)) / 2);

                changeInTime = initialVector / (gravity / -2);

                return changeInTime;

            }
        }
    };
}());