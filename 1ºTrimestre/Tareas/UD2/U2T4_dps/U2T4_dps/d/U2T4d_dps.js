/**
 * 
 * @author Daniel Perez Serrano
 * 
 */
// Declaración de variables para almacenar la respuesta del usuario.
let nombre; // Almacena el nombre del usuario.
let edad;   // Almacena la edad del usuario.
let age;    // Almacena la edad convertida a tipo entero.

// Solicita al usuario su nombre hasta que se proporcione una entrada válida (no vacía y no numérica).
do {
    nombre = prompt('Mensaje de script:\n ¿Cómo te llamas?');
} while (nombre === '' || !isNaN(nombre));

// Solicita al usuario su edad hasta que se proporcione una entrada válida (no vacía y numérica).
do {
    edad = prompt('Mensaje de script:\n ¿Cuántos años tienes?');
} while (edad === '' || isNaN(edad));

// Convierte la edad ingresada a un número entero.
age = parseInt(edad);

// Compara la edad para determinar el mensaje de saludo.
if (age < 18) {
    alert("Hola " + nombre + ", eres menor de edad y has vivido " + age * 365 + " días.");
} else if (age >= 18) {
    alert("Hola " + nombre + ", eres mayor de edad y has vivido " + age * 365 + " días.");
} else {
    alert("No cumples con los requisitos del formulario, vuelve a intentarlo.");
}