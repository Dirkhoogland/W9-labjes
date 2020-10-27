
function getal () {
	var nummers = prompt("U dient een getal in te voeren ");
	
	if (nummers >= 11 ) { alert ("Bereik van getal moet zijn: 1 t/m 10");}

		else if (nummers <= 10 ) { 
		

			for (var a=1;  a <= nummers; a++ ) {
		 				for (var i = 1; i <= 10; i++) {
		
		
						document.write( i + " x " + a + " = " + i * a + "<br>"); 
						}
						document.write("<hr>");
			} 
		}


}
		
	



getal();