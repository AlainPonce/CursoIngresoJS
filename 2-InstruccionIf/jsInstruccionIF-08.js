function mostrar()
{
	var estado;
	var edad;
	
	edad=document.getElementById('txtIdEdad').value
	edad=parseInt(edad);
	estado=document.getElementById('estadoCivil').value

	if(estado == "Soltero" && edad>17) /* "Soltero" porque aparece en el html */
	{
		alert("Es soltero y no es menor.")
	}
}
// > <