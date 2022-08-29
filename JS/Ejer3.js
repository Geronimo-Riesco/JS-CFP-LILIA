//Ejercicio 3
/*Realizar una ventana de usuario donde el mismo 
ingresará:
* edad
* nombre
* apellido
Estos datos se mostrarán en una alerta, en un 
texto complejo tal como:
‘El nombre del usuario es…’
 */

var edad= window.prompt ("Cuál es tu edad");
var nombre = window.prompt("Cuál es tu nombre") ;
var apellido = window.prompt("Cuál es tu apellido");
alert ("El Nombre es = " + nombre + " " + apellido);


/*otra forma de hacer lo mismo es con el string template
/*  alert (`El Nombre es = ${nombre} ${apellido}`);*/
