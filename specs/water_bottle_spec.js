var bottle = require('../water_bottle');
var assert = require('assert');

// this below helps reset the bottle volume each time rather than having to say bottle.empty etc...

// describe('Water Bottle', function(){
//   beforeEach(function(){
//     bottle.volume = 0;
//   });


// describe('Water Bottle', function(){
//   it('should be empty at the start', function(){
//     assert.equal(0, bottle.volume);
//   });
//   it('should be 100 when filled', function(){
//     bottle.fill();
//     assert.equal(100, bottle.volume);
//   });
//   it('should go down by ten', function(){
//     bottle.drink();
//     assert.equal(90, bottle.volume);
//   });
//   it('should be zero when emptied', function(){
//     bottle.emptied();
//     assert.equal(0, bottle.volume);
//   });
//   it('can not go below zero', function(){
//     bottle.emptied();
//     bottle.drink();
//     assert.equal(0, bottle.volume);
//   });
// });