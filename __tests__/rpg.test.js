import {Avatar, Game, Npc} from './../src/js/rpg';

//test 1
describe('Avatar', () => {
});
test('should create new Avatar object', () => {
  const hero = new Avatar("hero");
  expect(hero.heroName).toEqual("hero");
  expect(hero.karma).toEqual(0);
  expect(hero.physicalA).toEqual(0);
  expect(hero.health).toEqual(0);
  expect(hero.experience).toEqual(0);
  expect(hero.inventory).toEqual([]);
});

//test 2.1
describe('Game', () => {
})
test('should create new Game object', () =>{
  const game1 = new Game("game1");
  expect(game1.avatarCreator).toEqual(0);
  expect(game1.npcCreator).toEqual(0)
  expect(game1.npcsArrayObjects).toEqual([]);
  expect(game1.turnProcess).toEqual(0);
  expect(game1.avatarUpdater).toEqual(0);
  expect(game1.npcUpdater).toEqual(0);
})

//test 3.1
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