// node will know that it is a .js file if not specified
const Player = require('../lib/Player');
const Potion = require('../lib/Potion');
console.log(new Potion());

jest.mock('../lib/Potion');

test('creates a player object', () => {
    const player = new Player('Dave');
  
    expect(player.name).toBe('Dave');
    expect(player.health).toEqual(expect.any(Number));
    expect(player.strength).toEqual(expect.any(Number));
    expect(player.agility).toEqual(expect.any(Number));
    expect(player.inventory).toEqual(
      expect.arrayContaining([expect.any(Object)])
    );
  });

  test("gets player's stats as an object", () => {
    const player = new Player('Dave');
  
    expect(player.getStats()).toHaveProperty('potions');
    expect(player.getStats()).toHaveProperty('health');
    expect(player.getStats()).toHaveProperty('strength');
    expect(player.getStats()).toHaveProperty('agility');
  });

  test('gets inventory from player or returns false', () => {
    const player = new Player('Dave');
  
    expect(player.getInventory()).toEqual(expect.any(Array));
  // makes the array empty to force the false case
    player.inventory = [];
  
    expect(player.getInventory()).toEqual(false);
  });
  