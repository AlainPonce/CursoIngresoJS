/*al presionar el botón mostrar 10 repeticiones con números , desde el 10 al 1.*/
/*function mostrar()
{
	var contador;
	
	for(contador=10;contador>0;contador--)
	{		
		console.log(contador);
	}
}	
// > <
*/

//9bis- For 9 bis( pedir 10 numeros , informar el mayor de los negativos y el menor de los pares).. solo si los hay
function mostrar()
{
	var numeroIngresado;
	var contadorIngresado;
	var numeroNegativoMayor;
	var numeroPositivoMenor;
	var flagNegativos;
	var flagPostivos;

	flagPostivos=0;
	flagNegativos=0;

	for(contadorIngresado=0;contadorIngresado<10;contadorIngresado++)
	{
		numeroIngresado=prompt("Ingresar un numero: #"+contadorIngresado);
		numeroIngresado=parseInt(numeroIngresado);
		
		while((isNaN(numeroIngresado)==true))
		{
			numeroIngresado=prompt("Error. solo numeros: #"+contadorIngresado);
			numeroIngresado=parseInt(numeroIngresado);
		}

		if(numeroIngresado<0)
		{
			if(flagNegativos==0)
			{
				numeroNegativoMayor=numeroIngresado;
				flagNegativos=1;			
			}
			else
			{
				if(numeroIngresado>numeroNegativoMayor)
				{
					numeroNegativoMayor=numeroIngresado;
				}
			}
		}

		if(numeroIngresado%2==0)
		{
			if(flagPostivos==0)
			{
				numeroPositivoMenor=numeroIngresado;
				flagPostivos=1;
			}
			else
			{
				if(numeroPositivoMenor>numeroIngresado)
				{
					numeroPositivoMenor=numeroIngresado;
				}
			}
		}
	}
	if(flagNegativos==1)
	{
		console.log("Numero negativo mayor: "+numeroNegativoMayor);
	}

	if(flagNegativos==1)
	{
		console.log("Numero positivo menor: "+numeroPositivoMenor);
	}	
}