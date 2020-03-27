export class De {

    private _valeur: number

    constructor() {
        this._valeur = 0
    }

    public set Valeur(v: number) {
        this._valeur = v;
    }

    public get Valeur(): number {
        return this._valeur
    }

    public lancer() {
        this._valeur = Math.floor(Math.random() * (6 - 1)) + 1
    }
}