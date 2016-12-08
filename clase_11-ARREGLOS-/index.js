var arreglo = [];
var arreglo = new Array(20);  //No recomienda usar este, tiene 20 elementos
var arreglo = new Array(20,10); //Tiene 2 elementos, inconsistencia con lo anterior

//El arreglo puede recibir diferentes tipos
var arreglo = [20, "hola mundo", {},[]]

var arreglo = [20,10,5];

console.log(arreglo[0]) //Esto imprime el 20, el primer elemento
console.log(arreglo.length) //Imprime la cantidad de objetos en el arreglo

//AGREGAR ALGO AL ARREGLO AL COMIENZO O AL FINAL
arreglo.push(7);   //Permite poner un elemento al final del arreglo
arreglo.unshift(12);  //Permite poner un elemento al principio del arreglo

//ELIMINAR ELEMENTOS DEL arreglo
arreglo.pop()    //Elimina el último elemento del arreglo
arreglo.shift()  //Borra el primer elemento del arreglo, el 20


console.log(arreglo);

//IMPRIMIR TODO EL ARREGLO desde el inicio
for(var i = 0; i<arreglo.length;i++){
  console.log(arreglo[i]);
}

//IMPRIMIR TODO EL ARREGLO DESDE EL FINAL para atrás
for(var i = arreglo.length; i>= 0; i--){
  console.log(arreglo[i]);
}

//ESTE ES MÁS OPTIMIZADO DEBIDO QUE SOLO OBTIENE UNA VEZ LA LONGITUD DEL ARREGLO
var arreglo = [20,10,5,3]
var i = arreglo.length
for(;i>=0;i--){
  console.log(arreglo[i]);
}
