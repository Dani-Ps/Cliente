/**
 * Autor: Daniel Perez Serrano
 *
 * Este script solicita al usuario que introduzca un nombre de usuario y una contraseña.
 * Luego verifica si el nombre de usuario es válido (no está vacío y no es un número),
 * y si la contraseña coincide con la cadena "MeGustaProgramar".
 *
 * Si el usuario cancela alguno de los cuadros de diálogo, la aplicación se detiene
 * y se muestra un mensaje de alerta.
 *
 * @author Daniel Perez Serrano
 */

// Inicialización de variables que se utilizan para almacenar el nombre y la contraseña del usuario.
let nombre;
let passwd;
let nombreCorrecto = false;
let passwdCorrecto = false;
const PASSWD_CORRECTA = "<PASSWORD>"; // La contraseña correcta debe ser igual a esta constante.
// Variable para controlar si se ha cancelado en el primer cuadro de diálogo.
let cancelado = false;

// Bucle para obtener un nombre de usuario válido.
while (!nombreCorrecto) {
  nombre = prompt("Mensaje de Script:\nIntroduce tu nombre de usuario:");

  if (nombre != "" || !isNaN(nombre)) {
    nombreCorrecto = true;
  } else {
    alert("Usuario incorrecto:\nEstá vacío o es un número");
  }
  // Verificar si el usuario canceló el cuadro de diálogo.
  if (nombre === null) {
    alert("Aplicación cancelada. Hasta luego.");
    cancelado = true; // Marcar como cancelado para evitar mostrar el mensaje nuevamente.
    break; // Salir del bucle si se cancela.
  }
}

// Comprobar si el usuario canceló el bucle anterior.
if (!cancelado) {
  // Bucle para obtener una contraseña válida y verificarla.
  while (!passwdCorrecto) {
    passwd = prompt("Mensaje de Script:\nIntroduce tu contraseña:");

    // Verificar si el usuario canceló el cuadro de diálogo.
    if (passwd === null) {
      alert("Aplicación cancelada. Hasta luego.");
      break; // Salir del bucle si se cancela.
    }

    if (passwd === "MeGustaProgramar") {
      passwdCorrecto = true;
      alert(
        "Felicidades " +
          nombre +
          ", se ha almacenado correctamente la información de registro."
      );
    } else if (passwd === "") {
      alert(
        "Contraseña incorrecta:\nEstá vacía o tiene algún error, vuelve a intentarlo"
      );
    } else {
      alert(
        "Contraseña incorrecta: La contraseña no coincide. Por favor, inténtalo de nuevo."
      );
    }
  }
}
