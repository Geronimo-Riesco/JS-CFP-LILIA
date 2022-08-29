/*Ejercicio 2
Analizar el código de la diapositiva siguiente y 
completar la tabla correspondiente. Luego 
ejecutar la codificación de cada test para 
corroborar que ha completado correctamente
la tabla.
Observación
* Cada test es independiente del anterior.
Por ejemplo: El Test B NO depende de las 
operaciones del Test A.*/

var palabra1 = "hola";
var palabra2 = "chau";
var frase ="";
console.log(palabra1);


/*TEST A*/
frase = palabra1 + palabra2;

/* TEST B */
palabra1 = palabra2;
palabra2 = palabra1;
frase = "frase nueva";

/*TEST C */
palabra1 = palabra1 + " " + palabra2;
palabra2 = palabra2 + " " + palabra2;
frase = palabra2 +"y" + palabra2;

/*TEST D */
palabra1 = "1+1";
palabra2 ="2/0";
frase = palabra1 + "=2";

alert (palabra1);
alert (palabra2);
alert(frase);