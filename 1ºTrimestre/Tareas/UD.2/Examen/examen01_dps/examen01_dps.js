// Programam para adivinar el año de creacion de JS

let cancelar = false; // Variable que hace que el programa se ejecute infinitamente mientras el valor es igual a 'false'.
let intentos = 0; // Variable que almacenará el numero de intentos.

while (!cancelar) {

    let mensaje = prompt("Introduce el año en el que se creo JavaScript:\n");
    intentos++; // Cada vez que se le pide que introduzca el año, cuenta como intento.
    if (mensaje === null) { // Compuruebo si pulsa cancelar
        alert("EL PROGRAMA A FINALIZADO. Hasta luego");
        cancelar = true;
    }

    if (isNaN(mensaje)) {  // Compruebo si el valor introducido es no númerico, si lo es salta un mensaje de error y vuelve a preguntar.
        alert("Introduce un año váldio. Ej(1995)\n" + "Vuelve a intentarlo."); 
        continue;
    }

    if (mensaje === "") { 
        alert("No has introducido nigun dato, vuelve a intentarlo."); // Compruebo si el usuario ha dejado vacio el alert.
        continue;
    }

    if (mensaje === "1995") { // Compruebo si ha acertado.
        alert("Has acertado, lo has intentado " + intentos + " veces.");
        cancelar = true;
        continue;
    }
    let year = parseInt(mensaje); // Parseo el valor de String a dato numérico para podere compararlo.
    if (year > 1995) {
        alert("El año introducido es mayor, vuelve a intentarlo."); // Si el valor es mayor se le hace saber al usuario para que vuelva a intentarlo.
    } else {
        alert("El año introducido es menor, vuelve a intentarlo."); // Si el valor es menor se le hace saber al usuario para que vuelva a intentarlo.
    }
}

