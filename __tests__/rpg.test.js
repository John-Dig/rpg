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
  expect(game1.npc).toEqual(undefined);
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
//this is the Startup Process---------
describe('adding beforeEach', () => {
  let game1 = new Game;
  let hero1;
  let zombie1;
  beforeEach(() => {
    //this creates game, hero, 1 zombie, and puts them into the game.
    hero1 = game1.characterGenerator();
    zombie1 = game1.npcGenerator();
    game1.avatar = hero1;
    game1.npc =zombie1;
  });
  
  //test 4.4
  test('should generate new Avatar with random attributes', () =>{
    //const game1 = new Game;
    expect(game1.avatar.karma).toBeLessThan(6);
    expect(game1.avatar.karma).toBeGreaterThanOrEqual(1);
    expect(game1.avatar.physicalA).toBeGreaterThanOrEqual(1);
    expect(game1.avatar.physicalA).toBeLessThan(6);
    expect(game1.avatar.health).toBeGreaterThanOrEqual(1);
    expect(game1.avatar.health).toBeLessThan(6);
    expect(game1.avatar.experience).toBeGreaterThanOrEqual(1);
    expect(game1.avatar.experience).toBeLessThan(6);
    expect(game1.avatar.inventory).toEqual([""]);
  });
  //test 5.1
  test('should generate new npc with random attributes', () =>{
    expect(game1.npc.karma).toBeLessThan(4);
    expect(game1.npc.karma).toBeGreaterThanOrEqual(1);
    expect(game1.npc.physicalA).toBeGreaterThanOrEqual(1);
    expect(game1.npc.physicalA).toBeLessThan(4);
    expect(game1.npc.health).toBeGreaterThanOrEqual(1);
    expect(game1.npc.health).toBeLessThan(4);
    expect(game1.npc.experience).toBeGreaterThanOrEqual(1);
    expect(game1.npc.experience).toBeLessThan(4);
    expect(game1.npc.inventory).toEqual([""]);
  });
  
  //test 6.6
  describe('just a checker', () => {
  })
  test('checks that characters are in the game', () =>{
    expect(game1.avatar).toBeTruthy();
    expect(game1.npc).toBeTruthy();
  });
  
  //test 7.2
  test('completes turn', () => {
    expect(game1.avatar.turn).toEqual(0);
    game1.turnProcess();
    expect(game1.avatar.turn).toEqual(1);
  });
  //test 8.2
  test('completes full turn, also hitting for 1 or 2, points damage', () => {
    const preHealth = game1.npc.health 
    game1.turnProcess();
    expect(game1.npc.health < preHealth).toEqual(true);
  })
});  //closes beforeEach

//starting UI
