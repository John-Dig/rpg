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
    // console.log(`turn ${this.avatar.turn} starting`)
    // console.log(`zombie's health is ${this.npc.health}`)
    // const hitStrength = Math.ceil(Math.random() * 2)
    // this.npc.health = this.npc.health - hitStrength;
    // console.log(`you hit the zombie for ${hitStrength} points of damage`)
    // console.log(`zombie's health is ${this.npc.health}`)
    // if (this.npc.health <= 0){
    //   console.log("zombie is dead");
    // }
    // else if (this.npc.health > 0) {
    //   console.log(`zombie is still moving, ${this.npc.health} health left`);
    // }
    // else {console.log("error")};
    // console.log(`turn ${this.avatar.turn} end`)
    // return this.avatar.turn , this.npc.health; 
  
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