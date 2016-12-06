//CLASE 4 --- JAVASCRIPT
//CONDICIONES   ---> Según sea verdadero o falso se cambia
//                   el flujo del programa


if(true){
    console.log("La condición fue verdadera");
}else{
    console.log("La condición fue falsa");
}


// bool --> true / false
//!true = false
//!false = true

//OPERADORES LÓGICOS
/*
  || OR
  && AND
  == ===      === (Estrictamente el mismo tipo)   30 != "30"
  != !==      !== (Estrictamente diferente del mismo tipo)   30 != "30"   si es diferente
  !
*/


var numero_uno = 23;

var numero_dos = 30;

if(numero_uno < numero_dos){
    console.log("Entre al bloque");
}


if(numero_uno && false){
    console.log("Entre al asador");
}else if(true){
    console.log("La condición es falsa");
}else{
    console.log("No cumple nada");
}


