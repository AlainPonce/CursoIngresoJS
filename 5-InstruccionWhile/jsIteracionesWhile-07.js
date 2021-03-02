/*
Al presionar el botón pedir  números  hasta que el USUARIO QUIERA 
e informar la suma acumulada y el promedio.
*/
function mostrar()
{
	var numero;
	var seguir;
	var suma;	
	var iteracion;
	var promedio;

	seguir="Si"
	iteracion=0;
	suma=0;
 
	while(seguir == "Si" || seguir == "si" || seguir =="yes)")  //do {..} while(seguir == "Si") 
	{
		iteracion++; // Guarda las veces que se interactua con el programa.
		numero=prompt("Ingrese un numero: "+iteracion);

		while(isNaN(numero)/*==true*/)
		{
			numero=prompt("Error. No ingrese una palabra, ingrese un numero: "+iteracion);			
		}	

		numero=parseInt(numero); // Parseo despues de verificar si es un NaN
		suma=suma + numero;		
		seguir=prompt("Quiere ingresar mas numeros? ");
	}

	promedio=suma / iteracion; // iteracion sabe las veces que se interactuo

	document.getElementById('txtIdSuma').value = suma;
	document.getElementById('txtIdPromedio').value = promedio;

}//FIN DE LA FUNCIÓN