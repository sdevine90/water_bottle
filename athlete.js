var bottle = require('./water_bottle');


var athlete = {
  hydration: 100,
  distance_covered: 0,
  run: function(){
    if (this.hydration > 0){
      this.hydration -= 10; 
      this.distance_covered += 10;
      if (this.hydration < 0){
        this.hydration = 0;
      }
    }
  },
  drink: function(){
    if (bottle.volume > 0){
      this.hydration += 10;
      bottle.drink()
      if (this.hydration > 100){
        this.hydration = 100;
      }
    }
  }
};

  module.exports = athlete;
