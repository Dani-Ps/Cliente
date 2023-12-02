/**
 * Este script es el del juego del Bingo, tendrá 2 botones:
 * El primero de nueva partida que cargará el cartón con todos los números.
 * El Sergundo para sacar un nuevo número
 * Si el numero que sales es igual al alguno del carton, este cambia su fondo
 * Si se commpleta una linea aparece una animación índicandolo.
 * Si se completa el cartón se aparece una animación de bingo.
 */

// Constantes
const cartonDiv = document.querySelector('.carton');
const botonEmpezar = document.getElementById('begin');
const botonNewNumero = document.getElementById('newNumber');
const numerosDiv = document.querySelector('.numeros');

class Carton {
  constructor() {
    this.carton = [[], [], []];
  }
}
var carton = new Carton();

// Funcion para crear un número aleatorio entre 1 y 100
function crearNumAleatorio() {
  let numero = Math.floor(Math.random() * 100) + 1;
  return numero;
}

// Funcion para generar numeros del carton
function numCarton() {

  let numeros = []; // Almacena los 15 numeros del carton
  // Introduces numeros aleatorios entre el 1 y el 100.
  do {
    let random = crearNumAleatorio();
    if (!numeros.includes(random)) {// Comprueba que no este en la lista 
      numeros.push(random);
    }
  } while (numeros.length < 15); // Termina cuando array tiene 15 numeros
  return numeros; // Devuelve el array con todos los valores
}

// Funcion para generar 100 numeros aleatorios
function numBingo() {
  let numeros = []; // Almacena los 100 numeros del bingo
  // Introduces numeros aleatorios entre el 1 y el 100.
  do {
    let random = crearNumAleatorio();
    if (!numeros.includes(random)) { // Comprueba que no este en la lista 
      numeros.push(random);
    }
  } while (numeros.length < 99); // Termina cuando array tiene 100 numeros
  return numeros; // Devuelve el array con todos los valores
}

// Funcion para rellenar un carton
function rellenarCarton(numerosCarton) {
  let nuevoCarton = [[], [], []];
  for (let i = 0; i < nuevoCarton.length; i++) {
    // Introduzco de 5 en 5 en cada fila
    nuevoCarton[i] = numerosCarton.slice(0, 5);
    // Borro los 5 primeros para que no se repita en la proxima iteracion
    numerosCarton.splice(0, 5);
  }
  return nuevoCarton;
}

// Funcion para mostrar el carton
function mostrarCarton(carton) {
  cartonDiv.innerHTML = ''; // Limpio el contenido anterior

  carton.forEach(fila => {
    const filaDiv = document.createElement('div');
    filaDiv.classList.add('fila');

    fila.forEach(numero => {
      const icono = document.createElement('i');
      icono.classList.add('fa-regular', 'fa-circle', 'fa-2xl', 'fa-stack');

      const numeroSpan = document.createElement('span');
      numeroSpan.classList.add('fa-stack-1x');
      numeroSpan.style.left = '-23px';
      numeroSpan.textContent = numero;

      icono.appendChild(numeroSpan);
      numeroSpan.style.fontSize = '30%';

      filaDiv.appendChild(icono);
    });

    cartonDiv.appendChild(filaDiv);
  });
}

// Funcion para sacar un número del bingo
function MostrarNumero(numerosBingo, numerosCarton) {
    let icono = document.createElement('i');
    icono.classList.add('fa-regular', 'fa-circle', 'fa-2xl', 'fa-stack');

    const numeroSpan = document.createElement('span');
    numeroSpan.classList.add('fa-stack-1x');
    numeroSpan.style.left = '-23px';

    numeroSpan.textContent = numerosBingo[0];

    numerosBingo.shift();

    icono.appendChild(numeroSpan);

    numeroSpan.style.fontSize = '30%';

    numerosDiv.appendChild(icono);

}

// Funcion empezar
function begin() {
  // Rellenar el cartón con números aleatorios
  carton = new Carton();

  const numerosCarton =  numCarton();
  const numerosBingo = numBingo();

  carton.carton = rellenarCarton(numerosCarton);

  // Mostrar el cartón en el DOM
  mostrarCarton(carton.carton);

  botonNewNumero.addEventListener('click', function () {
    MostrarNumero(numerosBingo, numerosCarton);
  });
}

botonEmpezar.addEventListener('click', function () {
  begin();
});
