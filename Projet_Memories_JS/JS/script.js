console.log('test_Creation_Cartes');

var allcartes = [
	["1", "ZOROOOOOOOO", "IMG/PERSO/zoro2.jpg", "Bretteur invincible !"],
	["2", "LUFFY", "IMG/PERSO/luffy.jpg", "Homme élastique !"],
	["3", "SHANKS", "IMG/PERSO/shanks.jpg", "DIEU VIVANT !"],
	["4", "BYAKUYA", "IMG/PERSO/byakuya.jpg", "SHINIGAMI !"],
	["5", "ULQUIORA", "IMG/PERSO/ulquiora.jpg", "HOLLOW !"],
	["6", "YAMAMOTO", "IMG/PERSO/commandant.jpg", "commandant SHINIGAMI !"],
	["7", "Boo", "IMG/PERSO/dbz.jpg", "_"],
	["8", "Tanjirô", "IMG/PERSO/demon.jpg", "_"],
	["9", "Tanjirô", "IMG/PERSO/demon2.jpg", "_"],
	["10", "Giyu", "IMG/PERSO/Demon-Slayer.jpg", "_"],
	["11", "Inazuma Eleven", "IMG/PERSO/eleven.jpg", "_"],
	["12", "Sangoten", "IMG/PERSO/goku.jpg", "_"],
	["13", "Sangoku", "IMG/PERSO/goku2.jpg", "_"],
	["14", "Yu-Gi-Oh !", "IMG/PERSO/monstres.jpg", "_"],
	["15", "Seven Deadly Sins", "IMG/PERSO/seven.jpg", "_"],
	["16", "Yûgi Muto", "IMG/PERSO/yu-gi-oh.jpg", "_"]
];

var choiceTwoCards = [];
var miseEnCommun = [];

var points = 0;

class Carte {

	static classID = 0;

	constructor(ID, NAME, IMG, DESC) {

		this.ID = ++Carte.classID;
		this.CLASS_ID = ID;
		this.NAME = NAME;

		if (IMG == undefined) {
			this.IMG = "IMG/dos-carte.png";
		}
		else {
			this.IMG = IMG;
		}

		if (DESC == undefined) {
			this.DESC = "Aucune description";
		}
		else {
			this.DESC = DESC;
		}

		var node = document.createElement('div');
		node.setAttribute("id", "card" + this.ID);
		node.setAttribute("class", "class" + this.CLASS_ID);
		node.setAttribute("onclick", "flip(" + this.ID + "," + this.CLASS_ID + ")");

		var child1 = document.createElement("div");
		child1.setAttribute("id", "imgCard");
		var child11 = document.createElement("img");
		child11.setAttribute("id", "img-imgCard");
		child11.setAttribute("src", this.IMG);
		child1.appendChild(child11);

		var child2 = document.createElement("div");
		child2.setAttribute("id", "name");
		var child21 = document.createTextNode(this.NAME);
		child2.appendChild(child21);

		var child3 = document.createElement("div");
		child3.setAttribute("id", "description");
		var child31 = document.createTextNode(this.DESC);
		child3.appendChild(child31);

		node.appendChild(child1);
		node.appendChild(child2);
		node.appendChild(child3);

		document.getElementById("mainForCards").appendChild(node);

		this.presentationCard();
		//this.carte = "<div>carte ici</div>"
	}

	// dans la class :
	presentation() {
		console.log('Le personnage s\'appelle : ' + this.NAME);
		console.log('current ID : ' + this.ID);
		console.log('IMG : ' + this.IMG);
		console.log('DESC : ' + this.DESC);
		console.log("-----------");
	}

	//=======================================================================================
	// Mise en place d'un style CSS pour faire un padding à chaque affichage d'une carte	/
	//=======================================================================================
	presentationCard() {
		var divCard = document.getElementById("card" + this.ID);
		var paddingLeft = [100, 400, 700, 1000, 1300];
		var paddingTop = [100, 450, 800, 1150, 1500, 1850];
		if (this.ID <= 5) {
			divCard.style.top = paddingTop[0] + "px";
			divCard.style.left = paddingLeft[this.ID - 1] + "px";
		} else if (this.ID >= 6 && this.ID <= 10) {
			divCard.style.top = paddingTop[1] + "px";
			divCard.style.left = paddingLeft[this.ID - 6] + "px";
		} else if (this.ID >= 11 && this.ID <= 15) {
			divCard.style.top = paddingTop[2] + "px";
			divCard.style.left = paddingLeft[this.ID - 11] + "px";
		} else if (this.ID >= 16 && this.ID <= 20) {
			divCard.style.top = paddingTop[3] + "px";
			divCard.style.left = paddingLeft[this.ID - 16] + "px";
		} else if (this.ID >= 21 && this.ID <= 25) {
			divCard.style.top = paddingTop[4] + "px";
			divCard.style.left = paddingLeft[this.ID - 21] + "px";
		} else if (this.ID >= 26 && this.ID <= 30) {
			divCard.style.top = paddingTop[5] + "px";
			divCard.style.left = paddingLeft[this.ID - 26] + "px";
		}
	}
}

//------------------------------------------------------
/* INIT */

/* for (var i = 3; i < allcartes.length; i++) {
	newCartes[i] = new Carte(allcartes[i][0], allcartes[i][1]);//,allcartes[i][2],allcartes[i][3]
	newCartes[i].presentation();
} */

var INIT = []
var compteurINIT = -1
allcartes.forEach(carte => {
	compteurINIT++;
	INIT.push(compteurINIT)
});

lvl1()

//------------------------------------------------------

function flip(id, classId) {
	var cardId = document.getElementById("card" + id);
	var child2 = cardId.firstChild.firstChild;
	var src = child2.getAttribute("src");
	if (src == "IMG/dos-carte.png") {
		allcartes.forEach(c => {
			if (c[0] == classId) {
				child2.setAttribute('src', c[2]);
			}
		});
	} else {
		child2.setAttribute('src', "IMG/dos-carte.png");
	}
	choiceTwoCards.push(id);
	miseEnCommun.push(classId);
	checkIfTheSameCards();

}

function checkIfTheSameCards() {
	if (choiceTwoCards.length == 2) {
		if (miseEnCommun[0] == miseEnCommun[1]) {
			choiceTwoCards = [];
			miseEnCommun = [];
			points++;
			document.getElementById('score').innerHTML = points;
			if(points == 5) {
				setTimeout(function () {
					alert("Victoire !");
					document.location.href="index.html";
				}, 100);
			}
		} else {
			setTimeout(function () {
				alert("Ce ne sont pas les bonnes, retournement des cartes...");
				flip(choiceTwoCards[0]);
				flip(choiceTwoCards[1]);
				choiceTwoCards = [];
				miseEnCommun = [];
			}, 100);
		}
	}
}

function shuffle(array) {
	var currentIndex = array.length, temporaryValue, randomIndex;
	// While there remain elements to shuffle...
	while (0 !== currentIndex) {
		// Pick a remaining element...
		randomIndex = Math.floor(Math.random() * currentIndex);
		currentIndex -= 1;
		// And swap it with the current element.
		temporaryValue = array[currentIndex];
		array[currentIndex] = array[randomIndex];
		array[randomIndex] = temporaryValue;
	}
	return array;
}

function melangeCartes(nb) {
	var newCartes = [];
	var melange = shuffle(INIT);
	var lvl = melange.slice(0, nb);
	var final = lvl.concat(lvl);
	var final_melange = shuffle(final);
	console.log("final_melange")
	console.log(final_melange)
	final_melange.forEach(m => { newCartes[m] = new Carte(allcartes[m][0], allcartes[m][1]); });
}

function lvl1() { // 10 paires (5 cartes)
	melangeCartes(5)
}

function lvl2() { // 20 paires (10 cartes)
	//document.location.href="index.html";
	melangeCartes(10)
}

function lvl3() { // 30 paires (15 cartes)
	melangeCartes(15)
}