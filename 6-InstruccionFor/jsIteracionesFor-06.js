/*al presionar el botón pedir un número. mostrar 
los numeros pares desde el 1 al número ingresado, y mostrar la cantidad de numeros pares encontrados.*/
/*function mostrar()
{
	var numeros;
	var contador;	
	var contadorPares;

	contadorPares=0

	numeros=prompt("Ingresar un numero:");
	numeros=parseInt(numeros);

	for(contador=0;contador<numeros;contador++)
	{
		if(contador%2==0)
		{
			contadorPares++;
			console.log("Numeros pares: "+contador)
			console.log("Cantidad de numeros pares: "+contadorPares)
		}
	}
}
// > <*/





/*
	Realizar el algoritmo que permita ingresar 5 paises:
	el continente (validar entre america, africa, asia, europa y oceania)
	el nombre del pais.
	cantidad de habitantes en millones entre 1 y 7000 (validar)
	el nivel de pobreza entre (pobre, rico, muy rico) en europa no hay paises pobres(validar)
	la temperatura minima que se registra en su territorio (entre -50 y 50)
	a) La cantidad de temperaturas pares.
	b) La cantidad de temperaturas impares.
	c) El nombre del pais con menos habitantes.
	d) La cantidad de paises que superan los 40 grados.
	e) La cantidad de paises de america que tienen menos de 0 grados.
	f) El promedio de habitantes entre los paises ingresados.
	g) El promedio de habitantes entre los paises que superan los 40 grados.
	h) la temperatura minima ingresada, y nombre del pais.
	i) Que continente tiene mas habitantes?
*/
function mostrar()
{
	var paisIngresado;
	var continenteIngresado;
	var cantidadHabitantesIngresados;
	var nivelPobrezaIngresado;
	var temperaturaIngresada;
	var contadorPaises;
	var contadorTemperaturasPares;
	var contadorTemperaturasImpares;	
	var cantidadHabitantesIngresadosMenores;
	var paisCantidadMenor;
	var contadorTemperaturasAltas;
	var contadorAmericaTemperaturaBaja;
	var contadorPaisesAmerica;
	var contadorPaisesAfrica;
	var contadorPaisesAsia;
	var contadorPaisesEuropa;
	var contadorPaisesOceania;
	var acumuladorAmerica;
	var acumuladorAfrica;
	var acumuladorAsia;
	var acumuladorEuropa;
	var acumuladorOceania;	
	var acumuladorTemperaturasAltas;
	var temperaturaMinima;
	var paisMenorTemperatura;
	var nombreTemperaturaAlta;
	var promedioCuarentaGrados;
	var continenteConMasHabitantes;
	var promedioHabitantes;
	var contadorNumeral;

	contadorNumeral=0;

	contadorTemperaturasPares=0;
	contadorTemperaturasImpares=0;
	
	cantidadHabitantesIngresadosMenores=0;

	contadorTemperaturasAltas=0;

	contadorAmericaTemperaturaBaja=0;

	contadorPaisesAmerica=0
	contadorPaisesAsia=0
	contadorPaisesAfrica=0
	contadorPaisesEuropa=0
	contadorPaisesOceania=0

	acumuladorAmerica=0;
	acumuladorAfrica=0;
	acumuladorAsia=0;
	acumuladorEuropa=0;
	acumuladorOceania=0;

	promedioCuarentaGrados=0;
	promedioHabitantes=0;

	acumuladorTemperaturasAltas=0;

	temperaturaMinima=0;
	

	for(contadorPaises=0;contadorPaises<5;contadorPaises++)
	{
		contadorNumeral++
		continenteIngresado=prompt("Ingrese el continente: #"+contadorNumeral)
		while((isNaN(continenteIngresado)==false) || continenteIngresado!="America" && continenteIngresado!="Africa" &&continenteIngresado!="Asia" && continenteIngresado!="Europa" && continenteIngresado!="Oceania")
		{
			continenteIngresado=prompt("Error. Ingrese un continente correcto: ")
		}

		paisIngresado=prompt("Ingrese un pais del continente anterior: ")
		while((isNaN(paisIngresado)==false))
		{
			paisIngresado=prompt("Error. Ingrese un pais del continente anterior: ")
		}

		cantidadHabitantesIngresados=prompt("Ingresar la cantidad de habitantes del pais en millones: ");
		cantidadHabitantesIngresados=parseInt(cantidadHabitantesIngresados);		
		while((isNaN(cantidadHabitantesIngresados)==true) || cantidadHabitantesIngresados<1 || cantidadHabitantesIngresados>7000)
		{
			cantidadHabitantesIngresados=prompt("Error. Ingresar la cantidad de ingresantes del pais en millones: ");
			cantidadHabitantesIngresados=parseInt(cantidadHabitantesIngresados);
		}

		nivelPobrezaIngresado=prompt("Ingrese el nivel de pobreza del pais: pobre, rico o muy rico:")
		while((isNaN(nivelPobrezaIngresado)==false) || (continenteIngresado == "Europa" && nivelPobrezaIngresado=="pobre") && nivelPobrezaIngresado=="pobre" && nivelPobrezaIngresado!="rico" && nivelPobrezaIngresado!="muy rico")
		{			
			nivelPobrezaIngresado=prompt("Error. Ingrese el nivel de pobreza del pais: rico o muy rico:")
		}
		

		temperaturaIngresada=prompt("Ingresar la temperatura minima que registra el pais: ");
		temperaturaIngresada=parseInt(temperaturaIngresada);		
		while((isNaN(temperaturaIngresada)==true) || temperaturaIngresada<-50 || temperaturaIngresada>50)
		{
			temperaturaIngresada=prompt("Error. Ingresar la temperatura minima que registra el pais correcta: ");
			temperaturaIngresada=parseInt(temperaturaIngresada);
		}

		//A y B- Cantidad de temperaturas Pares e Impares

		if(temperaturaIngresada%2==0)
		{
			contadorTemperaturasPares++;
		}
		else
		{
			if(continenteIngresado=="Europa")
			{
				contadorTemperaturasImpares++;
			}			
		}

		//C - Nombre del pais con menos habitantes.

		if(contadorPaises==0)
			{				
				cantidadHabitantesIngresadosMenores=cantidadHabitantesIngresados;
				paisCantidadMenor=paisIngresado;				
			}
			else
			{
				if(cantidadHabitantesIngresados<cantidadHabitantesIngresadosMenores)
					{
						cantidadHabitantesIngresadosMenores=cantidadHabitantesIngresados;
						paisCantidadMenor=paisIngresado;
					}
			}

		//D- La cantidad de paises que superan los 40 grados.
		//H- La temperatura mínima ingresada, y nombre del pais que registro esa temperatura. 
		if(temperaturaIngresada)
		{
			if(temperaturaIngresada>40)
			{
				contadorTemperaturasAltas++;
				acumuladorTemperaturasAltas=acumuladorTemperaturasAltas+cantidadHabitantesIngresados;			
			}

			if(contadorPaises==0)
			{
				temperaturaMinima=temperaturaIngresada;
				paisMenorTemperatura=paisIngresado				
			}
			else
			{
				if(temperaturaIngresada<temperaturaMinima)
				{
					temperaturaMinima=temperaturaIngresada;
					paisMenorTemperatura=paisIngresado;
				}
			}
		}
		

		//E-La cantidad de paises de america que tienen menos de 0 grados .

		switch(continenteIngresado)
		{
			case "America":
				if(temperaturaIngresada<0)
				{
					contadorAmericaTemperaturaBaja++;
				}
				contadorPaisesAmerica++;
				acumuladorAmerica=acumuladorAmerica+cantidadHabitantesIngresados;
				break;

			case "Africa":
				contadorPaisesAfrica++;
				acumuladorAfrica=acumuladorAfrica+cantidadHabitantesIngresados;
				break;

			case "Asia":
				contadorPaisesAsia++;
				acumuladorAsia=acumuladorAsia+cantidadHabitantesIngresados;
				break;

			case "Europa":
				contadorPaisesEuropa++;
				acumuladorEuropa=acumuladorEuropa+cantidadHabitantesIngresados;
				break;

			case "Oceania":
				contadorPaisesOceania++;
				acumuladorOceania=acumuladorOceania+cantidadHabitantesIngresados;
				break;
		}
	}

	//F- El promedio de habitantes entre los paises ingresados.
	promedioHabitantes=(acumuladorAmerica+acumuladorAfrica+acumuladorAsia+acumuladorEuropa+acumuladorOceania)/contadorPaises;
	//G- El promedio de habitantes entre los paises que superan los 40 grados.
	promedioCuarentaGrados=acumuladorTemperaturasAltas/contadorTemperaturasAltas;

	//I- Que continente tiene mas habitantes.

	if(acumuladorAmerica>acumuladorAfrica && acumuladorAmerica>acumuladorAsia && acumuladorAmerica>acumuladorEuropa && acumuladorAmerica > acumuladorOceania)
	{
		continenteConMasHabitantes="America";
	}
	else
	{
		if(acumuladorAfrica>acumuladorAsia && acumuladorAfrica>acumuladorEuropa && acumuladorAfrica>acumuladorOceania)
		{
			continenteConMasHabitantes="Asia";
		}
		else
		{
			if(acumuladorAsia>acumuladorEuropa && acumuladorAsia>acumuladorOceania)
			{
				continenteConMasHabitantes="Asia";
			}
			else
			{
				if(acumuladorEuropa>acumuladorOceania)
				{
					continenteConMasHabitantes="Europa";
				}
				else
				{
					continenteConMasHabitantes="Oceania";
				}
			}
		}		
	}

	if(temperaturaIngresada%2==0)
	{
		console.log("La cantidad de temperaturas pares son: "+contadorTemperaturasPares);
	}
	else
	{
		console.log("La cantidad de temperaturas impares son: "+contadorTemperaturasImpares);
	}

	console.log("El nombre del pais con menos habitantes es: "+paisCantidadMenor);

	if(temperaturaIngresada>40)
	{
		console.log("La cantidad de paises que superan los 40 grados son: "+contadorTemperaturasAltas);
	}

	if(contadorAmericaTemperaturaBaja!=0)
	{
		console.log("La cantidad de paises de america que tienen menos de 0 grados son: "+contadorAmericaTemperaturaBaja);
	}

	console.log("El promedio de habitantes entre los paises ingresados es: "+promedioHabitantes);

	if(contadorTemperaturasAltas!=0)
	{
		console.log("El promedio de habitantes entre los paises que superan los 40 grados es: "+promedioCuarentaGrados);
	}

	console.log("La temperatura mínima ingresada es: "+temperaturaMinima+", y corresponde al pais: "+paisMenorTemperatura);

	console.log("El continente que contiene mas habitantes es: "+continenteConMasHabitantes);
}