'use strict';

function Weather(){};

Weather.prototype.forecast = function(){
  return Math.random() < 0.2 ? "stormy" : "sunny";
}