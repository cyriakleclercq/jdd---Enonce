import { De } from './de'

export class Gobelet extends De {

    private _valeurGobelet: number
    private _des: number[]

    constructor(nb_des: number) {
        super()
        this._valeurGobelet = 0
        this._des = []
        this.PushDe(nb_des)
    }

    set ValeurGobelet(param: number) {
        this._valeurGobelet = param
    }

    get ValeurGobelet() {
        return this._valeurGobelet
    }

    public PushDe(param: number) {

        this._valeurGobelet = 0

        for (let i = 0; i < param; i++) {
            this._des.push(this.Valeur)
        }
    }

    public lancerGobelet() {

        let score: number = 0

        for (let i = 0; i < this._des.length; i++) {
            this.lancer()
            this._des[i] = this.Valeur
            score += this._des[i]
        }
        this._valeurGobelet += score;

        this.afficher_score(this._valeurGobelet)
    }

    public afficher_score(score: number) {

        console.log("fait un lancé de : " + score)
    }

}