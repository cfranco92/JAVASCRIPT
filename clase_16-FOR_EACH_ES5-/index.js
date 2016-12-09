/***
    ForEach, se ejecuta sobre un arreglo, no retornar un arreglo,
    sino que permite iterar el arreglo.
    Es muy parecido a un ciclo for, pero en lugar de un ciclo utiliza
    un callback.
***/

var numeros = [2,4,6,8];

//Se recibe como parametros el elemento accedido con su index y el arreglo en donde se accede
numeros.forEach(function(elemento,index,arreglo){
  console.log(elemento);
  console.log(index);
  console.log(arreglo);
});   // Esta función imprimer elemento por elemento


//ESTA FUNCIÓN ELEVA AL CUADRADO CADA ELEMENTO AL ITERAR
//Cambiada cada elemento en el arreglo
numeros.forEach(function(elemento,index,arreglo){
  arreglo[index] = Math.pow(elemento,2);
});

console.log(numeros);
