function mostrar()
{
	var estado;
	var edad;
	
	edad=document.getElementById('txtIdEdad').value
	edad=parseInt(edad);
	estado=document.getElementById('estadoCivil').value

	if(edad<18 && estado != "Soltero") // "Soltero" porque aparece en el html
	{
		alert("Es muy pequeño para NO ser solero.")
	}
}
// > <