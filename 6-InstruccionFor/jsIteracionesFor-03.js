/*al presionar el botón pedir la cantidad de veces que quiero repetir el mensaje "Hola UTN FRA"*/
/*function mostrar()
{
	var contador;
	var repetir;
	
	repetir=prompt("Cuantas veces quiere mostrar el mensaje?")
	for(contador=0;contador<repetir;contador++)
	{					
		console.log("Hola UTN FRA");
	}
}*/

/*For 10 (a 5 personas nombre , sexo ,edad(validar que solo sean hombres no mayores a 12
 y que las mujeres sean mayores de edad), altura(rangos que quiera)*/
/*
function mostrar()
{
	var nombreIngresado;
	var sexoIngresado;
	var edadIngresada;
	var alturaIngresada;
	var contadorIngresado;

	for(contadorIngresado=1;contadorIngresado<5;contadorIngresado++)
	{
		nombreIngresado=prompt("Ingrese el nombre de la persona: #"+contadorIngresado)
		while((isNaN(nombreIngresado)==false))
		{
			nombreIngresado=prompt("Error. Ingrese el nombre de la persona: ")
		}

		sexoIngresado=prompt("Ingrese el sexo de la persona: F o M")
		while(isNaN(sexoIngresado)==false || sexoIngresado!="F" && sexoIngresado!="M")
		{
			sexoIngresado=prompt("Error. Ingrese el sexo de la persona: F o M")
		}

		edadIngresada=prompt("Ingresar la edad de la persona: ");
		edadIngresada=parseInt(edadIngresada);		
		while((isNaN(edadIngresada)==true) || (sexoIngresado!="F" && edadIngresada>12) || (sexoIngresado!="M" && edadIngresada<18))
		{
			edadIngresada=prompt("Error. Ingresar la edad de la persona: ");
			edadIngresada=parseInt(edadIngresada);
		}

		alturaIngresada=prompt("Ingresar la altura de la persona en centimetros: ");
		alturaIngresada=parseInt(alturaIngresada);		
		while((isNaN(alturaIngresada)==true) || alturaIngresada<140 || alturaIngresada>250)
		{
			alturaIngresada=prompt("Error. Ingresar la altura de la persona en centimetros: ");
			alturaIngresada=parseInt(alturaIngresada);
		}
	}
}
*/
function mostrar()
{
	var nombreIngresado;
	var sexoIngresado;
	var edadIngresada;
	var alturaIngresada;
	var contadorIngresado;
	var flagAltura;
	var nombreMaximo;
	var sexoMaximo;
	var alturaMaxima;	
	var edadMinima;
	var nombreMinimo;	
	var alturaMinima;
	var nombreAlturaMinimo;
	var contadorHombres;
	var contadorMujeres;
	var promedioEdadHombres;
	var promedioEdadMujeres;
	var contadorAlturaMayor;
	var acumuladorEdadHombres;
	var acumuladorEdadMujeres;
	var contadorMujeresAltura;
	var porcentaje;

	flagAltura=0;	

	contadorHombres=0;
	contadorMujeres=0;

	promedioEdadHombres=0;
	promedioEdadMujeres=0;

	contadorAlturaMayor=0;

	acumuladorEdadMujeres=0;
	acumuladorEdadHombres=0;

	contadorMujeresAltura=0;	

	for(contadorIngresado=0;contadorIngresado<5;contadorIngresado++)
	{
		nombreIngresado=prompt("Ingrese el nombre de la persona: ")
		while((isNaN(nombreIngresado)==false))
		{
			nombreIngresado=prompt("Error. Ingrese el nombre de la persona: ")
		}

		sexoIngresado=prompt("Ingrese el sexo de la persona: F o M")
		while(isNaN(sexoIngresado)==false || sexoIngresado!="F" && sexoIngresado!="M")
		{
			sexoIngresado=prompt("Error. Ingrese el sexo de la persona: F o M")
		}

		edadIngresada=prompt("Ingresar la edad de la persona: ");
		edadIngresada=parseInt(edadIngresada);		
		while((isNaN(edadIngresada)==true) || (sexoIngresado=="M" && edadIngresada>12) || (sexoIngresado=="F" && edadIngresada<14 ||edadIngresada> 18)) //VALIDACION COMPLEJA EDADES
		{
			edadIngresada=prompt("Error. Ingresar la edad de la persona: ");
			edadIngresada=parseInt(edadIngresada);
		}

		alturaIngresada=prompt("Ingresar la altura de la persona en centimetros: ");
		alturaIngresada=parseInt(alturaIngresada);		
		while((isNaN(alturaIngresada)==true) || alturaIngresada<140 || alturaIngresada>250)
		{
			alturaIngresada=prompt("Error. Ingresar la altura de la persona en centimetros: ");
			alturaIngresada=parseInt(alturaIngresada);
		}

		//For 11
		if(flagAltura==0)
		{
			alturaMaxima=alturaIngresada;
			sexoMaximo=sexoIngresado;
			nombreMaximo=nombreIngresado;
			flagAltura=1;			
		}
		else
		{
			if(alturaIngresada>alturaMaxima)
			{
				alturaMaxima=alturaIngresada;
				sexoMaximo=sexoIngresado;
				nombreMaximo=nombreIngresado;
			}			
		}		

		//For 12-13
		switch(sexoIngresado)
		{
			case "M":
				if(contadorHombres==0)
				{
					alturaMinima=alturaIngresada;
					nombreAlturaMinimo=nombreIngresado;								
				}
				else
				{
					if(alturaIngresada<alturaMinima)
					{
						alturaMinima=alturaIngresada;
						nombreAlturaMinimo=nombreIngresado;
					}
				}

				contadorHombres++;
				acumuladorEdadHombres=acumuladorEdadHombres+edadIngresada;	
				break;

			case "F":

				if(contadorMujeres==0)
				{
					edadMinima=edadIngresada;
					nombreMinimo=nombreIngresado;								
				}
				else
				{
					if(edadIngresada<edadMinima)
					{
						edadMinima=edadIngresada;
						nombreMinimo=nombreIngresado;
					}
				}

				contadorMujeres++;
				acumuladorEdadMujeres=acumuladorEdadMujeres+edadIngresada;				
				break;
		}

		if(alturaIngresada>160)
		{
			contadorAlturaMayor++;
			if(sexoIngresado=="F")
			{
				contadorMujeresAltura++;
			}
		}
	}

	promedioEdadHombres=acumuladorEdadHombres/contadorHombres;
	promedioEdadMujeres=acumuladorEdadMujeres/contadorMujeres;

	porcentaje=contadorMujeresAltura/contadorAlturaMayor*100

	console.log("La persona más alta es: "+nombreMaximo+" y es: "+sexoMaximo);
	if(sexoIngresado=="F")
	{
		console.log("La mujer mas joven es: "+nombreMinimo);
	}

	if(sexoIngresado=="M")
	{
		console.log("El hombre mas bajito es: "+nombreAlturaMinimo);
	}
	
	console.log("El promedio de edad entre los hombres es: "+promedioEdadHombres+" y entre las mujeres es: "+promedioEdadMujeres);
	
	if(contadorMujeresAltura>0)
	{
		console.log("El porcentaje de mujeres que midan más de 160cm es: "+porcentaje+"%");
	}	
}