function ejercicio01(){
    let a1 = e1ad.value * 14.50;
    let n1 = e1ni.value * 9.50;
    let total = a1 + n1;
    alert("El precio total es de: "+total.toFixed(2).replace(/0+$/,"")+" €") // ASI SE HACE SIN DECIMALES //            // ASI ES COMO LO PIDE EL EJERCICIO alert(texto+operacion.toFixed(2)+" €")
}

function ejercicio02() {
    let pProducto2 = pProducto.value;  
    let pBruto = pProducto2 * pCantidad.value; 
    var descuento = pBruto;
    let peso = pCantidad.value
    if (peso<=20) {
        descuento*=0.90;
    }
    else if(peso>20) {
        descuento*=0.80;
    }
    let pIva = parseInt(tipoIva2.value) / 100;                                      // PROBAR A QUITAR EL PARSEINT
    let pIvaAdd = ((descuento * pIva) + descuento).toFixed(2);
    r2.innerHTML = `
    El precio bruto es de <b>${pBruto}</b>€  <br>
    El precio con descuento es de <b>${descuento.toFixed(2)}</b>€ <br>
    El precio más IVA de <b>${pIvaAdd}</b>€ `;  
}

function comprendidos(n1,n2){
    let respuesta = ""
        if(n2 < n1){
            respuesta = "El segundo numero debe ser mayor que el primero."
        }
        else{
            for (let contador = n1; contador<=n2; contador++){
                if(contador==n2){
                    respuesta += contador + "."
                }
                else{
                    respuesta += contador + ", "
                }
            }
        }
    return respuesta;
}

function ejercicio03(){
    let numero1 = e3num1.value;
    let numero2 = e3num2.value;
    operacion = comprendidos(numero1, numero2);
    r3.innerHTML = operacion
}

/*
function ejercicio03(){
    let numero1 = e3num1.value;
    let numero2 = e3num2.value;                                 ///OTRA FORMA DE HACERLO
    r3.innerHTML = comprendidos(numero1, numero2)
}
*/