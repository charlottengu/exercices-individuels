
function askname() {
    let nom=prompt ("Quel est votre prenom?")
    let message= "<h2> Bonjour " + nom + "</h2>"
    document.body.innerHTML += message
}

function askBirthYear() {
    let anneedenaissance=prompt("Quelle est votre annee de naissance?")
    let age = new Date().getFullYear()-anneedenaissance 
    let messageDeux= "<h3>Vous avez " + age + " ans</h3>"
    document.body.innerHTML += messageDeux
}

askname();
askBirthYear();