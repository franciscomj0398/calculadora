var numero1;
var numero2;
var resultado;

function calcularSuma(){
	var numero1Element = document.getElementById("numero1");
	var numero2Element = document.getElementById("numero2");
	numero1 = numero1Element.value;
	numero2 = numero2Element.value;
	console.log(numero1);
	console.log(numero2);

	resultado = parseFloat(numero2) + parseFloat(numero1);
	console.log(resultado);

	var resultadoElement = document.getElementById("resultado");
	resultadoElement.innerHTML = "Suma  = " + resultado;
}

function calcularResta(){
	var numero1Element = document.getElementById("numero1");
	var numero2Element = document.getElementById("numero2");
	numero1 = numero1Element.value;
	numero2 = numero2Element.value;
	console.log(numero1);
	console.log(numero2);

	resultado = numero1 - numero2;
	console.log(resultado);

	var resultadoElement = document.getElementById("resultado");
	resultadoElement.innerHTML = "Resta  = " + resultado;
}

function calcularMultiplicacion(){
	var numero1Element = document.getElementById("numero1");
	var numero2Element = document.getElementById("numero2");
	numero1 = numero1Element.value;
	numero2 = numero2Element.value;
	console.log(numero1);
	console.log(numero2);

	resultado = numero1 * numero2;
	console.log(resultado);

	var resultadoElement = document.getElementById("resultado");
	resultadoElement.innerHTML = "Multiplicacion  = " + resultado;
}

function calcularDivision(){
	var numero1Element = document.getElementById("numero1");
	var numero2Element = document.getElementById("numero2");
	numero1 = numero1Element.value;
	numero2 = numero2Element.value;
	console.log(numero1);
	console.log(numero2);

	resultado = numero1 / numero2;
	console.log(resultado);

	var resultadoElement = document.getElementById("resultado");
	resultadoElement.innerHTML = "Division  = " + resultado;
}

function calcularRaiz(){
	var numero1Element = document.getElementById("numero1");
	var numero2Element = document.getElementById("numero2");
	numero1 = numero1Element.value;
	numero2 = numero2Element.value;
	console.log(numero1);
	console.log(numero2);

	resultado = Math.pow(numero1, 0.5);
	console.log(resultado);

	var resultadoElement = document.getElementById("resultado");
	resultadoElement.innerHTML = "Raiz  = " + resultado;
}

function calcularPotencia(){
	var numero1Element = document.getElementById("numero1");
	var numero2Element = document.getElementById("numero2");
	numero1 = numero1Element.value;
	numero2 = numero2Element.value;
	console.log(numero1);
	console.log(numero2);

	resultado = Math.pow(numero1,2);
	console.log(resultado);

	var resultadoElement = document.getElementById("resultado");
	resultadoElement.innerHTML = "Potencia numero 1  = " + resultado;
}
