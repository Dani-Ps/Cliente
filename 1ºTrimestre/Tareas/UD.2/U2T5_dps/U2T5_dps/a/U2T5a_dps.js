/**
 * 
 * @author Daniel Perez Serrano
 * 
 */

let alumnos = new Map();    // Mapa de alumnos donde se almacenará el nombre como clave y la nota como valor.

let mensaje;    // Recibe el número de alumnos en forma de cadena.

let totalAlum; // Variable tipo numérica del total de alumnos

do {
    mensaje = prompt('Mensaje Script:\n Introduce el número total de alumnos:');
} while (mensaje === '' || isNaN(mensaje));

totalAlum = parseInt(mensaje);

for (let i = 0; i < totalAlum; i++) {
    let nombre; // Declarar nombre fuera del bucle
    do {
        nombre = prompt('Mensaje de script:\n Introduce su Nombre');
    } while (nombre === '' || !isNaN(nombre));

    let edad; // Declarar edad fuera del bucle
    do {
        edad = prompt('Mensaje de script:\n introduce su nota');
    } while (edad === '' || isNaN(edad));

    let age = parseFloat(edad);
    alumnos.set(nombre, age);
}

let sumaNotas = 0; // Variable para almacenar la suma de las notas

for (let nota of alumnos.values()){
    sumaNotas += nota;
}

let media = sumaNotas / totalAlum;

alert("La media de la clase es "+ media);






