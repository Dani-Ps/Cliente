// CONSTANTES 
const opc1 = "1.- Suma"; // Opción de sumar
const opc2 = "2.- Resta"; // Opción de restar
const opc3 = "3.- Multiiplicación"; // Opción de multiplicar
const opc4 = "4.- División"; // Opción de dividir
const fin = "Fin del programa."

// VARIABLES
let n1; // Almacena el primer número entero
let n2; // Almacena el segundo numero entero
let respuesta; // Almacena la opción del usuario.
cancelar = false; // Bandera que hará que el programa continue o acabe

// VARIABLES DE FUNCIONES
let sumar = (a, b) => a + b; // Funcion suma
let restar = (a, b) => a - b; // Funcion resta
let multiplicar = (a, b) => a * b; // Funcion multiplicar
let dividir = (a, b) => a / b; // Funcion dividir
// LOGICA
while (!cancelar) { // Bucle que se ejecuta infinitamente hasta que el usuario pulse cancelar
    n1 = prompt("Introduce un número entero: ");
    if (!isNaN(n1) || n1 === null) { // Compruebo si no es un número O si el usuario ha pulsado cancelar
        alert(fin);
        cancerlar = true;
        break;
    }

    let a = parseInt(n1); // Inicializo la variable y parseo para obtener el entero

    n2 = prompt("Introduce otro número entero: ");
    if (isNaN(n2) || n2 === null) { // Compruebo si no es un número O si el usuario ha pulsado cancelar
        alert(fin);
        cancerlar = true;
        break;
    }

    let b = parseInt(n2); // Inicializo la variable y parseo para obtener el entero

    respuesta = prompt("Escoge la operación que deseas realizar: \n" + opc1 + "\n" + opc2 + "\n" + opc3 + "\n" + opc4);

    if (isNaN(respuesta) || respuesta === null) {
        alert(fin);
        cancerlar = true;
        break;
    }

    let opc = parseInt(respuesta); // Parseo la respuesta para obtener el entero

    switch (opc) {
        case 1:
            sumar(a,b);

            break;
        case 2:
            restar(a,b);
            break;
        case 3:
            multiplicar(a,b);
            break;
        case 4:
            dividir(a,b);
            break;
        default:
            break;
    }


}

