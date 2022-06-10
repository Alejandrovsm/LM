function sumaDivisores(n) {
	let total = 0;
	for(let i=1;i<n;i++) {
		if(n%i === 0) {
			total = total + i;
		}
	}
	return total
}
function colegas(n1,n2) {
    if (sumaDivisores(n1) == n2 && sumaDivisores(n2) == n1)  {
        return "Son besties";
    }
    else{
        return "Se puto odian";
    }
}

function ejercicio02(participante){
    descuento=1;
    bolas=participantes*100+parseInt(participantes/5)*100;

    if (participantes>10 && participantes<20) {
        descuento=0.95;
    }
    else if(participantes>20) {
        descuento=0.90;
    }
    ganancia=50*participantes*descuento;
    var mensaje ="Las ganancias totales son "+ganancia.toFixed(2)+": las bolas totales son  "+ bolas + ": las bolas que tienen los participantes son " + (bolas/participantes).toFixed(2);
    respuesta2.textContent = mensaje;
}