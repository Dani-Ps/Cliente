let carton = [];
let numSalidos = [];

function comenzar() {
  rellenarCarton();
  while (!comprobarBingo(carton, numSalidos) && numSalidos.length < 99) {
    sacaNumeroNuevo();
  }
}

function rellenarCarton() {
  carton = [];
  for (let index = 0; index < 3; index++) {
    let fila = [];

    while (fila.length < 5) {
      let numero = Math.floor(Math.random() * 99) + 1;

      if (!fila.includes(numero)) {
        fila.push(numero);
      }
    }

    carton.push(fila);
  }

  mostrarCarton();
}

function comprobarLinea(carton, numerosSalidos) {
  let resultado = -1;

  for (let i = 0; i < carton.length; i++) {
    let lineaCompleta = true;
    for (let j = 0; j < carton[i].length; j++) {
      if (!numerosSalidos.includes(carton[i][j])) {
        lineaCompleta = false;
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
  let resultado = true;

  for (let i = 0; i < carton.length; i++) {
    for (let j = 0; j < carton[i].length; j++) {
      if (!numerosSalidos.includes(carton[i][j])) {
        resultado = false;
        break;
      }
    }
  }
  return resultado;
}

function sacaNumeroNuevo() {
  if (numSalidos.length < 99) {
    let newNumero;
    do {
      newNumero = Math.floor(Math.random() * 99) + 1;
    } while (numSalidos.includes(newNumero));
    numSalidos.push(newNumero);
    mostrarNumerosSalidos();
    mostrarResultado();
  } else {
    document.write("No se pueden sacar más números. ¡Fin del juego!");
  }
}

function mostrarCarton() {
  document.write('<div id="carton">');
  for (let i = 0; i < carton.length; i++) {
    document.write("Fila " + (i + 1) + ": " + carton[i].join(" | ") + "<br>");
  }
  document.write("</div>");
}

function mostrarNumerosSalidos() {
  document.write('<div id="numeros-salidos">');
  document.write("Números que han salido: " + numSalidos.join(", ") + "<br>");
  document.write("</div>");
}

function mostrarResultado() {
  let lineaCantada = comprobarLinea(carton, numSalidos);
  let bingoCantado = comprobarBingo(carton, numSalidos);

  if (bingoCantado) {
    document.write('<div id="resultado">¡BINGO!</div>');
  } else if (lineaCantada !== -1) {
    document.write(
      '<div id="resultado">Línea ' + lineaCantada + " cantada</div>"
    );
  } else {
    document.write(
      '<div id="resultado">No ha obtenido ningún resultado aún</div>'
    );
  }
}
