/** Script que implementa la funcionalidad del juego Bingo */

// Constantes

const cartonDiv = document.querySelector('.carton');
const botonEmpezar = document.getElementById('begin');
const botonNewNumero = document.getElementById('newNumber');
const numerosDiv = document.querySelector('.numeros');
const contenedorMensajes = document.querySelector('.mensaje');
const mensaje = document.createElement('h4');

// Variables
let numerosBingo;
let n;

/**
 * Clase carton 
 * Con un metodo constuctor que crear un Array con 3 dimesiones.
 */
class Carton {
    constructor() {
        this.carton = [[], [], []];
    }
}

// FUNCIONES AUXILIARES

/**
 * Funcion que limpia los mensajes y los números que van saliendo.
 */
function limpiarElementos() {
    contenedorMensajes.innerHTML = '';
    numerosDiv.innerHTML = '';
}

/**
 * Funcion que limpia los completamente el DOM
 */
function limpiarDOM() {
    limpiarElementos();
    cartonDiv.innerHTML = '';
}
/**
 * Funcion que genera numero aleatorios entre el 1 y el valor max. proporcionado
 * @param {number} max - El valor que limita el numero maximo que se genera
 * @returns {number} - Devuelve el numero
 */
function generarNumeroAleatorio(max) {
    return Math.floor(Math.random() * max) + 1;
}
/**
 * Funcion que genera una cantidad determinada de numeros aleatorios y los guarda en un set para que no se repitan.
 * @param {number} numeros - Set de numeros aleatorios.
 * @param {number} limite - Cantidad de numeros aleatorios que se van a almacenar
 * @returns 
 */
function generarNumeros(limite) {
    let numeros = new Set();

    while (numeros.size < limite) {

        numeros.add(generarNumeroAleatorio(99));
    }

    return Array.from(numeros);
}

/**
 * Funcion que dado 15 numeros aleatorios los introduce en el carton de 5 en 5, dividiendolos en 3 filas.
 * @param {Array} numerosCarton - Array con los numeros 
 * @returns 
 */
function rellenarCarton(numerosCarton) {
    // Creo un nuevo array (Array.from) con longitud 3 subArrays.
    // Y se rellena cada uno de ellos copiando los 5 primeros numeros y a la misma vez eliminandolos del array numerosCarton.
    return Array.from({ length: 3 }, () => numerosCarton.splice(0, 5));
}
/**
 * Funcion que recoge el carton relleno y lo muestra por pantalla
 * @param {Array} carton 
 */
function mostrarCarton(carton) {
    // Limpio el Dom por si acaso se hubiera generado anteriormente un catrton
    limpiarDOM(); 

    // Itero en el carton
    carton.forEach(fila => {
        
        // Contenedor que contendrá los iconos es decir sera una fila, y habrá un total de 3
        const filaDiv = document.createElement('div');
        filaDiv.classList.add('fila');
        
        // Itero sobre los numeros de las filas, 5 iteraciones en total
        fila.forEach(numero => {
            
            // Crear el icono y añadirlo a la clase
            const icono = document.createElement('i');
            icono.classList.add('fa-regular', 'fa-circle', 'fa-2xl', 'fa-stack', 'defaultCarton');

            // Creo el span que contendrá el numero de la celda del carton y le doy propiedades de clase
            const numeroSpan = document.createElement('span');
            numeroSpan.classList.add('fa-stack-1x');
            numeroSpan.style.left = '-23px';
            numeroSpan.textContent = numero; // le asigno su valor especifico
            numeroSpan.style.fontSize = '30%';

            // Añado el numero al icono y el icono a su fila
            icono.appendChild(numeroSpan);
            filaDiv.appendChild(icono);
        });
        
        // Añado la fila al DOM, en su contenedor
        cartonDiv.appendChild(filaDiv);
    });
}
/**
 * Funcion para cambiar el color del icono a verde, tanto del que sale como el del carton.
 * Ademas validamos la cantidad de numeros acertados para cantar la Linea o Bingo
 * @param {Element} icono - Elemento del DOM
 * @param {Elemet} fila - Fila donde se encuentra el icono
 */
function cambiarIconoVerde(icono, fila) {
    
    // Cambio de color el icono 
    icono.style.color = '#2ecc71';
    
    // Itero sobre los iconos de la fila hasta encontrar el que tiene el mismo numero 
    for (const iconosFila of fila.children) {

        if (iconosFila.textContent === icono.textContent) {
            
            // Cambio el color del icono del carton.
            iconosFila.style.color = '#2ecc71'; 
            
            // Le doy propiedad de clase adicional para la animacion. 
            iconosFila.classList.add('icono-verde');
            icono.classList.add('icono-verde');
        }
    }
    // Llamamos a la funcion que examina si todos los iconos de la filan tienen la clase '.icono-verde'
    if (validarColorFila(fila)) {
        
        // Si todas los iconos son verdes verificcamos cuantas lineas han sido cantadas.
        if (todasAzules()) {
            
            // Si se han cantado 3 es que has hecho Bingo, de lo contrario se canta otra linea.
            cantarBingo();
        } else {
            cantarLinea();
        }
    }
}
/**
 * Funcion que añade la clase al contenedor (.fila) la clase '.linea-cantada' para que haga una animación.
 * Estila todos los iconos de la fila en cuestión de azul.
 * @param {Element} fila - Fila que se desesa cambiar el estilo.
 */
function marcarLineaCantada(fila) {
    
    fila.classList.add('linea-cantada');
    
    for (const iconosFila of fila.children) {
        
        iconosFila.style.color = '#85CDF0';
    }
}

/**
 * Funcion que valida si la clase de todos los iconos de la fila es 'icono-verde'.
 * En caso afirmativo llama a la funcion de marcarLineaCantada(fila) con la fila en cuestión.
 * @param {Element} fila - Fila que se desesa validar la clase de sus iconos.
 * @returns - Devuelve un valor boolano para saber el resultado de la validación (true si la fila tiene la clase y false en caso contrario).
 */
function validarColorFila(fila) {
    // ALmacena la lista de nodos de iconos de la fila.
    const iconosDeFila = fila.children;

    // Almacena un valor booleano, la coleccion de nodos se convierte en un array 
    // con every se verifica la condicion de que todos tengan la clase y devuelve el valor booleano almacenado.
    const todosVerdes = Array.from(iconosDeFila).every(icono => icono.classList.contains('icono-verde'));

    if (todosVerdes) {

        marcarLineaCantada(fila);
        return true;
    }

    return false;
}

/**
 * Funcion para cantar una linea.
 * Busca las lineas que han sido cantadas si es menor que 3, canta la linea.
 */
function cantarLinea() {

    const lineasCantadas = document.querySelectorAll('.linea-cantada');

    if (lineasCantadas.length < 3) {

        // Crea el contenido del mensaje.
        const lineaCantada = '!Linea Cantada!';

        // Le da el valor del contenido al elemento mensaje y lo añado al DOM.
        mensaje.textContent = lineaCantada;
        contenedorMensajes.appendChild(mensaje);

    }
}

/**
 * Funcion que muestra el mensaje de bingo por pantalla.
 * Oculta el boton de añadir numero y muestra el de nueva partida.
 */
function cantarBingo() {

    // Creo el contenido del mensaje
    const bingo = '!BINGO!';

    // Le doy el valor del contenido al elemento mensaje y lo añado al DOM
    mensaje.textContent = bingo;
    contenedorMensajes.appendChild(mensaje);

    // Oculto y muestra los botones 
    botonEmpezar.style.display = 'block';
    botonNewNumero.style.display = 'none';

}
/**
 * Funcion que crea el icono le asigna el numero que contrendrá y le da propiedades.
 * @param {number} numero - Numero aleatorio
 * @returns - El icono ya creado con sus propiedades de clase y el numero que le pertenece.
 */
function crearIcono(numero) {
    // Creo los elemetos que componen el icono
    const icono = document.createElement('i');
    const numeroSpan = document.createElement('span');
    // Le atribuyo las propiedades de clase al icono
    icono.classList.add('fa-regular', 'fa-circle', 'fa-2xl', 'fa-stack', 'defaultNum');
    icono.appendChild(numeroSpan);

    // Le atribuyo las propiedades de clase al numero
    numeroSpan.classList.add('fa-stack-1x');
    numeroSpan.style.left = '-23px';
    numeroSpan.textContent = numero;
    numeroSpan.style.fontSize = '30%';

    return icono;
}
/**
 * Funcion que valida si el numero de filas con la clase 'linea-cantada' es igal a 3
 * @returns - Devuelve true en caso afirmativo y false en caso contrario
 */
function todasAzules() {
    const filasCantadas = document.querySelectorAll('.linea-cantada');
    return filasCantadas.length === 3;
}

/**
 * Funcion que busca la fila donde se encuentra el icono con el numero coincidente con el numero que ha salido
 * @param {number} nuevoNumero - Numero que ha salido
 * @returns - Devuelve la fila completa que contiene el icono que coincide con el numero salido
 */
function buscarfila(nuevoNumero) {
    
    const filasCarton = document.querySelectorAll('.fila');
    let fila = null;

    // Itero las 3 filas en busca del icono
    filasCarton.forEach(filaActual => {

        const iconosfila = filaActual.querySelectorAll('.fa-regular span');

        // Si lo encuentro almaceno el booleano en esta constante
        const encontrado = Array.from(iconosfila).some(numero => numero.textContent == nuevoNumero.toString());

        // Si lo he encontrado le doy el valor de la fila y lo devuelvo
        if (encontrado) {
            fila = filaActual;
        }
    });

    return fila;
}
/**
 * Funcion que muestra el nuevo numero y comprueba si coincide con alguno del carton
 * @param {Array} numerosBingo - Almacena todos los numeros que saldrán durante la partida
 * @param {Array} n - Almacena los 15 numeros del carton
 */
function mostrarNumero(numerosBingo, n) {
    // Limpio el contendor de numeros y el de mensajes
    limpiarElementos();

    // Constante que almacena el numero de la posicion [0] del array los numeros de la partida.
    const nuevoNumero = numerosBingo[0];

    // Compruebo si el array contiene numeros
    if (numerosBingo.length > 0) {

        // Creo el icono con el nuevo numero
        const icono = crearIcono(nuevoNumero);

        // Valido si coicide con algun numero del carton
        if (n.includes(nuevoNumero)) {

            // En caso afirmativo busco en que fila del carton está
            let fila = buscarfila(nuevoNumero);

            // Cambio el color del icono del carton y el del numero nuevo
            cambiarIconoVerde(icono, fila);
        }
        // Añado al DOM el nuevo numero y borro el numero de la posicion [0] del array de numeros
        numerosDiv.appendChild(icono);
        numerosBingo.shift();
    }
}

/**
 * Funcion que da comienzo al bingo.
 * - Limpia el DOM, por si se a jugado antes.
 * - Crea, rellena y muestra el carton llamando a las funciones rellenarCarton() y mostrarCarton().
 * - Añade el evento de escucha sobre el boton de añadir numero que llama a la funcion mostrarNewNumero()
 */
function comenzarJuego() {

    // Oculta el botón de nueva partida y muestra el de añadir número que permanecia oculto
    botonNewNumero.style.display = 'block';
    botonEmpezar.style.display = 'none';

    // Limpia el Dom de posibles interaciones anteriores.
    limpiarDOM();
    
    // Crea el carton
    let carton = new Carton();
    
    // Genero los números del bingo y del carton
    numerosBingo = generarNumeros(99);
    let numerosCarton = generarNumeros(15);
    // Copio los numeros del carton en la variable n para las validaciones.
    n = numerosCarton.slice();

    // Relleno el cartón y lo muestro
    carton.carton = rellenarCarton(numerosCarton);
    mostrarCarton(carton.carton);

    // Añado el evento de escucha para el botón de añadir numero que al hacer clicl llama a la funcion mostrarNewNumero()
    botonNewNumero.addEventListener('click', mostrarNewNumero);
}

/**
 * Funcion que llama a la funcion de mostar numero
 * Lo he hecho así porque sino no me guardaba correctamente los numeros.
 */
function mostrarNewNumero() {
    mostrarNumero(numerosBingo, n);
}

// Eventos
botonEmpezar.addEventListener('click', comenzarJuego);

/**
 * Daniel Perez Serrano
 */
