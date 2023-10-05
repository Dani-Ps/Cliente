/**
 * 
 * @author Daniel Perez Serrano
 * 
 */


// Declaración de variable para almacenar la respuesta del usuario.
let mensaje = prompt('Mensaje de script: \n ¿Qué densidad tiene el material elegido en g/cm³?');

// Parseo el mensaje en un número.
let num = parseInt(mensaje);

// Comprobamos la densidad del material
if (num >= 1) {
    alert("El material se hunde en el agua."); //   Si es igual o mayot a '1' se hunde.
} else if (num < 1) {
    alert("El material flota en el agua."); //  Si es menor a '1'flota.
}