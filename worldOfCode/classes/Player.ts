const DEFAULT_EXPERIENCE : number = 0;
const DEFAULT_WEAPONS : string[] = [];
const DEFAULT_LEVEL : number = 0;

const EXPERIENCE_POINTS_PER_KILL : number = 80;
const EXPERIENCE_TO_LEVEL_UP : number = 100;

const MAX_ATTACK_DAMAGE_SUPPLEMENTARY : number = 10;

const MAX_HEAL_REGAIN : number = 10;
const START_HEAL_REGAIN : number = 5;

export default class Player {
    private _life: number;
    private _initialLife: number;
    private _strength: number;
    private _experience: number;
    private _weapons: string[];
    private _level: number;
    private _name: string;

    constructor(name: string, life: number, strength: number) {
        this._name = name;
        this._life = life;
        this._initialLife = life;
        this._strength = strength;
        this._experience = DEFAULT_EXPERIENCE;
        this._weapons = DEFAULT_WEAPONS;
        this._level = DEFAULT_LEVEL;
    }

    private _isDead(player: Player) {
        this._experience += EXPERIENCE_POINTS_PER_KILL;
        console.log(`${player._name} is dead!`);
        if(this._experience >= EXPERIENCE_TO_LEVEL_UP) {
            this._level++;
            this._experience = 0;
            console.log(`${this._name} has leveled up!`);
        }
    }

    attack(player: Player) {
        const damage = this._strength + Math.floor(Math.random() * MAX_ATTACK_DAMAGE_SUPPLEMENTARY);
        if(player._life - damage <= 0) {
            player._life = player._initialLife;
            this._isDead(player);
        }else{
            player._life -= damage;
        }
        console.log(`${this._name} attacks ${player._name} and inflicts ${damage} damage`);
    }

    status() {
        console.log("--------------------------");
        console.log(`Status of ${this._name}:`);
        console.log(`Life: ${this._life}`);
        console.log(`Strength: ${this._strength}`);
        console.log(`Experience: ${this._experience}`);
        console.log(`Weapons: ${this._weapons.length > 0 ? this._weapons : "No weapons"}`);
        console.log(`Level: ${this._level}`);
        console.log("--------------------------");
    }
    heal() {
        const regain = Math.floor(Math.random() * MAX_HEAL_REGAIN) + START_HEAL_REGAIN;
        if(this._life + regain > this._initialLife) {
            this._life = this._initialLife;
        }else{
            this._life += regain;
        }
        console.log(`${this._name} has regained ${regain} life points`);
        
    }
}
