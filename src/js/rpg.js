export class Avatar {
  constructor(karma, physicalA, health, experience, inventory) {
    this.karma = 0;
    this.physicalA = 0;
    this.health = 0;
    this.experience = 0;
    this.inventory = [];
  }
}

export class Game {
  constructor() {
    this.npcsArray = []; 
    this.avatar = {};
  }
  
  characterGenerator = () => {
    hero1 = new Avatar(1,1,1,1,["nothing"])
    return hero1;
  }
}

export class Npc {
  constructor(karma, health, physicalA, experience, inventory) {
    this.karma = (0)
    this.physicalA = (0)
    this.health = (0)
    this.experience = (0)
    this.inventory = [];
  }
}
