/*
al presionar el botón 
pedir un número entre 0 y 9 inclusive.*/
function mostrar()
{
    var numeroIngresado;
    var valorDeVerdad;

    numeroIngresado = prompt("Ingrese un número entre 0 y 9.");
    numeroIngresado = parseInt(numeroIngresado);
    
    //valorDeVerdad = isNaN(numeroIngresado) = Si IsNan es verdadero, no tiene valor

    while(isNaN(numeroIngresado)==true || numeroIngresado < 0 || numeroIngresado > 9)
        //Si IsNaN es verdadero (No es un valor), o si el numero es menor a 0 y mayor a 9
    {
        numeroIngresado = prompt("Error. Intente nuevamente. Ingrese un número entre 0 y 9.");
        numeroIngresado = parseInt(numeroIngresado);
    }
    document.getElementById('txtIdNumero').value = numeroIngresado;
}
	
//FIN DE LA FUNCIÓN // > <

/*
	{
		var numero;

    	numero = prompt("Ingrese un número entre 0 y 9: ");
   		numero = parseInt(numero);

    	while(numero < 0 || numero> 9)
    {
        	alert("Intente nuevamente.");
        	numero = prompt("Ingrese un número entre 0 y 9: ");
        	numero = parseInt(numero);
    }
    	document.getElementById('txtIdNumero').value = numero;
	}
*/