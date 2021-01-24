const Bformulaire = document.getElementById("chap__contenu__bin");
const Bresultat = document.querySelector("#chap__contenu__bin .chap__contenu__output > b");
const Dformulaire = document.getElementById("chap__contenu__dec");
const Dresultat = document.querySelector("#chap__contenu__dec .chap__contenu__output > b");
let resultat;

function puiss(puiss){
    return Math.pow(2, puiss);
}
function calculBinToDeci(){
    let B7 = 0;
    let B6 = 0;
    let B5 = 0;
    let B4 = 0;
    let B3 = 0;
    let B2 = 0;
    let B1 = 0;
    let B0 = 0;
    if (document.getElementById("2b7").value == 1){
        B7=puiss(7);
    }
    if (document.getElementById("2b6").value  == 1){
        B6=puiss(6);
    }
    if (document.getElementById("2b5").value  == 1){
        B5=puiss(5);
    }
    if (document.getElementById("2b4").value  == 1){
        B4=puiss(4);
    }
    if (document.getElementById("2b3").value  == 1){
        B3=puiss(3);
    }
    if (document.getElementById("2b2").value  == 1){
        B2=puiss(2);
    }
    if (document.getElementById("2b1").value  == 1){
        B1=puiss(1);
    }
    if (document.getElementById("2b0").value  == 1){
        B0=puiss(0);
    }
    return B7+B6+B5+B4+B3+B2+B1+B0;
};

Bformulaire.addEventListener('input', function(){
    resultat = calculBinToDeci();
    Bresultat.textContent= resultat;
});

