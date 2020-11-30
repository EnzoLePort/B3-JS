console.log('test_Formulaire');

var nameValide = false;
var lastNameValide = false;
var regexValide = false;

//console.log("1:"+regexValide);

function verifName(saisie)
{
	saisie = document.getElementById("name").value;
	var long = saisie.length;

	

	//console.log(saisie);
	//console.log(long);

			if(long >= 3)
			{
				nameValide = true;
				//console.log('if--ok');
			}
			else{
				nameValide = false;
			}
		return nameValide;
}

function verifLastName(saisie2)
{
	saisie2 = document.getElementById("lastName").value;
	var long2 = saisie2.length;

	

	//console.log(saisie2);
	//console.log(long2);

			if(long2 >= 4)
			{
				lastNameValide = true;
				//console.log('if-nb2--ok');
			}
			else{
				lastNameValide = false;
			}
		
		return lastNameValide;
}

function verifRegex(saisie3)
{
	saisie3 = document.getElementById("mail").value;
	//var long3 = saisie3.length;

	var testRegex = new RegExp('^[A-Za-z ]{3,}.[A-Za-z ]{3,}@(epsi|wis|ifag|idrac|supdecom).fr$');
	
	var ok = testRegex.test(saisie3);
	
	/*
		new RegExp('()le regex sans #') + .test(leRegexATest) --> renvoie bool true si c bon !
	*/

	//mon regex
	// #^[A-Za-z ]{3,}.[A-Za-z ]{3,}@(epsi|wis|ifag|idrac|supdecom).fr$#

	//console.log(testRegex.test(saisie3));
	//console.log(saisie3);
	//console.log(long3);
	//console.log("testRegex :"+testRegex);

			if(ok)
					{
						regexValide = true;
						//console.log('if-nb3--ok');
					}
					else{
						regexValide = false;
					}

				//console.log("2 : "+regexValide);
				return regexValide;
				
}


function validation()
{
	//console.log("3 : "+regexValide);
	//&& lastNameValide && nameValide
	if( regexValide && lastNameValide && nameValide )
	{
		document.getElementById("validation").disabled = false;
	}
	else{
		document.getElementById("validation").disabled = true;
	}

}

document.getElementById("validation").addEventListener("click", valide);
    function valide() {
		console.log("---validé !---");

		var tableau= ["a","a","a"];
		var exemple= ["Prénom : ","Nom : ","Mail : "];

		var name=document.getElementById("name");
		var lastName=document.getElementById("lastName");
		var mail = document.getElementById("mail");

		tableau[0] = name.value;
		tableau[1] = lastName.value ;
		tableau[2] = mail.value;


		for(i=0;i<3;i++)
		{
			console.log(exemple[i]+tableau[i]);
		}

		//console.log(tableau[0]);
		//console.log(tableau[1]);
		//console.log(tableau[2]);

			var background = document.querySelector("#background");
			background.style.visibility = "visible";
			

			var textModal = document.querySelector("#textModal");

			textModal.innerHTML="";

			for(j=0;j<3;j++)
			{
			textModal.innerHTML+="<p>"+exemple[j]+tableau[j]+"</p>";
			}

			//vider cache

			name.value ='';
			lastName.value ='';
			mail.value ='';
	}

	

document.getElementById("reset").addEventListener("click", reset);
    function reset() {
		console.log("---Reset effectué !---");

		var name=document.getElementById("name");
		var lastName=document.getElementById("lastName");
		var mail = document.getElementById("mail");

		name.value ='';
		lastName.value='';
		mail.value='';

	
	}

document.getElementById("closeModal").addEventListener("click", closeModal);
    function closeModal() {

		var background = document.querySelector("#background");

		background.style.visibility = "hidden";

		console.log("Modal fermé !");
	
	}





/*

			setTimeout(fonction, 1000);


		setTimeout(()=>{
						modal.style.visibility = "hidden";
						},5000);


*/

//console.log('test');

function control(elmt){

	var saisie = elmt.value;
	//.previousElementSibling
	//pour récupérer ce que l'on met dans input juste avant la validation
	//console.log(saisie);
	var long = saisie.length;

		if (long>5) 
		{
			elmt.nextElementSibling.disabled = false;
			elmt.parentElement.children[2].classList.remove('display_error_span');
			//on appel le parent : <main> et on selectionne son 3em enfant ... 0,1,2
		}
		else
		{
			elmt.nextElementSibling.disabled = true;
			elmt.parentElement.children[2].classList.add('display_error_span');
			setTimeout(function(){
					elmt.parent.children[2].classList.remove('display_error_span');
			}, 1000);
		}

}


		//	-- 2em exo --

function display(open){

	var modal = document.querySelector("#background");

	switch(open){

		case 'open' :
		modal.style.visibility = "visible";
		setTimeout(()=>{
						modal.style.visibility = "hidden";
						},5000);
		break;
		

		case 'close' :
		modal.style.visibility = "hidden";
		break;

		//default:
	}
}