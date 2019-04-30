'use strict';

function Airport(weather = new Weather()) {
  this.apron = [];
  this.weather = weather;
};

Airport.prototype.land = function (plane) {
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