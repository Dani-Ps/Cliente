const carton = [[], [], []]; // Declaro la constante del carton vacio
const numerosSalidos = []; // Almacenara el total de número cantados
let inicioPartida = false; // Bandera que marcará si se ha iniciado una partida

// Funcion que comienza la partida
function comenzar() {
  if (!inicioPartida) {
    //Compruebo si ya hay una partida en desarrollo
    rellenarCarton(carton); // Llamo a la funcion que rellena el carton
    inicioPartida = true;
  }
}
// Funcion para rellenar el carton
function rellenarCarton(carton) {
  for (let index = 0; index < 3; index++) {
    // Digo que el array principal tiene un index de 3 que seran los 3 arrays que contengan los 5 numeros
    carton[index] = []; // Me coloco en la fila a rellenar
    while (carton[index].length < 5) {
      let numero;
      do {
        numero = Math.floor(Math.random() * 99) + 1; // Genero un numero aleatorio
      } while (carton.some((fila) => fila.includes(numero))); // Compruebo que ese numero aleatorio no está en el carton
      carton[index].push(numero);
    }
  }

  // Actualizo el carton en el html
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 5; j++) {
      const celda = document.getElementById(`c${i}${j}`);
      celda.textContent = carton[i][j];
    }
  }
}
// Funcion que verifica si se ha cantado una linea en el carton
function compruebaLinea(carton, numerosSalidos) {
  for (let i = 0; i < 3; i++) {
    // Para cada fila del cartón
    if (carton[i].every((num) => numerosSalidos.includes(num))) {
      // Si todos los números de la fila han sido cantados
      return i + 1; // Devuelve el número de la línea
    }
  }
  return -1; // Si no se ha cantado línea devuelve -1
}

// Funcion que verifica si se ha cantado bingo en el carton
function compruebaBingo(carton, numerosSalidos) {
  for (let i = 0; i < 3; i++) {
    // Para cada fila del cartón
    if (!carton[i].every((num) => numerosSalidos.includes(num))) {
      // Si no se han cantado todos los números de la fila
      return false; // No se ha cantado bingo
    }
  }
  return true; // Si todas las filas tienen todos los números cantados, se ha cantado bingo
}

// Función para sacar un nuevo número durante la partida
function sacaNumeroNuevo() {
  if (inicioPartida) {
    // Si la partida ha comenzado
    if (numerosSalidos.length < 99) {
      // Si no se han cantado todos los números declaro un nuevo numero
      let nuevoNumero;
      do {
        nuevoNumero = Math.floor(Math.random() * 99) + 1; // Genero un número aleatorio
      } while (numerosSalidos.includes(nuevoNumero)); // Verifico que el número no haya salido ya

      numerosSalidos.push(nuevoNumero); // Añado el número cantado a la lista de numero salidos
      const numerosSalidosList = document.getElementById("numerosSalidos");
      const numeroSalidoItem = document.createElement("li");
      numeroSalidoItem.textContent = nuevoNumero;
      numerosSalidosList.appendChild(numeroSalidoItem);

      const lineaCantada = compruebaLinea(carton, numerosSalidos); // Verifico si se ha cantado una línea
      const bingoCantado = compruebaBingo(carton, numerosSalidos); // Verifico si se ha cantado bingo
      const resultadoLinea = document.getElementById("resultadoLinea");

      if (lineaCantada > 0) {
        resultadoLinea.textContent = `Se ha cantado la línea ${lineaCantada}!`; // Si es mayor que 0 es que se ha cantado y se muestra que linea ha sido
      } else if (bingoCantado) {
        resultadoLinea.textContent = "¡Bingo!";
      } else {
        resultadoLinea.textContent = "";
      }
    } else {
      alert("¡Bingo!");
    }
  } else {
    alert("Primero debes comenzar la partida.");
  }
}
/**
 * Autor: Daniel Perez Serrano
 */
