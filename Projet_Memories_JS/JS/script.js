console.log('test_Creation_Cartes');

class Carte{

	constructor(NOM, HP, ATT, DEF){

		this.NOM=NOM;

		if(HP == undefined)
		{
			this.HP=10;
		}
		else
		{
			this.HP=HP;
		}
		if(ATT == undefined)
		{
			this.ATT="ATT = 0";
		}
		else
		{
			this.ATT="ATT = "+ATT;
		}
		if(DEF == undefined)
		{
			this.DEF="DEF = 0";
		}
		else
		{
			this.DEF="DEF = "+DEF;
		}
		//Other idea?
	}

	// dans la class :
	presentation(){
		console.log('Le personnage s\'appelle : '+this.NOM);
		console.log('Il a : '+this.HP+' points de vie');
		console.log('Et son attaque est la suivante : '+this.ATT+' points de degats!');
		console.log('Mais attention ! Il s une defense qui est de : '+this.DEF+' points !');
		console.log("-----------");
	}

}

const p1 = new Carte("enzo",200,300,400);
const p2 = new Carte("noob1",100,30);
const p3 = new Carte("noob2",50);
const p4 = new Carte("nooob");

p1.presentation();
p2.presentation();
p3.presentation();
p4.presentation();

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