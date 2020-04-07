
//  Déclaration de la class jeu

class Jeu {
/*    constructor(name) {
        this.name = name;
    }
*/
};

//  Instanciation de l'objet jeu
const jeu = new Jeu();
jeu.scores = {scoreIA:0, scoreUser:0};
console.log(`début de partie, scores : ${jeu.scores.scoreIA} à ${jeu.scores.scoreUser}`);

/*  variables   */
//  ou : https://javascript.developpez.com/faq/javascript/?page=formChamps#valSelect

jeu.debut = document.getElementById('debut');
jeu.limite = document.getElementById('limite');
jeu.partie = document.getElementById('jeu');;

/*  functions   */

//  afficher boutons de jeu
function afficherPartie() {
    debut.style.display = "none";
    document.getElementById("imgFinish").style.display = "none";
    limite.style.display = "block";
    //  Chercher comment attendre réponse :
//    choisirNbPoints(nbPoints);
//    sendData();
}

//  Afficher choix nb de points     //  voir ajax
function choisirNbPoints(val) {
    jeu.limitePartie = val;
    console.log(jeu.limitePartie);
    limite.style.display = "none";
    partie.style.display = "block";
    document.getElementById('resPtsChoisis').innerHTML = jeu.limitePartie;
/*    console.log(document.getElementById('nbPoints').value);
    document.getElementById('resPtsChoisis').innerHTML = jeu.limitePartie;
    console.log(`nbPoints : ${nbPoints}`);
*/
//    console.lob(jeu.limitePartie);
    
}

//  exemple ajax pour récupérer le nb de points
/*  function sendData()
{
  jeu.limitePartie = document.getElementById("nbPoints").value;
  console.log(document.getElementById('nbPoints').value);
  document.getElementById('resPtsChoisis').innerHTML = jeu.limitePartie;
//  var age = document.getElementById("name").value;
/*  ajax à remplacer par js
  $.ajax({
    type: 'post',
    data: {
      nbPoints:name,
    },
    success: function (response) {
//      $('#res').html("Vos données seront sauvegardées");
      partie.style.display = "block";
    }
  });
  return false;
*/
//  }
/*      ajax et js pur
function sendData() {
    const sendData1 = () => {
        document.getElementById('result').innerHTML = '';
    }

    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = () => {
        if (xhr.readyState === 4){
            sendData1();
//            document.getElementById('resPtsChoisis').innerHTML = xhr.responseText;
        }
    xhr.open('POST', 'http://public/shifumi');
    xhr.send();
    };
    return false;
}
*/
//  afficher choix joueur
function afficherUser(val) {
    jeu.userChoice = val;
    document.getElementById('toi').innerHTML = jeu.userChoice;
    choisirIA();
    regleDuels();
    fin_de_partie();
}

//  tirer le choix de l'ordi
function choisirIA(gagneDuel) {
    jeu.tirageIaChoice = Math.floor((Math.random()*3)+1);
    console.log(jeu.tirageIaChoice);
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
    document.getElementById('ordi').innerHTML = jeu.iaChoice;
    return jeu.iaChoice;
}

function regleDuels() {
    //  Eliminer les nuls
    if(jeu.userChoice === jeu.iaChoice) {
        jeu.gagneDuel = 'aucun';
        console.log(`Aucun gagnant.`);
        document.getElementById('gagnantDuel').innerHTML = `Aucun gagnant.`;
    } else {
        console.log(`userChoice : ${jeu.userChoice}, iaChoice : ${jeu.iaChoice}`);
        switch(jeu.userChoice) {
            case 'pierre':
                switch(jeu.iaChoice) {
                    case  'feuille':
                        jeu.gagneDuel = 'feuille';
                        jeu.scores.scoreIA ++;
                        console.log(`L'ordi marque (${jeu.gagneDuel}), son score : ${jeu.scores.scoreIA}.`);
                        document.getElementById('gagnantDuel').innerHTML = `L'ordi marque (${jeu.gagneDuel}), son score : ${jeu.scores.scoreIA}.`;
                        return jeu.scores.scoreIA;
                    break;
                    case 'ciseaux':
                        jeu.gagneDuel = 'pierre';
                        jeu.scores.scoreUser ++;
                        console.log(`Tu marques (${jeu.gagneDuel}), ton score : ${jeu.scores.scoreUser}.`);
                        document.getElementById('gagnantDuel').innerHTML = `Tu marques (${jeu.gagneDuel}), ton score : ${jeu.scores.scoreUser}.`;
                        return jeu.scores.scoreUser;
                }
            break;
            case 'feuille':
                switch(jeu.iaChoice) {
                    case  'pierre':
                        jeu.gagneDuel = 'feuille';
                        jeu.scores.scoreUser ++;
                        console.log(`Tu marques (${jeu.gagneDuel}), ton score : ${jeu.scores.scoreUser}.`);
                        document.getElementById('gagnantDuel').innerHTML = `Tu marques (${jeu.gagneDuel}), ton score : ${jeu.scores.scoreUser}.`;
                        return jeu.scores.scoreUser;
                    break;
                    case 'ciseaux':
                        jeu.gagneDuel = 'ciseaux';
                        jeu.scores.scoreIA ++;
                        console.log(`L'ordi marque (${jeu.gagneDuel}), son score : ${jeu.scores.scoreIA}.`);
                        document.getElementById('gagnantDuel').innerHTML = `L'ordi marque (${jeu.gagneDuel}), son score : ${jeu.scores.scoreIA}.`;
                        return jeu.scores.scoreIA;
                }
            break;
            case 'ciseaux':
                switch(jeu.iaChoice) {
                    case  'pierre':
                        jeu.gagneDuel = 'pierre';
                        jeu.scores.scoreIA ++;
                        console.log(`L'ordi marque (${jeu.gagneDuel}), son score : ${jeu.scores.scoreIA}.`);
                        document.getElementById('gagnantDuel').innerHTML = `L'ordi marque (${jeu.gagneDuel}), son score : ${jeu.scores.scoreIA}.`;
                        return jeu.scores.scoreIA;
                    break;
                    case 'feuille':
                        jeu.gagneDuel = 'ciseaux';
                        jeu.scores.scoreUser ++;
                        console.log(`Tu marques (${jeu.gagneDuel}), ton score : ${jeu.scores.scoreUser}.`);
                        document.getElementById('gagnantDuel').innerHTML = `Tu marques (${jeu.gagneDuel}), ton score : ${jeu.scores.scoreUser}.`;
                        return jeu.scores.scoreUser;
                }
                break;
            default:
                document.getElementById('gagnantDuel').innerHTML = `<p>Inconnu</p>`;
        }
    }
}

/*
// Incrémenter scores
function incrementer_score_IA() {
    jeu.score = {scoreIA, scoreUser};
    jeu.score.scoreIA ++;
//    jeu.scoreIA ++;
}
function incrementer_score_user() {
    jeu.scoreUser ++;

}
*/
//  Terminer la partie, afficher les scores et le bouton pour commencer une partie
function fin_de_partie() {
//    jeu.limitePartie = val2;
    //    jeu.limitePartie = val2;
    if(jeu.scores.scoreIA>=jeu.limitePartie || jeu.scores.scoreUser>=jeu.limitePartie) {
        jeu.gagnant = jeu.scores.scoreUser>jeu.scores.scoreIA?jeu.scores.scoreUser:jeu.scores.scoreIA;
        jeu.gagnant = jeu.scores.scoreUser?'Toi':'L\'ordi';
        document.getElementById('partie').style.display = 'none';
        document.getElementById('finDePartie').style.display = 'block';
        console.log(jeu.scores.scoreUser);
        document.getElementById('scoresFinUser').textContent = `${jeu.scores.scoreUser}`;
        console.log(jeu.scores.scoreIA);
        document.getElementById('scoresFinIA').textContent = `${jeu.scores.scoreIA}`;
        document.getElementById('quiGagne').innerHTML = `Le gagnant est ${jeu.gagnant}`;
        document.getElementById("imgFinish").src = "finish.jpeg";
        document.getElementById("imgFinish").style.display = "block";
        debut.style.display = 'block';
    }
}


