function mostrar()
{
	var destino
	
	destino = document.getElementById('txtIdDestino').value;
	

	switch(destino)
	{
		case "Bariloche":
		case "Ushuaia":
			alert("Frio")
			break;
		case "Mar del plata":			
		case "Cataratas":
			alert("Calor")
			break;
	}
}