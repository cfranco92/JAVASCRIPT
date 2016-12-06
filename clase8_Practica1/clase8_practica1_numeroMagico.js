
//Número máximo
var max = 100;

//Número mínimo
var min = 1;

//Número aleatorio
var numero_secreto = Math.random() * (max-min) + min;

numero_secreto = parseInt(numero_secreto);
//0.....1

console.log(numero_secreto)

var mensaje = "Ingresa un número para adivinar el número mágico";

while(true){
  var numero_del_usuario = prompt(mensaje, "0");

  numero_del_usuario = parseInt(numero_del_usuario);

  if(numero_del_usuario === numero_secreto){
    alert("Ganaste!!! Adivinaste el número secreto");
    break;
  }
  else if(numero_del_usuario === 0){
    break;
  }
  else if(numero_del_usuario > numero_secreto){
    mensaje = "Lo sentimos, el número que ingresaste es mayor al número mágico";
  }
  else if(numero_del_usuario < numero_secreto){
    mensaje = "Lo sentimos, el número que ingresaste es menor al número mágico";
  }

}
