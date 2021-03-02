function mostrar()
{
	var edad;
	edad = document.getElementById('txtIdEdad').value;
	edad = parseInt(edad);

	if(edad<13 || edad>17)
	{
		alert("No es adolescente");
	}
}


//	USANDO &&

//  {
//		var edad;
//		edad = document.getElementById('txtIdEdad').value;
//		edad = parseInt(edad);

//		if(edad<12 && edad>17)
//		{
//			alert("La persona NO es adolecente");
//		}

//	}


//	
//	NEGANDO
	
//	var edad;
//	edad = document.getElementById('txtIdEdad').value;
//	edad = parseInt(edad);

//	if(!(edad>12 && edad<18))
//	{
//		alert("La persona NO es adolecente");
//	}

// > <