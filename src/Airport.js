'use strict';

function Airport() {
  this.apron = [];
};

Airport.prototype.land = function (plane) {
  plane.isLand();
  this.apron.push(plane);
};

Airport.prototype.takeoff = function (index) {
  var takeoffPlane = this.apron.splice(index, 1)[0];
  takeoffPlane.isTakeoff();
  return takeoffPlane;
}