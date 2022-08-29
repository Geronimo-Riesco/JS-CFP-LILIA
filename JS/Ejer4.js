//Ejercicio 4
/*Este mismo proceso anterior se mostrará en el 
documento a través de document.write()
Por ejemplo: 
El nombre del usuario es Juan Carlos
La edad del usuario es 24 
*/

var edad= window.prompt ("Cuál es tu edad");
var nombre = window.prompt("Cuál es tu nombre") ;
var apellido = window.prompt("Cuál es tu apellido");
alert ("El Nombre es = " + nombre + " " + apellido);
document.write('<p> El nombre del usuario es : </p>',nombre," ", apellido );
document.write('<p> La edad del usuario es : </p>' + edad );