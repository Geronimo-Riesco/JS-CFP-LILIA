//Ejercicio 6
/*Se generará un mensaje de alerta que saludará 
al usuario con un mensaje diferente según el día 
de la semana que sea.
Trabajaremos con getDay() y switch.*/



var hoy = new Date();
var today = hoy.getDay();
switch (today) {
    case 0:
        mensaje= "Qué tengas un hermoso Domingo";
        break;
    case 1:
      mensaje= "Excelente comienzo de semana";
      break;
    case 2:
        mensaje= "Qué tengas un lindo Martes";
        break;
    case 3:
        mensaje= "Miércoles, ya mitda de semana";
        break;
    case 4:
        mensaje= "Qué tengas un lindo Jueves";
        break;
    case 5:
        mensaje= "Ya es Viernes! Casi fin de semana!";
        break;
    case 6:
        mensaje= "Buen comienzo de fin de semana";
        break;
}
alert(mensaje);

