function tabla(n) {
    var result = [];
    var step = 0;
    for (let i = 0;i<=10;i++) {
        step = n*i
        result.push(n + " * "+i+" = "+step)
    }
    return result;
}

function ejercicio02() {
	let res;
    let entrada = e2tb.value;
    let bonito = tabla(entrada);
        for(let i=0; i<bonito.length;i++){
            res += bonito[i]+"<br>";
        }
    r2.innerHTML = res
}

dias(dia){

}

ejercicio03(){

}

divisores(n1,n2,n3){

}

ejercicio04(){

}

convertir(n){

}

ejercicio01(){

}
