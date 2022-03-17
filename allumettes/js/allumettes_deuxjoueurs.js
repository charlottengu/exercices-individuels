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
    while (allumettes>0) {
    askPlayer1();
    askPlayer2();
    }
}   

function askPlayer1 () {
    nbAllumettesARetirer= prompt(" Joueur 1: Combien d'alumettes souhaitez-vous retirer? (Saisir un nombre entre 1 et 6)");
    if (nbAllumettesARetirer<1 || nbAllumettesARetirer>6) {
    alert("Joueur 1: Saisir un nb entre 1 et 6");
    nbAllumettesARetirer= prompt("Joueur 1: Combien d'alumettes souhaitez-vous retirer? (Saisir un nombre entre 1 et 6)");
    }
    UpdateReste(nbAllumettesARetirer);
}

function askPlayer2 () {
    nbAllumettesARetirer= prompt(" Joueur 2: Combien d'alumettes souhaitez-vous retirer? (Saisir un nombre entre 1 et 6)");
    if (nbAllumettesARetirer<1 || nbAllumettesARetirer>6) {
    alert("Joueur 2: Saisir un nb entre 1 et 6");
    nbAllumettesARetirer= prompt("Joueur 2: Combien d'alumettes souhaitez-vous retirer? (Saisir un nombre entre 1 et 6)");
    }
    UpdateReste(nbAllumettesARetirer);
}

game();