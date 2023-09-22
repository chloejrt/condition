"use strict"


let prenom="rv";
let legume="poireau";

let nbr1=5;
let nbr2=8;
let nbr3="5";
/*
 quand il y a utilisation des conditions il faut utiliser outils comparateurs ( +, -, =, <, >...)
si nbr1 egal nbr3 message alerte égalité
pour tester l'égalité il faut au minimum deux signes egal sinon on affecte une nouvelle valeur

egal simple, attribue la valeur à la variable (=)

double egal, test de la valeur des deux variables (==) voir ex variable 24
ex: si deux variables = 5 et "5" pas bon, si c'est 6 et 5 pas bon

triple egal, test de la valeur et le type des variables (test egalité strict) (===)
ex: si deux variables = 5 et "5" pas bon car string et un number
*/

if(nbr1== nbr3){
   alert("Idem");
}
if(nbr1 === nbr3){
    alert("idem bis");
}else{
alert("Je suis dans le else");
}

// si () {} sinon (){}
if(nbr1<nbr2){
    alert("nbr1 est le plus grand");
}else if(nbr1<nbr2){
    alert("nbr1 est le plus petit");
}else{
    alert("je ne sais pas");
}

if(prenom=="rv"){
    alert("rv est le prénom");
}

//switch : 
/*
un peu comme le if mais le switch ne peut pas tester plusieurs valeurs, que une valeur unique --> que des égalités
on l'utlise quand on a peu de test à faire
*/

switch(nbr1){
   case 1:
         console.log("je suis le chiffre 1");
    break;
   case 2:
         console.log("je suis le chiffre 2");
        break;
   case 3:
        console.log("je suis le chiffre 3");
            break;
   case 4:
        console.log("je suis le chiffre 4");
    break;
   case 5:
        console.log("je suis le chiffre 5");
        break;
default:
    console.log ("je suis un autre chiffre");
}

// différent exemple
switch(2){
    case 1:
          console.log("je suis le chiffre 1");
     break;
    case 2:
          console.log("je suis le chiffre 2");
         
    case 3:
         console.log("je suis le chiffre 3");
             break;
    case 4:
         console.log("je suis le chiffre 4");
     break;
    case 5:
         console.log("je suis le chiffre 5");
         break;
 default:
     console.log ("je suis un autre chiffre");
 }

 /* si on enlève le break entre la case 2 et la case 3 cela relie les deux. 
 le break permis de stopper d'une case à l'autre pour pas que les variables s'additionnent.
 */

 // et &
 if(nbr1==5 && nbr2 ==8){
    alertt ("je suis trop fort");
}else{
    alert('NOOB');
}

// OU ||
if(nbr1==5 || nbr2 ==5) {
    alert("je suis trop fort ou l autre");
}else{
    alert('NOOB');
}

/* différence entre if et switch : 
switch = test valeur unique
if = tests de plusieurs valeurs 
*/

/* "" pour mettre du texte avec des appostrophes ou '' quand mot ou phrase sans caractères spéciaux
 utiliser tt le temps "" plus simple
*/