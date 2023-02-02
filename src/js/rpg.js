export class Avatar {
  constructor(karma, physicalA, health, experience, inventory) {
    this.karma = karma;
    this.physicalA = physicalA;
    this.health = health;
    this.experience = experience;
    this.inventory = inventory;
    this.turn = 0; //not needed as argument
  }
}
export class Npc {
  constructor(karma, health, physicalA, experience, inventory) {
    this.karma = karma
    this.physicalA = physicalA
    this.health = health
    this.experience = experience
    this.inventory = inventory
  }
}
export class Game {
  constructor(npcsArray, avatar) {
    this.avatar = avatar;
    this.npcsArray = npcsArray; 
  }
  characterGenerator = () => {
    const roll = () => { 
      return Math.ceil(Math.random() * 5) 
    }
    const buddy = new Avatar(roll(),roll(),roll(),roll(),[""]);
    return buddy;
  }
  npcGenerator = () => {
    const roll = () => { 
      return Math.ceil(Math.random() * 3) 
    }
    const zombie = new Npc(roll(),roll(),roll(),roll(),[""])
    return zombie;
  }
  turnProcess = () => {
    //add turn to Avatar
    //this.hero1.turn ++
  //return this.hero1.turn;
  
  };
}


// //-------------probably delete
// startProcess = () => {
//   const game1 = new Game;
//   let hero1 = game1.characterGenerator();
//   let zombie1 = game1.npcGenerator();
//   game1.avatar = hero1;
//   game1.npcsArray =zombie1;
//   return game1;
// }