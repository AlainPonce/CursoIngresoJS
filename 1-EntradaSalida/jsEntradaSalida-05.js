/*
Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
function mostrar()
{	
	var nombre;
	var edad;

	nombre = document.getElementById('txtIdNombre').value;
	edad = document.getElementById('txtIdEdad').value;
	alert("Usted se llama " + nombre + " y tiene " +edad +" años");
}

/*
Debemos lograr tomar nombre y edad por ID, apellido por prompt ,
y mostrarlos concatenados. Ej: "Usted se llama José peres y tiene 66 años"  */
function mostrar()
{	
	var nombre;
	var edad;
	var apellido;
	
	nombre = document.getElementById('txtIdNombre').value;
	edad = document.getElementById('txtIdEdad').value;
	apellido = prompt("Ingrese su apellido","");
	alert("Usted se llama " + nombre + " " + apellido + " y tiene " +edad +" años");
}
