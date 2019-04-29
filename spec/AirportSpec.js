'use strict';

describe('Airport', function () {
  var airport, plane, plane2, plane3
  beforeEach(function () {
    airport = new Airport();
    plane = jasmine.createSpyObj('plane', ['isLand', 'isTakeoff']);
    plane2 = jasmine.createSpyObj('plane', ['isLand', 'isTakeoff']);
    plane3 = jasmine.createSpyObj('plane', ['isLand', 'isTakeoff']);
  });

  it("create airport instance", function () {
    expect(airport).not.toBeNull();
  });

  it("land a plane into apron", function () {
    var plane = jasmine.createSpyObj('plane', ['isLand']);
    airport.land(plane);
    expect(airport.apron).toContain(plane);
  });

  it("could land more than one plane", function () {
    airport.land(plane);
    airport.land(plane2);
    airport.land(plane3);
    expect(airport.apron).toEqual([plane, plane2, plane3]);
  });

  it("instruct a plane to takeoff by index", function () {
    airport.land(plane);
    airport.land(plane2);
    airport.land(plane3);
    var takeoffPlane = airport.takeoff(1)
    expect(takeoffPlane).toEqual(plane2);
    expect(airport.apron).toEqual([plane, plane3]);
  });

});