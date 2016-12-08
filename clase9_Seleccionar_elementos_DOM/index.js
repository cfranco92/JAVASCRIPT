//  BÚSQUEDA POR ID
var div =
document.getElementById("mi_div");  //Se búsqueda un solo elemento basado en id
div.classList.add("mi_clase"); //Conjunto de clases id se le agrega mi_clase


//BÚSQUEDA POR CLASE  --> Tratamos con un arreglo de elementos
var div=
document.getElementsByClassName("div");  //
console.log(div);

//ENCONTRAR ELEMENTOS QUE COMPARTEN UNA MISMA ETIQUETA
var div=
document.getElementsByTagName("div");

//SELECCIONAR POR MEDIO DE JQUERY, SELECTORES DE CSS
$(".mi_clase")  //Esto no es válido en javascript

//SELECCIONAR ELEMENTOS CON QUERYSELECTOR
var mi_clase = document.querySelector(".mi_clase"); //Búsqueda por clase
var mi_div = document.querySelector("#mi_div"); //Búsqueda por ID
var mi_all = document.querySelectorAll("div"); // Devuelve un arreglo de div
console.log(mi_clase);
console.log(mi_div);
console.log(mi_all);

//BUSQUEDA POR JQUERY
function $(selector){
  return document.querySelector(selector);
}

var mi_clase = $(".mi_clase");//Ahora se puede buscar utilizando la sintaxis de jquery
