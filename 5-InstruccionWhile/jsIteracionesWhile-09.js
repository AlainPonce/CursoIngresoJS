/*
Al presionar el botón pedir edades hasta que el usuario quiera,
mostrar los nombres del mayor y del menor.
*/
function mostrar()
{
	var nombreIngresado;
	var flag;
	var personaMayor;
	var edadMayor;
	var personaMenor;
	var edadMenor;	
	var edadIngresada;
	var seguir;	
	
	flag = 0;
	seguir = "Si";

	do
	{		
		nombreIngresado = prompt("Ingrese su nombre: ");
		edadIngresada = prompt("Ingrese su edad: ");

		while(isNaN(edadIngresada)/*==true*/)
		{
			edadIngresada = prompt("Error. Ingrese su edad: ");
			
		}	
		edadIngresada = parseInt(edadIngresada);		
		
		if(flag == 0)
		{
			flag = 1;
			personaMayor=nombreIngresado;
			personaMenor=nombreIngresado;
			edadMayor=edadIngresada;
			edadMenor=edadIngresada;
		}
		else
		{
			if(edadIngresada<edadMenor)
			{
				edadMenor=edadIngresada;
				personaMenor=nombreIngresado;
			}
			else
			{
				if(edadIngresada>edadMayor)
				{
					edadMayor=edadIngresada;
					personaMayor=nombreIngresado;
				}		
			}				
			
		}
		
	seguir = prompt("¿Desea ingresar otra entrada de datos? ");
	}while(seguir == "Si")

	document.getElementById('txtIdMaximo').value = personaMayor;
	document.getElementById('txtIdMinimo').value = personaMenor;
}



/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
mostrar el número máximo y el número mínimo ingresado.*/
/*
function mostrar()
{	
	var numero;
	var numeroMax;
	var numeroMin;
	var maximo;
	var minimo;
	var seguir;
	var flag;
	var iteracion;
	var nombreMaximo;
	var nombreMinimo;

	flag=0; 
	seguir="si";
	iteracion=0;

	//Planteo iteracion repetitiva

	do
	{
		iteracion++;
		numero=prompt("Ingrese un numero: "+iteracion);	

		while(isNaN(numero))
		{
			numero=prompt("Error. No ingrese una palabra, ingrese un numero: "+iteracion);
			numero=parseInt(numero);
		}

		
		
		if (flag == 0 || numero > maximo) 
		{
			maximo = numeroMax;
		}
		if (flag == 0 || numero < minimo)
		{
			minimo = numeroMin;
			flag = 1;
		}
		
		
		seguir=prompt("Quiere ingresar otro numero? ")

	} while(seguir =="Si"); // Siempre que se responda "Si", vuelve a preguntar
	
	

	// Resultados

	document.getElementById('txtIdMaximo').value = maximo;
	document.getElementById('txtIdMinimo').value = minimo;

}


// > <
*/

//VIEJO

/*
{
	var banderaDelPrimero;
	var numeroIngresado;
	var numeroMaximo;
	var numeroMinimo;
	var respuesta;

	//iniciar variables

	flagDelPrimero=0;
	respuesta='si';
	while(respuesta=='si')
	{
		if(flagPrimero==0);
			{
				numeroMaximo=numeroIngresado;
				numeroMinimo=numeroIngresado;
				flagPrimero=1;
			}
			else
			{
				if(numeroIngresado>numeroMaximo)
				{
					numeroMaximo=numeroIngresado;
				}
				if
				{
					numeroMinimo=numeroIngresado
				}
			}
	}
}

// > <

*/
