const regInt = /^[-+]?\d+$/ // Detecta números enteros (-1, 0, 1, +2, 3, 0x0f0, 2e1... = true) (SIEMPRE DEBE DE ESTAR EN CONDICIONALES IF)

function sumaDivisores(n) {
	if(regInt.test(n)) {
		let total = 0;
		for(let i=0;i<=n;i++) {
			if(n%i === 0) {
				total += i;
			}
		}
		return total
	} else {
		return "Ingrese un número entero."
	}
}

function abundante(e) {
	if(regInt.test(e)) {
		if(e*2<sumaDivisores(e)) {
			return true
		} else {
			return false
		}
	} else {
		return "Ingrese un número entero."
	}
}

function ejercicio01() {
	let lista = [];
	let entrada = e1i1.value;
	if(regInt.test(entrada)) {
		for(let i=2;i<=entrada;i++) {
			if(abundante(i)) {
				lista.push(i)
			}
		}
		r1.innerHTML = lista.join(", ")+".";
	} else {
		r1.innerHTML = "Ingrese un número entero."
	}

}

function costeVuelo(n) {
	let total = 0
	if(regInt.test(n) && n<=150 && n>0) {
		for(let i=1;i<=n;i++) {
			switch(true) {
				case(i<=10):
					total += 50
					break;
				case(i>10 && i<=50):
					total += 75
					break;
				case(i>50 && i<=100):
					total += 100
					break;
				case(i>100):
					total += 150
					break;
			}
		}
		return total
	} else {
		if(regInt.test(n)) {
			if(n<=0){
				return "Solo queremos gente positiva. <br>&#129322;<br>"
			} else {
				return "No cabe tanta gente en el avión."
			}
		} else {
			return "Ingresa un numero entero, no podemos tener mitades de personas"
		}

	}
}


function ejercicio02() {
	let pasajeros = e2i1.value;
	let operacion = costeVuelo(pasajeros)
	let parrafo = document.createElement("p")
	parrafo.setAttribute("id", "resp")
	if (isNaN(operacion)) {
		dos.innerHTML = operacion
	} else {
		texto = "Coste del vuelo: "
		parrafo.textContent = operacion.toFixed(2).replace(/0+$/,"")+" €"
		dos.innerHTML = texto
		dos.appendChild(parrafo)
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