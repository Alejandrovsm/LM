function tabla(n) {
    let result = [];
    let step = 0;
    for (let i = 0;i<=10;i++) {
        step = n*i
        result.push(n + " * "+i+" = "+step)
    }
    return result;
}

function ejercicio02() {
	let res = "";
    let entrada = e2tb.value;
    let bonito = tabla(entrada);
        for(let i=0; i<bonito.length;i++){
            res += bonito[i]+"<br>";
        }
    r2.innerHTML = res
}

function dias(meses) {
    switch(true) {
		case(meses == 1):
			return "Enero. Han pasado 31 dias"
			break;
        case(meses == 2):
			return "Febrero. Han pasado 59 dias"
			break;
        case(meses == 3):
			return "Marzo. Han pasado 90 dias"
			break;
        case(meses == 4):
			return "Abril. Han pasado 120 dias"
			break;
        case(meses == 5):
			return "Mayo. Han pasado 151 dias"
			break;
        case(meses == 6):
			return "Junio. Han pasado 181 dias"
			break;
        case(meses == 7):
			return "Julio. Han pasado 212 dias"
			break;
        case(meses == 8):
			return "Agosto. Han pasado 243 dias"
			break;
        case(meses == 9):
			return "Septiembre. Han pasado 273 dias"
			break;
        case(meses == 10):
			return "Octubre. Han pasado 304 dias"
			break;
        case(meses == 11):
			return "Noviembre. Han pasado 334 dias"
			break;
        case(meses == 12):
			return "Diciembre. Han pasado 365 dias"
			break;
	}
}

function ejercicio03(){
    let entrada = e3dia.value;
    r3.innerHTML = dias(entrada);
}

function convertir(centimetros, medida){
    return centimetros/medida
    }

function pulgada(entrada){
    entrada = e1num.value;
    let pulgadas = 2.54;
    r1.innerHTML = convertir(entrada, pulgadas).toFixed(2);
}

function palmo(entrada){
    entrada = e1num.value;
    let palmos = 20.87;
    r1.innerHTML = convertir(entrada, palmos).toFixed(2);
}
function pie(entrada){
    entrada = e1num.value;
    let pies = 27.86;
    r1.innerHTML = convertir(entrada, pies).toFixed(2);
}

let res3 = ""
function ejercicio04(){
    let entrada1 = e4adiv.value;
    let entrada2 = e4bdiv.value;
    let entrada3 = e4cdiv.value
    for(i=entrada2; i<=entrada3; i++){
        if (entrada1 % i == 0){
            r4.innerHTML += "divisor: "+i+"<br>";
        }
    }
    return res3;   
}


