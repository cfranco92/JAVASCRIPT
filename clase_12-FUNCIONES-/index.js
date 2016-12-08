
//FUNCIÓN SIN ARGUMENTOS
function nombre_funcion(){
  //Aquí viene el bloque que se va ejecutar al lllamar la función

}


function suma(a,b){
  b = b || 0;  // Obtiene el primer valor si tiene un valor asignado
  return a+b;
}

//Resultado de ejecutar una función en una variable
var resultado = suma(4,7);

//Se imprime de diferentes manera
console.log(suma(2,3));
console.log(resultado);

//Se almacena la FUNCIÓN SUMA en una variable
var funcion_suma = suma;

function ejecutar(funcion){
  return funcion();
}

resultado = ejecutar(funcion_suma);
console.log(resultado);
