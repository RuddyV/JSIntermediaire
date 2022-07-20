// // créé la fonction  chargementTermine()
// function chargementTermine(){
//     $("div > img").hide();
// }
//
//
// function creation3Images() {
//     // let divParent = document.createElement("div");
//     let divParent = $("#divParent");
//     let image = document.createElement("img");
//     let image2 = document.createElement("img");
//     let image3 = document.createElement("img");
//
//     let div = document.createElement("div").appendChild(image)
//     image.src = '../giphy.gif';
//     image.setAttribute("class", "image1");
//     image2.src = '../giphy2.gif';
//     image2.setAttribute("class", "image2");
//     image3.src = '../giphy3.gif';
//     image3.setAttribute("class", "image3");
//     divParent.append(image);
//     divParent.append(image2);
//     divParent.append(image3);
// }
//
// function hideOne(){
//     $(".image1").hide();
// }
// function showOne(){
//     $(".image1").show();
// }
//
// function showAll(){
//     $("img").show();
// }
//
// function allHidden(){
//     $("img").hide();
// }
//
// function showInput(){
//
// }

///////////////////////////             NEW             ///////////////////////////

function afficherImages(width){
    //création des balises img
    let imageOne = document.createElement("img")
    let imageTwo = document.createElement("img")
    let imageThree = document.createElement("img")

    // Je complète mes balises
    // J'ajoute mes images
    imageOne.src = '../giphy.gif'
    imageTwo.src = '../giphy2.gif'
    imageThree.src = '../giphy3.gif'

    // J'ajoute la largeur que j'ai en parametre de la fonction
    imageOne.width = width;
    imageTwo.width = width;
    imageThree.width = width;

    //mettre des id à mes images
    imageOne.id = "image1Id";
    imageTwo.id = "image2Id";
    imageThree.id = "image3Id";

    //Je les positionne
    document.getElementById("imageCorrecte").appendChild(imageOne);
    document.getElementById("imageCorrecte").appendChild(imageTwo);
    document.getElementById("imageCorrecte").appendChild(imageThree);

    //je créer mes boutons
    let btn2 = document.createElement("button");
    let btn3 = document.createElement("button");
    let btn4 = document.createElement("button");
    let btn5 = document.createElement("button");

    //remplir mes boutons
    btn2.innerText = "Faire disparaître l'image 1";
    btn2.className = "btnNew";
    btn2.id = "btn2Id";
    btn3.innerText = "Faire apparaître l'image 1";
    btn3.className = "btnNew";
    btn3.id = "btn3Id";
    btn4.innerText = "Faire tout disparaître disparaître";
    btn4.className = "btnNew";
    btn4.id = "btn4Id";
    btn5.innerText = "Saisir votre nom";
    btn5.className = "btnNew";
    btn5.id = "btn5Id";

    document.getElementById("btnAfficher").appendChild(btn2);
    document.getElementById("btnAfficher").appendChild(btn3);
    document.getElementById("btnAfficher").appendChild(btn4);
    document.getElementById("btnAfficher").appendChild(btn5);

    btn2.addEventListener('click', cacherImageOne);
    btn3.addEventListener('click', afficherImageOne);
    btn4.addEventListener('click', toutDisparait);
    btn5.addEventListener('click', afficherInput);

    function cacherImageOne(){
        console.log("je viens de cliquer");
        $("#image1Id").hide();
    }
    function afficherImageOne(){
        console.log("je viens de cliquer");
        $("#image1Id").show();
    }
    function toutDisparait(){
        console.log("je viens de cliquer");
        $("img").hide();
    }
    function afficherInput(){
        let inputNom = document.createElement("input");
        let boutonValidate = document.createElement("button");
        //je rempis mes élements
        inputNom.type="text";
        inputNom.placeholder="Saisir votre nom";
        inputNom.className="inputClass";
        inputNom.id="inputNewYoda";

        boutonValidate.innerText="Valider et afficher votre nom";
        boutonValidate.id="idBoutonInput";

        //positionner mes éléments
        let positionInput = document.getElementById("inputAfficher");

        positionInput.appendChild(inputNom);
        positionInput.appendChild(boutonValidate);
        console.log("je marche");
        console.log(inputNom);
        console.log(positionInput);
        console.log(boutonValidate);

        boutonValidate.addEventListener('click', afficherNomYoda);
        function afficherNomYoda(){
            let afficherLastNameP = document.createElement("p");
            afficherLastNameP.id = "nomId";
            let valeurInput = document.getElementById("inputNewYoda").value;
            //console.log(valeurInput);
            afficherLastNameP.innerText=valeurInput;

            positionInput.appendChild(afficherLastNameP);

        }

    }

}