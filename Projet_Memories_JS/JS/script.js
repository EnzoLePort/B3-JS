console.log('test_Creation_Cartes');

class Carte{

	static ID = 0;

	constructor(NAME, IMG, DESC){

		this.id = ++Carte.ID;

		this.NAME=NAME;

		if(IMG == undefined)
		{
			this.IMG="NO IMG";
		}
		else
		{
			this.IMG=IMG;
		}

		if(DESC == undefined)
		{
			this.DESC="Aucune description";
		}
		else
		{
			this.DESC=DESC;
		}

		var node = document.createElement('div');
		node.setAttribute("id","card"+this.id);

		var child1 = document.createElement("div");
		child1.setAttribute("id","imgCard");
			var child11 = document.createElement("img");
			child11.setAttribute("id","img-imgCard");
			child11.setAttribute("src","IMG/PERSO/empty.jpg");
			child1.appendChild(child11);

		var child2 = document.createElement("div");
		child2.setAttribute("id","name");
			var child21 = document.createTextNode(this.NAME);
			child2.appendChild(child21);

		var child3 = document.createElement("div");
		child3.setAttribute("id","description");
			var child31 = document.createTextNode(this.DESC);
			child3.appendChild(child31);

			node.appendChild(child1);
			node.appendChild(child2);
			node.appendChild(child3);


		document.getElementById("mainForCards").appendChild(node);

		//this.carte = "<div>carte ici</div>"

	}

	// dans la class :
	presentation(){
		console.log('Le personnage s\'appelle : '+this.NAME);
		console.log('ID : '+this.id);
		console.log('IMG : '+this.IMG);
		console.log('DESC : '+this.DESC);
		console.log("-----------");
	}

}

const p1 = new Carte("enzo","liens image","mate 1");
const p2 = new Carte("Alexis");
const p3 = new Carte("Olivier","autre liens");

p1.presentation();
p2.presentation();
p3.presentation();

//------------------------------------------------------

function menuNav() {

	if(document.getElementById("menuNav").style.display == "block")
	{
		document.getElementById("menuNav").style.display = "none";
		document.getElementById("button-menuNav").style.left = "8px";
	}
	else
	{
		document.getElementById("menuNav").style.display = "block";
		document.getElementById("button-menuNav").style.left = "230px";
	}
	
}


function newCard(){

	console.log("appuie ok");

//aller sur nouvelle page et faire un nouveaux script?
//ou creer ici et sur nouvelle page recuperer tt ce qui y a ici pour creer visu.

	const p6 = new Carte("newperso");
	p6.presentation();
}

function attaque(){

	console.log("appuie ok");
}

function campagne(){

	console.log("appuie ok");
}