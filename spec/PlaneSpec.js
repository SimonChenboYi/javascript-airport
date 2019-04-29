'use strict';

describe('Plane', function () {
  var plane
  beforeEach(function () {
    plane = new Plane();
  });

  it("create plane instance", function () {
    expect(plane).not.toBeNull();
  });

  it("land into apron", function () {
    plane.isLand();
    expect(plane.isInAprone()).toEqual(true);
  });

  it("leave apron and take off", function () {
    plane.isTakeoff();
    expect(plane.isInAprone()).toEqual(false);
  });

});