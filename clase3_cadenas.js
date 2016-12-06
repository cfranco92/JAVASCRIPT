//CLASE 3 -- JAVASCRIPT

//STRING O CADENAS --> TEXTO AGRUPADO ( '' || "")

var nombre = "Cristian";

var cadena = 'Hola ' + nombre;

console.log(cadena);

console.log(cadena.length);

var resultado = cadena.indexOf("Código facilito");  //SI CONTIENE UN TEXTO DENTRO DE OTRO TEXTO

console.log(resultado)

//INDESOF ------> indexOf

if(nombre.indexOf("Cristian") != -1){
    console.log("Eres el dueño de este curso")
}else{
    console.log("No eres el dueño de este curso");
}

var nombre2 = "u Cristian"

console.log(nombre2.indexOf("Cristian"));



console.log(nombre[nombre.length -1]);

console.log(nombre.charAt(1));


nombre = nombre.replace("i","a");

console.log(nombre);


console.log(nombre.slice(2,4));


console.log(nombre.toUpperCase());

console.log(nombre.toLowerCase());
