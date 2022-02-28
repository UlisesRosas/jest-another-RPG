const Potion = require('../lib/Potion');
const Character = require('./Character');

// function Player(name = '') {
//   this.name = name;

//   this.health = Math.floor(Math.random() * 10 + 95);
//   this.strength = Math.floor(Math.random() * 5 + 7);
//   this.agility = Math.floor(Math.random() * 5 + 7);

//   this.inventory = [new Potion('health'), new Potion()];

// }

// // inherit prototype methods from Character here: must be declared before any of the other methods to avoid overwriting
// Player.prototype = Object.create(Character.prototype);
  
// // these methods are inheriting the rest of the info inside the Potion constructor
// // its adding on to it from the ouside of the constructor

// Player.prototype.getStats = function() {
//   return {
//     potions: this.inventory.length,
//     health: this.health,
//     strength: this.strength,
//     agility: this.agility
//   };
// };

// Player.prototype.getInventory = function() {
//   if (this.inventory.length) {
//     return this.inventory;
//   }
//   return false;
// };



// Player.prototype.addPotion = function(potion) {
//   this.inventory.push(potion);
// };

// Player.prototype.usePotion = function(index) {
//   const potion = this.getInventory().splice(index, 1)[0];

//   switch (potion.name) {
//     case 'agility':
//       this.agility += potion.value;
//       break;
//     case 'health':
//       this.health += potion.value;
//       break;
//     case 'strength':
//       this.strength += potion.value;
//       break;
//   }
// };

// ES6 version of whats above. The ES6 constructor does not need the syntax prototype because 
// the method id defined inside of the constructor function and can call on them through inheritance 

class Player extends Character {
  constructor(name = '') {
    super(name);

    this.inventory = [new Potion('health'), new Potion()];
  }

  getStats() {
    return {
      potions: this.inventory.length,
      health: this.health,
      strength: this.strength,
      agility: this.agility
    };
  }

  getInventory() {
    if (this.inventory.length) {
      return this.inventory;
    }
    return false;
  }

  addPotion(potion) {
    this.inventory.push(potion);
  }

  usePotion(index) {
    const potion = this.inventory.splice(index, 1)[0];

    switch (potion.name) {
      case 'agility':
        this.agility += potion.value;
        break;
      case 'health':
        this.health += potion.value;
        break;
      case 'strength':
        this.strength += potion.value;
        break;
    }
  }
}

  module.exports = Player;