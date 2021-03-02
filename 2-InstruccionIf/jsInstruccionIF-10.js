function mostrar()
{
	var nota;
	nota = Math.floor(Math.random() * 10) + 1;

	if(nota>8)
	{
		alert("Excelente Nota: "+nota);
	}
	else
	{
		if(nota>3 && nota<9) // nota >3
		{
			alert("Aprobó: "+nota);
		}
		else
		{
			alert("Vamos, la proxima se puede: "+nota);
		}
	}
}
// > <