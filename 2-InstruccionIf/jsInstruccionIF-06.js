function mostrar()
{
	var edad;
    edad = document.getElementById('txtIdEdad').value;
    edad = parseInt(edad);

    /*1 o 2 usos de CPU:*/

    if(edad<13)
	{
		alert("Es niño.");
	}
	else
	{
		if(edad>12 && edad<18) // (edad > 18)
		{
			alert("Es adolescente.");
		}
		else
		{
			alert("Es mayor.");
		}
	}
}

/*
4 usos de CPU:

	var edad;

    edad = document.getElementById('txtIdEdad').value;
    edad = parseInt(edad);

    if(edad<13)
    {
        alert("La persona es un niño.");
    }
    if(edad>12 && edad<18)
    {
        alert("La persona es adolescente.");
    }
    if(edad>17)
    {
        alert("La persona es mayor de edad.");
    }
*/