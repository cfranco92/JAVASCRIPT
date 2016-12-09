/*  MAP --> Función que permite modificar los arreglos ingeligentemente.
  Hay que pasarle un callback o una función, se va a ejecutar sobre cada
  elemento del arreglo.

  Cáda uno de sus elementos al cuadrado .
*/
//-----------------------------------------------------------------------------

var numeros = [1,5,6,8];

//numero.map(callback);

var cuadrados = [];

for(var i = numeros.length - 1; i >= 0;i--){
  var numero = numeros[i];
  cuadrados.push(Math.pow(numero,2));
}

console.log(cuadrados);

//-----------------------------------------------------------------------------
//                          VERSIÓN MAP

var cuadrados = numeros.map(function(elemento){
  return elemento ** 2;       // Elemento al cuadrado
  return elemento * elemento; //Elemento por elemento
});

console.log(cuadrados);
