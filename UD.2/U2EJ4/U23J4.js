


// CONSTATES - Enunciado de ejercicios

const ejercicio1 = "1. Mostrar número de ciudades.";
const ejercicio2 = "2. Mostrar listado de ciudades";
const ejercicio3 = "3.- Mostrar listado de ciudades ordenadas alfabéticamente";
const ejercicio4 = "4.- Mostrar un intervalo de ciudades ";
const ejercicio5 = "5.- Añadir una ciudad al principio del array";
const ejercicio6 = "6.- Borrar una ciudad del final del array.";
const ejercicio7 = "7.- Se pide el nombre de una ciudad, y se devuelve la posición que ocupa en el array. Si la ciudad no se encuentra en el array, se devuelve un mensaje indicando el error";

//VARIABLES
let ciudades = ['Madrid', 'Barcelona', 'Paris', 'Londres']; // Almacena las cuidades

let mensajeOpc = parseInt(prompt("Elige que opción deseas: \n" + ejercicio1 + "\n" + ejercicio2 + "\n" + ejercicio3 + "\n" + ejercicio4 + "\n" + ejercicio5 + "\n" + ejercicio6 + "\n" + ejercicio7 + "\n")); // Almacena la opción que usuario escoge

// Segun la opción que eliga el usuario hará alguno de los siguientes casos de uso.

switch (mensajeOpc) {
    case 1:
        alert("El número de cuidades es: " + ciudades.length); // Muestra el tamaño del array

        break;
    case 2:
        alert(ciudades); // Muestra el contenido del array de cuidades.
        break;
    case 3:
         alert(ciudades.sort()); // Muestra el contenido del array ordenado albafeticamente
        break;
    case 4:
        let intervaloIncio = parseInt(prompt("Introduce un intervalo de inicio: \n")); // Alamacena el intervalo de inicio.
        let intervaloFinal = parseInt(prompt("Introduce el intervalo del final: \n")); // Almacena el intervalo final.

        alert(ciudades.slice(intervaloIncio, intervaloFinal)); // Muesta las cuidades que están dentro del intervalo.

        break;
    case 5:
        alert("Estas son las cuidades que tienes: " + ciudades); // Mostrar las cuidades que hay en el array actualmente.
        let addCuidad = prompt("Introduce el nombre de la cuidad a añadir: \n"); // Almacena el nombre de la cuidad a añadir.
        ciudades.unshift(addCuidad) // Inserta la cuidad en la primera posición del array.
        alert("Se ha añadido correctamente: " + ciudades ); // Muestra el resultado después de añadir la ciudad.
        break;
    case 6:
        alert("Estas son las cuidades que tienes: " + ciudades); // Mostrar las cuidades que hay en el array actualmente.
        ciudades.pop(); // Elimina la cuidad que esta en la última posición del array.
        alert("Se ha eliminado correctamente: " + ciudades); // Muestra el resultado después de eliminar la ciudad.
        break;
    case 7:
        let posicion = null; // Almacenara el número de la posición de la cuidad en el array.
        alert("Estas son las cuidades que tienes: " + ciudades); // Mostrar las cuidades que hay en el array actualmente.
       let ciudad = prompt("Introduce la cuidad que desea ver la información: \n"); // Almacena el valor de la cuidad de la que se quiere conoce la posición.
        for (let index = 0; index < ciudades.length; index++) { // Bucle para recorrer el array de ciudades.
            if (ciudades[index] === ciudad) { // Busca si la cuidad que el usuario quiere conocer la posición existe.
                posicion = index; // Almacena el valor de la posicion de la cuidad
                break;
            }
        }
        if (posicion != null) {
            alert("La posición de " + ciudad + " es: " + posicion); // Si la posición es distinta de null muestra la cuidad con su posición.
        } else {
            alert("No se ha encontrado la cuidad."); // Si es igual a null, significa que no se ha encontrado la cuidad.
        }
        break;
    default:
        alert("Introduce una opción adecuada."); // Si el usuario no introduce un numero entre 1-7 saltará este mensaje de error.
        break;
}

