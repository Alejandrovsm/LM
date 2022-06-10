function ejercicio01() {

    let dias = parseInt(e1dia.value);
    let meses = dias / 30;
    let anos = dias / 365;

    document.getElementById('r1').innerHTML = `Años ${anos.toFixed(2)} <br>
    Meses ${meses.toFixed(2)} <br>
    Dias ${dias.toFixed(2)}`;
}

/* function ejercicio01() {
    let dias = parseInt(document.getElementById("e1dia").value);
    let anos = Math.floor((dias/365));
    let meses = Math.floor((dias%365)/30);																								/// OTRA FORMA DE REALIZARLO DONDE TE DICE MAS CONCRETAMENTE SEGUN EL NUMERO DE DIAS PUESTOS, CUANTOS AÑOS, MESES Y DIAS SON EN TOTAL
    let restodias = (dias%365)%30;

    document.getElementById("r1").innerHTML= "Años: "+anos+"<br><br>"+"Meses: "+meses+"<br><br>"+"Días: "+restodias;

}*/

function ejercicio02() {
	let salario = e2i1.value;
	let anyos = e2i2.value;
	let operacion = sueldo(salario,anyos)
	texto = "Sueldo Actual: "
	r2.innerHTML = texto+operacion.toFixed(2).replace(/0+$/,"")+" €"
}

function sueldo(s,a) {
	switch(true) {
		case(s<500 && a >=10):
			return s*1.2
			break;
		case(s<500 && a<10):
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
	r3.innerHTML = sumaDivisores(entrada);
}

/* function ejercicio03() {
	let entrada = e3sd.value;
	let operacion = sumaDivisores(entrada);					// OTRA FORMA DE REALIZARLO PERO TAMBIEN VALIDA
	r3.innerHTML = operacion;
}
*/