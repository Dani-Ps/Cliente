let carton = [];
let numSalidos = [];

function comenzar() {
  rellenarCarton();
  sacaNumeroNuevo();
}

function rellenarCarton() {
  for (let index = 0; index < 3; index++) {
    let fila = [];

    while (fila.length < 5) {
      let numero = Math.floor(Math.random() * (99 - 1 + 1)) + 1;

      if (!fila.includes(numero)) {
        fila.push(numero);
      }
    }

    carton.push(fila);
  }

  return carton;
}

function comprobarLinea(carton, numerosSalidos) {
  let resultado;

  for (let i = 0; i < carton.length; i++) {
    let lineaCompleta = true;
    for (let j = 0; j < carton[i].length; j++) {
      if (!numerosSalidos.includes([i][j])) {
        lineaCompleta = false;
        resultado = -1;
        break;
      }
    }
    if (lineaCompleta) {
      resultado = i + 1;
    }
  }
  return resultado;
}

function comprobarBingo(carton, numerosSalidos) {
  let resultado = false;

  for (let i = 0; i < carton.length; i++) {
    let lineaCompleta = true;
    for (let j = 0; j < carton[i].length; j++) {
      if (!numerosSalidos.includes([i][j])) {
        break;
      } else {
        resultado = true;
      }
    }
  }
  return resultado;
}

function sacaNumeroNuevo(numeros) {
  if (numSalidos < 99) {
    let newNumero;
    do {
      newNumero = Math.floor(Math.random() * 99) + 1;
    } while (numSalidos.includes(newNumero));
    numSalidos.push(newNumero);
  } else {
  }
}
