/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
	var numeroUno
	var numeroDos
	var numeroTres
	var resultado
	numeroUno = document.getElementById('txtIdPrecioUno').value;
	numeroDos = document.getElementById('txtIdPrecioDos').value;
	numeroTres = document.getElementById('txtIdPrecioTres').value;
	numeroUno = parseInt(numeroUno);
	numeroDos = parseInt(numeroDos);
	numeroTres = parseInt(numeroTres);
	resultado = numeroUno + numeroDos + numeroTres;
	alert("La suma de los mismos es: " +resultado);
}
function Promedio () 
{
	var numeroUno
	var numeroDos
	var numeroTres
	var resultado
	numeroUno = document.getElementById('txtIdPrecioUno').value;
	numeroDos = document.getElementById('txtIdPrecioDos').value;
	numeroTres = document.getElementById('txtIdPrecioTres').value;
	numeroUno = parseInt(numeroUno);
	numeroDos = parseInt(numeroDos);
	numeroTres = parseInt(numeroTres);
	resultado = (numeroUno + numeroDos + numeroTres) /3;
	alert("El promedio de los mismos es: " +resultado);
}
function PrecioFinal () 
{
	var numeroUno
	var numeroDos
	var numeroTres
	var sumatotal
	var resultado
	numeroUno = document.getElementById('txtIdPrecioUno').value;
	numeroDos = document.getElementById('txtIdPrecioDos').value;
	numeroTres = document.getElementById('txtIdPrecioTres').value;
	numeroUno = parseInt(numeroUno);
	numeroDos = parseInt(numeroDos);
	numeroTres = parseInt(numeroTres);
	sumatotal = numeroUno + numeroDos + numeroTres;
	resultado = sumatotal + (sumatotal * 0.21)
	
	alert("El Precio Final de los mismos es: " +resultado);
}