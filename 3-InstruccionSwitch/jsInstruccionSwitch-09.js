function mostrar()
{
	var estacion;
	var destino;
	var precioFinal;
	var precio;
	var aumento;
	var descuento;

	precio=15000;
	aumento=0;
	descuento=0;

	destino=document.getElementById('txtIdDestino').value;
	estacion=document.getElementById('txtIdEstacion').value;
	

	switch(estacion)
	{
		case "Invierno":
			if(destino=="Bariloche")
			{
				aumento=20;
			}
			else
			{
				if(destino=="Mar del Plata")
					descuento=20;
				else
				{
					descuento=10;
				}
			}

			break;
		case "Verano":
			if(destino=="Bariloche")
			{
				descuento=20;
			}
			else
			{
				if(destino=="Mar del Plata")
					aumento=20;
				else
				{
					aumento=10;
				}
			}
			break;

		case "Otoño":			
		case "Primavera":
			if(destino=="Cordoba")
			{
				precioFinal=precio;
			}
			else
			{
				aumento=10;
			}
			break;
	}

	if(aumento != 0)
	{
		precioFinal= precio + precio * aumento/100;
	}
	else
	{
		if (descuento != 0)
		{
			precioFinal = precio - precio * descuento/100;
		}
	}
	alert("Precio final: $"+precioFinal);

}