function mostrar()
{
	var numeros;
	var suma;	
	var promedio;
	var iteracion;

	iteracion=0; // Necesita tener valor
	suma=0; // Necesita tener valor

	while(iteracion < 5)                                    // 5 veces va a preguntar
	{
		iteracion++;                                      // Veces que se interactua con el programa
		numeros=prompt("Ingrese un numero: "+iteracion); // +iteracion para que te diga por cual numero vas
		//numeros=parseInt(numeros);

		while(isNaN(numeros)/*==true*/)
		{
			numeros=prompt("Error. No ingrese una palabra, ingrese un numero: "+iteracion);			
		}	
		numeros=parseInt(numeros);	
		suma = suma + numeros; // Va aumentando segun los numeros ingresados		 
	}
	
	promedio = suma/5/*iteracion*/;
	document.getElementById('txtIdSuma').value = suma;
	document.getElementById('txtIdPromedio').value = promedio;
}


/*
{
	var numeroUno;
	var numeroDos;
	var numeroTres;
	var numeroCuatro;
	var numeroCinco;
	var suma;
	var promedio;

	suma=parseInt(suma);
	promedio=parseInt(promedio);

	numeroUno=prompt("Ingrese un numero: ");
	numeroUno=parseInt(numeroUno);
	numeroDos=prompt("Ingrese un numero: ");
	numeroDos=parseInt(numeroDos);
	numeroTres=prompt("Ingrese un numero: ");
	numeroTres=parseInt(numeroTres);
	numeroCuatro=prompt("Ingrese un numero: ");
	numeroCuatro=parseInt(numeroCuatro);
	numeroCinco=prompt("Ingrese un numero: ");	
	numeroCinco=parseInt(numeroCinco);	

	suma = numeroUno+numeroDos+numeroTres+numeroCuatro+numeroCinco;
	promedio = suma/5;

	document.getElementById('txtIdSuma').value = suma;
	document.getElementById('txtIdPromedio').value = promedio;
	
}
// > <
*/
