/**
 * Autor: Daniel Perez Serrano.
 * 
 * 
 * Programa para obtener la letra del dni
 * Al usuario se le pedirá los numeros de su dni.
 * estos numuero dividido entre 23 dara como resultado 1 número clave cuyo valor es la letra que buscamos.
 * El tratamiento de datos será básico, si el usuario no inserta el tipo de dato requerido, 
 * saltará un mensaje de error y podrá volver a intentalo.
 * Si pulsa 'cancelar el programa finalizará.
 * 
 */
//  CONSTANTES
const mensjCancelar = "Has pulsado 'CANCELAR'\n" + "Hasta luego.";
const mensjRespuesta = "La letra de su DNI es: ";
const mensjDni = "Introduce el número del DNI";
const mensjError = "Error.\n" + "El valor introducido no es válido, vuelve a intentarlo";
const posibilades = "TRWAGMYFPDXBNJZSQVHLCKE";
//  VARIABLES
let cancelar = false; // El programa se ejecutará en bucle hasta que su valor no sea true.

// LÓGICA
while (!cancelar) {
    //  Pregunto al usuario que introduzca los números de si dni.
    let respuesta = prompt(mensjDni);
    //  Comprobación por si pulsa cancelar.
    if (respuesta === null) {
        alert(mensjCancelar);
        cancelar = true;
    } else if (respuesta.length > 8) { // Comprobación para saber si mete una cantidad de números incorrecta
        alert(mensjError);
    } else {
        // Almacena la cadena como un entero 
        let dniNumber = parseInt(respuesta);
        // compruebo que ssi el valor que almacena es un NaN.
        if (isNaN(dniNumber)) {
            alert(mensjError);
        } else {
            let resto = dniNumber % 23; // Inicializo y estancio la variable con el valor del resto
            let letraDni = posibilades.charAt(resto); // Alamceno el valor que está en la posicion del resto
            alert(mensjRespuesta + letraDni); // Muestro por pantalla la letra 
        }
    }
}
