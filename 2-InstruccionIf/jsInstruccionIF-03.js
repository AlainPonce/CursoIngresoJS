function mostrar()
{
	var edad;
	edad = document.getElementById('txtIdEdad').value;
	edad = parseInt(edad);

	if(edad>17)
	{
		alert("Es mayor");	
	}
	else
	{
	alert("Es menor");
	}
}

/*
Solo con if:

	if(edad>17)
	{
		alert("es mayor");
	}

	if(edad<18)
	{
		alert("es menor");
	}

}
*/

// > <