var bottle = require('../water_bottle');
var athlete = require('../athlete');
var assert = require('assert');

describe('Athlete', function(){
  it('hydration', function(){
    assert.equal(100, athlete.hydration);
  });
  it('hydration goes down and distance goes up when runs', function(){
    athlete.run();
    assert.equal(90, athlete.hydration);
    assert.equal(10, athlete.distance_covered);
  });
  it('cant run when dehydrated', function(){
    athlete.hydration = 0;
    athlete.distance_covered = 0;
    athlete.run();
    assert.equal(0, athlete.hydration);
    assert.equal(0, athlete.distance_covered);
  });
  it('should increase hydration by drinking', function(){
    athlete.hydration = 0;
    bottle.volume = 100;
    athlete.drink();
    assert.equal(10, athlete.hydration);
    bottle.volume = 0;
  });
});
