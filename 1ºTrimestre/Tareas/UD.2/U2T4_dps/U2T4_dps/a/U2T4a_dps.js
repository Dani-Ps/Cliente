/**
 * 
 * @author Daniel Perez Serrano
 * 
 */

// Declaración de variable para almacenar la respuesta del usuario.
let mensaje = prompt('Mensaje de script: \n ¿Está seguro de que quiere hacer esto?');

// Verifica si el usuario ha respondido.
if (mensaje) {
    // Si el usuario ha respondido, muestra un mensaje con la respuesta.
    alert("Ha contestado: " + "'" + mensaje + "'");
} else {
    // Si el usuario no ha respondido, muestra un mensaje indicando que se ha rehusado a contestar.
    alert("Ha reusado a contestar.");
}
