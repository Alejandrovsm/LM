function ejercicio01() {

    let dias14 = parseInt(document.getElementById('e1dia').value);

    let meses14 = dias14 / 30;
    let anos14 = dias14 / 365;

    document.getElementById('r1').innerHTML = `Años ${anos14.toFixed(2)} <br>
    Meses ${meses14.toFixed(2)} <br>
    Dias ${dias14.toFixed(2)}`;
}

function ejercicio02() {
	let salario = e2i1.value;
	let anyos = e2i2.value;
	let operacion = sueldo(salario,anyos)
	texto = "Sueldo Actual: "
	r2.innerHTML = texto+operacion.toFixed(2).replace(/0+$/,"")+" €"
}

function sueldo(s,a) {
	switch(true) {
		case(s<1500 && a >=10):
			return s*1.2
			break;
		case(s<1500 && a<10):
			return s*1.05
			break;
		default:
		    return s*1
	}
}

function sumaDivisores(n) {
	let total = 0;
	for(let i=1;i<n;i++) {
		if(n%i === 0) {
			total = total + i;
		}
	}
	return total
}

function ejercicio03() {
	let entrada = e3sd.value;
	let operacion = sumaDivisores(entrada);
	r3.innerHTML = operacion;
}

let maxmin = [];
function ejercicio04() {
    let entrada15 = parseInt(e4tc.value);
    maxmin.push(entrada15);
    if (entrada15 == 0) {
        maxmin.pop(maxmin);
        let max = maxmin.sort(function (a, b) { return b - a })[0];
        let min = maxmin.sort(function (a, b) { return a - b })[0];
        document.getElementById('r4').innerHTML = `NUMEROS = [${maxmin}] <br> Minimo ${min} <br> Maximo ${max}`;
    } else {
        document.getElementById('r4').innerHTML = `NUMEROS = [${maxmin}]`;
    }
}