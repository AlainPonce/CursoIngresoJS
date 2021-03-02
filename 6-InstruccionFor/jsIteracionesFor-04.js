/*al presionar el botón repetir hasta que utilizamos 'BREAK'.*/
function mostrar()
{
	var repetir;

	for(repetir=0 ; ; repetir++ )
	{
		console.log("Hola UTN FRA");
		if(repetir == 5)
		{
			break;
		}
	}
}