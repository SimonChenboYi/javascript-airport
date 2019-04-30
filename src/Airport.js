'use strict';

function Airport(weather = new Weather()) {
  this.apron = [];
  this.weather = weather;
  this.CAPACITY = 20;
};

Airport.prototype.land = function (plane) {
  if(this.weather.forecast() == "stormy"){
    throw new Error("Too stormy to land")
  }
  if(this.apron.length >= this.CAPACITY){
    throw new Error("Apron is full")
  }
  plane.isLand();
  this.apron.push(plane);
};

Airport.prototype.takeoff = function (index) {
  if(this.weather.forecast() == "stormy"){
    throw new Error("Too stormy to take off")
  }
  var takeoffPlane = this.apron.splice(index, 1)[0];
  takeoffPlane.isTakeoff();
  return takeoffPlane;
}