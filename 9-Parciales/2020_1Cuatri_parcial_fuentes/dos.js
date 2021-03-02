/*
Realizar el algoritmo que permita ingresar los datos de una compra productos de la construccion,
hasta que el cliente quiera:
Tipo validad("arena";"cal";"cemento")
Cantidad de bolsas,
Precio por bolsa (más de cero ),
Si compro más de 10 bolsas en total tenes 15% de descuento sobre el total a pagar.
Si compro más de 30 bolsas en total tenes 25% de descuento sobre el total a pagar.
a) El importe total a pagar , bruto sin descuento y...
b) el importe total a pagar con descuento(solo si corresponde)
c) Informar el tipo con mas cantidad de bolsas.
d) El tipo mas caro.
*/

function mostrar()
{
	var tipoIngresado;
	var cantidadIngresada;
	var precioIngresado;
	var contadorProductos;
	var seguir;
	var totalBruto;
	var totalConDescuento;
	var descuento;
	var flagArena;
	var flagCal;
	var flagCemento;
	var acumuladorArena;
	var acumuladorCal;
	var acumuladorCemento;
	var acumuladorTotal;
	var flagMaximoBolsas;
	var precioDeBolsaCara;
	var tipoCaro;
	var tipoMasCantidad;

	contadorProductos=0;

	acumuladorArena=0;
	acumuladorCal=0;
	acumuladorCemento=0;

	totalBruto=0;
	totalConDescuento=0;
	
	flagMaximoBolsas=0;

	do
	{
		tipoIngresado=prompt("Ingrese el tipo de producto: arena, cal o cemento")
		while(isNaN(tipoIngresado)==false || tipoIngresado!="arena" && tipoIngresado!="cal" && tipoIngresado!="cemento")
		{
			tipoIngresado=prompt("Error. Ingrese el tipo de producto correctamente: arena, cal o cemento");
		}

		cantidadIngresada=prompt("Ingrese la cantidad de bolsas: ");
		cantidadIngresada=parseInt(cantidadIngresada);
		while(isNaN(cantidadIngresada)==true || cantidadIngresada<1)
		{
			cantidadIngresada=prompt("Error. Ingrese el precio de producto correctamente: $100-300");
		}

		precioIngresado=prompt("Ingrese el precio de bolsas: ");
		precioIngresado=parseInt(precioIngresado);
		while(isNaN(precioIngresado)==true || precioIngresado<0)
		{
			precioIngresado=prompt("Error. Ingrese el precio de bolsas correctamente: ");
		}

		switch(tipoIngresado)
		{
			case "arena":
				acumuladorArena=acumuladorArena+cantidadIngresada;
				break;

			case "cal":
				acumuladorCal=acumuladorCal+cantidadIngresada;
				break;

			case "cemento":
				acumuladorCemento=acumuladorCemento+cantidadIngresada;
				break;
		}

		acumuladorTotal=acumuladorCemento+acumuladorCal+acumuladorArena;

		if(acumuladorTotal>10 && acumuladorTotal<30)
		{
			descuento=15/100;
		}
		else
		{
			if(acumuladorTotal>29)
			{
				descuento=25/100;
			}
			else
			{
				descuento=0;
			}
		}

		totalBruto=totalBruto+precioIngresado*cantidadIngresada;

		if(flagMaximoBolsas==0)
		{
			precioDeBolsaCara=precioIngresado;
			tipoCaro=tipoIngresado;
			flagMaximoBolsas=1;
		}
		else
		{
			if(precioIngresado>precioDeBolsaCara)
			{
				precioDeBolsaCara=precioIngresado;
				tipoCaro=tipoIngresado;
			}
			
		}

		seguir=prompt("Desea agregar otro producto?")
	}while(seguir=="Si")

	if(descuento!=0)
	{
		totalConDescuento=totalBruto-totalBruto*descuento;
	}
		

	if(acumuladorArena>acumuladorCal && acumuladorArena>acumuladorCemento)
	{
		tipoMasCantidad="Arena";
	}
	else
	{
		if(acumuladorCal>acumuladorCemento)
		{
			tipoMasCantidad="Cal";
		}
		else
		{
			tipoMasCantidad="Cemento";
		}
	}

	console.log("El precio bruto es: "+totalBruto);
	if(descuento!=0)
	{
		console.log("El precio con descuento es: "+totalConDescuento);
	}	
	console.log("El tipo mas caro es: "+tipoCaro);
	console.log("El tipo con mas cantidad de bolsas es: "+tipoMasCantidad);
}






























































/*
{
	var tipoIngresado;
	var cantidadDeBolsasIngresada;
	var precioDeBolsasIngresado;
	var contadorDeProductos;
	var seguir;
	var acumuladorArena;
	var acumuladorCal;
	var acumuladorCemento;
	var acumuladorGeneral;
	var contadorDeArena;
	var contadorDeCal;
	var contadorDeCemento;
	var totalBruto;
	var totalConDescuento;
	var tipoMasCantidad;
	var flagPrecio;
	var descuento;
	var precioDeBolsaCara;
	var tipoCaro;

	seguir="Si"
	contadorDeProductos=0;

	acumuladorArena=0;
	acumuladorCal=0;
	acumuladorCemento=0;
	acumuladorGeneral=0;

	contadorDeArena=0;
	contadorDeCal=0;
	contadorDeCemento=0;

	totalBruto=0;
	totalConDescuento=0;

	flagPrecio=0;

	do
	{
		contadorDeProductos++;

		tipoIngresado=prompt("Ingrese el tipo de producto: arena, cal o cemento: ")
		while(isNaN(tipoIngresado)==false || tipoIngresado != "arena" && tipoIngresado != "cal" && tipoIngresado!="cemento")
		{
			tipoIngresado=prompt("Error. Ingrese el tipo de producto correcto: arena, cal o cemento:")
		}

		cantidadDeBolsasIngresada=prompt("Ingrese cantidad de bolsas:");
		cantidadDeBolsasIngresada=parseInt(cantidadDeBolsasIngresada);
		while(isNaN(cantidadDeBolsasIngresada)==true || cantidadDeBolsasIngresada < 1)
		{
			cantidadDeBolsasIngresada=prompt("Error. Ingrese la cantidad correcta: ");
			cantidadDeBolsasIngresada=parseInt(cantidadDeBolsasIngresada);
		}

		precioDeBolsasIngresado=prompt("Ingrese el precio: ");
		precioDeBolsasIngresado=parseInt(precioDeBolsasIngresado);
		while(isNaN(precioDeBolsasIngresado)==true || precioDeBolsasIngresado < 1)
		{
			precioDeBolsasIngresado=prompt("Error. Ingrese el precio correcto: ");
			precioDeBolsasIngresado=parseInt(precioDeBolsasIngresado);
		}

		switch(tipoIngresado)
		{
			case "arena":
				acumuladorArena=acumuladorArena+cantidadDeBolsasIngresada;
				contadorDeArena++;
				break;

			case "cal":
				acumuladorCal=acumuladorCal+cantidadDeBolsasIngresada;
				contadorDeCal++;
				break;

			case "cemento":
				acumuladorCemento=acumuladorCemento+cantidadDeBolsasIngresada; // C- Cuántas unidades de jabones hay en total.
				contadorDeCal++;
				break;
		}
		acumuladorGeneral=acumuladorArena+acumuladorCal+acumuladorCemento;

		if(acumuladorGeneral>10 && acumuladorGeneral<31)
		{
			descuento=15/100;
		}
		else
		{
			if(acumuladorGeneral>30)
			{
				descuento=25/100;
			}
			else
			{
				descuento=0;
			}
		}

		//A- El importe total a pagar , bruto sin descuento
		totalBruto = totalBruto + precioDeBolsasIngresado*cantidadDeBolsasIngresada;					

		//D- El tipo mas caro.
		if(flagPrecio==0)
			{				
				precioDeBolsaCara=precioDeBolsasIngresado;
				tipoCaro=tipoIngresado;
				flagPrecio=1
			}
			else //Cuidado no tener el else afuera del primer if.
			{
				if(precioDeBolsasIngresado>precioDeBolsaCara)
					{
						precioDeBolsaCara=precioDeBolsasIngresado;
						tipoCaro=tipoIngresado;
					}
			}

		seguir=prompt("Desea agregar otro producto?");
	}while(seguir=="Si")

	//C- Informar el tipo con mas cantidad de bolsas.
		if(acumuladorArena>acumuladorCal && acumuladorArena>acumuladorCemento)
		{
			tipoMasCantidad = "Arena";			
		}
		else
		{
			if(acumuladorCal>acumuladorCemento)
			{
				tipoMasCantidad="Cal";				
			}
			else
			{
				tipoMasCantidad="Cemento";				
			}
		}

	console.log("Total bruto: "+totalBruto);

	//B- El importe total a pagar con descuento(solo si corresponde)
	if(descuento!=0)
	{
		totalConDescuento =totalBruto-totalBruto*descuento;
		console.log("Total con descuento: "+totalConDescuento);
	}
	
	console.log("Tipo con mas cantidad: "+tipoMasCantidad);
	console.log("Tipo caro: "+tipoCaro);
}
// > <
*/