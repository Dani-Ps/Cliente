/**
 * Autor: Daniel Perez Serrano.
 * 
 * Este programa representa a un juego de dados, donde el usuario eligira con cuánto dados quiere jugar
 * Seguidamente optiene una puntuación con dado, sólo puede introducir un valor numérico del 1 al 4.
 */

// Constantes
const mensaje1 = "¿Cuántos dados deseas tirar?\n" + "Recuerda puedes tirar de 1 a 4 dados.";
const mensaje3 = "El valor introducido no es correcto, vuelve a intentarlo";
const mesaje2 = "Has pulsado 'CANCELAR'\n" + "Hasta luego.";
const finPrograma ="\nFin del programa.";
//  Variables
let numDados; // Almacena el numero de dados con los que quiere jugar el usuario
let cancelado = false; // Cuando es false el programa se ejecutara infinitamente.
let mensajeRespuesta = ""; // Muestra el resultado al usuario
let respuesta; // Recibe lo que introduzca el usuario

//  LOGICA
//  Bucle que no se romperá hasta que no pulsemos el botón cancelar
while (!cancelado) {
    respuesta = prompt(mensaje1);

    // Comprobar que no se ha pulsado el botón de cancelar.
    if (respuesta === null) {
        cancelado = true;
        alert(mesaje2);
        break;
    }
    // Parseo la respuesta de cadena a tipo numerico.
    numDados = parseInt(respuesta);
    console.log(numDados);
    // Compruebo que la respues esta dentro de los valores posibles
    if (numDados > 0 && numDados < 5) {
        // Recorro el Array para introducir datos en el mapa
        for (let i = 1; i <= numDados; i++) {
            // Inicializo e instancio el numero aleatorio para cada iteración del bucle.
            let random = Math.floor(Math.random() * 6 + 1);
            // Almaceno los resultados en la variable. Donde i es el numero del dado y random el aleatorio.
            mensajeRespuesta += " Dado " + i + ".: " + random;
        }
        // Imprimo los datos por pantalla
        alert(mensajeRespuesta +  finPrograma)
        // Le doy el valor de true para salir de la clase.
        cancelado = true;

    } else {
        // Mensaje de cancelación
        alert(mensaje3);
    }

}



