
/**
 * 
 * @author Daniel Perez Serrano
 * 
 */
// Solicitar al usuario un día de la semana
var diaSemana = prompt("Por favor, ingrese un día de la semana:");

// Convertir el texto ingresado a minúsculas para que sea insensible a mayúsculas
diaSemana = diaSemana.toLowerCase();

// Determinar el día siguiente y mostrarlo en la consola
switch (diaSemana) {
  case "lunes":
    alert("El día siguiente es martes");
    break;
  case "martes":
    alert("El día siguiente es miércoles");
    break;
  case "miércoles":
    alert("El día siguiente es jueves");
    break;
  case "jueves":
    alert("El día siguiente es viernes");
    break;
  case "viernes":
    alert("El día siguiente es sábado");
    break;
  case "sábado":
    alert("El día siguiente es domingo");
    break;
  case "domingo":
    alert("El día siguiente es lunes");
    break;
  default:
    alert("El valor ingresado no corresponde a un día de la semana válido");
}
