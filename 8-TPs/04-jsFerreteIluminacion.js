/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */

//IF CON SWITCH

function CalcularPrecio ()
{
 	var cantidad;
 	var marca;
 	var descuento;
 	var importeFinal;
 	var iibb;
 	var precioConDescuento;
 	var precio;

 	precio=35;
 	descuento=0; 	
 	
 	cantidad= document.getElementById('txtIdCantidad').value;
 	cantidad= parseInt(cantidad);

 	marca = document.getElementById('Marca').value; 	
 	

 	if(cantidad>5)
 	{ 		
       descuento=50;
 	}
 	else
 	{
 		if(cantidad==5)
 		{
 			switch(marca)
 			{
 				case "ArgentinaLuz":
 					descuento=40;
 					break;	
 				default:
 					decuento=30;
 					break;
 			} 
 		}
 		else
 		{
 			if(cantidad==4)
 			{
 				switch(marca)
 				{
 					case "ArgentinaLuz": 					
 					case "FelipeLamparas":
 						descuento=25;
 						break;
 					default:
 						descuento=20;
 						break; 	
 				}		
 			}
 			else
 			{
 				if(cantidad==3)
 				{
 					switch(marca)
 					{
 						case "ArgentinaLuz": 					
 						case "FelipeLamparas":
 							descuento=10;
 							break;
 						default:
 							descuento=5;
 							break; 			
 					}
 				}
 				else
 				{
 					descuento=0;
 				}
 			}
 		} 		
 	} 	
 	

	precioConDescuento = precio - precio *descuento/100;
 	document.getElementById('txtIdprecioDescuento').value = precioConDescuento;

 	importeFinal = precioConDescuento * cantidad;

 	if(importeFinal>120)
 	{
 		iibb = importeFinal *10/100;
 		importeFinal = importeFinal + iibb;

 		alert("Total a pagar: $"+ importeFinal + ". Usted pagó: $"+iibb+" de Ingresos Brutos.");
 	}
 	else
 	{
 		alert("Total a pagar: $" +importeFinal)
 	} 	
}

//SWICH CON IF 
/*

function CalcularPrecio ()
{
	var cantidad;
 	var marca;
 	var descuento;
 	var importeFinal;
 	var iibb;
 	var precioConDescuento;
 	var precio;

 	precio=35

 	cantidad=document.getElementById('txtIdCantidad').value
 	cantidad=parseInt(cantidad);
 	marca=document.getElementById("Marca").value;
 	marca=parseInt(cantidad);

 	switch(cantidad)
 	{
 		case 1:
 		case 2:
 			descuento = 0;
 			break;

 		case 3:
 			if (marca == "ArgentinaLuz")
 			{
 				descuento = 15;
 			}
 			else
 			{
 				if (marca == "FelipeLamparas")
 				descuento = 10;
 				else 
 				{
 					descuento = 5;
 				}
 			}  			
 			
 			break;

 		case 4:
 			if (marca == "ArgentinaLuz" || marca == "FelipeLamparas") //error de sintaxis?
 			{
 				descuento = 25;
 			}	
 			else
 			{
 				decuento=20;
 			}
 			break;

 		case 5:
 			if (marca == "ArgentinaLuz")
 			{
 				descuento = 40;
 			}
 			else{
 				descuento=30
 			}
 			break;

 		default:
 			descuento=50;
 	}	

 	precioConDescuento = precio - precio *descuento/100;

 	document.getElementById('txtIdprecioDescuento').value = precioConDescuento;

 	importeFinal = precioConDescuento * cantidad;

 	if(importeFinal>120)
 	{
 		iibb = importeFinal *10/100;
 		importeFinal = importeFinal + iibb;

 		alert("Total a pagar: $"+ importeFinal + ". Usted pagó: $"+iibb+" de Ingresos Brutos.");
 	}
 	else
 	{
 		alert("Total a pagar: $" +importeFinal)
 	}
}

/*
//SOLO SWITCH
/*

function CalcularPrecio ()
{
	var cantidad;
 	var marca;
 	var descuento;
 	var importeFinal;
 	var iibb;
 	var precioConDescuento;
 	var precio;

 	precio=35;
 	descuento=0;

 	cantidad=document.getElementById('txtIdCantidad').value
 	cantidad=parseInt(cantidad);
 	marca=document.getElementById("Marca").value;
 	marca=parseInt(cantidad);

 	switch(cantidad)
 	{
 		case 1:
 		case 2:
 			descuento = 0;
 			break;

 		case 3: //error de sintaxis? -- faltaba breaks tambien al final de {} de los case cantidad
 			switch(marca)
 			{
 				case "ArgentinaLuz": 								
 					descuento = 15;
 					break;

 				case "FelipeLamparas": 			
 					descuento = 10;
 					break;

 				default: 					
 					descuento = 5;
 					break;
 			}
 			break;
 		case 4:  
 			switch(marca)
 			{	
 				case "ArgentinaLuz":
 				case "FelipeLamparas":
 					descuento=25;
 					break;

 				default: 					
 					descuento=20;
 					break;
 			}	
 			break;		
 			
 		case 5:
 			switch(marca)
 			{
 				case "ArgentinaLuz": 								
 					descuento = 40;
 					break;

 				default: 					
 					descuento=30
 					break;
 			}
 			break;
 		default:
 			descuento=50;
 	}	

 	precioConDescuento = precio - precio *descuento/100;
 	document.getElementById('txtIdprecioDescuento').value = precioConDescuento;

 	importeFinal = precioConDescuento * cantidad;

 	if(importeFinal>120)
 	{
 		iibb = importeFinal *10/100;
 		importeFinal = importeFinal + iibb;

 		alert("Total a pagar: $"+ importeFinal + ". Usted pagó: $"+iibb+" de Ingresos Brutos.");
 	}
 	else
 	{
 		alert("Total a pagar: $" +importeFinal)
 	}
} 
*/



