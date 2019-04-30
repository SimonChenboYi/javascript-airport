'use strict';

describe("Feature test:", function () {
  var plane, plane2, plane3, airport,weather
  beforeEach(function () {
    plane = new Plane();
    plane2 = new Plane();
    plane3 = new Plane();
    weather = new Weather();
    airport = new Airport(weather);
    
  });

  it("airport instruct a plane to land", function () {
    spyOn(Math,"random").and.returnValue(0.9)
    airport.land(plane)
    expect(airport.apron).toContain(plane)
    expect(plane.isInAprone()).toEqual(true);
  });

  it("airport instruct a plane to take off", function () {
    spyOn(Math,"random").and.returnValue(0.9)
    airport.land(plane);
    airport.land(plane2);
    airport.land(plane3);
    expect(airport.apron).toContain(plane2)
    expect(plane2.isInAprone()).toEqual(true);
    var takeoff_plane = airport.takeoff(1);
    expect(takeoff_plane).toEqual(plane2);
    expect(airport.apron).not.toContain(plane2);
    expect(plane2.isInAprone()).toEqual(false);
  });

  it("airport prevent plane taking off when stormy ", function () {
    spyOn(Math,"random").and.returnValue(0.1)
    airport.apron.push(plane);
    
    expect(function(){airport.takeoff(0)}).toThrowError("Too stormy to take off");
  });

  it("airport prevent plane landing when stormy ", function () {
    spyOn(Math,"random").and.returnValue(0.1)
    expect(function(){airport.land(plane)}).toThrowError("Too stormy to land");
  });


});