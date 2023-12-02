/**
 * Funcion para añadir movimiento a los hijos de un div
 * @param {Event} e 
 */
function movimiento(e){
    //Añadimos evento para que al salir del elemento dejen de girar
    e.target.addEventListener("mouseleave", eliminarMovimiento);
    
    //Le añadimos a todos los hijos la clase que los hace girar
    for(let i = 0; i < e.target.children.length; i++){
        e.target.children[i].classList.add("fa-flip");
    }
}

/**
 * Funcion para eliminar el movimiento al salir del div
 * @param {Event} e 
 */
function eliminarMovimiento(e){
    //Le quitamos a todos los hijos la clase que los hace girar
    for(let i = 0; i < e.target.children.length; i++){
        e.target.children[i].classList.remove("fa-flip");
    }
}

/**
 * @param {HTMLElement} divNumero 
 * @param {Number} nuevoNumero 
 */
function cambiarNumero(divNumero, nuevoNumero){
    //Obtenemos los elementos de los numeros
    unidad = divNumero.children[0];
    decena = divNumero.children[1];

    //Reiniciamos las clases de los numeros
    unidad.classList.value = "fa-solid";
    decena.classList.value = "fa-solid";

    //Miramos si necesitamos un digito o dos
    if(nuevoNumero < 10){
        decena.classList.add("escondido")
        unidad.classList.add(clasesNumero[nuevoNumero]);

    }
    else{
        decena.classList.add(clasesNumero[nuevoNumero%10]);
        unidad.classList.add(clasesNumero[Math.floor(nuevoNumero / 10)]);
    }
}

function numeroAleatorio(min, max){
    return Math.floor(Math.random() * max) + min;
}

/**
 * 
 * @param {Array<Number>} bingo 
 * @param {Number} numero 
 */
function comprobarNumero(numero){
    let index = carton.findIndex(p => p === numero);

    if(index != -1){
        bingoHtml[index].classList.add("numeroAcertado");
    }
}

function rellenarCarton(){
    carton = new Array(15);

    //Rellenamos el carton
    for(let i = 0; i < carton.length; i++){

        let aleatorio;
        do{
            aleatorio = numeroAleatorio(0, 99);
        }while(carton.includes(aleatorio));

        carton[i] = aleatorio;
    }

    //Cambiamos los numeros del html
    for(let i = 0; i < bingoHtml.length; i++){
        cambiarNumero(bingoHtml[i], carton[i]);
    }
}

function comprobarBingo(){
    //Miramos si se han sacado todos los numeros del carton
    if(carton.every(numero => numerosSacados.includes(numero))){

        //Añadimos animacion a todos los numeros del carton
        for(let i = 0; i < bingoHtml.length; i++){
            bingoHtml[i].classList.add("fa-flip");
        }
    }
}

function nuevaPartida(){
    //Reiniciamos el carton y los numeros sacados
    rellenarCarton();
    numerosSacados = [];
    divNumerosSacados.textContent = "";

    //Eliminamos la clase de numero acertado de los objetos
    for(let i = 0; i < bingoHtml.length; i++){
        bingoHtml[i].classList.remove("numeroAcertado");
        bingoHtml[i].classList.remove("fa-flip");
    }
}

function sacarNumero(){
    //Evitamos en caso de que vaya a superar el tamaño maximo
    if(numerosSacados.length >= 99){
        return;
    }

    //Sacamos numeros hasta que no este en el array
    let nuevoNumero;
    do{
        nuevoNumero = numeroAleatorio(0, 99);
    }while(numerosSacados.includes(nuevoNumero));

    //Metemos el numero en la lista y comprobamos si esta en nuestro bingo
    numerosSacados.push(nuevoNumero);
    comprobarNumero(nuevoNumero);

    //Lo mostramos en el html
    divNumerosSacados.textContent = divNumerosSacados.textContent + " " + nuevoNumero;

    //Comprobamos el bingo
    comprobarBingo();
}

//Diccionario para hacerle referencia a las clases de font awesome
let clasesNumero = {
    0: "fa-0",
    1: "fa-1",
    2: "fa-2",
    3: "fa-3",
    4: "fa-4",
    5: "fa-5",
    6: "fa-6",
    7: "fa-7",
    8: "fa-8",
    9: "fa-9"
}

//Recogemos el bingo del html
let bingoHtml = Array.from(document.querySelectorAll('.contenedorNumero'));
let divNumerosSacados = document.getElementById("numerosSacados");
let carton = [0, 1, 2, 3, 4, 5, 6, 7, 8 ,9, 12, 34, 56, 78, 89];
let numerosSacados = [];

//Le añadimos un evento para girar el primer numero como prueba
document.getElementById("f1n1").addEventListener("mouseenter", movimiento);

//Evento para sacar un carton nuevo al darle a nueva partida
document.getElementById("nuevaPartida").addEventListener("click", nuevaPartida);
document.getElementById("nuevoNumero").addEventListener("click", sacarNumero);

//Carton inicial
rellenarCarton();