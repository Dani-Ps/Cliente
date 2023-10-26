function desordenarArray(array) {
  // Itera desde el último elemento hasta el primero.
  for (let i = array.length - 1; i > 0; i--) {
    // Genera un índice aleatorio entre 0 y el valor actual de 'i'.
    const j = Math.floor(Math.random() * (i + 1));

    // Imprime en la consola los índices que se van a intercambiar.
    console.log(`Intercambio array[${i}] con array[${j}]`);

    // Intercambia los elementos en las posiciones 'i' y 'j'.
    [array[i], array[j]] = [array[j], array[i]];

    // Imprime el estado actual del array después del intercambio.
    console.log("Array después del intercambio:", array);
  }

  // Devuelve el array desordenado.
  return array;
}

// Ejemplo de uso:
const miarray = [1, 2, 3, 4, 5, 6, 7, 8];
console.log("Array original:", miarray);

const miarraydesor = desordenarArray(miarray);
console.log("Array desordenado:", miarraydesor);
