const Potion = require('./Potion');
const Character = require('./Character');
// inherits character constructor methods to use in this constructor
// class Enemy extends Character {

// }

// function Enemy(name, weapon) {
//   this.name = name;
//   this.weapon = weapon;
//   this.potion = new Potion();

//   this.health = Math.floor(Math.random() * 10 + 85);
//   this.strength = Math.floor(Math.random() * 5 + 5);
//   this.agility = Math.floor(Math.random() * 5 + 5);
// }
// // inherit prototype methods from Character here: must be declared before any other methods to avoid overwriting
// Enemy.prototype = Object.create(Character.prototype);


// Enemy.prototype.getDescription = function() {
//   return `A ${this.name} holding a ${this.weapon} has appeared!`;
// };


// ES6 version and also refactored with inherited methods

class Enemy extends Character {
    constructor(name, weapon) {
      super(name);
  
      this.weapon = weapon;
      this.potion = new Potion();
    }
  
    getDescription() {
      return `A ${this.name} holding a ${this.weapon} has appeared!`;
    }
  }
  


module.exports = Enemy;
