function cambiarArray(arrayResultado, array) {
    for (let i = 0; i < array.length; i++) {
        arrayResultado[i] = array[i] * 2;
    }
}
const Array1 = [1, 2, 3];
const Array2 = [4, 5, 6];
let arrayResultado = Array1.concat(Array2); 

cambiarArray(arrayResultado, arrayResultado); 

console.log(`El array con los valores cambiados es: ${arrayResultado}`);


function aplanaArray(array) {
    let ArrayAplanado = [];
    for (let i = 0; i < 3; i++) {
        let fila = array[i];
        for (let j = 0; j < fila.length; j++) {
            ArrayAplanado.push(fila[j]);
        }
    }
    return ArrayAplanado; 
}

const ArrayBi = [[1, 1, 1], [2, 2, 2], [3, 3, 3]];

const arrayAplanado = aplanaArray(ArrayBi); 

console.log(`El array bidimensional es tiene como resultado: ${ArrayBi}`);


console.log(`El array aplanado tiene como resultado: ${arrayAplanado}`);
 /**
   * Autor: Daniel Perez Serrano
   */
  