/* Función potencia()*/
function ej1() {
    let num1a = ej1a.value;
    let num1b = ej1b.value;

    let resultado1 = Math.pow(num1a, num1b);
    document.getElementById('salida1').innerHTML = `
    La potencia es ${resultado1}`;
}

/*Función par()*/
function ej2() {
    let num2a = parseInt(ej2a.value);
    if (num2a % 2 == 0) {
        document.getElementById('salida2').innerHTML = `
    El número ${num2a} es par`;
    } else {
        document.getElementById('salida2').innerHTML = `
    El número ${num2a} es impar`;
    }
}


function ej3() {
    let num3a = ej3a.value; // Precio
    let num3b = ej3b.value; // Cantidad
    let num3c = ej3c.value; // %IRPF
    let horasCalc3 = num3a * num3b;
    let mensual13 = horasCalc3 * 30;
    let irpf3 = mensual13 * (num3c / 100);
    document.getElementById('salida3').innerHTML = `
    Salario mensual bruto ${mensual13}€<br>
    IRPF a pagar ${irpf3}€ <br>
    Salario mensual neto ${mensual13 - irpf3}€
    `;
}

/* Función factura() */
function ej4() {
    let num4a = ej4a.value; // Precio und
    let num4b = ej4b.value; // Cantidad
    let num4c = ej4c.value; // Descuento
    let num4d = ej4d.value; // IVA

    let bruto4 = num4a * num4b;
    let descuento4 = bruto4 - (bruto4 * (num4c / 100));
    let iva4 = descuento4 - (descuento4 * (num4d / 100));
    document.getElementById('salida4').innerHTML = `
    El precio bruto es ${bruto4} <br>
    El precio con descuento es ${descuento4} <br>
    El precio con IVA final es ${iva4}`;
}

/*Función convertir()*/
function ej5() {
    let num5a = ej5a.value;
    let fahrenheit5 = (9 / 5) * num5a + 32;
    document.getElementById('salida5').innerHTML = `
    ${fahrenheit5} Grados Fahrenheit5`;
}

/*Funcion mayor*/
let array6 = [];
function ej6() {
    let num6a = parseInt(ej6a.value);
    let num6b = parseInt(ej6b.value);
    array6.push(num6a, num6b);
    let mayor6 = Math.max(...array6);
    array6.sort();
    document.getElementById('salida6').innerHTML = `
    El número mayor es ${mayor6}`;
}

/*Funcion primo()*/
function ej7() {

    let num7a = ej7a.value;
    if (num7a == 0 || num7a == 1 || num7a == 4 || num7a == 9 || num7a == 15) return false;
    for (let x = 2; x < num7a / 2; x++) {
        if (num7a % x == 0) return false;
        document.getElementById('salida7').innerHTML = `El número ${num7a} es primo!!`
    }
    // Si no se pudo dividir por ninguno de los de arriba, sí es primo
    return true;
}


function ej8(){
    const pi8 = 3.1416;
    let radio8 = parseInt(ej8a.value);
    let area8 = (pi8 * radio8 * radio8).toFixed(2);
    let longi8= (2*pi8*radio8).toFixed(2);

    document.getElementById('salida8').innerHTML = `Area ${area8}
    <br> Longitud ${longi8}`;
}

let array9 = [];
function ej9(){
    let num9a = ej9a.value;
    for(i=0; i<=num9a; i++){
        if (num9a % i == 0){
            array9.push(i);
            salida9.innerHTML = `${array9}`
        }
    }
}


function ej10() {
    let numero10 = ej10a.value;
    var resultado10 = 1;
    for (var i = 1; i <= numero10; i++) {
        resultado10 *= i;
        document.getElementById('salida10').innerHTML = `${resultado10}`;
    }
}


	function ej12(valor){
		let resul_div = [];
		let entradas = ej11a;
		let resultado_binario = '';
		while(valor > 0){
			residuo = parseInt(valor % 2);
			valor = parseInt(valor/2);
			resul_div[entradas] = residuo;
			entradas++;
		}
		for (var i = resul_div.length - 1; i >= 0; i--) {
			resultado_binario += resul_div[i];
		}
		salida12.innerHTML = `${resultado_binario}`
	}