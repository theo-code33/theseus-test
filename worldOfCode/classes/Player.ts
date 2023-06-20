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

}
