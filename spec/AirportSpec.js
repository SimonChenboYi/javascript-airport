'use strict';

describe('Airport',function(){
  var airport
  beforeEach(function(){
     airport = new Airport();
  });

  it("create airport instance", function() {
    expect(airport).not.toBeNull();
  });

  it("land a plane into apron",function(){
    var plane = jasmine.createSpyObj('plane',['land']);
    airport.land(plane);
    expect(airport.apron).toContain(plane);    
  });

  it("could land more than one plane",function(){
    var plane = jasmine.createSpyObj('plane',['land']);
    var plane2 = jasmine.createSpyObj('plane',['land']);
    var plane3 = jasmine.createSpyObj('plane',['land']);
    airport.land(plane);
    airport.land(plane2);
    airport.land(plane3);
    expect(airport.apron).toEqual([plane,plane2,plane3]);
  });

});