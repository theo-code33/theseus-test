import Player from "./Player";

const MAGE_LIFE = 100;
const MAGE_STRENGTH = 20;

export default class Mage extends Player {
    constructor(name: string) {
        super(name, MAGE_LIFE, MAGE_STRENGTH);
    }
}