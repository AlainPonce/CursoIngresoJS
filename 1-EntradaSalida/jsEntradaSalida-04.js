/* 
Debemos lograr tomar un dato por 'PROMPT' 
y lo muestro por 'ID' al presionar el botón 'mostrar'
*/
function mostrar()
{
	var nombreIngresado;
	var apellido;

	nombreIngresado = prompt("Ingrese su nombre: ","Alain");
	apellido = prompt("Ingrese su apellido: ","Ponce");
 	
 	//tomar un dato por ID
	//nombreIngresado=document.getElementById('txtIdNombre').value;

	//mostrar un dato por ID
	document.getElementById('txtIdNombre').value=nombreIngresado +" "+ apellido; //está de mas este renglon

 	// mal prompt("ingrese su nombreIngresado: ","nadie");
	alert("Su nombre completo es : "+ nombreIngresado+ ", " + apellido);
	console.log("su Nombre Completo : "+ nombreIngresado + ", " + apellido);
	//alert(nombreIngresado);
	
}