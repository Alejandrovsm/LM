function ej0() {
    let numero0 = parseInt(document.getElementById('ej0a').value);
    if (numero0 == 0 || numero0 == 1 || numero0 == 4) return false;
    for (let x = 2; x < numero0 / 2; x++) {
        if (numero0 % x == 0) return false;
        document.getElementById('salida0').innerHTML = `El número ${numero0} es primo!!`
    }
    // Si no se pudo dividir por ninguno de los de arriba, sí es primo
    return true;
}



function ej1() {
    let numero = parseInt(document.getElementById('ej1a').value);

    if (numero < 10) {
        document.getElementById('salida1').innerHTML = `El número <b>${numero}</b>
        se encuentra entre 1 y 10`;
    } else {
        document.getElementById('salida1').innerHTML = `El número <b>${numero}</b>
        no se encuentra entre 1 y 10`;
    }

}

function ej2() {
    let numero = parseInt(document.getElementById('ej2a').value);
    if (numero < 0) {
        document.getElementById('salida2').innerHTML = `El número <b>${numero}</b>
        es negativo`;
    } else {
        document.getElementById('salida2').innerHTML = `El número <b>${numero}</b>
        es positivo`;
    }

}

let array3= []
function ej3() {
    // PUSH añadir al final
    let entrada3a = ej3a.value; // Esto es la entrada getEbyid
    let entrada3b = ej3b.value; // Esto es la entrada getEbyid
    let entrada3c = ej3c.value; // Esto es la entrada getEbyid
    array3.push(entrada3a, entrada3b, entrada3c);
    let mayor3 = Math.max(...array3);
        document.getElementById('salida3').innerHTML = `El mayor es ${mayor3}`;
    
}





let numerosEj4 = []
function ej4() {
    // PUSH añadir al final
    let entrada1 = ej4a.value; // Esto es la entrada getEbyid
    let entrada2 = ej4b.value; // Esto es la entrada getEbyid
    let entrada3 = ej4c.value; // Esto es la entrada getEbyid
    numerosEj4.push(entrada1, entrada2, entrada3);
    for (let i = 0; i < numerosEj4.length; i++) {
        document.getElementById('salida4').innerHTML = `var numeros = [${numerosEj4.sort(function (a, b) { return a - b })}]`;
    }
}



function ej5() {
    let valor = parseInt(document.getElementById('ej5a').value);
    const elementoSalida = document.getElementById("salida5")
    switch (valor) {
        case 0:
        case 1:
        case 2:
            elementoSalida.innerHTML = `Muy deficiente`;
        case 3:
            elementoSalida.innerHTML = `Insuficiente`;
            break;
        case 4:
            elementoSalida.innerHTML = `Insuficiente`;
            break;
        case 5:
            elementoSalida.innerHTML = `Suficiente`;
            break;
        case 6:
            elementoSalida.innerHTML = `Bien`;
            break;
        case 7:
            elementoSalida.innerHTML = `Notable`;
            break;
        case 8:
            elementoSalida.innerHTML = `Notable`;
            break;
        case 9:
            elementoSalida.innerHTML = `Sobresaliente`;
            break;
        case 10:
            elementoSalida.innerHTML = `Sobresaliente`;
            break;

        default:
            elementoSalida.innerHTML = `Introduzca una calificación entre 0 y 10`;
    }
}

let array6 = [];
function ej6() {
    for (let i = 100; i < 200; i++) {
        if (i % 2 != 0) {
            array6.push(i);
            salida6.innerHTML = `F12 para ver console.log(${array6})`;
            console.log(i);
        }
    }
}
function ej7() {
    for (let i = 1; i < 101; i++) {
        if (i % 3 == 0) {

            salida7.innerHTML = `
            Se ha realizado un <b>bucle for del 1 al 100</b>. <br>
            Se ha dividido cada número entre 3 dando resultado true cuando 
            el resto de cada división sea 0. <br><br>
            <b>if(i % 3 == 0)</b><br><br>
            <b>La expresión % o módulo muestra el resto de la división entre 2 números.</b> <br>
            F12 para ver console.log()`;
            console.log(i);
        }

    }
}


function ej8() {
    let resultado = 0;
    for (let i = 1; i < 101; i++) {
        if (i % 5 == 0) {
            result = [i];
            salida8.innerHTML = `
            Se ha realizado un <b>bucle for del 1 al 100</b>. <br>
            Dando true que la función de modulo <br> <b>if(i % 5 == 0)</b> tiene como resto 0. <br><br>
            <b>La expresión % o módulo muestra el resto de la división entre 2 números.</b> <br><br>
            F12 para ver console.log() <br>
            ${result}`;
            console.log(i);
        }

    }
}

let array9 = []
function ej9() {
    for (let i = 1; i < 1000; i++) {
        if (i % 2 == 0) {
            result = [i];
            array9.push(i);
            console.log(i);
            salida9.innerHTML = `${array9.reduce((a, b) => a + b, 0)}<br>
            F12 para ver console.log() `
        }
    }
}



let array10 = [];
function ej10() {
    let entrada10a = parseInt(ej10a.value);
    let entrada10b = ej10b.value;
    for (let i = entrada10a + 1; i < entrada10b; i++) {
        result = [i];
        array10.push(i);
        let total = array10.reduce((a, b) => a + b, 0);
        document.getElementById('salida10').innerHTML = `var numeros = [${array10}]
    <br> Total = ${total}`;
    }
}


function ej11() {
    let entrada11 = parseInt(ej11a.value);
    if (entrada11 % 2 == 0) {
        document.getElementById('salida11').innerHTML = `El número es par`;
    } else {
        document.getElementById('salida11').innerHTML = `El número es impar`;
    }
}

function ej12() {
    let base12 = ej12a.value;
    let exponente12 = ej12b.value;
    let r = 1;
    for (let i = 0; i < exponente12; i++) {
        r = r * base12;
    }
    document.getElementById('salida12').innerHTML = `La potencia calculada es ${r}`;
}


let array13 = [];
function ej13() {
    let entrada13 = parseInt(prompt());
    array13.push(entrada13);
    if (entrada13 == 0) {
        let total13 = array13.reduce((a, b) => a + b, 0);
        document.getElementById('salida13').innerHTML = `let array13 = [${array13}] <br> Total ${total13}`;
    } else {
        document.getElementById('salida13').innerHTML = `let array13 = [${array13}]`;
    }
}


let array14 = [];
function ej14() {
    let entrada14 = parseInt(prompt());
    array14.push(entrada14);
    if (entrada14 == 0) {
        array14.pop(array14);
        let total14 = array14.reduce((a, b) => a + b, 0);
        let media14 = total14 / array14.length;
        document.getElementById('salida14').innerHTML = `let array14 = [${array14}] <br> Media ${media14}`;
    } else {
        document.getElementById('salida14').innerHTML = `let array14 = [${array14}]`;
    }

}

let array15 = [];
function ej15() {
    let entrada15 = parseInt(ej15a.value);
    array15.push(entrada15);
    if (entrada15 == 0) {
        array15.pop(array15);
        let max15 = array15.sort(function (a, b) { return b - a })[0];
        let min15 = array15.sort(function (a, b) { return a - b })[0];
        document.getElementById('salida15').innerHTML = `let array15 = [${array15}] <br> Minimo ${min15} <br> Maximo ${max15}`;
    } else {
        document.getElementById('salida15').innerHTML = `let array15 = [${array15}]`;
    }
}


function ej16() { //No me salió
    let entrada16a = ej16a.value;
    let entrada16b = ej16b.value;
    for (let step = 0; step < entrada16a; step++) {
        (step > ejtrada16b);
        console.log('Camina un paso hacia el este');
    }
}

let array17positivo = [];
let array17negativo = [];
let array17 = [];
function ej17() {
    let entrada17 = parseInt(ej17a.value);
    if (entrada17 >= 1) {
        array17positivo.push(entrada17);
        document.getElementById('salida17').innerHTML = `let array17positivo = [${array17positivo}] <br> let array17positivo = [${array17negativo}]`;
    } else if (entrada17 < 0) {
        array17negativo.push(entrada17);
        document.getElementById('salida17').innerHTML = `let array17positivo = [${array17positivo}] <br> let array17positivo = [${array17negativo}]`;
    } else {
        let total17p = array17positivo.reduce((a, b) => a + b, 0);
        let total17n = array17negativo.reduce((a, b) => a + b, 0);
        document.getElementById('salida17').innerHTML = `
        let array17positivo = [${array17positivo}] Suma = ${total17p} Valores = ${array17positivo.length}
        <br><br>
        let array17negativo = [${array17negativo}] Suma = ${total17n} Valores = ${array17negativo.length}`;

    }
}


let array18 = [];
function ej18() {
    let entrada18a = parseInt(ej18a.value);
    let entrada18b = parseInt(ej18b.value);
    for (let i = entrada18a + 1; i < entrada18b; i++) {
        result18 = [i];
        array18.push(i);
        document.getElementById('salida18').innerHTML = `var array18 = [${array18}]
    <br> Total = ${Math.pow(array18, 2)}`;
    }
}


/*let array19 = [];
function ej19() {
    let entrada19a = parseInt(ej19a.value);
    let i = parseInt(ej19b.value);
    for(; i<entrada19a; i++){
        array19.push(i);
        let contador = array19.length;
        for (i=0;)
        console.log(array19.length);
    }
}*/

let array20 = [];
function ej20() {
    res = "";
    for (let i = 1; i <= 5; i++) {
        res += "<br>";
        for (let i = 1; i <= 20; i++) {
            res += i + " ";
        }
    }
    document.getElementById('salida20').innerHTML = `${res}`;
}


function ej21() {
    let numero21 = parseInt(document.getElementById('ej21a').value);
    if (numero21 == 0 || numero21 == 1 || numero21 == 4) return false;
    for (let x = 2; x < numero21 / 2; x++) {
        if (numero21 % x == 0) return false;
        document.getElementById('salida21').innerHTML = `El número ${numero21} es primo!!`
    }
    // Si no se pudo dividir por ninguno de los de arriba, sí es primo
    return true;
}

function ej22() {
    let entrada22a = ej22a.value;
    res = "";
    for (let i = 1; i <= 10; i++) {
        res += `${entrada22a} * ${i} = ${entrada22a * i} <br>`
    }
    document.getElementById('salida22').innerHTML = `${res}`;
}

function ej23() {
    let entrada23a = parseInt(ej23a.value);
    let entrada23b = ej23b.value
    res = "";
    for (let i = 1; i <= entrada23a; i++) {
        res += `${entrada23b} <br>`
    }
    document.getElementById('salida23').innerHTML = `${res}`;
}


function ej24() {
    let numero24 = ej24a.value;
    var resultado24 = 1;
    for (var i = 1; i <= numero24; i++) {
        resultado24 *= i;
        document.getElementById('salida24').innerHTML = `${resultado24}`;
    }
}

let array25 = [];
var prod_list = []
function ej25() {
    var prod_price = ej25a;
    var total = 0
    for(let i=1;i<=100;i++) {
        if (i<=15) {
            total+=prod_price;
            prod_list.push("U:"+i+" P:"+total+"€");
        } else if(i>15 && i<=30) {
            let unit = prod_price-(prod_price*0.10);
            total+=unit
            prod_list.push("U:"+i+" P:"+total+"€");
        } else if(i>30 && i<=50) {
            let unit = prod_price-(prod_price*0.15);
            total+=unit
            prod_list.push("U:"+i+" P:"+total+"€");
        } else {
            let unit = prod_price-(prod_price*0.2);
            total+=unit
            prod_list.push("U:"+i+" P:"+total+"€");
        }
    }
    for (let i=1;i<prod_list.length;i++) {
        document.getElementById('salida25').innerHTML = `${prod_list[i]}`;
    }
}

function ej26(){
    let num26a = ej26a.value;
    let num26b = ej26b.value;

    if (num26a % num26b == 0 || num26b % num26a == 0){
        document.getElementById('salida26').innerHTML = `${num26b} es multiplo de ${num26a}`;
    } else {
        document.getElementById('salida26').innerHTML = `${num26b} no es multiplo de ${num26a}`;
    }
}





/*
let array18 = [];
function ej18() {
    let entrada18a = parseInt(ej18a.value);
    let entrada18b = parseInt(ej18b.value);
    for (let i = entrada18a + 1; i < entrada18b; i++) {
        result18 = [i];
        array18.push(i);
        let total18 = Math.pow(result18, 2);
        document.getElementById('salida18').innerHTML = `var array18 = [${array18}]
    <br> Total = ${total18}`;
    }
}
*/