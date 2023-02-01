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
  constructor(gameName) {
    this.avatarCreator = (0);
    this.npcCreator = (0);
    this.npcsArrayObjects = []; 
    this.turnProcess = (0);
    this.avatarUpdater = (0);
    this.npcUpdater = (0);
  }
  // avatarCreator(Name) {
  //   Name = new Avatar;
  //   return {heroName: Name, karma: 1, physicalA: 1, health: 1, experience: 1, inventory: ["pants", "shirt"]}
  // }
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