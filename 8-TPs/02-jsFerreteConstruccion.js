/*2.	Para el departamento de Construcción:
A.	mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambrar con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambrar con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
	var largo;
	var ancho;
	var perimetro
	var alambre

	largo=document.getElementById('txtIdLargo').value;
	largo=parseInt(largo);
	ancho=document.getElementById('txtIdAncho').value;
	ancho=parseInt(ancho);

	perimetro = (largo + ancho) *2;
	alambre = perimetro *3;
	alert("La cantidad de alambre a comprar es: "+alambre+ " metros");

}

function Circulo () 
{
	var perimetro;
	var alambre;
	var radio;
	var PI ;

	radio = document.getElementById('txtIdRadio').value;
	radio = parseInt(radio);

	PI = 3.14;

	perimetro = 2 * PI * radio;
	alambre = perimetro * 3;
	alert("La cantidad de alambre a comprar es: "+alambre+" metros.");
}

function Materiales () 
{
	var largo;
	var ancho;
	var area;
	var cemento;
	var cal;

	largo = document.getElementById('txtIdLargo').value;
	largo = parseInt(largo);
	ancho = document.getElementById('txtIdAncho').value;
	ancho = parseInt(ancho);

	area = largo * ancho;
	cemento = area * 2;
	cal = area * 3;

	alert("Para un contrapiso de " +area+ " m2 necesito comprar " +cemento+ " bolsas de cemento y "+cal+" bolsas de cal.");
}