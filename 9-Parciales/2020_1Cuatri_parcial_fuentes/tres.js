/*
En el ingreso a un viaje en avion nos solicitan nombre , edad, sexo("f" o "m")
y estado civil("soltero", "casado" o "viudo")y temperatura corporal.
a) El nombre de la persona con mas temperatura.
b) Cuantos mayores de edad estan viudos
c) La cantidad de hombres que hay solteros o viudos.
d) cuantas personas de la tercera edad(mas de 60 años), tienen mas de 38 de temperatura
e) El promedio de edad entre los hombres solteros.
*/
function mostrar()
{
	var nombreIngresado;
	var edadIngresada;
	var sexoIngresado;
	var estadoCivilIngresado;
	var temperaturaCorporalIngresada;
	var contadorPasajeros;
	var seguir;
	var flagTemperatura;
	var temperaturaCorporalMaxima;
	var nombreTemperaturaAlta;
	var contadorViudosMayores;
	var contadorMasculinosSolteros;
	var contadorMasculinosViudos;
	var contadorTerceraEdadFiebre;
	var contadorSolteros;
	var promedio;
	var edadIngresadaMasculinosSolteros;

	contadorPasajeros=0;

	flagTemperatura=0;

	contadorViudosMayores=0;

	contadorMasculinosSolteros=0;
	contadorMasculinosViudos=0;

	contadorTerceraEdadFiebre=0;

	contadorSolteros=0;

	edadIngresadaMasculinosSolteros=0;

	do
	{
		nombreIngresado=prompt("Ingrese el nombre: ")
		while(isNaN(nombreIngresado)==false)
		{
			nombreIngresado=prompt("Error. Ingrese el nombre correctamente: ");
		}

		edadIngresada=prompt("Ingrese la edad del pasajero: 0 a 100");
		edadIngresada=parseInt(edadIngresada);
		while(isNaN(edadIngresada)==true || edadIngresada<0 || edadIngresada>100)
		{
			edadIngresada=prompt("Error. Ingrese la edad correctamente: 0 a 100");
		}

		sexoIngresado=prompt("Ingrese el sexo: F o M")
		while(isNaN(sexoIngresado)==false || sexoIngresado!="F" && sexoIngresado!="M")
		{
			sexoIngresado=prompt("Error. Ingrese el sexo correctamente: F o M");
		}

		estadoCivilIngresado=prompt("Ingrese el estado civil del pasajero: soltero, casado o viudo")
		while(isNaN(estadoCivilIngresado)==false || estadoCivilIngresado!="soltero" && estadoCivilIngresado!="casado" && estadoCivilIngresado!="viudo")
		{
			estadoCivilIngresado=prompt("Error. Ingrese el nombre correctamente: soltero, casado o viudo");
		}

		temperaturaCorporalIngresada=prompt("Ingrese la temperatura corporal del pasajero: 34 a 42");
		temperaturaCorporalIngresada=parseInt(temperaturaCorporalIngresada);
		while(isNaN(temperaturaCorporalIngresada)==true || temperaturaCorporalIngresada<34 || temperaturaCorporalIngresada>42)
		{
			temperaturaCorporalIngresada=prompt("Error. Ingrese la temperatura corporal del pasajero correctamente: 34 a 42");
		}

		if(flagTemperatura==0)
		{
			temperaturaCorporalMaxima=temperaturaCorporalIngresada;
			nombreTemperaturaAlta=nombreIngresado;
			flagTemperatura=1;
		}
		else
		{
			if(temperaturaCorporalIngresada>temperaturaCorporalMaxima)
			{
				temperaturaCorporalMaxima=temperaturaCorporalIngresada;
				nombreTemperaturaAlta=nombreIngresado;
			}
		}

		switch(estadoCivilIngresado)
		{
			case "soltero":
				contadorSolteros++;
				if(sexoIngresado=="M")
				{
					contadorMasculinosSolteros++;
					edadIngresadaMasculinosSolteros=edadIngresadaMasculinosSolteros+edadIngresada;
					promedio=edadIngresadaMasculinosSolteros/contadorSolteros;
				}
				break;

			case "casado":
				break;

			case "viudo":				
				if(edadIngresada>17)
				{
					contadorViudosMayores++;
				}
				if(sexoIngresado=="M")
				{
					contadorMasculinosViudos++;
				}
				break;
		}

		if(edadIngresada>60)
		{
			if(temperaturaCorporalIngresada>38)
			{
				contadorTerceraEdadFiebre++;
			}
		}

		seguir=prompt("Desea agregar a otro pasajero?")
	}while(seguir=="Si")

	acumuladorMasculinosViudosSolteros=contadorMasculinosViudos+contadorMasculinosSolteros;

	console.log("El pasajero con mayor temperatura se llama: "+nombreTemperaturaAlta);
	console.log("La cantidad de viudos mayores de edad son: "+contadorViudosMayores);
	console.log("La cantidad de masculinos solteros y viudos son: "+acumuladorMasculinosViudosSolteros);
	console.log("La edad promedio de los hombres solteros es: "+promedio);
}
/*{
	var nombreIngresado;
	var edadIngresada;
	var sexoIngresado;
	var estadoCivilIngresado;
	var temperaturaIngresada;
	var contadorDeIngresados;
	var seguir;
	var flagTemperatura;
	var temperaturaAlta;
	var nombreTemperaturaAlta;
	var contadorSolteros;
	var contadorCasados;
	var contadorViudos;
	var contadorViudosMayoresDeEdad;
	var contadorMasculinosSolteros;
	var contadorMasculinosViudos;
	var masculinoSolteroViudo;
	var contadorTerceraEdadFiebre;
	var promedio;
	var edadIngresadaMS;

	contadorDeIngresados=0;
	seguir="Si";

	flagTemperatura=0;

	contadorSolteros=0;
	contadorCasados=0;
	contadorViudos=0;

	contadorViudosMayoresDeEdad=0;

	contadorMasculinosSolteros=0;
	contadorMasculinosViudos=0;
	masculinoSolteroViudo=0;

	contadorTerceraEdadFiebre=0;

	edadIngresadaMS=0;
	promedioMS=0;

	do
	{
		contadorDeIngresados++;

		nombreIngresado=prompt("Ingrese el nombre del turista: ")
		while(isNaN(nombreIngresado)==false)
		{
			nombreIngresado=prompt("Error. Ingrese un nombre correcto: ")
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

		//A- El nombre de la persona con mas temperatura.
		if(flagTemperatura==0)
			{				
				temperaturaAlta=temperaturaIngresada;
				nombreTemperaturaAlta=nombreIngresado;
				flagTemperatura=1
			}
			else //
			{
				if(temperaturaIngresada>temperaturaAlta)
					{
						temperaturaAlta=temperaturaIngresada;
						nombreTemperaturaAlta=nombreIngresado;
					}
			}

		//B -  Cuantos mayores de edad estan viudos

		switch(estadoCivilIngresado)
		{
			case "soltero":
				contadorSolteros++;
				
				if(sexoIngresado=="M")
				{
					contadorMasculinosSolteros++; //C- La cantidad de hombres que hay solteros.
					edadIngresadaMS = edadIngresadaMS+edadIngresada;
					promedioMS=edadIngresadaMS/contadorMasculinosSolteros; //E- Promedio de edad entre masculinos solteros.
				}

				break;

			case "casado":
				contadorCasados++;
				break;

			case "viudo":
				contadorViudos++;
				if(edadIngresada>17)
				{
					contadorViudosMayoresDeEdad++;
				}
				if(sexoIngresado=="M")
				{
					contadorMasculinosViudos++; //C- La cantidad de hombres que hay viudos.
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

	masculinoSolteroViudo=contadorMasculinosSolteros+contadorMasculinosViudos; //C- La cantidad de hombres que hay solteros o viudos.

	console.log("Nombre de la persona con mayor temperatura: "+nombreTemperaturaAlta);
	console.log("Personas mayores de edad viudos: " +contadorViudosMayoresDeEdad);
	console.log("Masculinos solteros o viudos:" +masculinoSolteroViudo);
	console.log("Personas de la tercera edad con fiebre: "+contadorTerceraEdadFiebre);
	console.log("Edad promedio de masculinos solteros: "+promedioMS);
}
// > <
*/