function valorEnArray(array, valor) {
  return array.includes(valor);
}

// Ejemplo de uso:
const miArray = [1, 2, 3, 4, 5];
const valorBuscado = 7;

if (valorEnArray(miArray, valorBuscado)) {
  console.log(`El valor ${valorBuscado} está en el array.`);
} else {
  console.log(`El valor ${valorBuscado} no está en el array.`);
}
