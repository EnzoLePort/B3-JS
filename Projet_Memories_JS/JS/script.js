console.log('test_Creation_Cartes');

class Carte{

	static classID = 0;

	constructor(NAME, IMG, DESC){

		this.ID = ++Carte.classID;

		this.NAME=NAME;

		if(IMG == undefined)
		{
			this.IMG="IMG/PERSO/empty.jpg";
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
		node.setAttribute("id","card"+this.ID);
		node.setAttribute("onclick","flip("+this.ID+")");

		var child1 = document.createElement("div");
		child1.setAttribute("id","imgCard");
			var child11 = document.createElement("img");
			child11.setAttribute("id","img-imgCard");
			child11.setAttribute("src",this.IMG);
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
		console.log('current ID : '+this.ID);
		console.log('IMG : '+this.IMG);
		console.log('DESC : '+this.DESC);
		console.log("-----------");
	}

}

const p1 = new Carte("ZOROOOOOOOO","IMG/PERSO/zoro2.jpg","Bretteur invincible !");
const p2 = new Carte("LUFFY","IMG/PERSO/luffy.jpg", "Homme élastique !");
const p3 = new Carte("SHANKS","IMG/PERSO/shanks.jpg", "DIEU VIVANT !");
const p4 = new Carte("BYAKUYA","IMG/PERSO/byakuya.jpg", "SHINIGAMI !");
const p5 = new Carte("ULQUIORA","IMG/PERSO/ulquiora.jpg", "HOLLOW !");
const p6 = new Carte("YAMAMOTO","IMG/PERSO/commandant.jpg", "commandant SHINIGAMI !");
const p7 = new Carte("test7");
const p8 = new Carte("test8");

p1.presentation();
p2.presentation();
p3.presentation();
p4.presentation();
p5.presentation();
p6.presentation();
p7.presentation();
p8.presentation();


//------------------------------------------------------

function newCard(){

	console.log("appuie ok");

//aller sur nouvelle page et faire un nouveaux script?
//ou creer ici et sur nouvelle page recuperer tt ce qui y a ici pour creer visu.

	const p6 = new Carte("newperso");
	p6.presentation();
}

function flip(id){
	console.log("flip id "+id);
}