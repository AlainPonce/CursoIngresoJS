/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
sumar los que son positivos y multiplicar los negativos.*/
function mostrar()
{
	var numero;
	var seguir;
	var suma;
	var iteracion;
	var positivos;
	var negativos; 

	seguir="Si" // no hace falta si empezas con "do"
	iteracion=0;
	positivos=0;
	negativos=1;

	do
	{
		iteracion++;
		numero=prompt("Ingrese un numero: "+iteracion);

		while(isNaN(numero)/*==true*/)
		{
			numero=prompt("Error. No ingrese una palabra, ingrese un numero: "+iteracion);			
		}	

		numero=parseInt(numero);	

		if(numero > -1 )
		{
			positivos = positivos + numero;
		}
		else
		{
			if (numero < 0)
			negativos = negativos * numero;
		}

		
		seguir= prompt("Quiere ingresar mas numeros? ");	

	}while(seguir == "Si");

	document.getElementById('txtIdSuma').value = positivos;

	if(negativos < 0)
	{
		document.getElementById('txtIdProducto').value = negativos;
	}
	else
	{
		document.getElementById('txtIdProducto').value = 0;
	}
}
// > <