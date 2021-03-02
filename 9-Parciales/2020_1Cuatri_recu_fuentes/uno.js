/*
Debemos realizar la carga de 5(cinco) productos de prevención de contagio,
de cada una debo obtener los siguientes datos:
el tipo (validar "barbijo" , "jabón" o "alcohol") ,
el precio (validar entre 100 y 300),
la cantidad de unidades (no puede ser 0 o negativo y no debe superar las 1000 unidades),
la Marca y el fabricante.
Se debe Informar al usuario lo siguiente:
a) Del más caro de los jabones, la cantidad de unidades y el fabricante
b) Del tipo con más unidades en total de la compra, el promedio por compra
c) Cuántas unidades de Barbijos se compraron en total
*/

function mostrar()
{
	var tipoIngresado;
	var precioIngresado;
	var cantidadIngresada;
	var marcaIngresada;
	var fabricanteIngresado;
	var contadorDeProductos;
	var flagJabon;
	var precioJabonCaro;
	var cantidadJabonCaro;
	var fabricanteJabonCaro;
	var contadorAlcohol;
	var acumuladorAlcohol;
	var contadorBarbijo;
	var acumuladorBarbijo;
	var contadorJabon;
	var acumuladorJabon;
	var promedio;
	var tipoConMasUnidades;

	flagJabon=0;

	contadorAlcohol=0;
	acumuladorAlcohol=0;
	contadorBarbijo=0;
	acumuladorBarbijo=0;
	contadorJabon=0;
	acumuladorJabon=0;

	for(contadorDeProductos=0;contadorDeProductos<5;contadorDeProductos++)
	{
		tipoIngresado=prompt("Ingrese el tipo de producto: alcohol, barbijo o jabon");
		while(isNaN(tipoIngresado)==false || tipoIngresado!="alcohol" && tipoIngresado!="barbijo" && tipoIngresado!="jabon")
		{
			tipoIngresado=prompt("Error. Ingrese el tipo de producto correcto: alcohol, barbijo o jabon");
		}

		precioIngresado=prompt("Ingrese el precio de producto: $100 a $300");
		precioIngresado=parseInt(precioIngresado);
		while(isNaN(precioIngresado)==true || precioIngresado<100 || precioIngresado>300)
		{
			precioIngresado=prompt("Error. Ingrese el precio de producto correcto:  $100 a $300");
			precioIngresado=parseInt(precioIngresado);
		}

		cantidadIngresada=prompt("Ingrese la cantidad de producto: 1 a 1000");
		cantidadIngresada=parseInt(cantidadIngresada);
		while(isNaN(cantidadIngresada)==true || cantidadIngresada<1 || cantidadIngresada>1000)
		{
			cantidadIngresada=prompt("Error. Ingrese la cantidad de producto correctamente: 1 a 1000");
			cantidadIngresada=parseInt(cantidadIngresada);
		}
		
		marcaIngresada=prompt("Ingrese la marca del producto: ");
		while(isNaN(marcaIngresada)==false)
		{
			marcaIngresada=prompt("Error. Ingrese la marca del producto correctamente: ");
		}

		fabricanteIngresado=prompt("Ingrese el fabricante del producto: ");
		while(isNaN(fabricanteIngresado)==false)
		{
			fabricanteIngresado=prompt("Error. Ingrese el fabricante del producto correctamente: ");
		}

		switch (tipoIngresado)
		{
			case "alcohol":
				contadorAlcohol++;
				acumuladorAlcohol=acumuladorAlcohol+cantidadIngresada;
				break;

			case "barbijo":
				contadorBarbijo++;
				acumuladorBarbijo=acumuladorBarbijo+cantidadIngresada;
				break;

			case "jabon":
				if(flagJabon==0)
				{
					precioJabonCaro=precioIngresado;
					cantidadJabonCaro=cantidadIngresada;
					fabricanteJabonCaro=fabricanteIngresado
					flagJabon=1;
				}
				else
				{
					if(precioIngresado>precioJabonCaro)
					{
						precioJabonCaro=precioIngresado;
						cantidadJabonCaro=cantidadIngresada;
						fabricanteJabonCaro=fabricanteIngresado
					}
				}
				contadorJabon++;
				acumuladorJabon=acumuladorJabon+cantidadIngresada;
				break;
		}

	}

	if(acumuladorAlcohol>acumuladorBarbijo && acumuladorAlcohol>acumuladorJabon)
	{
		tipoConMasUnidades="alcohol";
		promedio=acumuladorAlcohol/contadorAlcohol;
	}
	else
	{
		if(acumuladorBarbijo>acumuladorJabon)
		{
			tipoConMasUnidades="barbijo";
			promedio=acumuladorBarbijo/contadorBarbijo;
		}
		else
		{
			tipoConMasUnidades="jabon";
			promedio=acumuladorBarbijo/contadorBarbijo;
		}
	}

	console.log("La cantidad de jabones del mas caro es: "+cantidadJabonCaro+" y su fabricante es: "+fabricanteJabonCaro);
	console.log("El tipo con mas unidades en total es: "+tipoConMasUnidades+" y su promedio por compra es "+promedio);
	console.log("Se compraron "+acumuladorBarbijo+" barbijos en total");
}


















































/*function mostrar()
{
	var tipoIngresado;
	var precioIngresado;
	var cantidadIngresada;
	var marcaIngresada;
	var fabricanteIngresado;
	var contadorDeProductos;
	var flagJabon;
	var precioJabonCaro;
	var precioJabonBarato;
	var fabricanteJabonCaro;
	var fabricanteJabonBarato;
	var cantidadJabonCaro;
	var cantidadJabonBarato;
	var acumuladorAlcohol;
	var acumuladorBarbijo;
	var acumuladorJabon;
	var contadorAlcohol;
	var contadorBarbijo;
	var contadorJabon;
	var promedio;

	flagJabon=0;
	contadorDeProductos=0;

	acumuladorAlcohol=0;
	acumuladorBarbijo=0;
	acumuladorJabon=0;

	contadorAlcohol=0;
	contadorBarbijo=0;
	contadorJabon=0;


	do
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
		while(isNaN(cantidadIngresada)==true || cantidadIngresada<1 || cantidadIngresada>1000)
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

		//A- Del más caro de los jabones, la cantidad de unidades y el fabricante

		if(tipoIngresado=="jabon")
		{		
			if(flagJabon==0)
			{				
				precioJabonCaro=precioIngresado;
				precioJabonBarato=precioIngresado;
				fabricanteJabonCaro=fabricanteIngresado;
				fabricanteJabonBarato=fabricanteIngresado;
				cantidadJabonBarato=cantidadIngresada;
				cantidadJabonCaro=cantidadIngresada;
				flagJabon=1
			}
			else //Cuidado no tener el else afuera del primer if.
			{
				if(precioIngresado<precioJabonBarato)
				{
					precioJabonBarato=precioIngresado;
					fabricanteJabonBarato=fabricanteIngresado;
					cantidadJabonBarato=cantidadIngresada;
				}
				else
				{
					if(precioIngresado>precioJabonCaro)
					{
						precioJabonCaro=precioIngresado;
						fabricanteJabonCaro=fabricanteIngresado;
						cantidadJabonCaro=cantidadIngresada;
					}
				}
			}
		}	

		//B- Del tipo de producto con más unidades en total de la compra, el promedio por compra

		switch(tipoIngresado)
		{
			case "alcohol":
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

		if(acumuladorAlcohol>acumuladorBarbijo && acumuladorAlcohol>acumuladorJabon)
		{
			promedio=acumuladorAlcohol/contadorJabon;
			tipoConMasUnidades="Alcohol"
		}
		else
		{
			if (acumuladorBarbijo>acumuladorJabon)
			{
				promedio=acumuladorBarbijo/contadorBarbijo;
				tipoConMasUnidades="Barbijo"
			}
			else
			{
				promedio=acumuladorJabon/contadorJabon;
				tipoConMasUnidades="Jabon"
			}
		}
	}while(contadorDeProductos<5)
	console.log("La cantidad de jabones del mas caro es: "+cantidadJabonCaro+" y su fabricante es: "+fabricanteJabonCaro);
	console.log("El tipo con mas unidades es "+tipoConMasUnidades+" y el promedio por compra es: "+promedio);
	console.log("Las unidades de jabon en total son: "+acumuladorBarbijo);
}*/

/*
Debemos realizar la carga de 5(cinco) productos de prevención de contagio,
de cada una debo obtener los siguientes datos:
el tipo (validar "barbijo" , "jabón" o "alcohol") ,
el precio (validar entre 100 y 300),
la cantidad de unidades (no puede ser 0 o negativo y no debe superar las 1000 unidades),
la Marca y el fabricante.
Se debe Informar al usuario lo siguiente:
a) Del más caro de los jabones, la cantidad de unidades y el fabricante
b) Del tipo con más unidades en total de la compra, el promedio por compra
c) Cuántas unidades de Barbijos se compraron en total
*/


