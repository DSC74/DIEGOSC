


function areaCuadrado() {

	let lado = parseInt(document.getElementById('lado').value);
	let resultado1 = lado * lado;
	document.getElementById('resultado1').value = resultado1;
	
}

function areaRectangulo() {

	let lado1 = parseInt(document.getElementById('lado1').value);
	let lado2 = parseInt(document.getElementById('lado2').value);
	let resultado2 = lado1 * lado2;
	document.getElementById('resultado2').value = resultado2;
}

function areaCirculo() {

	let radio = parseInt(document.getElementById('radio').value);
	let resultado3 = 3.1416 *(radio * radio);
	document.getElementById('resultado3').value = resultado3;

}

function areaTriangulo() {

	let base = parseInt(document.getElementById('base').value);
	let altura = parseInt(document.getElementById('altura').value);
	let resultado4 = base * altura / 2;
	document.getElementById('resultado4').value = resultado4;
}






  



   

       

    




 

