/*
Al presionar el botón pedir  números  
hasta que el usuario quiera, mostrar:
1-Suma de los negativos.
2-Suma de los positivos.
3-Cantidad de positivos.
4-Cantidad de negativos.
5-Cantidad de ceros.
6-Cantidad de números pares.
7-Promedio de positivos.
8-Promedios de negativos.
9-Diferencia entre positivos y negativos, (positvos-negativos). */
function mostrar()
{
	var numero;
	var iteracion;
	var seguir;
	var contadorPositivos
	var contadorNegativos
	var contadorCeros;
	var contadorPares;
	var acumuladorPositivos;
	var acumuladorNegativos;
	var promedioPositivos;
	var promedioNegativos;
	var diferencia;

	//Planteo variables

	numero=0;
	iteracion=0;
	
	contadorPositivos=0;
	contadorNegativos=0;

	contadorCeros=0;

	contadorPares=0;

	promedioPositivos=0;
	promedioNegativos=0;

	acumuladorNegativos=0;
	acumuladorPositivos=0;

	//Planteo iteracion repetitiva

	do
	{
		iteracion++;
		numero=prompt("Ingrese un numero: "+iteracion);

		while(isNaN(numero)/*==true*/)
		{
			numero=prompt("Error. No ingrese una palabra, ingrese un numero: "+iteracion);
			numero=parseInt(numero);			
		}				

		if(numero < 0 )
		{
			acumuladorNegativos=acumuladorNegativos + numero;
			contadorNegativos++;			
		}
		else
		{
			if ( numero == 0) 
			{
				contadorCeros++;				
			}
			else
			{
				acumuladorPositivos=acumuladorPositivos + numero;
				contadorPositivos++;				
			}
			if (numero % 2 == 0)
			{
				contadorPares++;
			}
		}

		seguir = prompt("Quiere ingresar otro numero? ");

	}while (seguir =="Si") // Siempre que se responda "Si", vuelve a preguntar

	//IFs para dar resultados:

	if (contadorPositivos > 0)
	{
		promedioPositivos = acumuladorPositivos/contadorPositivos;		
	}
	else
	{
		promedioPositivos = 0;
	}


	if (contadorNegativos > 0 )
	{
		promedioNegativos = acumuladorNegativos/contadorNegativos;
	}
	else
	{
		promedioNegativos = 0;
	}
	
	 // Resultados

	diferencia= contadorPositivos - contadorNegativos;

	console.log("Suma de los negativos:" + acumuladorNegativos);
	console.log("Suma de los positivos:" + acumuladorPositivos);
	console.log("Cantidad de negativos: " + contadorNegativos);
	console.log("Cantidad de positivos: " + contadorPositivos);
	console.log("Cantidad de ceros: " + contadorCeros);
	console.log("Cantidad de numeros pares: " + contadorPares);
	console.log("Promedio de positivos: " + promedioPositivos);
	console.log("Promedio negativos: " + promedioNegativos);
	console.log("Diferencia entre positivos y negativos: " + diferencia);
	//document.write("");
}
// > <

/*
{
	document.write("<br>")
}
*/