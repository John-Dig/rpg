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
    this.npcCreator = (0)
    this.turn = {};
    this.npcs = {};
  }
}