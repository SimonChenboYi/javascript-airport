'use strict';

function Airport (){
  this.apron = [];
};

Airport.prototype.land = function(plane){
  plane.land();
  this.apron.push(plane);
};