let allumettes=50;

function UpdateReste (nbAllumettesARetirer) {
    allumettes= allumettes-nbAllumettesARetirer;
    if (allumettes==0) {
        alert("Il ne reste plus d'allumettes. Bravo! Vous avez gagné!");
    }
    else {
    alert("Il reste "+ allumettes+" allumettes");
    }
}

function game() {
    nbJoueurs= prompt("Combien y a-t-il de joueurs?");
    while (allumettes>0) {
    askPlayer();
    }
}   

function askPlayer () {
    for (i=0;i<nbJoueurs && allumettes>0; i++) {
    nbAllumettesARetirer= prompt(" Joueur "+ (i+1) + " : Combien d'alumettes souhaitez-vous retirer? (Saisir un nombre entre 1 et 6)");
    if (nbAllumettesARetirer<1 || nbAllumettesARetirer>6) {
    alert("Joueur " + (i+1) + " : Saisir un nb entre 1 et 6");
    nbAllumettesARetirer= prompt("Joueur "+ (i+1) + " : Combien d'alumettes souhaitez-vous retirer? (Saisir un nombre entre 1 et 6)");
    }
    UpdateReste(nbAllumettesARetirer);
    }
}

game();