function mostrar()
{
	var mes;
	mes=document.getElementById('txtIdMes').value

	switch(mes)
	{
		case "Enero":
			alert("Que comiences bien el año");
			break;
		case "Marzo":
			alert("A clases!!!")
			break;
		case "Julio":
			alert("Se vienen las vacaciones!!!");
			break;
		case "Diciembre":
			alert("Felices Fiestas!!!")
			break;
	}
}

/*	
	var mes;
	mes=document.getElementById('txtIdMes').value

	if(mes=="Enero");
	{
		alert("Que comiences bien el año");
	}
	else
	{
		if(mes=="Marzo");
		{
			alert("A clases!!!");
		}
		else
		{
			if(mes=="Julio")
			{
				alert("Se vienen las vacaciones!!!")
			}
			else
			{
				if(mes=="Diciembre"
				{
					alert("Felices Fiestas!!!)
				}
			}
		}

	}
*/