// je vais définir le comportement de mes bouttons

// je veux cacher l'ensemble de mes éléments

function allHidden(){
    $("div").hide();
    //jQuery("div").hide();
}

function allAppear(){
    $("div").show();
    //jQuery("div").show();
}
function cptHidden(){
    $("#capitaine").hide();
}
function mHidden(){
    // je cache LES Marins
    $(".marin").hide();
    // je vais cacher par la classe equipage
    //$(".equipage").hide();
    // Je veux cacher le 1st et le dernier marin
    //$(".marin:first").hide();
    //$(".marin:last").hide();
    // Je veux cacher uniquement le 3eme marin en partant de 0
    //$(".marin:eq(2)").hide();
}
function pHidden(){
    $(".pecheur").hide();
}
function bHidden(){
    //$(".bateau").hide();
    //prendre le parent puis les div qui contiennent la classe bateau
    $("div > div[class='bateau']").hide();
}

