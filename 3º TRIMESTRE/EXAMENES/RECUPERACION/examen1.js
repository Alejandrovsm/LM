function ejercicio02() {
	let salario = e2i1.value;
	let anyos = e2i2.value;
	let operacion = sueldo(salario,anyos)
	texto = "Sueldo Actual: "
	dos.innerHTML = texto+operacion.toFixed(2).replace(/0+$/,"")+" €"
}

function sueldo(s,a) {
	switch(true) {
		case(s<1000 && a >=10):
			return s*1.2
			break;
		case(s<1000 && a<10):
			return s*1.1
			break;
		default:
		    return s*1
	}
}