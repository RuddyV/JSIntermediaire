// je créé la fonction ajouterInput()
function ajouterInput(){
    // je récupère mes valeurs saisies par l'utilisateur
    let nomInput = document.getElementById("nomInput").value;
    let prenomInput = document.getElementById("prenomInput").value;

    // tester dans la console ce que je récupère
    console.log(nomInput);
    console.log(prenomInput);

    //je fais mon if...else qui me permet soit d'afficher dans le DOM,
    //ou d'envoyer un message alert("Tous les champs sont obligatoires");
    // donc si ma fonction toutEstSaisie(param1,param2,param3) renvoit true je réupère et j'affiche sinon erreur
    if(toutEstSaisie(nomInput, prenomInput)){

        //Je créé un li que je stock et 2 p que je stock
        //Pour le moment je n'ai rien positionné
        let liEnsemble = document.createElement("li");
        //let pNom = document.createElement("p");
        let pNomPrénom = document.createElement("p");
        let image = document.createElement("img");

        //Je prends mes valeurs de saisies et j'ajoute le texte dans mes balises p

        // une façon de faire:
        //pNom.innerText = nomInput;
        //pPrenom.innerText = prenomInput;

        //Une seconde façon pour créer en une ligne :
        pNomPrénom.innerText = `Nouveau joueur ajouté: ${prenomInput} ${nomInput} bienvenue dans la compétition`;
        image.src = 'giphy.gif';

        //j'ajoute du CSS sur pSavoir et pInfos
        //pSavoir.className = "savoir";
        //pInfos.className = "infos";

        //J'appelle ma fonction supprimer
        liEnsemble.addEventListener("click", supprimer);
        console.log(pNomPrénom)

        //maintenant que j'ai tout je positionne mes éléments dans le DOM
        // Je stock la position de mon ol "olListeSavoir"
        let position = document.getElementById("olInfosPerso");

        //Je fais des poupées russes en mettant
        //liEnsemble dans positionnnement(mon ol) puis je mets pNomPrénom
        //dans liEnsemble puis je mets à la suite pNomPrénom dans liEnsemble
        position.appendChild(liEnsemble);
        liEnsemble.appendChild(pNomPrénom);
        liEnsemble.appendChild(image)

        //je vide mes input pour les remettre à zéro
        document.getElementById("prenomInput").value = "";
        document.getElementById("nomInput").value = "";
    }
    else {
        alert("Tous les champs sont obligatoires");
    }
    document.getElementById("prenomInput").focus();
}


// Vu que je veux lancer la fonction ajouterInput() au clique
// et que je veux faire un if... else dedans,
// je veux que si tous les input sont saisies,
// je  fais un traitement sinon j'envoie une alert avec un message.
// Pour faire ca, je créé un fonction toutEstSaisie() avec des parametre
// qui me permettront de tester si tout est saisie et de renvoyer true ou false
function toutEstSaisie(nomInput, prenomInput) {
    //pour renvoyer true ou false, je peux faire :
    // let boolean;
    // if(savoirInput!="" && auteurInput!="" && dateInput!=""){
    //     boolean = true;
    // } else {
    //     boolean = false;
    // }
    // return boolean;

    //ou je peux faire en une ligne :
    return nomInput!="" && prenomInput!="";
}

//je créé la fonction supprimer
//Attention de bien appeler la fonction supprimée au clique au dessus
function supprimer(event){
    let player = event.currentTarget.getElementsByTagName("p")[0].innerText;
    if(confirm(`Voulez-vous supprimer le personnage"${player}" ?`)){
        event.currentTarget.parentNode.removeChild(event.currentTarget);
    }
}