/**
 * 
 * @author Daniel Perez Serrano
 * 
 */
// Solicitar al usuario el número de preguntas acertadas, falladas y no contestadas,
// y convertir las respuestas a números enteros.
let acertadas = prompt("Mensaje Script:\n Introduce el número de preguntas acertadas.") * 1;
let falladas = prompt("Mensaje Script:\n Introduce el número de preguntas falladas") * 1;
let noContestadas = prompt("Mensaje Script:\n Introduce el número de preguntas no contestadas") * 1;

// Calcular el total de preguntas realizadas sumando las acertadas, falladas y no contestadas.
let totalpreguntas = acertadas + falladas + noContestadas;

// Calcular la nota final, que depende de las preguntas acertadas, restadas y el total de preguntas.
let total = [(acertadas - falladas) * 10] / totalpreguntas;

// Mostrar la nota final al usuario.
alert("Su nota es: " + total);