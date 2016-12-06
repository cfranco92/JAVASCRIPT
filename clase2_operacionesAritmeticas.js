//Clase 2 -- CURSO JAVASCRIPT

var edad = 19;

//edad++;

console.log("Resultado de sumar 19 con 5: " + (edad + 5));

var punto_flotantes = 12.5;

console.log("Resultado de sumar 19 con 12.5: " + (edad + punto_flotantes));

/*
  COMENTARIOS DE BLOQUE

  Operadores aritméticos
  División = /
  Multiplicación = *
  Suma = +
  Resta = -
  Módulo = %
*/

//SUMA
var resultado_suma = edad + punto_flotantes;
var resultadito = "El mismo resultado del anterior, pero con parametros diferentes";

console.log(resultadito + " " + resultado_suma);

//MULTIPLICACIÓN
var resultado_multiplicacion = edad * punto_flotantes;

console.log(resultado_multiplicacion);


//MÓDULO
function es_par(numero){
    if(numero % 2 == 0){
	return ture;
    }
    return false;
}


//MATH  dos elevado a la 3
console.log(Math.pow(2,3));


//REDONDEAR .9
console.log(Math.round(0.9));

//HAY MÁS FUNCIONES MATEMÁTICAS EN MATH random, PI
