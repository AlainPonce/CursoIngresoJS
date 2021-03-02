/*Enunciado:
al presionar el botón repetir el pedido de número hasta que ingresemos el 9.*/
function mostrar()
{
	var repetir;

	repetir = prompt("Ingresar un numero hasta encontrar el break:");
	repetir = parseInt(repetir)

	for( ; ;repetir = prompt("Error. Ingresar un numero correcto hasta encontrar el break:"))
	{
		console.log(repetir);
		if(repetir == 9)
		{
			alert("Encontró el break.")
			break;
		}
	}
}

/*
	var repetir;


	for(repetir = prompt("Ingrese el numero hasta encontrar el correcto.");;repetir = prompt("Ingrese el numero hasta encontrar el correcto."))
	{
		console.log(repetir)
		if(repetir == 9)
		{
			alert("Encontró el break.")
			break;
		}
	}
*/