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
  //2.0
  characterGenerator = () => {
    const roll = () => { 
      return Math.ceil(Math.random() * 5) 
    }
    const hero1 = new Avatar(roll(),roll(),roll(),roll(),["nothing"]);
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
