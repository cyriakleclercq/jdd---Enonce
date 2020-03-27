import { Gobelet } from "./gobelet";
import { Joueur } from "./joueur";

export class Partie {

    private _joueurs: Joueur[] = [];
    private _nb_tours: number
    private _gobelet: Gobelet

    constructor(nb_tours: number, nb_des: number) {
        this._nb_tours = nb_tours
        this._gobelet = new Gobelet(nb_des)
    }

    public set NbTour(nb: number) {
        this._nb_tours = nb;
    }


    public get NbTour(): number {
        return this._nb_tours
    }

    initialiser() {
        let participants: string[] = ['Monk', 'Superman', 'Batman', 'ActionMan'];

        participants.forEach(participant => {
            let joueur = new Joueur(participant);
            this._joueurs.push(joueur)
        });

        console.log('Les joueurs présents sont :');
        this._joueurs.forEach(joueur => {
            console.log(joueur.Nom);
        });
    }

    lancer() {

        for (let i = 1; i <= this._nb_tours; i++) {

            console.log("\n Tour :" + i);

            this._joueurs.forEach(joueur => {

                console.log("\n" + joueur.Nom + " lance le gobelet");

                joueur.jouer(this._gobelet);

                console.log(joueur.Nom + " fait un score de " + joueur.Score);

                joueur.afficherScore;
            });
        }
    }

    afficher_gagnant() {

        let scoreGagnant = 0;
        let nomGagnant = '';

        this._joueurs.forEach(joueur => {
            if (joueur.Score > scoreGagnant) {

                scoreGagnant = joueur.Score;
                nomGagnant = joueur.Nom;
            }
        });

        console.log(nomGagnant + " gagne avec " + scoreGagnant + " points.");
    }
}