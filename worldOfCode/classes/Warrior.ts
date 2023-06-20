import Player from "./Player";

const WARRIOR_LIFE = 120;
const WARRIOR_STRENGTH = 10;

export default class Warrior extends Player {
  constructor(name: string) {
    super(name, WARRIOR_LIFE, WARRIOR_STRENGTH);
  }
}