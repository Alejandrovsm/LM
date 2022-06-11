function par (numero){                          /* FUNCION NUMERO PAR */

    if(numero%2 === 0){
        return true;
    }

    else{
        return false;
    }

}

function impar (numero){                          /* FUNCION NUMERO IMPAR */

    if(par(numero) === false){
        return true;
    }

    else{
        return false;
    }

}

function follables (edad){                      /* FUNCION PARA VER SI METER O NO EL PITO */

    if(edad<18){
        return "no es follable";
    }

    else if(edad>18 && edad<=54){
        return "si es follable";    
    }

    else if(edad>54){
        return "no es follable";
    }
}

function dosnumeros (numerouno, numerodos){         /*FUNCION DE UN NUMERO MAYOR QUE EL SEGUNDO */
    if(numerouno>numerodos){
        return true;
    }
    else{
        return false;
    }
}

function tresnumeros (numerouno, numerodos, numerotres){         /*FUNCION DE UN NUMERO MAYOR QUE EL SEGUNDO */
    if(numerouno>numerodos && numerouno>numerotres){
        return numerouno;
    }
    else if(numerodos>numerotres){
        return numerodos;
    }
    else{
        return numerotres;
    }
}

function primo (num){
    console.log("El valor insertado es.. " + num) 
    let cuadrado = Math.sqrt(num);
    console.log("El cuadrado es.. " + cuadrado) 
    if(num === 0 || num === undefined){
        return false;
    }
    console.log("Empieza el bucle.. ")
    for(let contador = 2 ; contador<=cuadrado ; contador++){
        console.log("El contador es.. " + contador)
        let cipote = num%contador === 0
        console.log("El modulo de " + num + " y " + contador + " es " + cipote)
        if(cipote){
            return false;
        }
    }
    return true;
}

function restar (num){
    let contador = 0;
    while(num>0){
        contador+=1;
        num-=1;
    }
    return contador;
}

function contar(num) {
	let sum = 0;
	let lista = String(num).split("");
    console.log(lista);
    console.log("Empieza el bucle.. ");
	for(let contador=0; contador<lista.length;contador++) {
        console.log("El contador es.. " + contador);
		let num = parseInt(lista[contador]);
        console.log(num);
		sum += num;
        console.log("La suma es.. " + sum);
	}
	return sum;
}





///////// -------------------------------------- CLASE 2 DOM ----------------------------------- ////////////

!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! ELEMENTO = NODO !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

//////// SELECCIONAR ELEMENTOS /////////

elemento.getElementsByTagName("ETIQUETA")               //// document.getElementsByTagName("p")

document.querySelectorAll("p#tres");                    //// 

elemento.getElementsById("ValorID")                     //// document.getElementsById("69")  !!!! ATENCION ESTO ES PARA SUBNORMALES SOLO !!!!
         
<p id="tres"></p>                                       //// tres (SERIA LO MISMO QUE PONER document.getElementById("tres") YA QUE SE RECONOCERIA EL VALOR DE UNA ID TAL COMO UNA VARIABLE)

elemento.getElementsByClassName("ValorDeLaClase")       ////  document.getElementsByClassName("arahara") (SELECCIONARA TODOS LOS ELEMENTOS CUYO NOMBRE DE CLASE SEA arahara)
document.querySelectorAll("p.pepito");                  //// FORMA ALTERNATIVA DE HACERLO

elemento.getAttribute("ATRIBUTO")                       //// pepitos[0].getAttribute("id")

////// CREAR ELEMENTO //////

document.createElement("ETIQUETA")                  //// document.createElement("q")   ////

function crearElementosId(x){                               ///// HEMOS CREADO LA FUNCION CREAR
    for(let contador=1; contador<=x; contador++){           //// EL CONTADOR EMPIEZA EN 1, EL CONTADOR DURA DESDE LO QUE VALE CONTADOR POR PRIMERA VEZ HASTA EL VALOR QUE LE DEMOS SEA MENOR O IGUAL QUE X Y ESTE SE INCREMENTA EN 1 CADA VEZ
        let parrafo=document.createElement("p");            //// CREAMOS UNA VARIBLE LLAMADA PARRAFO QUE NOS CREARA UN ELEMENTO "P"
        parrafo.setAttribute("id", "parrafo"+contador);     //// CAMBIAMOS EL ATRIBUTO ID DE PARRAFO, DANDOLE POR VALOR "parrafo" Y EL CONTADOR CORRESPONDIENTE ("parrafo"+"1") DADO POR EL CONTADOR DE FORMA SUCESIVA 
        document.body.appendChild(parrafo);                 //// AÑADE AL BODY LA VARIABLE PARRAFO
    }
}


///// AÑADIR ELEMENTO /////

function añadir(padre, elemento){
    padre.appendChild(elemento)                     //// var q=document.createElement("q") --- THEN --- body.appendChild(q) ////
}


///////// ELIMINAR //////////

function borrar(padre, hijos){
    while(hijos[0]){                            /// padre=document.body
        padre.removeChild(hijos[0])             /// hijos=document.getElementsByTagName("p") (SIRVE PARA VER CUANTAS P TENEMOS)
    }                                           /// body.removeChild(hijos[0])
}


///// CAMBIAR ATRIBUTO DE UNA ETIQUETA /////

elemento.setAttribute("atributoACambiar", "ValorDelAtributoAcambiar")           //// allp=document.getElementsByTagName("p") (Seleccionaria todas las P)
                                                                                //// p2=document.getElementsByTagName("p")[1] (Seleccionaria unicamente la segunda p dentro de todas las p que hubiese en el documento)
                                                                                //// allp[1].setAttribute("id", "5") --- (Seleccionamos la 2da p de todas las p del documento y seleccionamos la id le damos el valor 5)
                                                                                //// p2.setAttribute("id", "5") --- (Seleccionamos la variable p2 y seleccionamos la id dandole el valor 5)

for(let contador=0 ; contador<allp.length ; contador++){                        //// ESTO ES UN EJEMPLO CON ALLP EN EL CUAL QUEREMOS CAMBIAR TODAS LAS CLASES DE P A LA VEZ, MEDIANTE UN BUCLE QUE LAS HACE DE UNA EN UNA
    allp[contador].setAttribute("class", "pepito");
}

for(let contador=10 ; contador>=0 ; contador--){                        //// CONTAR DEL 10 AL 0 Y  SI ES 0 DECIR DESPEGUE Y SI NO DECIR EL NUMERO
    if (contador==0){
        console.log("DESPEGUE");
    }
    else {
        console.log(contador);
    }
}

/////