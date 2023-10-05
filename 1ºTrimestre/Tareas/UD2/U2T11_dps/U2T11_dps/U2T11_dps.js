/**
 * Autor: Daniel Perez Serrano.
 * 
 * Este programa es un programa para el cálculo del IMC.
 * Al usuario se le pedirá el nombre, la edad, el peso y la altura.
 * Con estos datos calcularemos el IMC y le daremos un mensaje de respuesta según este.
 * El tratamiento de datos será básico, si el usuario no inserta el tipo de dato requerido, 
 * saltará un mensaje de error y se acabará el programa.
 * 
 */

// CONSTANTES
const mensjNombre = "Programa de cálculo del IMC (Índice de masa corporal):\nIntroduce su nombre:";
const mensjEdad = "Introduce tu edad:";
const mensjPeso = "Introduce tu peso en kilos:";
const mensjAltura = "Introduce tu altura:\nEn metros.";
const mensjError = "Error.\nEl valor introducido no es válido, vuelve a intentarlo";
const mensjCancelar = "Has pulsado 'CANCELAR'\nHasta luego.";
const mensjFin = "\nFin del programa.";
const pesoInsuficiente = "se encuentra dentro del rango de peso insuficiente";
const pesoNormal = "se encuentra dentro del rango de peso normal o saludable.";
const sobrePeso = "se encuentra dentro del rango de sobrepeso";
const obesidad = "se encuentra dentro del rango de obesidad";
const deNuevo = "¿Quiere cálcular su IMC de nuevo?\nSi/No";

// VARIABLES
let cancelar = false; // Cuando es false el programa se ejecutará infinitamente.
let opc1; // Almacena respuesta nombre
let opc2; // Almacena respuesta edad
let opc3; // Almacena respuesta peso
let opc4; // Almacena respuesta altura
let imc; // Almacena el resultado cálculo IMC.
let calcularDeNuevo; // Almacena la respuesta de si quiere calcular otro IMC.

do {
    // NOMBRE
    opc1 = prompt(mensjNombre);

    // Compruebo si ha pulsado cancelar
    if (opc1 === null) {
        alert(mensjCancelar);
        cancelar = true;
        break;
    }

    // Si el nombre no es un número, preguntamos lo demás.
    if (!isNaN(opc1)) {
        alert(mensjError);
        continue;
    }

    // EDAD
    opc2 = prompt(mensjEdad);

    // Compruebo si ha pulsado cancelar
    if (opc2 === null) {
        alert(mensjCancelar);
        cancelar = true;
        break;
    }

    // Parseo opc2 para sacar la edad
    let edad = parseInt(opc2);

    // Compruebo si la edad es un número y si se encuentra dentro de un rango de 0-120 años.
    if (isNaN(edad) || edad <= 0 || edad >= 120) {
        alert(mensjError);
        continue;
    }

    // PESO
    opc3 = prompt(mensjPeso);

    // Compruebo si ha pulsado cancelar
    if (opc3 === null) {
        alert(mensjCancelar);
        cancelar = true;
        break;
    }

    // Parseo opc3 para sacar el peso
    let peso = parseFloat(opc3);

    // Compruebo si el peso es un número y si se encuentra dentro de un rango de 0-300 kg.
    if (isNaN(peso) || peso <= 0 || peso >= 300) {
        alert(mensjError);
        continue;
    }

    // ALTURA
    opc4 = prompt(mensjAltura);

    // Compruebo si ha pulsado cancelar
    if (opc4 === null) {
        alert(mensjCancelar);
        cancelar = true;
        break;
    }

    // Parseo opc4 para sacar la altura
    let altura = parseFloat(opc4);

    // Compruebo si la altura es un número y si se encuentra dentro de un rango de 0-3 metros.
    if (isNaN(altura) || altura <= 0 || altura >= 3) {
        alert(mensjError);
        continue;
    }

    //  RESULTADOS
    imc = peso / (altura * altura); // Fórmula del cálculo del IMC

    //  Muestro el resultado y un mensaje sobre la composición corporal según el valor del IMC.
    if (imc >= 18.5 && imc < 24.9) {
        alert("Buenas " + opc1 + " con edad de " + edad + " años,\n" + "El valor de su IMC es: " + imc.toFixed(2) + " " + pesoNormal);
    } else if (imc < 18.5) {
        alert("Buenas " + opc1 + " con edad de " + edad + " años,\n" + "El valor de su IMC es: " + imc.toFixed(2) + " " + pesoInsuficiente);
    } else if (imc >= 25 && imc < 30) {
        alert("Buenas " + opc1 + " con edad de " + edad + " años,\n" + "El valor de su IMC es: " + imc.toFixed(2) + " " + sobrePeso);
    } else {
        alert("Buenas " + opc1 + " con edad de " + edad + " años,\n" + "El valor de su IMC es: " + imc.toFixed(2) + " " + obesidad);
    }

    // JUGAR DE NUEVO
    calcularDeNuevo = prompt(deNuevo); //  Pregunto si quiere calcular el IMC de nuevo.
    let minus = calcularDeNuevo.toLowerCase(); //  Paso el resultado a minúsculas.

    //  Compruebo resultado, si pulsa el botón cancelar, se acaba el programa o si introduce 'no'.
    if (calcularDeNuevo === null && minus === "no") {
        cancelar = true;
    }
} while (!cancelar);
