export class Avatar {
  constructor(karma, physicalA, health, experience, inventory) {
    this.karma = karma;
    this.physicalA = physicalA;
    this.health = health;
    this.experience = experience;
    this.inventory = inventory;
  }
}
export class Game {
  constructor(npcsArray, avatar) {
    this.npcsArray = npcsArray; 
    this.avatar = avatar;
  }
  //2.0
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
  //-------------need to change game inputs to undefined, need to finish below
  characterAdder = () => {
    this.npcsArray 
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
