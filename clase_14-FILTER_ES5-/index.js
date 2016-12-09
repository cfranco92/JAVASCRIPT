/*Apartir de javascript 5 se integraron varios metodos para ejecutar
sobre los arreglos en javascript, tal como filter*/
/*
  Es un metodo que toma como parametro un callback o una funcion, y construye
  un nuevo arreglo apartir de aquellos elementos que al ejecutar la función
  devuelven verdadero.
*/
//-----------------------------------------------------------------------------

var numeros = [10,2,3,5,9,20,22,8]
/*
var numeros_pares = []

for(var i = numeros.length;i>=0;i--){
  var numero = numeros[i];
  if(numero % 2 == 0){
    numeros_pares.push(numero);
  }
}

console.log(numeros_pares);*/

//numeros_pares recibe el arreglo que devuelve filter.
var numeros_pares =
numeros.filter(function(numero,index){
  return numero % 2 === 0;
});

console.log(numeros_pares);
