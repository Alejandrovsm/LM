function ejercicio01() {
	let billetes = (e1bil.value * 50) + (1.50 * e1bil.value);
    let maletas = e1mal.value * 20;
	let operacion = billetes + maletas;
	texto = "Precio total: "
	alert(texto+operacion.toFixed(2).replace(/0+$/,"")+" €") // ASI SE HACE SIN DECIMALES //            // ASI ES COMO LO PIDE EL EJERCICIO alert(texto+operacion.toFixed(2)+" €")
}


function ejercicio02() {
	let alumnos = e2per.value;
	let operacion = pagar(alumnos)
	texto = "Precio a pagar: "
	r2.innerHTML = texto+operacion.toFixed(2).replace(/0+$/,"")+" €"
}

function pagar(alumnos) {
	switch(true) {
		case(alumnos >= 100):
			return alumnos*65
			break;
		case(alumnos >= 50 && alumnos <= 99):
			return alumnos*70
			break;
        case(alumnos >= 30 && alumnos <= 49):
			return alumnos*95
			break;
		default:
		    return 4000
	}
}

function factorial(num) {
	num = BigInt(num)
    if(num==1n || num==0n) {
        return 1n;
    } else if (num<0n) {
        return -1;
    } else {
        return num*factorial(num-1n);
    }
}

function ejercicio03() {
    let numero = e3fc.value;
    let operacion = factorial(numero);
    r3.innerHTML = operacion;
}


/*
function ejercicio03() {
    let numero = e3fc.value;                    /// OTRA FORMA DE HACERLO
    r3.innerHTML = factorial(numero);
}
*/