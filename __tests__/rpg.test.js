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
    game1.npcsArray =zombie1;
  });
  
  //test 4.3
  test('should generate new Avatar with random attributes', () =>{
    //const game1 = new Game;
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
  //test 5.1
  test('should generate new npc with random attributes', () =>{
    expect(game1.npcsArray.karma).toBeLessThan(4);
    expect(game1.npcsArray.karma).toBeGreaterThanOrEqual(1);
    expect(game1.npcsArray.physicalA).toBeGreaterThanOrEqual(1);
    expect(game1.npcsArray.physicalA).toBeLessThan(4);
    expect(game1.npcsArray.health).toBeGreaterThanOrEqual(1);
    expect(game1.npcsArray.health).toBeLessThan(4);
    expect(game1.npcsArray.experience).toBeGreaterThanOrEqual(1);
    expect(game1.npcsArray.experience).toBeLessThan(4);
    expect(game1.npcsArray.inventory).toEqual([""]);
  });
  
  //test 6.6
  describe('just a checker', () => {
  })
  test('checks that characters are in the game', () =>{
    console.log(game1.avatar);
    console.log(game1.npcsArray);
    expect(game1.avatar).toBeTruthy();
    expect(game1.npcsArray).toBeTruthy();
  });
  
  
  //--------------consider test 6.3
  
  //test 7 turnProcess
  test('completes turn, or 1 avatar choice', () => {
    const preTurnAvatar = game1.avatar;
    const preTurnNpcsArray = game1.npcsArray;
    game1.turnProcess();
    expect(hero1.turn).toEqual(0);
    expect(game1.avatar).toEqual(preTurnAvatar);
    expect(game1.npcsArray).toEqual(preTurnNpcsArray);
    
  });


}); //closes beforeEach