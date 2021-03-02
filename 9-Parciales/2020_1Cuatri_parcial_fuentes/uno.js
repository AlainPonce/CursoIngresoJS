/*
Debemos realizar la carga de 5(cinco) productos de prevención de contagio,
de cada una debo obtener los siguientes datos:
el tipo (validar "barbijo" , "jabón" o "alcohol") ,
el precio (validar entre 100 y 300),
la cantidad de unidades (no puede ser 0 o negativo y no debe superar las 1000 unidades),
la Marca y el fabricante.
Se debe Informar al usuario lo siguiente:
a) Del más barato de los alcohol, la cantidad de unidades y el fabricante
b) Del tipo con mas unidades, el promedio de compra
c) Cuántas unidades de jabones hay en total
*/

function mostrar()
{
	var tipoIngresado;
	var precioIngresado;
	var cantidadIngresada;
	var marcaIngresada;
	var fabricanteIngresado;
	var contadorDeProductos;
	var flagAlcoholBarato;
	var cantidadAlcoholBarato;
	var fabricanteAlcoholBarato;
	var tipoConMasUnidades;
	var acumuladorAlcohol;
	var contadorAlcohol;
	var acumuladorBarbijo;
	var contadorBarbijo;
	var acumuladorJabon;
	var contadorJabon;
	var promedio;

	flagAlcoholBarato=0;
	acumuladorAlcohol=0;
	contadorAlcohol=0;

	acumuladorBarbijo=0;
	contadorBarbijo=0;

	acumuladorJabon=0;
	contadorJabon=0;

	for(contadorDeProductos=0;contadorDeProductos<4;contadorDeProductos++)
	{
		tipoIngresado=prompt("Ingrese el tipo de producto: barbijo, jabon o alcohol")
		while(isNaN(tipoIngresado)==false || tipoIngresado!="barbijo" && tipoIngresado!="jabon" && tipoIngresado!="alcohol")
		{
			tipoIngresado=prompt("Ingrese el tipo de producto correctamente: barbijo, jabon o alcohol");
		}

		precioIngresado=prompt("Ingrese el precio de producto: $100-300");
		precioIngresado=parseInt(precioIngresado);
		while(isNaN(precioIngresado)==true || precioIngresado<100 || precioIngresado>300)
		{
			precioIngresado=prompt("Ingrese el precio de producto correctamente: $100-300");
		}

		cantidadIngresada=prompt("Ingrese la cantidad de producto: 0-1000")
		cantidadIngresada=parseInt(cantidadIngresada);
		while(isNaN(cantidadIngresada)==true || cantidadIngresada<0 || cantidadIngresada>1000)
		{
			cantidadIngresada=prompt("Ingrese la cantidad de producto correctamente: 0-1000");
		}

		marcaIngresada=prompt("Ingrese la marca del producto: ")
		while(isNaN(marcaIngresada)==false)
		{
			marcaIngresada=prompt("Ingrese la marca del producto correctamente: ");
		}

		fabricanteIngresado=prompt("Ingrese el fabricante del producto: ")
		while(isNaN(fabricanteIngresado)==false)
		{
			fabricanteIngresado=prompt("Ingrese el fabricante del producto correctamente: ");
		}

		switch(tipoIngresado)
		{
			case "alcohol":
				if(flagAlcoholBarato==0)
				{
					cantidadAlcoholBarato=cantidadIngresada;
					fabricanteAlcoholBarato=fabricanteIngresado;
					flagAlcoholBarato=1;
				}
				else
				{
					if(cantidadIngresada>cantidadAlcoholBarato)
					{
						cantidadAlcoholBarato=cantidadIngresada
						fabricanteAlcoholBarato=fabricanteIngresado
					}
				}
				acumuladorAlcohol=acumuladorAlcohol+cantidadIngresada;
				contadorAlcohol++;
				break;

			case "barbijo":
				acumuladorBarbijo=acumuladorBarbijo+cantidadIngresada;
				contadorBarbijo++;
				break;

			case "jabon":
				acumuladorJabon=acumuladorJabon+cantidadIngresada;
				contadorJabon++;
				break;
		}
		
	}

	if(acumuladorAlcohol>acumuladorBarbijo && acumuladorAlcohol>acumuladorJabon)
		{
			tipoConMasUnidades="Alcohol"
			promedio=acumuladorAlcohol/contadorAlcohol;
		}
		else
		{
			if(acumuladorBarbijo>acumuladorJabon)
			{
				tipoConMasUnidades="Barbijo";
				promedio=acumuladorBarbijo/contadorBarbijo;
			}
			else
			{
				tipoConMasUnidades="Jabon";
				promedio=acumuladorJabon/contadorJabon;
			}
		}

	console.log("Del más barato de los alcohol, la cantidad de unidades es: "+cantidadAlcoholBarato+" y su fabricante es: "+fabricanteAlcoholBarato);	
	
	console.log("El promedio del tipo con más unidades es: "+promedio);
	
	console.log("Las unidades de jabón en total son: "+acumuladorJabon);
}
// > <



















































/*
	var tipoIngresado;
	var precioIngresado;
	var cantidadIngresada;
	var marcaIngresada;
	var fabricanteIngresado;
	var contadorDeProductos;
	var precioAlcoholMaximo;
	var precioAlcoholBarato;
	var fabricanteAlcoholBarato
	var fabricanteAlcoholCaro
	var flagAlcohol;
	var acumuladorBarbijo;
	var acumuladorAlcohol;
	var acumuladorJabon;
	var contadorDeAlcohol;
	var contadorDeBarbijo;
	var contadorDeJabon;
	var tipoMasCantidad;
	var promedio;

	contadorDeProductos=0;

	acumuladorBarbijo=0;
	acumuladorJabon=0;
	acumuladorAlcohol=0;

	contadorDeAlcohol=0;
	contadorDeBarbijo=0;
	contadorDeJabon=0;

	promedio=0;

	flagAlcohol=0;

	while(contadorDeProductos<5)
	{
		contadorDeProductos++;

		tipoIngresado=prompt("Ingrese el tipo de producto: alcohol, barbijo o jabon: ")
		while(isNaN(tipoIngresado)==false || tipoIngresado != "alcohol" && tipoIngresado != "barbijo" && tipoIngresado!="jabon")
		{
			tipoIngresado=prompt("Error. Ingrese el tipo de producto correcto: alcohol, barbijo o jabon:")
		}

		precioIngresado=prompt("Ingrese el precio: $100 a $300");
		precioIngresado=parseInt(precioIngresado);
		while(isNaN(precioIngresado)==true || precioIngresado < 100 || precioIngresado > 300)
		{
			precioIngresado=prompt("Error. Ingrese el precio correcto: $100 a $300");
			precioIngresado=parseInt(precioIngresado);
		}

		cantidadIngresada=prompt("Ingrese la cantidad: Entre 1 y 1000");
		cantidadIngresada=parseInt(cantidadIngresada);
		while(isNaN(cantidadIngresada)==true || cantidadIngresada<1 || cantidadIngresada >1000)
		{
			cantidadIngresada=prompt("Error. Ingrese la cantidad correcta: Entre 1 y 1000")
			cantidadIngresada=parseInt(cantidadIngresada);
		}

		marcaIngresada=prompt("Ingrese la marca: ");
		while(isNaN(marcaIngresada)==false)
		{
			marcaIngresada=prompt("Error. Ingrese la marca: ")
		}

		fabricanteIngresado=prompt("Ingrese el fabricante: ")
		while(isNaN(fabricanteIngresado)==false)
		{
			fabricanteIngresado=prompt("Error. Ingrese el fabricante: ")
		}

		//A- Del más barato de los alcohol, la cantidad de unidades y el fabricante.

		if(tipoIngresado=="alcohol")
		{		
			if(flagAlcohol==0)
			{				
				precioAlcoholCaro=precioIngresado;
				precioAlcoholBarato=precioIngresado;
				fabricanteAlcoholCaro=fabricanteIngresado;
				fabricanteAlcoholBarato=fabricanteIngresado;
				flagAlcohol=1
			}
			else //Cuidado no tener el else afuera del primer if.
			{
				if(precioIngresado<precioAlcoholBarato)
				{
					precioAlcoholBarato=precioIngresado;
					fabricanteAlcoholBarato=fabricanteIngresado;
				}
				else
				{
					if(precioIngresado>precioAlcoholCaro)
					{
							precioAlcoholCaro=precioIngresado;
							fabricanteAlcoholCaro=fabricanteIngresado;
					}
				}
			}
		}

		//B- Del tipo con mas unidades, el promedio por compra

		switch(tipoIngresado)
		{
			case "alcohol":
				acumuladorAlcohol=acumuladorAlcohol+cantidadIngresada;
				contadorDeAlcohol++;
				break;
			case "barbijo":
				acumuladorBarbijo=acumuladorBarbijo+cantidadIngresada;
				contadorDeBarbijo++;
				break;
			case "jabon":
				acumuladorJabon=acumuladorJabon+cantidadIngresada; // C- Cuántas unidades de jabones hay en total.
				contadorDeJabon++;
				break;
		}	

		if(acumuladorAlcohol>acumuladorBarbijo && acumuladorAlcohol>acumuladorJabon)
		{
			tipoMasCantidad = "Alcohol";
			promedio=acumuladorAlcohol/contadorDeAlcohol;
		}
		else
		{
			if(acumuladorBarbijo>acumuladorJabon)
			{
				tipoMasCantidad="Barbijo";
				promedio=acumuladorBarbijo/contadorDeBarbijo;
			}
			else
			{
				tipoMasCantidad="Jabon";
				promedio=acumuladorJabon/contadorDeJabon;
			}
		}	
	}
	console.log("Precio alcohol barato: "+precioAlcoholBarato);
	//console.log("Precio alcohol caro: "+precioAlcoholCaro);
	console.log("Fabricante alcohol barato: "+fabricanteAlcoholBarato);
	//console.log("Fabricante alcohol caro: "+fabricanteAlcoholCaro);	
	console.log("Promedio de compra de "+tipoMasCantidad+": "+promedio);
	console.log("Cantidad de jabon: "+acumuladorJabon)
*/


