function click(){
  alert("Esto es un alert");
}
//-----------------------------------------------------------------------------

document.getElementById("mi_btn");  //Traemos el botón a javascript

//EVENTO QUE VA A SUCEDER Y LA FUNCIÓN QUE SE VA A REALIZAR
document.getElementById("mi_bton").addEventListener("click",click,false); //Se ejecuta de segundo

function clic(){
  alert("Esto fue disparado por el botón")
}

//Evento con simple ID
//Normalmente se ejecuta primero el de adentro pero con esto aseguramos que se ejecuta el de afuera primero
document.getElementById("mi_div").addEventListener("click", another_clic, true); //Se ejecuta de primero

function another_clic(){
  alert("Esto fue dispara por el div")
}
