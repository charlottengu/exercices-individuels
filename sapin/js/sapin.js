// Etape 1

function nbEspace(n){
    let espace;
    for (espace=0; espace<n; espace++){
        document.body.innerHTML += "&nbsp";
     }    
}
function nbEtoile(n) {
    let etoile;
    for (etoile=0; etoile<n; etoile++){
        document.body.innerHTML += "*";
    }
}

function sapin (n) {
    let ligne;
    nbEspace(n+1);
    document.body.innerHTML += "+" + "<br>";
    for (ligne=0;ligne<n+1; ligne++) {
        if (ligne==0) {
            nbEspace(n);
            document.body.innerHTML += "&#47";  
            nbEtoile(1);
            document.body.innerHTML += "&#92"+ "<br>";
        }
        else {
            nbEspace(n-ligne);
            document.body.innerHTML += "&#47";  
            nbEtoile(ligne*2+1);   
            document.body.innerHTML += "&#92"+ "<br>";
        }
        }
} 
sapin(1);
sapin(2);
sapin(5);

