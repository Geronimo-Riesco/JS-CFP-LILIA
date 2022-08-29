//Ejercicio 5
/*Se pedirá al mismo usuario ingresar su sueldo 
y una variable llamada bonus, se intentará sumar 
ambas y se evaluará qué medida se debe tomar 
ya que los valores ingresados a través de la 
ventana se concatenan y no se suman por lo 
tanto se trabajará con parseInt() y parseFloat() */

var sueldo = Number(prompt("Ingrese el monto de su sueldo"));
var bonus = Number(prompt("Ingrese el monto del bonus:"));
var total = parseInt(sueldo + bonus);
alert(total);
