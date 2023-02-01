import {Avatar, Game} from './../src/js/rpg';

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

//test 2
describe('Game', () => {
})
test('should create new Game object', () =>{
  const game1 = new Game("game1");
  expect(game1.avatarCreator).toEqual(wrong);
  expect(game1.npcCreator).toEqual(0)
  expect(game1.turn).toEqual({});
  expect(game1.npcs).toEqual({});
})






//test 3

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