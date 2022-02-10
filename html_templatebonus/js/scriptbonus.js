
function askname() {
    let nom=prompt ("Quel est votre prenom?")
    let message= "<h2> Bonjour " + nom + "</h2>"
    document.body.innerHTML += message
}

function askAge() {
    let anneedenaissance=prompt("Quelle est votre annee de naissance?")
    let moisdenaissance=prompt("Quel est votre mois de naissance?")
    let moisencours= new Date().getMonth()
    let age
    if (moisdenaissance > moisencours) {
    age = (new Date().getFullYear()-anneedenaissance)-1
    }
    else {
    age = new Date().getFullYear()-anneedenaissance
    }
    messageDeux= "<h3>Vous avez " + age + " ans</h3>"
    document.body.innerHTML += messageDeux
    }
askname();
askAge();

