// Programam para adivinar el año de creacion de JS

const MAX_INTENTOS = 5; // Variable que almacena el número máximo de intentos

let cancelar = false; // Variable que hace que el programa se ejecute infinitamente mientras el valor es igual a 'false'.
let intentos = 0; // Variable que almacenará el numero de intentos.

while (!cancelar) {

    // Comprueba cuántos intentos lleva, si lleva ya 5 termina el programa, en caso contrario le vuelve a preguntar el año.
    if (intentos<5) {

        let respuesta = prompt("Introduce el año en el que se creo JavaScript:\n"+"Tienes "+ MAX_INTENTOS+" intentos."); // Almacena el mensaje de respuesta del usuario.
        
        intentos++; // Cada vez que se le pide que introduzca el año, cuenta como intento.

        if (respuesta === null) { // Compuruebo si pulsa cancelar, si lo pulsa le salta un mensaje de confirmación.
           if ( confirm("¿Esta seguro que desea salir del programa?")){
            alert("FIN DEL PROGRAMA, HASTA LUEGO.");
            cancelar = true;
            continue;
           }  
           continue;
        }
    
        if (isNaN(respuesta) ) {  // Compruebo si el valor introducido es no númerico, si lo es salta un mensaje de error y vuelve a preguntar.
            alert("Introduce números, no texto. Ej(1995)\n" + intentos + " de "+MAX_INTENTOS); 
            continue;
        }
    
        if (respuesta === "") { 
            alert("No has introducido nigún dato.\n" + intentos + " de "+MAX_INTENTOS); // Compruebo si el usuario ha dejado vacio el alert.
            continue;
        }
    
        if (respuesta === "1995") { // Compruebo si ha acertado.
            alert("Has acertado, lo has intentado " + intentos + " veces.");
            cancelar = true;
            continue;
        }

        let year = parseInt(respuesta); // Parseo el valor de String a dato numérico para podere compararlo.

        if (year < 0 || year > 2023) { // Si el varlo es menor que 0 o mayor que 2023, lanza un mensaje de error y pide que lo intente de nuevo
            alert("Introduce un año entre el 0 y el 2023.\n " + intentos + " de "+MAX_INTENTOS);
            continue;
        }
        if (year > 1995) {
            alert("El año introducido es mayor.\n" + intentos + " de "+MAX_INTENTOS); // Si el valor es mayor se le hace saber al usuario para que vuelva a intentarlo.
        } else {
            alert("El año introducido es menor.\n" + intentos + " de "+MAX_INTENTOS); // Si el valor es menor se le hace saber al usuario para que vuelva a intentarlo.
        }
    } else { 
        alert("No lo puedes intentar más.\n"+"FIN DEL PROGRAMA.");
        cancelar = true;
    }

}

