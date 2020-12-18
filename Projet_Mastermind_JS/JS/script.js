//===========================================
//       CONFIGURATION DU JEU               /
//===========================================
var paletteColor = ["red","orangered","yellow","green","blue","magenta"];
var initNbTentatives = 8
var nbTentatives = 8;

//===========================================
//   Classe pour le déroulement du jeu      /
//===========================================
class Mastermind {

    constructor() {
        this.code = this.shuffleCode();
        this.casePourTenterDeTrouverLeCode = [ [] ];
        this.positionTentativeCouleurX = 0;
        this.positionTentativeCouleurY = 1;
    }

    //=============================================================================
    //       On mélange les couleurs du code pour former le code à trouver !      /
    //=============================================================================
    shuffleCode() {
        var currentIndex = 0;
        var code = ["","","",""];
        // While there remain elements to shuffle...
        while (currentIndex < 4) {
            code[currentIndex] = paletteColor[Math.floor(Math.random() * (paletteColor.length - 1 + 0)) + 1];
            currentIndex++;
        }
        return code;
    }

    //=================================================================================================
    //       Préparation du design du jeu en fonction de la configuration mis en haut du fichier      /
    //=================================================================================================
    preparePlateau() {
        var choiceColors = document.getElementById('choiceColors');
        for(var i=1; i <= paletteColor.length; i++) {
            var temp = i -1;
            choiceColors.innerHTML += "<i class='animationChoiceColor' onclick='onClickTentativeColor("+temp+")' style='background-color:"+paletteColor[temp]+";'></i>";
            var animationChoiceColor = document.getElementsByClassName("animationChoiceColor");
        }   
        
        var plateau = document.getElementById('plateau');
        for(var i=nbTentatives-1; i >= 0; i--) {
            plateau.innerHTML += '<li> <div class="result" d-f="0"><b id="verif'+i+'1"></b><b id="verif'+i+'2"></b><b id="verif'+i+'3"></b><b id="verif'+i+'4"></b><em></em></div><div class="attempt"><i id="'+i+'1"></i><i id="'+i+'2"></i><i id="'+i+'3"></i><i id="'+i+'4"></i><tt></tt></div></li> ';
            this.casePourTenterDeTrouverLeCode[i] = [i+"1",i+"2",i+"3",i+"4"];
        }
    }

    //=================================================================================================
    //           Affichage du code après la victoire ou la défaite du joueur                          /
    //=================================================================================================
    showCodeAfterVicoryOrLose() {
        for(var i = 1; i <= this.code.length; i++) {
            var code = document.getElementById("code"+i);
            code.style.backgroundColor = this.code[i-1];
        }
    }

    checkLineTentative() {
        var gagne = 0;
        for(var i = 1; i <= this.code.length; i++) {
            var colorCircle = document.getElementById(""+mastermind.positionTentativeCouleurX + ""+i);

            // Quand la couleur est bien placée on met un point noir
            if(colorCircle.style.backgroundColor == this.code[i-1]) {
                var colorVerif = document.getElementById("verif"+mastermind.positionTentativeCouleurX+""+i);
                colorVerif.style.backgroundColor = "black";
                gagne++;
            
            //Sinon on regarde si la couleur est quand meme dans le code, mais pas au bon endroit, dans ce cas point blanc
            } else {
                for(var j = 1; j <= this.code.length; j++) {
                    if(colorCircle.style.backgroundColor == this.code[j-1]) {
                        var colorVerif = document.getElementById("verif"+mastermind.positionTentativeCouleurX+""+i);
                        colorVerif.style.backgroundColor = "white";
                    }
                }
            }
        }
        if(gagne == 4) {
            alert("TU AS GAGNE !!!");
            this.showCodeAfterVicoryOrLose();
        }
    }
}

//------------------------------------------------------

var mastermind = new Mastermind();
mastermind.preparePlateau();

function onClickTentativeColor(index) {
    var colorCircle = document.getElementById(""+mastermind.positionTentativeCouleurX + ""+ mastermind.positionTentativeCouleurY);
    colorCircle.style.backgroundColor = paletteColor[index];
    colorCircle.classList.add("animate__animated", "animate__bounce");
    mastermind.positionTentativeCouleurY++;
    if(mastermind.positionTentativeCouleurY == 5) {
        mastermind.checkLineTentative();
        mastermind.positionTentativeCouleurX++;
        mastermind.positionTentativeCouleurY = 1;
    }
}

function showSolution() {
    mastermind.showCodeAfterVicoryOrLose();
}

function ChangeNbTentatives() {

    var nb = document.getElementById('nbTentatives8').value

    if(nb <= 0) { nb = 15;}
    
    var multiplicateur = 70// 81; // 8/650
    var board_game = 650;
    var game = 620; // - 30
    var field = 553; // - 97

    var regex = /^[0-9]{1,2}$/;
    var test = regex.test(nb);

    if(test) {
        console.log("nb valide !");
        
        if(nb > 8) {
            console.log("nb > 8")
            board_game += (nb-8) * multiplicateur;
            game += (nb-8) * multiplicateur;
            field += (nb-8) * multiplicateur;
        } else {
            board_game -= (8-nb) * multiplicateur;
            game -= (8-nb) * multiplicateur;
            field -= (8-nb) * multiplicateur;
        }

        // REDRAW

        document.getElementById("BoardGame").style.height = board_game + 'px';
        document.getElementById("Game").style.height = game + 'px';
        document.getElementById("Field").style.height = field + 'px';

        nbTentatives = nb;

        const Plateau = document.getElementById("plateau");
        while (Plateau.firstChild) { Plateau.removeChild(Plateau.lastChild); }
        const choiceColors = document.getElementById("choiceColors");
        while (choiceColors.firstChild) { choiceColors.removeChild(choiceColors.lastChild); }

        mastermind.preparePlateau();
    } else {
        console.log("mauvais input !");
    }
}