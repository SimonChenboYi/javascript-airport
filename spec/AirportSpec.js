'use strict';

describe('Airport', function () {
  var airport, plane, plane2, plane3, weather

  beforeEach(function () {
    weather = {forecast : function(){}}
    airport = new Airport(weather);
    plane = jasmine.createSpyObj('plane', ['isLand', 'isTakeoff']);
    plane2 = jasmine.createSpyObj('plane', ['isLand', 'isTakeoff']);
    plane3 = jasmine.createSpyObj('plane', ['isLand', 'isTakeoff']);
  });

  it("create airport instance", function () {
    expect(airport).not.toBeNull();
  });

  it("land a plane into apron", function () {
    spyOn(weather,"forecast").and.returnValue("sunny")
    var plane = jasmine.createSpyObj('plane', ['isLand']);
    airport.land(plane);
    expect(airport.apron).toContain(plane);
  });

  it("could land more than one plane", function () {
    spyOn(weather,"forecast").and.returnValue("sunny")
    airport.land(plane);
    airport.land(plane2);
    airport.land(plane3);
    expect(airport.apron).toEqual([plane, plane2, plane3]);
  });

  it("instruct a plane to takeoff by index", function () {
    spyOn(weather,"forecast").and.returnValue("sunny")
    airport.land(plane);
    airport.land(plane2);
    airport.land(plane3);
    var takeoffPlane = airport.takeoff(1)
    expect(takeoffPlane).toEqual(plane2);
    expect(airport.apron).toEqual([plane, plane3]);
  });

  it("prevent a plane to takeoff when stormy", function(){
    spyOn(weather, 'forecast').and.returnValue("stormy")
    airport.apron.push(plane);
    expect(function(){
      airport.takeoff(0)
    }).toThrowError("Too stormy to take off")
  });

  it("prevent plane landing when stormy ", function () {
    spyOn(weather, 'forecast').and.returnValue("stormy")
    expect(function(){airport.land(plane)}).toThrowError("Too stormy to land");
  });

  it("prevent plane landing when full ", function () {
    spyOn(weather, 'forecast').and.returnValue("sunny")
    for(var i = 0; i<airport.CAPACITY; i++){
      airport.apron.push(new Plane());
    }
    expect(function(){airport.land(plane)}).toThrowError("Apron is full");
  });

});