/*al presionar el botón mostrar 10 repeticiones con números ASCENDENTE, desde el 1 al 10.*/

function mostrar()
{
	var contador;
	var numeroRandom;
	var contadorDe1;
	var contadorDe2;
	var contadorDe3;
	var contadorDe4;
	var contadorDe5;
	var contadorDe6;
	var contadorDe7;
	var contadorDe8;
	var contadorDe9;
	var contadorDe10;

	contadorDe1=0;
	contadorDe2=0;
	contadorDe3=0;
	contadorDe4=0;
	contadorDe5=0;
	contadorDe6=0;
	contadorDe7=0;
	contadorDe8=0;
	contadorDe9=0;
	contadorDe10=0;

	for(contador=0;contador<1000;contador++)
	{
		numeroRandom=Math.floor(Math.random() *10) +1;
		//console.log(numeroRandom);

		switch(numeroRandom)
		{
			case 1:
				contadorDe1++;
				break;

			case 2:
				contadorDe2++;
				break;

			case 3:
				contadorDe3++;
				break;

			case 4:
				contadorDe4++;
				break;

			case 5:
				contadorDe5++;
				break;

			case 6:
				contadorDe6++;
				break;

			case 7:
				contadorDe7++;
				break;

			case 8:
				contadorDe8++;
				break;

			case 9:
				if(contador<40)
				{
					continue;
				}
				contadorDe9++;
				break;

			case 10:
				contadorDe10++;
				break;
		}
	}
	console.log("#1: "+(contadorDe1/contador*100));
	console.log("#2: "+(contadorDe2/contador*100));
	console.log("#3: "+(contadorDe3/contador*100));
	console.log("#4: "+(contadorDe4/contador*100));
	console.log("#5: "+(contadorDe5/contador*100));
	console.log("#6: "+(contadorDe6/contador*100));
	console.log("#7: "+(contadorDe7/contador*100));
	console.log("#8: "+(contadorDe8/contador*100));
	console.log("#9: "+(contadorDe9/contador*100));
	console.log("#10: "+(contadorDe10/contador*100));	

	console.log("Las veces fueron: " +contador);
}
// > <