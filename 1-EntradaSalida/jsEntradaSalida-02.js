/*
Debemos lograr tomar un nombre con 'prompt' 
y luego mostrarlo por 'alert' al presionar el botón  'mostrar'*/
function mostrar()
{
	var nombre;                                             //defino la variable
	console.log(nombre);                                   //consola no refleja el nombre: "undefined"
	nombre = prompt("Ingrese su nombre ","Alain Ponce");  //cargo valor (nombre) de la variable
	console.log(nombre);                                 // consola refleja el nombre Alain Ponce
	alert(nombre);                                      // muestro la variable //

 	console.log("Hola");                              // mensaje por consola
 	console.log(nombre);                             // mensaje por consola
}

