'use strict';

describe("Feature test:", function () {
  var plane, plane2, plane3, airport
  beforeEach(function () {
    plane = new Plane();
    plane2 = new Plane();
    plane3 = new Plane();
    airport = new Airport();
  });

  it("airport instruct a plane to land", function () {
    airport.land(plane)
    expect(airport.apron).toContain(plane)
    expect(plane.isInAprone()).toEqual(true);
  });

  it("airport instruct a plane to take off", function () {
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

});