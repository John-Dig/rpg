export class Avatar {
  constructor(heroName, karma, physicalA, health, experience, inventory) {
    this.heroName = heroName;
    this.karma = 0;
    this.physicalA = 0;
    this.health = 0;
    this.experience = 0;
    this.inventory = [];
  }
}

export class Game {
  constructor(npcsArray) {
    this.npcsArray = []; 
  }
  
  // avatarCreator(avatarName) {
  //   avatarName = new Avatar;
  //   return {heroName: avatarName, karma: 1, physicalA: 1, health: 1, experience: 1, inventory: ["pants", "shirt"]}
  // }
}
export class Npc {
  constructor(karma, health, physicalA, experience, inventory) {
    this.karma = (0)
    this.health = (0)
    this.physicalA = (0)
    this.experience = (0)
    this.inventory = [];
  }
}