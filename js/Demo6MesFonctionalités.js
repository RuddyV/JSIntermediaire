// je vais définir le comportement de mes bouttons

// je veux cacher l'ensemble de mes éléments


function abonnement() {
    //lancer la fonction tout le monde se cache
    $("#btToutLeMondeSeCache").click(function () {
        cacher("div");
    });
    $("#btToutLeMondeApparait").on("click", function () {
        afficher("div");
    })
    $("#btleCapitaineSeCache").on("click", function () {
        cacher("#capitaine");
    });
    $("#btlesMarinsSeCachent").click(function () {
        cacher(".marin")
    });
    $("#btlesPecheursSeCachent").click(function () {
        cacher(".pecheur");
    });
    $("#btlesBateauxSeCachent").click(function () {
        cacher(".bateau");
    });

    //chainage
    // $(".marin").click(function(){
    //     console.log("clique sur le marin")
    // })

    $(".equipage").on("click", ".marin", function () {
        console.log("J'ai cliqué sur un marin")
    })

    //annulation d'un comportement par défaut
    $("#afpaFormation").on("click", {info: "Coucou"}, function (event) {
        alert("Clique sur le lien mais annulation du comportement par défaut");
        event.preventDefault();
        console.log("Data disponible: " + event.data.info);
        console.log("Type: " + event.type);
        console.log("Target: " + event.currentTarget);
    })


}

//Créer une fonction qui cache
function cacher(selecteur) {
    $(selecteur).hide(200);
}

//Créer une fonction qui affiche
function afficher(selecteur) {
    $(selecteur).show(500);
}