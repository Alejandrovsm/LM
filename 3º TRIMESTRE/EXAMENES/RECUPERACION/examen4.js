function ejercicio01(a1, n1){
    let a1 = e1ad.value * 14.50;
    let n1 = e1ni.value * 9.50;
    let total = a1 + n1;
    document.getElementById('r1').innerHTML = `
    El precio total es de <b>${total}</b>€`;
}

function ejercicio02() {
    let pProducto2 = parseInt(document.getElementById('pProducto').value);  //UNIDAD
    let pBruto = pProducto2 *= parseInt(document.getElementById('pCantidad').value); //CANTIDAD
    let pIva = parseInt(document.getElementById('tipoIva2').value) / 100; //Iva a aplicar
    let pDescontado = (descuento *= pBruto);
    let pDtoAplic = pBruto - pDescontado;
    let pIvaAdd = ((pDtoAplic * pIva) + pDtoAplic).toFixed(2);
    let peso = 0;
    var descuento = 1;
    if (peso<=20) {
        descuento=0.90;
    }
    else if(peso>20) {
        descuento=0.80;
    }
    document.getElementById('r2').innerHTML = `
    El precio bruto es de <b>${pBruto}</b>€  <br>
    El precio con descuento es de <b>${pDtoAplic}</b>€ <br>
    El precio más IVA de <b>${pIvaAdd}</b>€ `;  
}
