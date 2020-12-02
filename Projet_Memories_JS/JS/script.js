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

var newCartes = [];

class Carte {

	static classID = 0;

	constructor(ID, NAME, IMG, DESC) {

		Carte.classID++;
		this.POSITION_ID = Carte.classID;

		this.ID = ID;
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
		node.setAttribute("class", "pos" + this.POSITION_ID);
		node.setAttribute("onclick", "flip(" + this.ID + ")");

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

	reverseCard() {

		let src = this.IMG;
		let mySrc = myImage.getAttribute('src');

		if (mySrc === src) {
			myImage.setAttribute('src', "dos-carte.png")
		}
		else {
			myImage.setAttribute('src', src)
		}
	}

	//=======================================================================================
	// Mise en place d'un style CSS pour faire un padding à chaque affichage d'une carte	/
	//=======================================================================================
	presentationCard() {
		var divCard = document.getElementById("card" + this.ID);
		//var divCard = document.getElementsByClassName("pos" + this.POSITION_ID);
		console.log("divCard")
		console.log(divCard)
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

var init = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5]

var melange = shuffle(init)

console.log(melange)

melange.forEach(m => {
	newCartes[m] = new Carte(allcartes[m][0], allcartes[m][1]);//,allcartes[i][2],allcartes[i][3]
	newCartes[m].presentation();
});

//------------------------------------------------------

function flip(id) {
	console.log("flip id " + id);

	var cardId = document.getElementById("card" + id);
	var child2 = cardId.firstChild.firstChild;
	var src = child2.getAttribute("src");
	if (src == "IMG/dos-carte.png") {
		allcartes.forEach(c => {
			if (c[0] == id) {
				child2.setAttribute('src', c[2]);
			}
		});
	} else {
		child2.setAttribute('src', "IMG/dos-carte.png");
	}
	console.log(child2.getAttribute("src"))

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

function lvl1() {
	console.log("todooo")
}

function lvl2() {
	console.log("todooo")
}

function lvl3() {
	console.log("todooo")
}