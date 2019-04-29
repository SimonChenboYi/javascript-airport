'use strict';

function Plane() {
};

Plane.prototype.isLand = function () {
  this.inAprone = true;
};

Plane.prototype.isTakeoff = function () {
  this.inAprone = false;
};

Plane.prototype.isInAprone = function () {
  return this.inAprone;
};