/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
	var Numero1;
	var Numero2;
	var resultado;
	
	//document.getElementById devuelve siempre texto si no se "Parsea".
	Numero1 = document.getElementById('txtIdNumeroUno').value;
	Numero2 = document.getElementById('txtIdNumeroDos').value;

	//El parseInt logra que no se concatene los valores y poder sumarlos. En consola, el numero deja de ser palabra si no lleva comillas.
	Numero1 = parseInt(Numero1) //txt viene del HTML, lo encuentro por Inspeccionar Elemento
	Numero2 = parseInt(Numero2) //txt viene del HTML, lo encuentro por Inspeccionar Elemento

	//Numero1 = parseInt(document.getElementById('txtIdNumeroUno').value;) Simplificado.
	//Numero2 = parseInt(document.getElementById('txtIdNumeroDos').value;) Simplificado.

	resultado = Numero1 + Numero2

	alert("La suma de ambos es: "+ resultado); 
	console.log(resultado);
}

	//Ctrl + Shift + I o Inspeccionar = Source = Sobre el margen de una acción, breakpoints.

