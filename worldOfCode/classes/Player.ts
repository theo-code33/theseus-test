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
}
