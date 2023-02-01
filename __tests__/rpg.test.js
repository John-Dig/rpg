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

//test 2.2
describe('Game', () => {
})
test('should create new Game object', () =>{
  const game1 = new Game("game1");
  expect(game1.npcsArray).toEqual([]);
})

//test 3.2
describe('Npc', () => {
})
test('should create new Npc Object', () =>{
  const npc1 = new Npc("npc1");
  expect(npc1.karma).toEqual(0);
  expect(npc1.physicalA).toEqual(0); 
  expect(npc1.health).toEqual(0);
  expect(npc1.experience).toEqual(0);
  expect(npc1.inventory).toEqual([]);
})

// //test 4.1
// test('should generate new Avatar', () => {
//   const game1 = new Game;
//   expect(game1.characterGenerator = {karma: 1, physicalA: 1, health: 1, experience: 1, inventory:["nothing"]});
// });

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
  expect(hero1.inventory).toEqual(["nothing"]);
});
//test x

// test('should generate new hero abilities', () => {
//   const hero1 = new Avatar("hero1")
//   expect(hero1.generate)
// });

//test 2

// describe('OBJECT', () => {
// });
// test('DESCRIBE TEST', () => {
//   const VARIABLE = new OBJECT();
//   expect(VARIABLE.THING).toEqual();
// });