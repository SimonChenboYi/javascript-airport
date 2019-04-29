'use strict';

describe('Plane',function(){
  var plane
  beforeEach(function(){
     plane = new Plane();
  });

  it("create plane instance", function() {
    expect(plane).not.toBeNull();
  });

  it("land into apron",function(){
    plane.land();
    expect(plane.isInAprone()).toEqual(true);
  });

});