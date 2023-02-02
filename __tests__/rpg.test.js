import {Avatar, Game, Npc} from './../src/js/rpg';

//test 1.3
describe('Avatar', () => {
});
test('should create new Avatar object', () => {
  const hero = new Avatar();
  expect(hero.karma).toEqual(undefined);
  expect(hero.physicalA).toEqual(undefined);
  expect(hero.health).toEqual(undefined);
  expect(hero.experience).toEqual(undefined);
  expect(hero.inventory).toEqual(undefined);
});

//test 2.3
describe('Game', () => {
})
test('should create new Game object', () =>{
  const game1 = new Game();
  expect(game1.npcsArray).toEqual(undefined);
  expect(game1.avatar).toEqual(undefined);
})

//test 3.4
describe('Npc', () => {
})
test('should create new Npc Object', () =>{
  const npc1 = new Npc();
  expect(npc1.karma).toEqual(undefined);
  expect(npc1.physicalA).toEqual(undefined); 
  expect(npc1.health).toEqual(undefined);
  expect(npc1.experience).toEqual(undefined);
  expect(npc1.inventory).toEqual(undefined);
})

//test 4.2
test('should generate new Avatar with random attributes', () =>{
  const game1 = new Game;
  const hero1 = game1.characterGenerator();
  expect(hero1.karma).toBeLessThan(6);
  expect(hero1.karma).toBeGreaterThanOrEqual(1);
  expect(hero1.physicalA).toBeGreaterThanOrEqual(1);
  expect(hero1.physicalA).toBeLessThan(6);
  expect(hero1.health).toBeGreaterThanOrEqual(1);
  expect(hero1.health).toBeLessThan(6);
  expect(hero1.experience).toBeGreaterThanOrEqual(1);
  expect(hero1.experience).toBeLessThan(6);
  expect(hero1.inventory).toEqual([""]);
});
//test 5
test('should generate new npc with random attributes', () =>{
  const game1 = new Game;
  const zombie1 = game1.npcGenerator();
  expect(zombie1.karma).toBeLessThan(4);
  expect(zombie1.karma).toBeGreaterThanOrEqual(1);
  expect(zombie1.physicalA).toBeGreaterThanOrEqual(1);
  expect(zombie1.physicalA).toBeLessThan(4);
  expect(zombie1.health).toBeGreaterThanOrEqual(1);
  expect(zombie1.health).toBeLessThan(4);
  expect(zombie1.experience).toBeGreaterThanOrEqual(1);
  expect(zombie1.experience).toBeLessThan(4);
  expect(zombie1.inventory).toEqual([""]);
});

//test 6.1
describe('Game.startProcess', () => {
})
test('generates characters and puts them into the game', () =>{
const game1 = new Game; 
game1.startProcess(wrong);
expect(game1.npcsArray).toBeDefined;
expect(game1.avatar).toBeDefined;
});


//--------------

//test 7 turnProcess
//test('completes turn, or 1 avatar choice')