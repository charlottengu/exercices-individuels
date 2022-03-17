let allumettes=50;
let i=0
document.getElementById("nbAllumettes").innerHTML = "Nombre d'allumettes: " + allumettes;

function getNbJoueurs () {
    nbJoueurs = Number(document.getElementById("nbJoueurs").value);
    document.getElementById("tourJoueur").innerHTML = "Joueur " + (i+1)+ ": Saisir un nombre entre 1 et 6";
}

function game() {
    nbAllumettesARetirer=Number(document.getElementById("nbAllumettesARetirer").value);
    if (nbAllumettesARetirer<1 || nbAllumettesARetirer>6 || nbAllumettesARetirer>allumettes) {
        alert("Saisir un nb valide");
    }
    else {
    allumettes= allumettes-nbAllumettesARetirer;
    document.getElementById("nbAllumettes").innerHTML = "Nombre d'allumettes: " + allumettes;
    document.getElementById("nbAllumettesARetirer").value= " ";

    if (nbJoueurs > 1 && i < nbJoueurs) {
        i++;
        document.getElementById("tourJoueur").innerHTML = "Joueur " + (i+1) + ": Saisir un nombre entre 1 et 6";
    } 
    if(i==nbJoueurs) {
        i=0
        document.getElementById("tourJoueur").innerHTML = "Joueur " + (i+1) + ": Saisir un nombre entre 1 et 6";
    }

    if (allumettes==0) {
        document.getElementById("victoire").innerHTML = "Bravo! Vous avez gagné.";;
    }
    }


}



