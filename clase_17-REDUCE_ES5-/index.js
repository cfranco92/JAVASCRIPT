/**
  FUNCIÓN REDUCE,es método
**/

var letras = ["H","o","l","a"];

console.log(letras.join(""));


/**
  SE HACE LO MISMO QUE EN EL ANTERIOR PERO AQUÍ SE USA REDUCE Y ANTES JOIN
**/
var palabra = letras.reduce(function(valor_anterior_retornado,valor_actual,index,arreglo){
  return valor_anterior_retornado + valor_actual;
})
//Primera ejecución = H
//Segunda ejecución = Ho
//Tercera ejecución = Hol
//Cuarta ejecución = Hola
console.log(palabra);


/**
  EJEMPLO DE REDUCE SUMAR TODOS LOS VALORES DE UN arreglo
**/
var numeros = [20,1,23,1,5];   //Tiene que dar 50 la suma

var suma = numeros.reduce(function(valor_anterior_retornado,valor_actual,index,arreglo){
  return valor_anterior_retornado + valor_actual;
});     //  },5);   // Esto daría al valor_anterior_retornado = 5 en la primera iteración
console.log(suma);


/**
  OTRO EJEMPLO ALTERNO AL REDUCE MEDIANTE UN FOR.
**/
var suma2 = 0;
for(var i = 0; i < numeros.length;i++){
  suma2 += numeros[i];
}
console.log(suma2);
