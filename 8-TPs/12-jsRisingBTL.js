/*RISING BTL. Empresa dedicada a la toma de datos para realizar estadísticas 
y censos nos pide realizar una carga de datos validada e ingresada por ventanas 
emergentes solamente (para evitar hacking y cargas maliciosas) y luego asignarla 
a cuadros de textos. 

12.   Los datos requeridos son los siguientes:
A.	  Edad, entre 18 y 90 años inclusive.
B.	  Sexo, “M” para masculino y “F” para femenino
C.	  Estado civil, 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos
D.	  Sueldo bruto, no menor a 8000.
E.	  Número de legajo, numérico de 4 cifras, sin ceros a la izquierda.
F.	  Nacionalidad, “A” para argentinos, “E” para extranjeros, “N” para nacionalizados.
 */

function ComenzarIngreso () 
{
 	//definicion de variables
 	var edadIngresada;
 	var sexoIngresado;
 	var estadoCivilIngresado;
 	var sueldoBruto;
 	var legajo;
 	var nacionalidad; 	
 	var modificar;

 	edadIngresada=document.getElementById('txtIdEdad').value;
 	sexoIngresado=document.getElementById('txtIdSexo').value;
 	estadoCivilIngresado=document.getElementById('txtIdEstadoCivil').value;
 	sueldoBruto=document.getElementById('txtIdSueldo').value;
 	legajo=document.getElementById('txtIdLegajo').value;
 	nacionalidad=document.getElementById('txtIdNacionalidad').value; 

 	do
 	{
 		//Edad Ingresada:
 		edadIngresada=prompt("Ingrese su edad: ");

 		while(isNaN(edadIngresada) || edadIngresada < 18 || edadIngresada > 90)
		{
			edadIngresada=prompt("Error. No ingrese una palabra, ingrese una edad entre 18 y 90: ");
			edadIngresada=parseInt(edadIngresada);			
		}			

		//Sexo Ingresado:
		sexoIngresado=prompt("Ingrese su sexo: F o M")
		while(sexoIngresado != "F" && sexoIngresado != "M")
		{
			sexoIngresado = prompt("Error. Ingrese su sexo nuevamente: F o M ")
		}

		//Estado civil Ingresado:
		estadoCivilIngresado=prompt("Estado civil: 1 para Soltero, 2 para Casado, 3 para Divorciado y 4 para Viudo.");
		while(estadoCivilIngresado != "1" && estadoCivilIngresado != "2" && estadoCivilIngresado != "3" && estadoCivilIngresado != "4")
		{
			estadoCivilIngresado=prompt("Error. No ingreso los caracteres correctos: 1, 2, 3, 4.");
		}		
		switch (estadoCivilIngresado)
		{
			case "1":
				estadoCivilIngresado="Soltero";
				break;
			case "2":
				estadoCivilIngresado="Casado";
				break;
			case "3":
				estadoCivilIngresado="Divorciado";
				break;
			case "4":
				estadoCivilIngresado="Viudo";
				break;
		}

		//Sueldo bruto Ingresado:
		sueldoBruto=prompt("Sueldo bruto: ")
		while(isNaN(sueldoBruto) || sueldoBruto < 8000)
		{
			sueldoBruto=prompt("Error. No ingrese una palabra, o ingrese su sueldo bruto correcto: ");
			sueldoBruto=parseInt(sueldoBruto);			
		}		

		//Legajo Ingresado:
		legajo=prompt("Ingrese su numero de legajo:")
		while(isNaN(legajo) || legajo < 1000 || legajo > 9999)		
		{
			legajo = prompt("Error. Ingrese su numero de legajo: ");
		}

		//Nacionalidad Ingresada:
		nacionalidad=prompt("Ingrese su nacionalidad segun corresponda: A = Argentino, N = Nacionalizado o E = Extranjero ")
		while(nacionalidad != "A" && nacionalidad !="N" && nacionalidad !="E" )
		{
			nacionalidad=prompt("Error. No ingreso los caracteres correctos: A, N, E.");
		}
		switch (nacionalidad)
		{
			case "A":			
				nacionalidad="Argentino.";
				break;
			case "N":
				nacionalidad="Nacionalizado.";
				break;
			case "E":
				nacionalidad="Extranjero.";
				break;	
		}

		//Sobra
		modificar=prompt("Quiere modificar sus datos?");

 	}while(modificar=="Si" || modificar=="si")	
 		//Resultados
 	document.getElementById('txtIdEdad').value=edadIngresada;
 	document.getElementById('txtIdSexo').value=sexoIngresado;
 	document.getElementById('txtIdEstadoCivil').value=estadoCivilIngresado
 	document.getElementById('txtIdSueldo').value=sueldoBruto;
 	document.getElementById('txtIdLegajo').value=legajo;
 	document.getElementById('txtIdNacionalidad').value=nacionalidad;

// > <
}