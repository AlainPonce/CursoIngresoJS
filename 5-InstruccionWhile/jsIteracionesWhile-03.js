/*
Al precionar el boton "Pedir la clave" solicitar clave "utn750"
Si es incorrecta, volver a pedirla nuevamente
Al se correcta, mostrar cartel de bienvenido*/
function mostrar()
{	
    var claveIngresada;
    claveIngresada = prompt("Ingrese la clave: "); // Pide clave antes de bucle.

    while (claveIngresada != "utn750") // Si la clave es distinta a utn750:
    {
        alert("Clave Incorrecta");
        claveIngresada = prompt("Ingrese la clave nuevamente: "); // Vuelve a pedir clave en bucle
    }
    alert("Bienvenido."); // Fuera del bucle. La clave es correcta.



}//FIN DE LA FUNCIÓN
