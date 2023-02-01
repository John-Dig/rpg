import Avatar from './../src/js/rpg';

//test 1
test('Avatar()', () => {
  const hero = new Avatar()
  expect(hero.karma).toEqual(0);
  expect(hero.physicalA).toEqual(0);
  expect(hero.health).toEqual(0);
  expect(hero.experience).toEqual(0);
  expect(hero.inventory).toEqual([]);
});


// test 2('', () => {
//   const  = new 
//   expect(x).toEqual(y);
//   expect(triangle.side2).toEqual(4);
//   expect(triangle.side3).toEqual(5);
// });