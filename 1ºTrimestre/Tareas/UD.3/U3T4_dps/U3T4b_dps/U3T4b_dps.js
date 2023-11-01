// Funcio para desordenar el array, recibe un array y con un bucle va intercambiando los valores.
function desordenarArray(array) {
  // Itera desde el último elemento hasta el primero.
  for (let i = array.length - 1; i > 0; i--) {
    // genero un numero aleatorio, que no sea igual al valor de i.
    let j = Math.floor(Math.random() * (i + 1));

    // Intercambia los elementos en las posiciones i y j
    [array[i], array[j]] = [array[j], array[i]];
  }

  // Devuelve el array desordenado.
  return array;
}

// Ejemplo del programa:
let array = [1, 2, 3, 4, 5, 6, 7, 8];

console.log("Array original:", array);

let arraydesor = desordenarArray(array);

console.log("Array desordenado:", arraydesor);
