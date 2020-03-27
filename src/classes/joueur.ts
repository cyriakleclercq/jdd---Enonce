import { Gobelet } from './gobelet'

export class Joueur {

    private _nom: string
    private _score: number

    constructor(nom: string) {
        this._nom = nom
        this._score = 0
    }


    public set Nom(n: string) {
        this._nom = n;
    }


    public get Nom(): string {
        return this._nom
    }

    public set Score(s: number) {
        this._score = s;
    }


    public get Score(): number {
        return this._score
    }

    jouer(gobelet: Gobelet) {
        gobelet.lancerGobelet();
        gobelet.afficher_score;
        this._score += gobelet.ValeurGobelet;
    }

    afficherScore() {
        console.log(this._nom + "fait un score de : " + this._score)
    }

}