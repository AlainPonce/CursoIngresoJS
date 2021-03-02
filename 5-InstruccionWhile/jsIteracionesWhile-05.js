/*
Al presionar el botón pedir un sexo
'f' para femenino, 'm' para masculino.*/
function mostrar()
{
	var sexoIngresado;

	sexoIngresado = prompt("Ingrese F o M: ")

	while(sexoIngresado != "F" && sexoIngresado != "M")
	{
		sexoIngresado = prompt("Error. Ingrese F o M nuevamente: ")
	}
	
	document.getElementById('txtIdSexo').value=sexoIngresado;
}
//FIN DE LA FUNCIÓN