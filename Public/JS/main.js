const Bformulaire = document.getElementById("chap__contenu__bin");
const Bresultat = document.querySelector("#chap__contenu__bin .chap__contenu__output > b");
const Dformulaire = document.getElementById("chap__contenu__dec");
const Dresultat = document.querySelector("#chap__contenu__dec .chap__contenu__output > b");
const IMformulaire = document.getElementById("chap__contenu__IetM");
let B7 = 0;
let B6 = 0;
let B5 = 0;
let B4 = 0;
let B3 = 0;
let B2 = 0;
let B1 = 0;
let B0 = 0;

function puiss(puiss){
    return Math.pow(2, puiss);
}
function calculBinToDeci(O7,O6,O5,O4,O3,O2,O1,O0){
    if (O7 == 1){
        B7=puiss(7);
    }else{
        B7=0;
    }
    if (O6 == 1){
        B6=puiss(6);
    }else{
        B6=0;
    }
    if (O5 == 1){
        B5=puiss(5);
    }else{
        B5=0;
    }
    if (O4 == 1){
        B4=puiss(4);
    }else{
        B4=0;
    }
    if (O3 == 1){
        B3=puiss(3);
    }else{
        B3=0;
    }
    if (O2 == 1){
        B2=puiss(2);
    }else{
        B2=0;
    }
    if (O1 == 1){
        B1=puiss(1);
    }else{
        B1=0;
    }
    if (O0 == 1){
        B0=puiss(0);
    }else{
        B0=0;
    }
    return B7+B6+B5+B4+B3+B2+B1+B0;
};
function calculDecToBin(dec, espace){
    let restemp = []; //Contiendra le résultat
    let res = [];
    let compteur = 8; //Pour un affichage en 8bits
    if (dec > 255){
        return "N/A";
    }else{
        while (dec){
            restemp.push(dec%2);
            dec = Math.floor(dec/2);
            compteur -=1;
        }
        while (compteur){ //Ajouter des 0 pour affichage 8bits
            restemp.push('0');
            compteur -=1;
        }
        restemp.reverse();
        if (espace){ //pour le séparateur ou non
            restemp.forEach(function(value){ 
                if (res.length==4){
                    res.push(' ');
                }
                res.push(value)
            });
            return res.join('');
        }
        return restemp.join('');
    }
};
function rechercheNBdispo(masque){
    let nbHelp = 32 - masque.indexOf('0');
    let nb=0; //pour compter
    let resultat=0;
        while(nbHelp){
            resultat += Math.pow(2,nb);
            nb+=1;
            nbHelp-=1;
        }
    return resultat;
};
function ipViaMasque(masque, ip){
    let newIP = ip.split('');
    let compteur = 32-masque.indexOf('0');
    let compteurBis = 0;
    while (compteur) {
        newIP.pop();
        compteur -=1;
        compteurBis +=1;
    }
    while (compteurBis) {
        newIP.push('1');
        compteurBis -=1;
    }
    return ipDecToBin(newIP.join(''));
};
function ipDecToBin(bin) {
    let dec = bin.split('');
    let dec1 = [];
    let dec2 = [];
    let dec3 = [];
    let dec4 = [];
    for (let i=0; i<8; i++ ){
        dec1.push(dec[0]);
        dec.shift();
    }
    for (let i=0; i<8; i++ ){
        dec2.push(dec[0]);
        dec.shift();
    }
    for (let i=0; i<8; i++ ){
        dec3.push(dec[0]);
        dec.shift();
    }
    for (let i=0; i<8; i++ ){
        dec4.push(dec[0]);
        dec.shift();
    }
    let dec1bis = calculBinToDeci(dec1[0],dec1[1],dec1[2],dec1[3],dec1[4],dec1[5],dec1[6],dec1[7])
    let dec2bis = calculBinToDeci(dec2[0],dec2[1],dec2[2],dec2[3],dec2[4],dec2[5],dec2[6],dec2[7])
    let dec3bis = calculBinToDeci(dec3[0],dec3[1],dec3[2],dec3[3],dec3[4],dec3[5],dec3[6],dec3[7])
    let dec4bis = calculBinToDeci(dec4[0],dec4[1],dec4[2],dec4[3],dec4[4],dec4[5],dec4[6],dec4[7])
    return dec1bis+"."+dec2bis+"."+dec3bis+"."+dec4bis;
}

Bformulaire.addEventListener('input', function(){
    Bresultat.textContent= calculBinToDeci(document.getElementById("2b7").value ,
    document.getElementById("2b6").value ,
    document.getElementById("2b5").value ,
    document.getElementById("2b4").value ,
    document.getElementById("2b3").value ,
    document.getElementById("2b2").value ,
    document.getElementById("2b1").value ,
    document.getElementById("2b0").value );
});
Dformulaire.addEventListener('input', function(){
    Dresultat.textContent = calculDecToBin(document.getElementById("decimale").value, 1);
});
IMformulaire.addEventListener('input', function(){
    //Afficher les valeurs binaire de chacun
    const IP1 = document.getElementById("IetM-IP1").value;
    const IP2 = document.getElementById("IetM-IP2").value;
    const IP3 = document.getElementById("IetM-IP3").value;
    const IP4 = document.getElementById("IetM-IP4").value;
    const M1 = document.getElementById("IetM-M1").value;
    const M2 = document.getElementById("IetM-M2").value;
    const M3 = document.getElementById("IetM-M3").value;
    const M4 = document.getElementById("IetM-M4").value;
    document.getElementById("IetM-IP1-B").textContent = calculDecToBin(IP1,1);
    document.getElementById("IetM-IP2-B").textContent = calculDecToBin(IP2,1);
    document.getElementById("IetM-IP3-B").textContent = calculDecToBin(IP3,1);
    document.getElementById("IetM-IP4-B").textContent = calculDecToBin(IP4,1);
    document.getElementById("IetM-M1-B").textContent = calculDecToBin(M1,1);
    document.getElementById("IetM-M2-B").textContent = calculDecToBin(M2,1);
    document.getElementById("IetM-M3-B").textContent = calculDecToBin(M3,1);
    document.getElementById("IetM-M4-B").textContent = calculDecToBin(M4,1);
    //Déterminé le 1 et les 0 du masque pour en conclure du nombre d'adresse possible, ainsi que leur adresse
    const IPbin = calculDecToBin(IP1,0)+calculDecToBin(IP2,0)+calculDecToBin(IP3,0)+calculDecToBin(IP4,0);
    const Mbin = calculDecToBin(M1,0)+calculDecToBin(M2,0)+calculDecToBin(M3,0)+calculDecToBin(M4,0);
    document.querySelector("#chap__contenu__IetM .chap__contenu__output > b").textContent = rechercheNBdispo(Mbin);
    document.querySelector("#ipViaMasque > b").textContent = ipViaMasque(Mbin,IPbin);
});
