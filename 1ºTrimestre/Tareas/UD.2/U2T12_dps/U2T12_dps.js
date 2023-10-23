/**
 * Daniel Perez Serrano.
 * 
 * Programa: Este programa analiza el tipo de dato que el usuario introduce y devuelve el tipo de dato que es. 
 * Este se ejecuta en bucle hasta que el usuario pulsa cancelar.
 *
 */

// Constantes
const CARACTER = "Es un carácter o una cadena."; // Mensaje de que el tipo de datos es un carácter.
const MAYOR_CIEN = "Es un número mayor que 100."; // Mensaje de que el tipo de datos es un número mayor de 100.
const MENOR_CIEN = "Es un número menor que 100."; // Mensaje de que el tipo de datos es es un número menor de 100.
const IGUAL_CERO = "Es un número igual a 0."; // Mensaje de que el tipo de datos es de que es igual a 0.
const VACIO = " Es una cadena vacía."; // Mensaje de que el tipo de datos es una cadena vacia.
const CANCELAR = "Programa terminado."; // Mensaje para indicar que el programa a terminado.

// Variables 

let cancelar = false; // Bandera para la salida del bucle, cuando su valor sea 'true' el bucle se acaba.


while (!cancelar) {

    let respuesta = prompt("Introduce el tipo de datos deseado: "); // Alamcena la variable que el usuario va a introducir.
    // Controlo si el usuario pulsa cancelar.
    if (respuesta === null) {
        alert(CANCELAR);
        break;
    }
    // COntrolo los mensajes de respuesta depende del tipo de dato.
    if (respuesta === "") {
        alert(VACIO);
    } else {
        if (isNaN(respuesta) && respuesta != "") {
            alert(CARACTER);
        } else {
            if (parseInt(respuesta) === 0) {
                alert(IGUAL_CERO);
            }
            if (respuesta > 0 && respuesta < 100) {
                alert(MENOR_CIEN);
            }
            if (respuesta > 100) {
                alert(MAYOR_CIEN);
            }
        }
    }

}


