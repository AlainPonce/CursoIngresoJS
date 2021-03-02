/* 10 - Ponce Alain
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	var sueldo
	var descuento;
	var resultado;

	sueldo = document.getElementById('txtIdImporte').value;
	sueldo = parseInt(sueldo);

	descuento = sueldo *25/100;

	resultado = sueldo - descuento;
	document.getElementById('txtIdResultado').value=resultado
}

/* 10 bis - Ponce Alain
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento que indique el usuario
en el cuadro de texto "RESULTADO"*/

function mostrarAumento()
{
	var sueldo;
	var resultado; 
	var descuento;

	sueldo = document.getElementById('txtIdImporte').value;
	sueldo = parseInt(sueldo);

	descuento =prompt("Ingrese cuanto descontar", "10");
	descuento = parseInt(descuento);

	//var porcentajeDescuento
	//porcentajeDescuento = sueldo * descuento/100;
	
	resultado = sueldo - (sueldo * descuento/100);	

	document.getElementById('txtIdResultado').value = resultado;
}
