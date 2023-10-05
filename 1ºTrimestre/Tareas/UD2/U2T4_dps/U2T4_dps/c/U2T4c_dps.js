/**
 * 
 * @author Daniel Perez Serrano
 * 
 */

//  Declaración de variable para almacenar la respuesta del usuario.
let mensaje1 = prompt('Mensaje de script:\n Introduce el radio de la circunferencia de la base en cm.');
let mensaje2 = prompt('Mensaje de script:\n Introduce la altura en cm.');

//  Parseamos los mensajes a tipo Float.
let r = parseFloat(mensaje1);
let h = parseFloat(mensaje2);

// Verificamos si las entradas son números válidos.
if (isNaN(r) || isNaN(h)) {
    alert('Error: Debes ingresar números válidos para el radio y la altura.');
} else {
    // Calculamos el volumen del cilindro utilizando la fórmula V = π * r² * h.
    let vol = Math.PI * r * r * h;
}

//  Mostrar resultados por pantalla
alert('El volumen de su cilindro es: ' + vol + 'cm³.');




