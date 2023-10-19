/**
 * @author Daniel Perez Serrano
 *
 * Este programa esta diseñado para que los usuarios puedan personalizar pizzas, eligiendo entre opciones veganas o no veganas y
 * seleccionando ingredientes adicionales. Utiliza constantes para definir ingredientes y mensajes, y variables para controlar
 * la lógica de la interacción con el usuario.
 * El bucle principal se ejecuta hasta que se hace una elección válida o se cancela.
 *
 */

// Constantes: Almacenan valores constantes que se utilizan en el programa.

// Ingredientes para pizzas veganas
const vIng1 = "Pimiento";
const vIng2 = "Tofu";

// Ingredientes para pizzas no veganas
const ing1 = "Pepperoni";
const ing2 = "Jamón ";
const ing3 = "Salmón";

// Ingredientes por defecto en todas las pizzas
const defaultIng = "Mozarrela y tomate.";

// Mensajes predeterminados que se mostrarán al usuario
const defaultVegMensaje =
  "La pizza elegida es vegana y tiene los siguientes ingredientes: ";
const defaultNoVMensaje =
  "La pizza elegida tiene los siguientes ingredientes: ";
const errorMens = "El valor introducido no es correcto, vuelve a intentarlo.";
const mensajeCancelacion = "Aplicación cancelada. Hasta luego.";

// Variables: Almacenan valores que cambian durante la ejecución del programa.

// Variables relacionadas con la elección de pizza vegana o no vegana
let opcP; // Almacena la respuesta del usuario sobre si quiere una pizza vegana o no.
let opcV; // Almacena la elección del ingrediente extra para pizzas veganas.
let opcNv; // Almacena la elección del ingrediente extra para pizzas no veganas.
let valorCorrecto = false; // Indica si la elección del usuario es válida y permite salir del bucle.

// Bucle principal que se ejecuta hasta que el usuario hace una elección válida o cancela.
while (!valorCorrecto) {
  // Preguntar al usuario si quiere una pizza vegana o no
  opcP = prompt(
    "¿Quiere una pizza vegana? (Si/No)\nTodas las pizzas contienen: " +
      defaultIng
  );

  if (opcP === null) {
    // Si el usuario cancela, mostrar un mensaje y salir del bucle
    alert(mensajeCancelacion);
    break;
  } else {
    // Convertir la respuesta a minúsculas para hacerla insensible a mayúsculas
    let opcPminusculas = opcP.toLowerCase();

    if (opcPminusculas === "si") {
      // Si elige una pizza vegana, preguntar por un ingrediente adicional
      do {
        opcV = prompt(
          "Elige un ingrediente extra para tu pizza vegana:\nIntroduce el numero:\n'1' para añadir: " +
            vIng1 +
            "\n'2' para añadir: " +
            vIng2
        );

        if (opcV === null || opcV === "") {
          // Si el usuario cancela al elegir el ingrediente, mostrar un mensaje y salir del bucle
          alert(mensajeCancelacion);
          valorCorrecto = true;
          break;
        }

        // Validar la elección del ingrediente para pizzas veganas
        switch ((opcNum = parseInt(opcV))) {
          case 1:
            alert(defaultVegMensaje + vIng1 + ", " + defaultIng);
            valorCorrecto = true; // La elección es válida si llegamos hasta aquí.
            break;
          case 2:
            alert(defaultVegMensaje + vIng2 + ", " + defaultIng);
            valorCorrecto = true; // La elección es válida si llegamos hasta aquí.
            break;
          default:
            alert(errorMens);
            break;
        }
      } while (!valorCorrecto); // Repetir hasta que la elección sea válida
    } else if (opcPminusculas == "no") {
      // Si no elige una pizza vegana, preguntar por un ingrediente adicional
      do {
        opcNv = prompt(
          "Elige un ingrediente extra para tu pizza:\nIntroduce el numero:\n'1' para añadir: " +
            ing1 +
            "\n'2' para añadir: " +
            ing2 +
            "\n'3' para añadir: " +
            ing3
        );

        if (opcNv === null || opcNv === "") {
          // Si el usuario cancela al elegir el ingrediente, mostrar un mensaje y salir del bucle
          alert(mensajeCancelacion);
          valorCorrecto = true;
          break;
        }

        // Validar la elección del ingrediente para pizzas no veganas
        switch ((opcNum = parseInt(opcNv))) {
          case 1:
            alert(defaultNoVMensaje + ing1 + ", " + defaultIng);
            valorCorrecto = true; // La elección es válida si llegamos hasta aquí.
            break;
          case 2:
            alert(defaultNoVMensaje + ing2 + ", " + defaultIng);
            valorCorrecto = true; // La elección es válida si llegamos hasta aquí.
            break;
          case 3:
            alert(defaultNoVMensaje + ing3 + ", " + defaultIng);
            valorCorrecto = true; // La elección es válida si llegamos hasta aquí.
            break;
          default:
            alert(errorMens);
            break;
        }
      } while (!valorCorrecto); // Repetir hasta que la elección sea válida
    } else {
      // Si la respuesta no es ni "si" ni "no", mostrar un mensaje y reiniciar la aplicación
      alert("Por favor escriba 'SI' o 'NO'");
    }
  }
}
