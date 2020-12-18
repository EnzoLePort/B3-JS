//===========================================
//       CONFIGURATION DU JEU               /
//===========================================
var paletteColor = ["red","orangered","yellow","green","blue","magenta"];
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