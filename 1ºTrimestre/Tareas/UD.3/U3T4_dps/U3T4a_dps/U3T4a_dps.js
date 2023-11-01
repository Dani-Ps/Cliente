/**
 * Esta funcion recibe un array y el valor que se busca dentro del el.
 * Con el metodo includes(), devuelve true si se encuentra el valor y false en caso contrario.
 */

function valorEnArray(array, valor) {
  return array.includes(valor);
}

// Ejemplo del programa:
let miArray = [1, 2, 3, 4, 5];
let valorBuscado = 7;

if (valorEnArray(miArray, valorBuscado)) {
  console.log("El valor " + valorBuscado + "está en el array.");
} else {
  console.log("El valor " + valorBuscado + "no está en el array.");
}
