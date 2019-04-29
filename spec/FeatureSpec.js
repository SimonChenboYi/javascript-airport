'use strict';

describe("Feature test:", function () {
  var plane, airport
  beforeEach(function () {
    plane = new Plane();
    airport = new Airport();
  });

  it("airport instruct a plane to land", function () {
    airport.land(plane)
    expect(airport.apron).toContain(plane)
    expect(plane.isInAprone()).toEqual(true);
  });


});