
//  Déclaration de la class jeu
class Jeu {
/*    scores = {scoreIA: 0, scoreUser: 0};  */
//    debut;
    constructor(scoreIA, scoreUser) {
        this.scoreIA = scoreIA;
        this.scoreUser = scoreUser;
//        this.debut = document.getElementById('debut');
    }

/*    set limitePartie(val) {
        this.limitePartie = val;
    }   */

    /******** afficher sections ***************/
    affDebut() {
        return document.getElementById('debut').style.display = "block";
    }
    affLimite() {
        return document.getElementById('limite').style.display = "block";
    }
    affPartie() {
        return document.getElementById('partie').style.display = "block";
    }
    affImgFinish() {
        return document.getElementById('imgFinish').style.display = "block";
    }
    affFinDePartie() {
        return document.getElementById('finDePartie').style.display = 'block';
    }
    /******** cacher sections ***************/
    cacheDebut() {
        return document.getElementById('debut').style.display = "none";
//        return Element.id('debut').style.display = "none";
    }
    cacheLimite() {
        return document.getElementById('limite').style.display = "none";
    }
    cachePartie() {
        return document.getElementById('partie').style.display = "none";
    }
    cacheImgFinish() {
        return document.getElementById('imgFinish').style.display = "none";
    }
    cacheFinDePartie() {
        return document.getElementById('finDePartie').style.display = "none";
    }
    /*********** fcts spécifiques *************/
    
};

//  Instanciation de l'objet jeu, avec les scores à 0
const jeu = new Jeu(0,0);
console.log(`scores : user ${jeu.scoreUser}, ordi ${jeu.scoreIA}`);
/*
function afficherPage() {
}
afficherPage();
*/
//  jeu.gagneDuel = document.getElementById('gagnantDuel');

/***************  functions   ****************/

//  afficher choix du nbre de points quand on clique sur "commencer une partie"
//  Cache les boutons du jeu et l'image de fin de partie
//jeu.afficherPartie();     //  Chercher comment accéder au DOM depuis une class d'objet
function afficherPartie() {
    jeu.scoreIA = 0;
    jeu.scoreUser = 0;
    console.log(`scores : user ${jeu.scoreUser}, ordi ${jeu.scoreIA}`);
    jeu.cacheDebut();
    jeu.cacheImgFinish();
    jeu.affLimite();
    jeu.cacheFinDePartie();
}

//  Afficher le jeu quand on clique sur un nbr de points     //  voir ajax
//  Cache le choix du nbr de points
function choisirNbPoints(val) {
    jeu.limitePartie = val;
    jeu.cacheLimite();
    iaChoice = '';
    jeu.userChoice = '';
    document.getElementById('toi').innerHTML = jeu.userChoice;
    document.getElementById('ordi').innerHTML = jeu.userChoice;
    document.getElementById('gagnantDuel').innerHTML = '';
    jeu.affPartie();
    document.getElementById('resPtsChoisis').innerHTML = jeu.limitePartie;
}

//  Afficher le choix du joueur, le définir dans l'obj jeu : jeu.userChoice
//  Appeler le tirage du jeu de l'IA : choisirIA();
//  Appeler les règles du jeu : regleDuels();
//  Appeler le calcul et l'affichage de fin de partie : fin_de_partie();
function afficherUser(val) {
    jeu.userChoice = val;
    document.getElementById('toi').innerHTML = jeu.userChoice;
    choisirIA();
    regleDuels();
    console.log(`scores : user ${jeu.scoreUser}, ordi ${jeu.scoreIA}`);
    fin_de_partie();
}

//  tirer le choix de l'ordi, le définir dans l'obj jeu : jeu.iaChoice
function choisirIA() {
    tab = ['pierre', 'feuille', 'ciseaux'];
    tirage = Math.floor(Math.random()*tab.length);
    jeu.iaChoice = tab[tirage];
    document.getElementById('ordi').innerHTML = jeu.iaChoice;
}

//  Définir les règles gagnant/perdant pour chaque duel
//  et les mettre à jour dans l'objet jeu : jeu.scoreUser et jeu scoreIA
function regleDuels() {
    //  Eliminer les nuls
    if(jeu.userChoice === jeu.iaChoice) {
//        jeu.gagneDuel.innerHTML = `Aucun gagnant.`;
        document.getElementById('gagnantDuel').innerHTML = `Aucun gagnant - scores : toi ${jeu.scoreUser}, ordi ${jeu.scoreIA}`;
    } else {
        switch(jeu.userChoice) {
            case 'pierre':
                switch(jeu.iaChoice) {
                    case  'feuille':
                        jeu.gagnantDuel = 'feuille';
                        jeu.scoreIA ++;
//                        jeu.gagneDuel.innerHTML = `L'ordi marque (${jeu.gagnantDuel}), son score : ${jeu.scores.scoreIA}.`;
                        document.getElementById('gagnantDuel').innerHTML = `L'ordi marque (${jeu.gagnantDuel}), scores : toi ${jeu.scoreUser}, ordi ${jeu.scoreIA}.`;
                    case 'ciseaux':
                        jeu.gagnantDuel = 'pierre';
                        jeu.scoreUser ++;
//                        jeu.gagneDuel.innerHTML = `Tu marques (${jeu.gagnantDuel}), ton score : ${jeu.scores.scoreUser}.`;
                        document.getElementById('gagnantDuel').innerHTML = `Tu marques (${jeu.gagnantDuel}), scores : toi ${jeu.scoreUser}, ordi ${jeu.scoreIA}`;
                }
            break;
            case 'feuille':
                switch(jeu.iaChoice) {
                    case  'pierre':
                        jeu.gagnantDuel = 'feuille';
                        jeu.scoreUser ++;
//                        jeu.gagneDuel.innerHTML = `Tu marques (${jeu.gagnantDuel}), ton score : ${jeu.scores.scoreUser}.`;
                        document.getElementById('gagnantDuel').innerHTML = `Tu marques (${jeu.gagnantDuel}), scores : toi ${jeu.scoreUser}, ordi ${jeu.scoreIA}`;
                    break;
                    case 'ciseaux':
                        jeu.gagnantDuel = 'ciseaux';
                        jeu.scoreIA ++;
//                        jeu.gagneDuel.innerHTML = `L'ordi marque (${jeu.gagnantDuel}), son score : ${jeu.scores.scoreIA}.`;
                        document.getElementById('gagnantDuel').innerHTML = `L'ordi marque (${jeu.gagnantDuel}), scores : toi ${jeu.scoreUser}, ordi ${jeu.scoreIA}`;
                    break;
                }
            break;
            case 'ciseaux':
                switch(jeu.iaChoice) {
                    case  'pierre':
                        jeu.gagnantDuel = 'pierre';
                        jeu.scoreIA ++;
//                        jeu.gagneDuel.innerHTML = `L'ordi marque (${jeu.gagnantDuel}), son score : ${jeu.scores.scoreIA}.`;
                        document.getElementById('gagnantDuel').innerHTML = `L'ordi marque (${jeu.gagnantDuel}), scores : toi ${jeu.scoreUser}, ordi ${jeu.scoreIA}`;
                    break;
                    case 'feuille':
                        jeu.gagnantDuel = 'ciseaux';
                        jeu.scoreUser ++;
//                        jeu.gagneDuel.innerHTML = `Tu marques (${jeu.gagnantDuel}), ton score : ${jeu.scores.scoreUser}.`;
                        document.getElementById('gagnantDuel').innerHTML = `Tu marques (${jeu.gagnantDuel}), scores : toi ${jeu.scoreUser}, ordi ${jeu.scoreIA}`;
                    break;
                }
            break;
            default:
//                jeu.gagneDuel.innerHTML = `<p>Inconnu</p>`;
                document.getElementById('gagnantDuel').innerHTML = `<p>Inconnu</p>`;
        }
    }
}

//  Vérifier si partie finie :
//  si oui --> continuer fin_de_partie() : 
//  sinon --> reprendre à l'étape où choisirNbPoints() a été cliqué
//  en conservant les valeurs des variables et propriétés de l'objet jeu
//  Terminer la partie : afficher les scores et le bouton pour commencer une partie
function fin_de_partie() {
    imgFinish = document.getElementById("imgFinish");
    if(jeu.scoreIA>=jeu.limitePartie || jeu.scoreUser>=jeu.limitePartie) {
        jeu.gagnant = jeu.scoreUser?'Toi':'L\'ordi';
        jeu.cachePartie();
        jeu.affFinDePartie();
        document.getElementById('scoresFinUser').textContent = `${jeu.scoreUser}`;
        document.getElementById('scoresFinIA').textContent = `${jeu.scoreIA}`;
        document.getElementById('quiGagne').innerHTML = `Le gagnant est ${jeu.gagnant}`;
        imgFinish.src = "finish.jpeg";
        jeu.affImgFinish();
//        afficherPage();
//        const jeu = new Jeu(0,0);
        jeu.affDebut();
    }
}

/********** TUTO *************/

//  Comment accéder au DOM depuis une class d'objet ?

/*  Définir des propriétés d'un objet permet de ne pas avoir à 
retourner (return) les valeurs, elles sont contenues dans les 
données de l'objet  */

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
    
    
    
    