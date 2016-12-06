//CLASE 5 -- CURSO JAVSCRIPT


var contador = 0;
while(contador < 10){
    contador ++;
    console.log(contador)
}



  //CONTINUE & BREAK

  // --> CONTINUE
  var contador = 0;
  while(contador < 10){
    contador ++;
    if(contador % 2 == 0){  // Si es par salta la iteración
      continue
    }
    console.log(contador)
  }

  // --> BREAK
  var contador = 0;
  while(true){
    contador++;

    console.log(contador);
    if(contador >= 10){
      break;
    }
  }



//DO while
var contador = 0;
do{
  contador++;

  console.log(contador);
  if(contador >= 10){
    break;
  }
}while(false)  //PRIMERO HACE Y LUEGO EVALÚA
