function sumaDivisores(n) {
	let total = 0;
	for(let i=1;i<n;i++) {
		if(n%i === 0) {
			total = total + i;
		}
	}
	return total
}

function perfecto(n) {
	chk = sumaDivisores(n)
	if(chk == n) {
		return true
	} else
		return false
}

function ejercicio01() {
	let entrada = e1i1.value;
	let operacion = sumaDivisores(entrada);
	r1.innerHTML = operacion;
}

function curiosos() {
	let entrada = eNi1.value;
	let entrada2 = eNi2.value;
	arr = []
    if(entrada2 < entrada){
        alert("El Numero Final debe ser mayor que el Numero Inicial");
    }
    else{
        for(let i=entrada;i<=entrada2;i++) {
            if(perfecto(i)===true) {
                arr.push(i);
            }
        }
        r1b.innerHTML = arr.join(', ')+".";
    }
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

function enviar() {
	let album = alb.value;
	if(album !=="") {
		album = ' - '+album
	}
	if(typeof grupo === "undefined"){

	} else {
		var input_group = grupo.value;
	}
	let input_dispo = mbands.value;
	let entry = document.createElement('li');
	entry.setAttribute("class", "grouplist");
	if(typeof input_group === "undefined"){
		var input_group = ""
	}
	if(input_group !== "" && album !=="") {
		entry.textContent = input_group+album;
		grupazos.appendChild(entry);
	} else if(input_dispo !=="" && album !=="") {
		entry.textContent = input_dispo+album;
		grupazos.appendChild(entry);
	} else if (input_group === ""){
		alert("Inserte al menos un grupo.")
	} else if (album === ""){
		alert("Inserte un album.")
	}
}

function borrar() {
	let indice = bnum.value;
	let grupos = document.getElementsByClassName('grouplist');
	grupazos.removeChild(grupos[indice-1])
}

function cancelar() {
	mbands.value = ""
	alb.value = ""
	bnum.value = ""
	let grupos = document.getElementsByClassName('grouplist');
	while(grupos[0]) {
		grupazos.removeChild(grupos[0])
	}
}