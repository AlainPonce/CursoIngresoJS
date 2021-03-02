/*Bienvenidos.
Realizar el algoritmo que permita ingresar la marca del producto, 
el peso el cual debe ser entre 1 y 100 (validar),
la temperatura de almacenamiento(entre -30 y 30) hasta que el usuario quiera
 e informar al terminar el ingreso por document.write:
a) La cantidad de temperaturas pares.
b) La marca del producto más pesado
c) La cantidad de productos que se conservan a menos de 0 grados.
d) El promedio del peso de todos los productos.
f) El peso máximo y el mínimo.*/

function mostrar()
{
	var marca;
	var marcaPesada;
	var marcaLiviana;
	var peso;
	var pesoPesado;
	var pesoLiviano;
	var temperatura;
	var temperaturaPares;
	var temperaturaImpares;               //Informacion de más.
	var contadorTemperaturasPares;
	var contadorTemperaturasImpares;    //Informacion de más.
	var contadorTemperaturasCero;      //Informacion de más.
	var contadorTemperaturasBajoCero;
	var promedioPeso;
	var sumadorPeso;	
	var seguir;
	var iteracion;

	temperaturaPares=0;
	temperaturaImpares=0; //Informacion de más.

	contadorTemperaturasPares=0;
	contadorTemperaturasImpares=0;      //Informacion de más.
	contadorTemperaturasCero=0;        //Informacion de más.
	contadorTemperaturasBajoCero=0;   //Informacion de más.

	seguir="Si"

	iteracion=0;
	flagPrimera=0;
	
	sumadorPeso=0;
	promedioPeso=0;

	do
	{
		iteracion++;
		marca=prompt("Ingresar marca de producto: ");

		peso=prompt("El peso del producto es: ")
		while(isNaN(peso) || peso < 1 || peso > 100)
		{
			peso=prompt("Error. No ingrese una palabra, ingrese el peso correctamente: ");
			peso=parseInt(peso);				
		}		
			peso=parseInt(peso);

		temperatura=prompt("La temperatura de almacenamiento es: ");
		while(isNaN(temperatura) || temperatura < -30 || temperatura > 30)
		{
			temperatura=prompt("Error. No ingrese una palabra, ingrese la temperatura de almacenamiento correctamente: ");
			temperatura=parseInt(temperatura);		
		}		
			temperatura=parseInt(temperatura);
	
		//A y C -Temperaturas pares y ceros.
	
		if(temperatura%2==0)
		{		
			contadorTemperaturasPares++;
		}
		else
		{	
			if(temperatura==0)	
			{
				contadorTemperaturasCero++; //Informacion de más.
			}
			else
			{
				contadorTemperaturasImpares++;  //Informacion de más.
			}
		}
	
		//B- Marca producto mas pesado:
	
		if(flagPrimera==0)
		{
			flagPrimera=1;
			marcaPesada=marca;
			pesoPesado=peso;                     //Sirve para el F.
			marcaLiviana=marca;
			pesoLiviano=peso;				   //Sirve para el F.
		}
		else
		{
			if(peso<pesoLiviano)
			{
				pesoLiviano=peso;
				marcaLiviana=marca;
			}
			else
			{
				if(peso>pesoPesado)
				{
					pesoPesado=peso;
					marcaPesada=marca;
				}
			}
		}
	
		//C - Productos con temperaturas a menos de 0 grados.
	
		if(temperatura<0)
		{
			contadorTemperaturasBajoCero++;
		}

		//D - Suma de peso de productos:
		sumadorPeso=parseInt(sumadorPeso); //Tuve que parsear por concatenacion en promedio.
		sumadorPeso=sumadorPeso+peso;
		

		seguir=prompt("Desea agregar otro producto?");
	}while(seguir=="Si")

	//D - Promedio de peso de productos:
	promedioPeso=sumadorPeso/iteracion;

	//F - Peso maximo y minimo:
	// Sale del B.

	document.write("Temperaturas pares: "+contadorTemperaturasPares);
	document.write("<br> Marca pesada: "+marcaPesada);
	document.write("<br> Cantidad de productos que se conservan a menos de 0 grados: " +contadorTemperaturasBajoCero);
	document.write("<br> Promedio de los pesos: "+promedioPeso);
	document.write("<br> Peso maximo: "+pesoPesado);
	document.write("<br> Peso minimo: "+pesoLiviano);
}




	