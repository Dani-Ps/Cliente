/**
 * Juego de Adivinar Número.
 * Autor: Daniel Perez Serrano.
 */

// Inicialización de variables
let intentos = 0; // Contador de intentos
let numeroAleatorio = Math.floor(Math.random() * 10 + 1); // Número aleatorio a adivinar
let jugarDeNuevo = true; // Bandera para controlar si se juega de nuevo

// Bucle principal del juego
while (jugarDeNuevo) {
  let num;

  // Solicitar al usuario que introduzca un número
  num = parseFloat(
    prompt("Mensaje de script\nIntroduce un número del 1 al 10 (Ej.10)")
  );

  // Comprobar si el valor introducido es numérico y está en el rango correcto
  while (isNaN(num) || num < 1 || num > 10) {
    num = parseFloat(
      prompt(
        "Error en el dato escrito. Vuelve a intentarlo, escribe un número entero del 1 al 10 (Ej.10) "
      )
    );
  }

  intentos++; // Incrementar el contador de intentos
  let respuesta = "";

  // Comprobar si el número adivinado es igual al número aleatorio
  if (num == numeroAleatorio) {
    respuesta = prompt(
      "Enhorabuena, has acertado en el intento: " +
        intentos +
        ". ¿Deseas volver a jugar? Si/No"
    );

    // Comprobar si el usuario desea jugar de nuevo
    if (respuesta.toLocaleLowerCase() === "no") {
      jugarDeNuevo = false;
    } else {
      // Generar un nuevo número aleatorio y reiniciar el contador de intentos
      numeroAleatorio = Math.floor(Math.random() * 10 + 1);
      intentos = 0;
    }
  } else if (num > numeroAleatorio) {
    alert("El número es menor que " + num);
  } else {
    alert("El número es mayor que " + num);
  }
}
