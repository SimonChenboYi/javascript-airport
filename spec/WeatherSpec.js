'use strict';

describe("Weather",function(){
var weather

beforeEach(function(){
  weather = new Weather();
});

  it("have chance to be stormy",function(){
    spyOn(Math,"random").and.returnValue(0.1)
    expect(weather.forecast()).toEqual("stormy")
  });

  it("have chance to be sunny",function(){
    spyOn(Math,"random").and.returnValue(0.3)
    expect(weather.forecast()).toEqual("sunny")
  });

})