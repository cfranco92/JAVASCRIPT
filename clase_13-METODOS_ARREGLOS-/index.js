var arreglo = [2,5,1,10,20];

/*Algoritmo sort  EL 10 NO LO TOMA COMO 10 SINO COMO 1
  Debido a que es un arreglo tipo alfabético*/
arreglo.sort();
console.log(arreglo);

//Añadimos esta función para ordenarlo como se esperaba
function ordenacion(a,b){
  if(a > b){return 1;}
  else if(b > a){return -1;}
  else if(a == b){return 0;}
}

arreglo.sort(ordenacion);  //Pasamos como argumento la función ordenacion
console.log(arreglo);


//LO MISMO QUE EL ANTERIOR PERO UN POCO MAS CORTO
function ordenacion(a,b){
  return a-b;
}

arreglo.sort(ordenacion);  //Pasamos como argumento la función ordenacion
console.log(arreglo);


//-----------------------------------------------------------------------------

//Revertir un arreglo
arreglo.reverse();
console.log(arreglo);


//CONVERTIR UNA CADENA EN UN arreglo
var arreglo = "a,b,c,2".split(","); //Split separa por coma
console.log(arreglo);


//PASAR DE UN ARREGLO A UNA CADENA
var arreglo = "a,b,c,2".split(",");
arreglo = arreglo.join(".");
console.log(arreglo);
