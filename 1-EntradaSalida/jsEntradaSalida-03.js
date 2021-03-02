/*
Debemos lograr tomar un dato por 'ID'
y luego mostrarlo por 'Alert' al presionar el botón  'mostrar'*/
function mostrar()
{
	var nombreIngresado;	
	nombreIngresado= document.getElementById('txtIdNombre').value; // 1ra forma correcta
	alert(nombreIngresado);


/*
2da forma correcta no recomendada: nombreIngresado= txtIdNombre.value;
	                               nombreIngresado=txtIdNombre.value;
	                               console.log("nombreIngresado");
	                               console.log(nombreIngresado);
	                               alert("nombreIngresado");
*/

}


