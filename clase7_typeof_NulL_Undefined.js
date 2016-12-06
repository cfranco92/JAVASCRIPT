//CLASE 7 -- CURSO JAVSCRIPT

//TYPEOF permite identificar el tipo de dato de una variable

var numero = 0;
console.log(typeof numero);

//Jason
var numero = {};
console.log(typeof numero);

//Arreglo
var numero = [];
console.log(typeof numero);


//Undefined
var hola = null;  // Si está declarada y definida
console.log(undefined)
if(typeof hola == "undefined"){
  console.log("Esta variable no está declarada")
}


//null
var hola = null
if(hola == null){
  hola = "Hola";
}
