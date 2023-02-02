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
  constructor(npc, avatar) {
    this.avatar = avatar;
    this.npc = npc; 
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
   // add turn to Avatar
    this.avatar.turn ++
    // console.log("attacked the zombie")
    // this.npc.health --
    return this.avatar.turn , this.npc.health; 
  
  };



// //-------------probably delete
// startProcess = () => {
//   const game1 = new Game;
//   let hero1 = game1.characterGenerator();
//   let zombie1 = game1.npcGenerator();
//   game1.avatar = hero1;
//   game1.npc =zombie1;
//   return game1;
}