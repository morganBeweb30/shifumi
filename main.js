
//  Déclaration de la class jeu
class Jeu {
/*    scores = {
        scoreIA: 0,
        scoreUser: 0
    };
    debut() {
        return document.getElementById('debut');
    }
    limite() {
        return document.getElementById('limite'); 
    }
    partie() {
        document.getElementById('jeu');
    }
*/
};

//  Instanciation de l'objet jeu, avec les scores à 0
const jeu = new Jeu();
//  jeu.scores = {scoreIA:0, scoreUser:0};

jeu.debut = document.getElementById('debut');
jeu.limite = document.getElementById('limite'); 
jeu.partie = document.getElementById('jeu');

//  jeu.gagneDuel = document.getElementById('gagnantDuel');

/***************  functions   ****************/

//  afficher choix du nbre de points quand on clique sur "commencer une partie"
//  Cache les boutons du jeu et l'image de fin de partie
function afficherPartie() {
    debut.style.display = "none";
    document.getElementById("imgFinish").style.display = "none";
    limite.style.display = "block";
    document.getElementById('finDePartie').style.display = "none";
    jeu.scores = {scoreIA: 0, scoreUser: 0};
//    console.log(gagneDuel.textContent);
}

//  Afficher le jeu quand on clique sur un nbr de points     //  voir ajax
//  Cache le choix du nbr de points
function choisirNbPoints(val) {
    jeu.limitePartie = val;
//      console.log(jeu.limitePartie);
    limite.style.display = "none";
    iaChoice = '';
    jeu.userChoice = '';
    jeu.scoreUser = 0;
    jeu.scoreIA = 0;
    document.getElementById('toi').innerHTML = jeu.userChoice;
    document.getElementById('ordi').innerHTML = jeu.userChoice;
    document.getElementById('gagnantDuel').innerHTML = '';
    partie.style.display = "block";
    document.getElementById('resPtsChoisis').innerHTML = jeu.limitePartie;
}

//  afficher le choix du joueur
//  Appliquer les règles du jeu
function afficherUser(val) {
    jeu.userChoice = val;
    document.getElementById('toi').innerHTML = jeu.userChoice;
    choisirIA();
    regleDuels();
    fin_de_partie();
}

//  tirer le choix de l'ordi
function choisirIA(gagneDuel) {
    tab = ['pierre', 'feuille', 'ciseaux'];
    tirage = Math.floor(Math.random()*tab.length);
    console.log(tirage);
    jeu.iaChoice = tab[tirage];
    console.log(`tirage ${jeu.iaChoice}`);
/*
    switch(jeu.tirageIaChoice) {
        case 1:
            jeu.iaChoice = 'pierre';
            break;
        case 2:
            jeu.iaChoice = 'feuille';
            break;
        case 3:
            jeu.iaChoice = 'ciseaux';
    }
    console.log(jeu.iaChoice);
*/
    document.getElementById('ordi').innerHTML = jeu.iaChoice;
    return jeu.iaChoice;
}

//  Définir les règles gagnant/perdant pour chaque duel
function regleDuels() {
    console.log(`iaChoice : ${jeu.iaChoice}`);
    //  Eliminer les nuls
    if(jeu.userChoice === jeu.iaChoice) {
//        console.log(`Aucun gagnant.`);
//        jeu.gagneDuel.innerHTML = `Aucun gagnant.`;
        document.getElementById('gagnantDuel').innerHTML = `Aucun gagnant.`;
    } else {
//          console.log(`userChoice : ${jeu.userChoice}, iaChoice : ${jeu.iaChoice}`);
        switch(jeu.userChoice) {
            case 'pierre':
                switch(jeu.iaChoice) {
                    case  'feuille':
                        jeu.gagnantDuel = 'feuille';
                        jeu.scores.scoreIA ++;
//                          console.log(`L'ordi marque (${jeu.gagneDuel}), son score : ${jeu.scores.scoreIA}.`);
//                        jeu.gagneDuel.innerHTML = `L'ordi marque (${jeu.gagnantDuel}), son score : ${jeu.scores.scoreIA}.`;
                        document.getElementById('gagnantDuel').innerHTML = `L'ordi marque (${jeu.gagnantDuel}), son score : ${jeu.scores.scoreIA}.`;
                        return jeu.scores.scoreIA;
                    break;
                    case 'ciseaux':
                        jeu.gagnantDuel = 'pierre';
                        jeu.scores.scoreUser ++;
//                        console.log(`Tu marques (${jeu.gagneDuel}), ton score : ${jeu.scores.scoreUser}.`);
//                        jeu.gagneDuel.innerHTML = `Tu marques (${jeu.gagnantDuel}), ton score : ${jeu.scores.scoreUser}.`;
                        document.getElementById('gagnantDuel').innerHTML = `Tu marques (${jeu.gagnantDuel}), ton score : ${jeu.scores.scoreUser}.`;
                        return jeu.scores.scoreUser;
                }
            break;
            case 'feuille':
                switch(jeu.iaChoice) {
                    case  'pierre':
                        jeu.gagnantDuel = 'feuille';
                        jeu.scores.scoreUser ++;
//                        console.log(`Tu marques (${jeu.gagneDuel}), ton score : ${jeu.scores.scoreUser}.`);
//                        jeu.gagneDuel.innerHTML = `Tu marques (${jeu.gagnantDuel}), ton score : ${jeu.scores.scoreUser}.`;
                        document.getElementById('gagnantDuel').innerHTML = `Tu marques (${jeu.gagnantDuel}), ton score : ${jeu.scores.scoreUser}.`;
                        return jeu.scores.scoreUser;
                    break;
                    case 'ciseaux':
                        jeu.gagnantDuel = 'ciseaux';
                        jeu.scores.scoreIA ++;
//                        console.log(`L'ordi marque (${jeu.gagneDuel}), son score : ${jeu.scores.scoreIA}.`);
//                        jeu.gagneDuel.innerHTML = `L'ordi marque (${jeu.gagnantDuel}), son score : ${jeu.scores.scoreIA}.`;
                        document.getElementById('gagnantDuel').innerHTML = `L'ordi marque (${jeu.gagnantDuel}), son score : ${jeu.scores.scoreIA}.`;
                        return jeu.scores.scoreIA;
                }
            break;
            case 'ciseaux':
                switch(jeu.iaChoice) {
                    case  'pierre':
                        jeu.gagnantDuel = 'pierre';
                        jeu.scores.scoreIA ++;
//                        console.log(`L'ordi marque (${jeu.gagneDuel}), son score : ${jeu.scores.scoreIA}.`);
//                        jeu.gagneDuel.innerHTML = `L'ordi marque (${jeu.gagnantDuel}), son score : ${jeu.scores.scoreIA}.`;
                        document.getElementById('gagnantDuel').innerHTML = `L'ordi marque (${jeu.gagnantDuel}), son score : ${jeu.scores.scoreIA}.`;
                        return jeu.scores.scoreIA;
                    break;
                    case 'feuille':
                        jeu.gagnantDuel = 'ciseaux';
                        jeu.scores.scoreUser ++;
//                        console.log(`Tu marques (${jeu.gagneDuel}), ton score : ${jeu.scores.scoreUser}.`);
//                        jeu.gagneDuel.innerHTML = `Tu marques (${jeu.gagnantDuel}), ton score : ${jeu.scores.scoreUser}.`;
                        document.getElementById('gagnantDuel').innerHTML = `Tu marques (${jeu.gagnantDuel}), ton score : ${jeu.scores.scoreUser}.`;
                        return jeu.scores.scoreUser;
                }
                break;
            default:
//                jeu.gagneDuel.innerHTML = `<p>Inconnu</p>`;
                document.getElementById('gagnantDuel').innerHTML = `<p>Inconnu</p>`;
        }
        return jeu.scores.scoreUser;
    }
}

//  : si oui --> continuer fin_de_partie() : 
//  Vérifier si partie finie//  sinon --> laisser les boutons du jeu affichés pour que le joueur continue de jouer
//  Terminer la partie, afficher les scores et le bouton pour commencer une partie
function fin_de_partie() {
    jeu.imgFinish = document.getElementById("imgFinish");
    if(jeu.scores.scoreIA>=jeu.limitePartie || jeu.scores.scoreUser>=jeu.limitePartie) {
        jeu.gagnant = jeu.scores.scoreUser?'Toi':'L\'ordi';
        document.getElementById('partie').style.display = 'none';
        document.getElementById('finDePartie').style.display = 'block';
//        console.log(jeu.scores.scoreUser);
        document.getElementById('scoresFinUser').textContent = `${jeu.scores.scoreUser}`;
//        console.log(jeu.scores.scoreIA);
        document.getElementById('scoresFinIA').textContent = `${jeu.scores.scoreIA}`;
        document.getElementById('quiGagne').innerHTML = `Le gagnant est ${jeu.gagnant}`;
        jeu.imgFinish.src = "finish.jpeg";
        jeu.imgFinish.style.display = "block";
        debut.style.display = 'block';
    }
}

/********** TUTO *************/
//  Comment récupérer le nbr de points dans un input:number ?
//  https://javascript.developpez.com/faq/javascript/?page=formChamps#valSelect
/*  marche pas, et pas encore trouvé pourquoi */
/*
location.replace("https://www.w3schools.com");
    //  Remplace le doc courant, mais sans possibilité de retour en arrière
    //  Le doc courant est EFFACE de l'historique du nav.
location.assign("https://www.w3schools.com"); 
    //  Remplace le doc courant mais le conserve dans l'historique du nav.
*/
/*    
<div id="test" style="height: 50px;background-color: lightblue;">Test Div</div>
<p>The computed background color for the test div is: <span id="demo"></span></p>

function myFunction() {
  var elem = document.getElementById("test");
  var theCSSprop = window.getComputedStyle(elem, null).getPropertyValue("background-color");
  document.getElementById("demo").innerHTML = theCSSprop;
}
	//	getComputedStyle() renvoie la valeur de l'élément donné en fct pointée
	// Ici : background-color
*/



