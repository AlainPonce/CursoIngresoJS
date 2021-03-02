/*function mostrar()
{
	var numeroIngresado;
	var i;
	var contadorDivisores;
	contadorDivisores=0;

	numeroIngresado=prompt("ingrese numero a verificar");



	//for(contador=numeroIngresado-1;contador>1;contador--)
	for(i=2;i<(numeroIngresado/2);i++)
	{
		if(numeroIngresado%i==0)
		{
			//contadorDivisores++;
			break;
		}

	}

	//if(contadorDivisores>0)
	//if(contador!=1)
	if(i!=((numeroIngresado/2)-1))
	{
		console.log("no es primo");
	}else
	{
		console.log("ES primo");
	}

}//FIN DE LA FUNCIÓN//FIN DE LA FUNCIÓN
*/

/*Para un censo municipal debemos cargar los datos de TODAS las mascotas de nuestra veterinaria
necesitan saber si es un gato o un perrro u "otra cosa",(solo hay esos tres tipos)
el tipo de pelaje (corto, largo , sin pelo),
la edad de la mascota (edad validada);
el nombre (una palabra) 
la raza  (una palabra) 
el peso (peso validado) 
el estadoClinico (enfermo,internado o adopcion)
la temperaruta corporal

y nos piden informar solo si existe
a)El perro mas pesado
b)El porcentaje de enfermos sobre el total de mascotas
c)El nombre de la ultima mascota de tipo "otra cosa"
d)El animal sin pelo con menor temperatura corporal
e)Que tipo de mascota(gato o un perrro u "otra cosa") que tiene el mayor promedio de temperatura corporal
f)Sumando gatos y perros que porcentaje del total de mascotas son?
g)Que estado clinico tiene la menor cantidad de mascotas       
H)Cual es el promedio de kilos de peso de tomando todas las mascotas 
i)El nombre y raza del gato sin pelos mas liviano
*/

function mostrar()
{
	var tipoIngresado;
	var pelajeIngresado;
	var edadIngresada;
	var nombreIngresado;
	var razaIngresada;
	var pesoIngresado;
	var estadoClinicoIngresado;
	var temperaturaCorporalIngresada;
	var contadorMascotas;
	var seguir;
	var pesoIngresadoMaximoPerro;
	var nombreMaximoPerro;
	var contadorPerros;
	var contadorGatos;
	var contadorOtraCosa;
	var contadorCorto;
	var contadorLargo;
	var contadorSinPelo;
	var contadorEnfermo;
	var contadorInternado;
	var contadorAdopcion;
	var porcentajeEnfermos;
	var temperaturaIngresadaMinimaSinPelo;
	var nombreTemperaturaMinimaSinPelo;
	var acumuladorTemperaturaPerros;
	var acumuladorTemperaturaGatos;
	var acumuladorTemperaturaOtraCosa;
	var tipoMayorPromedioTemperatura;
	var sumaGatosPerros;
	var porcentajeGatosPerros;
	var acumuladorPesoPerros;
	var acumuladorPesoGatos;
	var acumuladorPesoOtraCosa;
	var promedioTemperaturaPerros;
	var promedioTemperaturaGatos;
	var promedioTemperaturaOtraCosa;
	var promedioPeso;
	var sumaAcumuladoresPeso;
	var pesoIngresadoMinimoGatoSinPelo;
	var nombreMinimoGatoSinPelo;
	var razaMinimoGatoSinPelo;
	var flagPerro;
	var flagGatoSinPelo;
	var flagMascotas;
	var tipoMenorCantidadMascotas;

	contadorMascotas=0;

	contadorPerros=0;
	contadorGatos=0;
	contadorOtraCosa=0;
	contadorCorto=0;
	contadorLargo=0;
	contadorSinPelo=0;
	contadorEnfermo=0;
	contadorInternado=0;
	contadorAdopcion=0;

	flagPerro=0;
	flagGatoSinPelo=0;
	flagMascotas=0;

	acumuladorTemperaturaPerros=0;
	acumuladorTemperaturaGatos=0;
	acumuladorTemperaturaOtraCosa=0;

	promedioTemperaturaPerros=0;
	promedioTemperaturaGatos=0;
	promedioTemperaturaOtraCosa=0;

	porcentajeEnfermos=0;
	porcentajeGatosPerros=0;

	acumuladorPesoPerros=0;
	acumuladorPesoGatos=0;
	acumuladorPesoOtraCosa=0;

	promedioPeso=0;
	sumaAcumuladoresPeso=0;	
	

	do
	{
		tipoIngresado=prompt("Ingrese el tipo de mascota: gato, perro u otra cosa")
		while((isNaN(tipoIngresado)==false) || tipoIngresado!="gato" && tipoIngresado!="perro" &&tipoIngresado!="otra cosa")
		{
			tipoIngresado=prompt("Error. Ingrese el tipo de mascota: gato, perro y otra cosa")
		}

		pelajeIngresado=prompt("Ingrese el pelaje de mascota: corto, largo o sin pelo")
		while((isNaN(pelajeIngresado)==false) || pelajeIngresado!="corto" && pelajeIngresado!="largo" && pelajeIngresado!="sin pelo")
		{
			pelajeIngresado=prompt("Error. Ingrese el pelaje de mascota: corto, largo o sin pelo")
		}

		edadIngresada=prompt("Ingresar la edad de la mascota: ");
		edadIngresada=parseInt(edadIngresada);		
		while((isNaN(edadIngresada)==true) || edadIngresada<0 || edadIngresada>20)
		{
			edadIngresada=prompt("Error. Ingresar la edad de la mascota: ");
			edadIngresada=parseInt(edadIngresada);
		}

		nombreIngresado=prompt("Ingrese el nombre de la mascota: ")
		while((isNaN(nombreIngresado)==false))
		{
			nombreIngresado=prompt("Error. Ingrese el nombre de la mascota: ")
		}

		razaIngresada=prompt("Ingrese la raza de la mascota: ")
		while((isNaN(razaIngresada)==false))
		{
			razaIngresada=prompt("Error. Ingrese la raza de la mascota: ")
		}

		pesoIngresado=prompt("Ingresar el peso de la mascota en kilos: ");
		pesoIngresado=parseInt(pesoIngresado);		
		while((isNaN(pesoIngresado)==true) || pesoIngresado<1 || pesoIngresado>60)
		{
			pesoIngresado=prompt("Error. Ingresar el peso de la mascota en kilos: ");
			pesoIngresado=parseInt(pesoIngresado);
		}

		estadoClinicoIngresado=prompt("Ingrese el estado clinico de la mascota: enfermo, internado o adpocion")
		while((isNaN(estadoClinicoIngresado)==false) || estadoClinicoIngresado!="enfermo" && estadoClinicoIngresado!="internado" &&estadoClinicoIngresado!="adopcion")
		{
			estadoClinicoIngresado=prompt("Error. Ingrese el estado clinico de la mascota: enfermo, internado o en adpocion")
		}

		temperaturaCorporalIngresada=prompt("Ingresar la temperatura corporal de la mascota: ");
		temperaturaCorporalIngresada=parseInt(temperaturaCorporalIngresada);		
		while((isNaN(temperaturaCorporalIngresada)==true) || temperaturaCorporalIngresada<20 || temperaturaCorporalIngresada>45)
		{
			temperaturaCorporalIngresada=prompt("Error. Ingresar la temperatura corporal de la mascota: ");
			temperaturaCorporalIngresada=parseInt(temperaturaCorporalIngresada);
		}

		switch(tipoIngresado)
		{
			case "perro":
				contadorPerros++;		
				//A- El perro mas pesado
				if(flagPerro==0)				
					{
						pesoIngresadoMaximoPerro=pesoIngresado;					
						nombreMaximoPerro=nombreIngresado;
						flagPerro==1;
					}
					else
					{
						if(pesoIngresado>pesoIngresadoMaximoPerro)
						{
							pesoIngresadoMaximoPerro=pesoIngresado;					
							nombreMaximoPerro=nombreIngresado;
						}
					}
				acumuladorTemperaturaPerros=acumuladorTemperaturaPerros+temperaturaCorporalIngresada;
				acumuladorPesoPerros=acumuladorPesoPerros=pesoIngresado;
				break;

			case "gato":
				contadorGatos++;
				acumuladorTemperaturaGatos=acumuladorTemperaturaGatos+temperaturaCorporalIngresada;
				acumuladorPesoGatos=acumuladorPesoGatos=pesoIngresado;

				//I- El nombre y raza del gato sin pelos mas liviano
				if(pelajeIngresado="sin pelo")
				{
					if(flagGatoSinPelo==0)
					{
						pesoIngresadoMinimoGatoSinPelo=pesoIngresado;					
						nombreMinimoGatoSinPelo=nombreIngresado;
						razaMinimoGatoSinPelo=razaIngresada;
						flagGatoSinPelo==1
					}
					else
					{
						if(pesoIngresado<pesoIngresadoMinimoGatoSinPelo)
						{
							pesoIngresadoMinimoGatoSinPelo=pesoIngresado;					
							nombreMinimoGatoSinPelo=nombreIngresado;
							razaMinimoGatoSinPelo=razaIngresada;
						}
					}
				}
				break;

			case "otra cosa":
				contadorOtraCosa++;
				acumuladorTemperaturaOtraCosa=acumuladorTemperaturaOtraCosa+temperaturaCorporalIngresada;
				acumuladorPesoOtraCosa=acumuladorPesoOtraCosa=pesoIngresado;

				//C- El nombre de la ultima mascota de tipo "otra cosa"
				nombreOtraCosa=nombreIngresado;
				break;
		}		

		switch(pelajeIngresado)
		{
			case "corto":
				contadorCorto++;
				break;

			case "largo":
				contadorLargo++;
				break;

			case "sin pelo":
				contadorSinPelo++;
				//D- El animal sin pelo con menor temperatura corporal
				if(flagMascotas==0)
					{
						temperaturaIngresadaMinimaSinPelo=temperaturaCorporalIngresada;					
						nombreTemperaturaMinimaSinPelo=nombreIngresado;
						flagMascotas==1;
					}
					else
					{
						if(temperaturaCorporalIngresada>temperaturaIngresadaMinimaSinPelo)
						{
							temperaturaIngresadaMinimaSinPelo=temperaturaCorporalIngresada;					
							nombreTemperaturaMinimaSinPelo=nombreIngresado;
						}
					}
				break;
		}

		switch(estadoClinicoIngresado)
		{
			case "enfermo":
				contadorEnfermo++;
				break;

			case "internado":
				contadorInternado++;
				break;

			case "adopcion":
				contadorAdopcion++;
				break;
		}

		contadorMascotas++;
		seguir=prompt("Desea agregar otra mascota?");	
	}while(seguir=="Si")
	//B- El porcentaje de enfermos sobre el total de mascotas
	porcentajeEnfermos=contadorEnfermo/contadorMascotas*100

	//E- Que tipo de mascota(gato o un perro u "otra cosa") que tiene el mayor promedio de temperatura corporal.
	
	promedioTemperaturaPerros=acumuladorTemperaturaPerros/contadorPerros;
	promedioTemperaturaGatos=acumuladorTemperaturaGatos/contadorGatos;
	promedioTemperaturaOtraCosa=acumuladorTemperaturaOtraCosa/contadorOtraCosa;

	if(contadorPerros==0)
	{
		promedioTemperaturaPerros=0;		
	}
	if(contadorGatos==0)
	{
		promedioTemperaturaGatos=0;
	}
	if(contadorOtraCosa==0)
	{
		promedioTemperaturaOtraCosa=0;
	}


	if(promedioTemperaturaPerros>promedioTemperaturaGatos && promedioTemperaturaPerros>promedioTemperaturaOtraCosa)
	{
		tipoMayorPromedioTemperatura="Perros";
	}
	else
	{
		if(promedioTemperaturaGatos>promedioTemperaturaOtraCosa)
		{
			tipoMayorPromedioTemperatura="Gatos";
		}
		else
		{
			tipoMayorPromedioTemperatura="Otra cosa";
		}
	}

	//F- Sumando gatos y perros que porcentaje del total de mascotas son?
	sumaGatosPerros=contadorGatos+contadorPerros;
	porcentajeGatosPerros=sumaGatosPerros/contadorMascotas*100;

	//G- Que estado clinico tiene la menor cantidad de mascotas
	if(contadorEnfermo<contadorInternado && contadorEnfermo<contadorAdopcion)
	{
		tipoMenorCantidadMascotas="Enfermos";
	}
	else
	{
		if(contadorInternado<contadorAdopcion)
		{
			tipoMenorCantidadMascotas="Internados";
		}
		else
		{
			tipoMenorCantidadMascotas="Adopcion";
		}
	}

	//H- Cual es el promedio de kilos de peso de tomando todas las mascotas.
	sumaAcumuladoresPeso=acumuladorPesoGatos+acumuladorPesoPerros+acumuladorPesoOtraCosa;
	promedioPeso=sumaAcumuladoresPeso/contadorMascotas;

	if(contadorPerros=!0)
	{
		console.log("El perro más pesado se llama: "+nombreMaximoPerro);
	}
	else
	{
		console.log("No hay perros como para decir cual es el más pesado");
	}

	if(contadorEnfermo!=0)
	{
		console.log("El porcentaje de mascotas enfermas por sobre el total es de: "+porcentajeEnfermos+"%");
	}
	else
	{
		console.log("No hay mascotas enfermas");
	}

	if(tipoIngresado=="otra cosa")
	{
		console.log("El ultimo 'otra cosa' ingresado se llama: " +nombreOtraCosa);
	}


	if(pelajeIngresado=="sin pelo")
	{
		console.log("La temperatura minima corporal de la mascota sin pelo es: "+nombreTemperaturaMinimaSinPelo);
	}
	else
	{
		console.log("No hay mascotas sin pelaje");
	}

	console.log("El tipo de mascota con mayor promedio de temperatura corporal son los: "+tipoMayorPromedioTemperatura);

	if(contadorGatos!=0 || contadorPerros!=0)
	{
		console.log("El porcentaje de la suma entre los gatos y perros por sobre el total de mascotas es de: "+porcentajeGatosPerros+"%");
	}
	else
	{
		console.log("No hay gatos ni perros para sacar el porcentaje");
	}

	console.log("El tipo de estado clinico con menor cantidad de mascota son los: "+tipoMenorCantidadMascotas);
	console.log("El promedio de peso en kilos entre todas las mascotas es de: "+promedioPeso);

	if(tipoIngresado="gato")
	{
		console.log("El nombre del gato sin pelos mas liviano es: "+nombreMinimoGatoSinPelo+" y su raza es: "+razaMinimoGatoSinPelo);
	}
	else
	{
		console.log("No hay gatos");
	}

}