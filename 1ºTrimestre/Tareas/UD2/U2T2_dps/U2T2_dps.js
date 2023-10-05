/*
* @autor Daniel Perez Serrano
*/

// Declaro las variables tipo cadena
let saludo = "Hola";
let n1 = "25";
let n2 = "10";
let despedida = "Adios";

// Mensaje con salto de linea
alert(saludo + "\n" + despedida);

// Parseo las cadenas a número para poder mostrarlos
let num1 = parseInt(n1);
let num2 = parseInt(n2);

// Muestro por pantalla la suma 
alert("La suma de " + n1 + " y " + n2 + " es: " + (num1 + num2));

// Mostrado de la suma de todas las variables con espacios
alert(saludo + " " + num1 + " " + num2 + " " + despedida);

// Mostrado de comillas simples
alert("Muestro de comillas 'simples'");
