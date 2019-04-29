'use strict';

function Plane (){
};

Plane.prototype.land = function(){
  this.inAprone = true;
};

Plane.prototype.isInAprone = function(){
  return this.inAprone;
};