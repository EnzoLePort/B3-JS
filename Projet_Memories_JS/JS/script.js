console.log('test_Creation_Cartes');

var allcartes = [
	["no value here"],
	["ZOROOOOOOOO", "IMG/PERSO/zoro2.jpg", "Bretteur invincible !"],
	["LUFFY", "IMG/PERSO/luffy.jpg", "Homme élastique !"],
	["SHANKS", "IMG/PERSO/shanks.jpg", "DIEU VIVANT !"],
	["BYAKUYA", "IMG/PERSO/byakuya.jpg", "SHINIGAMI !"],
	["ULQUIORA", "IMG/PERSO/ulquiora.jpg", "HOLLOW !"],
	["YAMAMOTO", "IMG/PERSO/commandant.jpg", "commandant SHINIGAMI !"]
];

var newCartes = [];

class Carte {

	static classID = 0;

	constructor(NAME, IMG, DESC) {

		this.ID = ++Carte.classID;

		this.NAME = NAME;

		if (IMG == undefined) {
			this.IMG = "IMG/PERSO/empty.jpg";
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

}

for (var i = 1; i < allcartes.length; i++) {
	newCartes[i] = new Carte(allcartes[i][0],allcartes[i][1],allcartes[i][2]);
	newCartes[i].presentation();
}

//------------------------------------------------------

function newCard() {

	console.log("appuie ok");

	//aller sur nouvelle page et faire un nouveaux script?
	//ou creer ici et sur nouvelle page recuperer tt ce qui y a ici pour creer visu.

	const p6 = new Carte("newperso");
	p6.presentation();
}

function flip(id) {
	console.log("flip id " + id);

	var d = document.getElementById("card" + id);
	var dd = d.firstChild.firstChild;//.getAttribute("src");
	//var dd = d.firstChild.firstChild.getAttribute("src");
	console.log(dd.getAttribute("src"))
	dd.setAttribute('src', "IMG/dos-carte.png");

	//p1.reverseCard();
}