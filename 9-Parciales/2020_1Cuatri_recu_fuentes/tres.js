/*
En el ingreso a un viaje en avión nos solicitan nombre, nacionalidad , edad, sexo("f" o "m")
y estado civil("soltero", "casado" o "viudo")y temperatura corporal.
a) la Nacionalidad de la persona con mas temperatura.
b) Cuantos mayores de edad estan solteros
c) La cantidad de Mujeres que hay solteras o viudas.
d) cuantas personas de la tercera edad(mas de 60 años), tienen mas de 38 de temperatura
e) El promedio de edad entre las mujeres casadas.
*/
function mostrar()
{
	var nombreIngresado;
	var nacionalidadIngresada;
	var edadIngresada;
	var sexoIngresado;
	var estadoCivilIngresado;
	var temperaturaIngresada;
	var contadorPasajeros;
	var seguir;
	var flagTemperatura;
	var temperaturaAlta;
	var nacionalidadTemperaturaAlta;
	var contadorSolterosMayoresDeEdad;
	var contadorFemeninasSolteras;
	var contadorFemeninasViudas;
	var contadorTerceraEdadFiebre;
	var acumuladorEdadFemeninasCasadas;
	var contadorFemeninasCasadas;
	var promedio;

	contadorPasajeros=0;

	flagTemperatura=0;

	contadorSolterosMayoresDeEdad=0;

	contadorFemeninasSolteras=0;
	contadorFemeninasViudas=0;

	acumuladorEdadFemeninasCasadas=0;
	contadorFemeninasCasadas=0;

	contadorTerceraEdadFiebre=0;

	do
	{
		nombreIngresado=prompt("Ingrese el nombre del pasajero: ")
		while(isNaN(nombreIngresado)==false)
		{
			nombreIngresado=prompt("Error. Ingrese el nombre del pasajero correcto: ")
		}

		nacionalidadIngresada=prompt("Ingrese la nacionalidad del pasajero: ")
		while(isNaN(nacionalidadIngresada)==false)
		{
			nacionalidadIngresada=prompt("Error. Ingrese la nacionalidad del pasajero correcto: ")
		}

		edadIngresada=prompt("Ingrese la edad del pasajero: ")
		edadIngresada=parseInt(edadIngresada);
		while(isNaN(edadIngresada)==true || edadIngresada<0)
		{
			edadIngresada=prompt("Error. Ingrese la edad del pasajero correctamente: ")
			edadIngresada=parseInt(edadIngresada);
		}

		sexoIngresado=prompt("Ingrese el sexo del pasajero: F o M")
		while(isNaN(sexoIngresado)==false || sexoIngresado!="F" && sexoIngresado!="M")
		{
			sexoIngresado=prompt("Error. Ingrese el sexo del pasajero correctamente: F o M")
		}

		estadoCivilIngresado=prompt("Ingrese el estado civil del pasajero: soltero, casado o viudo.")
		while(isNaN(estadoCivilIngresado)==false || estadoCivilIngresado!="soltero" && estadoCivilIngresado!="casado" && estadoCivilIngresado!="viudo")
		{
			estadoCivilIngresado=prompt("Error. Ingrese el estado civil del pasajero correctamente: soltero casado o viudo.")
		}

		temperaturaIngresada=prompt("Ingrese la temperatura corporal del pasajero: ")
		temperaturaIngresada=parseInt(temperaturaIngresada);
		while(isNaN(temperaturaIngresada)==true || temperaturaIngresada<33 && temperaturaIngresada>45)
		{
			temperaturaIngresada=prompt("Error. Ingrese la temperatura corporal del pasajero correctamente: ")
			temperaturaIngresada=parseInt(temperaturaIngresada);
		}


		if(flagTemperatura==0)
		{
			temperaturaAlta=temperaturaIngresada;
			nacionalidadTemperaturaAlta=nacionalidadIngresada
			flagTemperatura=1;
		}
		else
		{
			if(temperaturaIngresada>temperaturaAlta)
			{
				temperaturaAlta=temperaturaIngresada;
				nacionalidadTemperaturaAlta=nacionalidadIngresada
			}
		}

		switch(estadoCivilIngresado)
		{
			case "soltero":
				if(edadIngresada>17)
				{
					contadorSolterosMayoresDeEdad++;
				}
				if(sexoIngresado=="F")
				{
					contadorFemeninasSolteras++;
				}
				break;

			case "casado":

				if(sexoIngresado=="F")
				{
					acumuladorEdadFemeninasCasadas=acumuladorEdadFemeninasCasadas+edadIngresada;
					contadorFemeninasCasadas++;
					promedio=acumuladorEdadFemeninasCasadas/contadorFemeninasCasadas;
				}
				break;

			case "viudo":
				if(sexoIngresado=="F")
				{
					contadorFemeninasViudas++;
				}
				break;
		}

		if(edadIngresada>60)
		{
			if(temperaturaIngresada>38)
			{
				contadorTerceraEdadFiebre++;
			}
		}


		seguir=prompt("Desea agregar otro pasajero?")
	}while(seguir=="Si")

	console.log("La nacionalidad del pasajero con mayor temperatura es: "+nacionalidadTemperaturaAlta);
	console.log("La cantidad de solteros mayores de edad es: "+contadorSolterosMayoresDeEdad);
	console.log("Hay "+contadorFemeninasSolteras+" femeninas solteras y "+contadorFemeninasViudas+" femeninas viudas");
	console.log("Hay "+contadorTerceraEdadFiebre+" personas de la tercera edad con más de 38 de temperatura corporal");
	console.log("El promedio de edad de las mujeres casadas es: "+promedio);
}

/*{
	var nombreIngresado;
	var nacionalidadIngresada;
	var edadIngresada;
	var sexoIngresado;
	var estadoCivilIngresado;
	var contadorDeIngresados;
	var seguir;
	var flagTemperatura;
	var	temperaturaAlta;
	var nacionalidadTemperaturaAlta;
	var contadorSolterosMayoresDeEdad;
	var contadorFemeninasSolteras;
	var contadorFemeninasViudas;
	var contadorTerceraEdadFiebre;
	var contadorCasadas;
	var femeninaSolteraViuda;	
	var edadIngresadaFS;
	var promedioFS;	
	var contadorSolteros;


	contadorDeIngresados=0;
	seguir="Si";

	contadorSolterosMayoresDeEdad=0;

	flagTemperatura=0;
	temperaturaAlta=0;	

	contadorFemeninasSolteras=0;
	contadorFemeninasViudas=0;
	femeninaSolteraViuda=0;

	contadorSolteros=0;
	contadorCasadas=0;

	contadorTerceraEdadFiebre=0;

	edadIngresadaFS=0;
	promedioFS=0;

	do
	{
		contadorDeIngresados++;

		nombreIngresado=prompt("Ingrese el nombre del turista: ")
		while(isNaN(nombreIngresado)==false)
		{
			nombreIngresado=prompt("Error. Ingrese un nombre correcto: ")
		}

		nacionalidadIngresada=prompt("Ingrese la nacionalidad del turista: ")
		while(isNaN(nacionalidadIngresada)==false)
		{
			nacionalidadIngresada=prompt("Error. Ingrese la nacionalidad correcta: ")
		}

		edadIngresada=prompt("Ingrese su edad correcta: ")
		edadIngresada=parseInt(edadIngresada);
		while(isNaN(edadIngresada)==true)
		{
			edadIngresada=prompt("Error. Ingrese su edad correcta: ");
			edadIngresada=parseInt(edadIngresada);
		}

		sexoIngresado=prompt("Ingrese el sexo del turista: F o M")
		while(isNaN(sexoIngresado)==false || sexoIngresado!="F" && sexoIngresado!="M")
		{
			sexoIngresado=prompt("Error. Ingrese un sexo correcto: F o M")
		}

		estadoCivilIngresado=prompt("Ingrese el estado civil del turista: soltero, casado o viudo")
		while(isNaN(estadoCivilIngresado)==false || estadoCivilIngresado!="soltero" && estadoCivilIngresado!="casado" && estadoCivilIngresado!="viudo")
		{
			estadoCivilIngresado=prompt("Error. Ingrese un estado civil correcto: soltero, casado o viudo")
		}

		temperaturaIngresada=prompt("Ingrese su temperatura corporal en grados Centigrados: ")
		temperaturaIngresada=parseInt(temperaturaIngresada);
		while(isNaN(temperaturaIngresada)==true || temperaturaIngresada<33 || temperaturaIngresada>45)
		{
			temperaturaIngresada=prompt("Error. Ingrese su temperatura corporal en grados Centigrados: ");
			temperaturaIngresada=parseInt(temperaturaIngresada);
		}

		//A- La nacionalidad de la persona con mas temperatura.
		if(flagTemperatura==0)
			{				
				temperaturaAlta=temperaturaIngresada;
				nacionalidadTemperaturaAlta=nacionalidadIngresada;
				flagTemperatura=1
			}
			else //
			{
				if(temperaturaIngresada>temperaturaAlta)
					{
						temperaturaAlta=temperaturaIngresada;
						nacionalidadTemperaturaAlta=nacionalidadIngresada;
					}
			}

		//B- Cuantos mayores de edad( más de 17) estan solteros

		switch(estadoCivilIngresado)
		{
			case "soltero":
				contadorSolteros++;
				if(edadIngresada>17)
				{
					contadorSolterosMayoresDeEdad++;
				}				
				if(sexoIngresado=="F")
				{
					contadorFemeninasSolteras++; //C- La cantidad de mujeres solteras.
					edadIngresadaFS = edadIngresadaFS+edadIngresada;
					promedioFS=edadIngresadaFS/contadorFemeninasSolteras; //E- Promedio de edad entre femeninas solteras.
				}
				break;

			case "casado":
				if(sexoIngresado=="F")
				{
					contadorCasadas++;
				}				
				break;

			case "viudo":								
				if(sexoIngresado=="F")
				{
					contadorFemeninasViudas++; //C- La cantidad de mujeres que hay viudas.
				}
				break;
		}
		
		//D- Cuantas personas de la tercera edad( mas de 60 años), tienen mas de 38 de temperatura.
		if(edadIngresada>59)
		{
			if(temperaturaIngresada>38)
			{
				contadorTerceraEdadFiebre++;
			}
		}

		seguir=prompt("Desea ingresar los datos de otro turista?")	
	}while(seguir=="Si")

	femeninaSolteraViuda=contadorFemeninasSolteras+contadorFemeninasViudas;

	console.log("La nacionalidad de la persona con mas temperatura es: "+nacionalidadTemperaturaAlta);
	console.log("Cantidad de solteros mayores de edad: "+contadorSolterosMayoresDeEdad);
	console.log("Mujeres solteras o viudas: "+femeninaSolteraViuda);
	console.log("Personas de la tercera edad con fiebre: "+contadorTerceraEdadFiebre);
	console.log("Promedio de edad de mujeres solteras: "+promedioFS)	
}*/