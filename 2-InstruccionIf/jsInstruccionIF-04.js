function mostrar()
{
	var edad;
	edad = document.getElementById('txtIdEdad').value;
	edad = parseInt(edad);

	if(edad>12 && edad<18)
	{
		alert("Es adolescente");
	}
}


/*

VERSION IF IF 2
	var edad;
	edad = document.getElementById('txtIdEdad').value;
	edad = parseInt(edad);

	if(edad>12)
	if(edad<18)
	{
		alert("Es adolescente");
	}*/

//___________________________


/*	

VERSION IF IF
	if(edad<18)
	{
		if(edad>12)
		{
			alert("La persona es adolecente");
		}
	}
}*/

	

// > <