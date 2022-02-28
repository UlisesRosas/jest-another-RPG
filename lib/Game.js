const inquirer = require('inquirer');
const Enemy = require('./Enemy');
const Player = require('./Player');


function Game() {
    this.roundNumber = 0;
    this.isPlayerTurn = false;
    this.enemies = [];
    this.currentEnemy;
    this.player;
}

Game.prototype.initializeGame = function () {
    this.enemies.push(new Enemy('goblin', 'sword'));
    this.enemies.push(new Enemy('orc', 'baseball bat'));
    this.enemies.push(new Enemy('skeleton', 'axe'));
    // keeps track of which enemy object is currently fighting 
    this.currentEnemy = this.enemies[0];

    inquirer
  .prompt({
    type: 'text',
    name: 'name',
    message: 'What is your name?'
  })
  // destructure name from the prompt object
//   to not affect the scope of "this" use arrow functions. Using the function key word would have done that
  .then(({ name }) => {
    this.player = new Player(name);

    // test the object creation
    console.log(this.currentEnemy, this.player);
  });   
};


module.exports = Game;