// CONSTANTES
const opc1 = "1.- Sumar"; // Opción de sumar
const opc2 = "2.- Restar"; // Opción de restar
const opc3 = "3.- Multiplicación"; // Opción de multiplicar
const opc4 = "4.- División"; // Opción de dividir
const fin = "Fin del programa."; // Mensaje de fin de programa.

// VARIABLES
let n1; // Almacena el primer número entero
let n2; // Almacena el segundo numero entero
let respuesta; // Almacena la opción del usuario.
cancelar = false; // Bandera que hará que el programa continue o acabe
let a; //Almace el entero que se usara en las funciones
let b; //Almace el entero que se usara en las funciones
let resultado;

// VARIABLES DE FUNCIONES
let sumar = (a, b) => a + b; // Funcion suma
let restar = (a, b) => a - b; // Funcion resta
let multiplicar = (a, b) => a * b; // Funcion multiplicar
let dividir = (a, b) => a / b; // Funcion dividir

// LOGICA
while (!cancelar) {
  // Bucle que se ejecuta infinitamente hasta que el usuario pulse cancelar o haga el calculo de la funcion
  n1 = prompt("Introduce un número entero: ");

  if (isNaN(n1) || n1 === null) {
    // Compruebo si no es un número O si el usuario ha pulsado cancelar

    alert(fin);
    cancelar = true;
    break;
  }

  a = parseInt(n1); // Inicializo la variable y parseo para obtener el entero

  n2 = prompt("Introduce otro número entero: (No puede ser 0).");
  if (isNaN(n2) || n2 === null || parseInt(n2) === 0) {
    // Compruebo si no es un número O si el usuario ha pulsado cancelar o si no ha rellenado el campo

    alert(fin);
    cancelar = true;
    break;
  }

  b = parseInt(n2); // Inicializo la variable y parseo para obtener el entero

  respuesta = prompt(
    "Escoge la operación que deseas realizar: \n" + // Almacena que operación desea hacer el usuario
      opc1 + // Sumar
      "\n" +
      opc2 + // Restar
      "\n" +
      opc3 + // Multiplicar
      "\n" +
      opc4 // Dividir
  );

  if (isNaN(respuesta) || respuesta === null) {
    // Compruebo si la respuesta no es un número o si ha pulsado cancelar o si no ha rellenado el campo

    alert(fin);
    cancelar = true;
    break;
  }

  let opc = parseInt(respuesta); // Parseo la respuesta para obtener el entero en una nueva variable 'opc'

  switch (
    opc // Según la opcion 1-4, hará una de las 4 funciones, si el número no es válido terminará el programa.
  ) {
    case 1:
      resultado = sumar(a, b);
      document.write("<p> El resultado de la suma es: " + resultado + " </p>");
      document.write("<p> " + fin + " </p>");
      cancelar = true;

      break;

    case 2:
      resultado = restar(a, b);
      document.write("<p> El resultado de la resta es: " + resultado + " </p>");
      document.write("<p> " + fin + " </p>");
      cancelar = true;

      break;

    case 3:
      resultado = multiplicar(a, b);
      document.write(
        "<p> El resultado de la multiplicacion es: " + resultado + " </p>"
      );
      document.write("<p> " + fin + " </p>");
      cancelar = true;

      break;

    case 4:
      resultado = dividir(a, b);
      document.write(
        "<p> El resultado de la division es: " + resultado + " </p>"
      );
      document.write("<p> " + fin + " </p>");
      cancelar = true;
      break;

    default:
      alert("Valor no válido: \n " + opc + ".");
      alert(fin);
      cancelar = true;
      break;
  }
}
