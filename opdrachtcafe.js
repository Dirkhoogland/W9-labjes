function start (){
		var drinken = prompt ("wat wilt u drinken: wijn, bier of fris");

		if (drinken == 'fris') {var aantalfris = prompt("hoeveel glazen fris wilt u?"); }
		else if (drinken == 'bier') {var aantalbier = prompt ("hoeveel glazen bier wilt u?");}
		else if (drinken == 'wijn') {var aantalwijn = prompt ("hoeveel glazen wijn wilt u?");}

console.log(drinken);
console.log(aantalfris);
console.log(aantalbier);
console.log(aantalwijn);

		var t2 = prompt("welke bestelling wilt u toevoegen, drinken, snack of rekening");

		if (t2 == "drinken") {start();}
		else if (t2 == "rekening") {alert ("hier is uw rekening");}
		else if (t2 == "snack") {var aantalbitterballen = prompt("Hoeveel bitterballen wilt u toevoegen (8 of 16)?");}
console.log (aantalbitterballen);
console.log (t2);


		if (aantalbitterballen == "8") {var rekening = prompt("wilt u de rekening? ja of nee");}
		if (aantalbitterballen == "16") {var rekening = prompt("wilt u de rekening? ja of nee ");}

		if (rekening =="ja"){alert ("hier is uw rekening");}
		if (rekening == "nee") {start();}
}

start();