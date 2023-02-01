export class Avatar {
  constructor(heroName) {
    this.heroName = heroName;
    this.karma = 0;
    this.physicalA = 0;
    this.health = 0;
    this.experience = 0;
    this.inventory = [];
  }
}

export class Game {
  constructor(npcsArrayObjects) {
    this.npcsArrayObjects = []; 
  }
  
  avatarCreator(avatarName) {
    avatarName = new Avatar;
    return {heroName: avatarName, karma: 1, physicalA: 1, health: 1, experience: 1, inventory: ["pants", "shirt"]}
  }
}
export class Npc {
  constructor(npc1) {
    this.karma = (0)
    this.health = (0)
    this.physicalA = (0)
    this.inventory = [];
    this.experience = (0)
  }
}