    document.addEventListener('DOMContentLoaded', function () {
        // Crear elementos HTML
        const loaderDiv = document.createElement('div');
        loaderDiv.classList.add('loader');
    
        const numerosDiv = document.createElement('div');
        numerosDiv.classList.add('numeros');
    
        const cartonDiv = document.createElement('div');
        cartonDiv.classList.add('carton');
    
        const buttonsDiv = document.createElement('div');
        const botonEmpezar = document.createElement('button');
        botonEmpezar.id = 'begin';
        botonEmpezar.textContent = 'Empezar partida';
    
        const botonNewNumero = document.createElement('button');
        botonNewNumero.id = 'newNumber';
        botonNewNumero.textContent = 'Sacar número';
    
        // Agregar elementos al documento
        document.body.appendChild(loaderDiv);
        loaderDiv.appendChild(numerosDiv);
        loaderDiv.appendChild(cartonDiv);
        loaderDiv.appendChild(buttonsDiv);
    
        // Función para mostrar y luego ocultar los elementos después de 4 segundos
        setTimeout(function () {
            // Ocultar el contenedor de loader después de 4 segundos
            loaderDiv.style.display = 'none';
    
            // Agregar más elementos al documento después de 4 segundos
            buttonsDiv.appendChild(botonEmpezar);
            buttonsDiv.appendChild(botonNewNumero);
    
            console.log("Botones agregados:", botonEmpezar, botonNewNumero);
    
            // Asociar el evento de inicio con la función principal
            botonEmpezar.addEventListener('click', function () {
                comenzarJuego();
            });
    
            botonNewNumero.addEventListener('click', function () {
                mostrarNumero(numerosBingo, n);
    
                // Verificar si hay línea cantada después de cada número
                if (filaCompletaCantada(carton.carton[0]) || filaCompletaCantada(carton.carton[1]) || filaCompletaCantada(carton.carton[2])) {
                    lineasCantadas++;
    
                    // Si las tres líneas están cantadas, mostrar mensaje de bingo
                    if (lineasCantadas === 3) {
                        mostrarMensajeBingo();
                    }
                }
            });
    
        }, 4000);

    // Constantes y Variables Globales
    const cartonDivElement = document.querySelector('.carton');
    const botonEmpezarElement = document.getElementById('begin');
    const botonNewNumeroElement = document.getElementById('newNumber');
    const numerosDivElement = document.querySelector('.numeros');

    class Carton {
        constructor() {
            this.carton = [[], [], []];
        }
    }

    // Funciones Auxiliares
    function generarNumeroAleatorio() {
        return Math.floor(Math.random() * 100) + 1;
    }

    function generarNumerosCarton() {
        let numeros = [];
        do {
            let random = generarNumeroAleatorio();
            if (!numeros.includes(random)) {
                numeros.push(random);
            }
        } while (numeros.length < 15);
        console.log('numerosCarton:', numeros);
        return numeros;
    }

    function generarNumerosBingo() {
        let numeros = [];
        do {
            let random = generarNumeroAleatorio();
            if (!numeros.includes(random)) {
                numeros.push(random);
            }
        } while (numeros.length < 99);
        console.log('numerosBingo:', numeros);
        return numeros;
    }

    function filaCompletaCantada(fila) {
        return fila.every(icono => icono && icono.style && icono.style.color === 'blue');
    }

    function rellenarCarton(numerosCarton) {
        let nuevoCarton = [[], [], []];
        for (let i = 0; i < nuevoCarton.length; i++) {
            nuevoCarton[i] = numerosCarton.slice(0, 5);
            numerosCarton.splice(0, 5);
        }
        return nuevoCarton;
    }

    function mostrarCarton(carton) {
        cartonDiv.innerHTML = '';
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

    function mostrarNumero(numerosBingo, n) {
        if (numerosBingo.length > 0) {
            let icono = document.createElement('i');
            icono.classList.add('fa-regular', 'fa-circle', 'fa-2xl', 'fa-stack');
            const numeroSpan = document.createElement('span');
            numeroSpan.classList.add('fa-stack-1x');
            numeroSpan.style.left = '-23px';
            numeroSpan.textContent = numerosBingo[0];

            if (n.includes(numerosBingo[0])) {
                icono.style.color = 'green';
                console.log('Color cambiado a verde');
                const cartonIconos = document.querySelectorAll('.fa-stack span');
                cartonIconos.forEach(cartonSpan => {
                    if (cartonSpan.textContent === numerosBingo[0].toString()) {
                        cartonSpan.parentNode.style.color = 'green';
                    }
                });
                const filasCarton = document.querySelectorAll('.fila');
                filasCarton.forEach(fila => {
                    const iconosFila = fila.querySelectorAll('.fa-stack span');
                    const todosVerdes = Array.from(iconosFila).every(span => span.parentNode.style.color === 'green');
                    if (todosVerdes) {
                        // Animación de línea cantada
                        fila.style.animation = 'lineaCantada 1s ease-in-out';
                        iconosFila.forEach(span => span.parentNode.style.color = 'blue');
                    }
                });
            }

            icono.appendChild(numeroSpan);
            numeroSpan.style.fontSize = '30%';
            numerosDiv.appendChild(icono);
            console.log('n:', n);
            console.log('numerosBingo[0]:', numerosBingo[0]);
            numerosBingo.shift();
        }
    }

    // Función principal para iniciar el juego
    function comenzarJuego() {
        // Rellenar el cartón con números aleatorios
        let carton = new Carton();
        const numerosDelCarton = generarNumerosCarton();
        console.log('numerosDelCarton:', numerosDelCarton);
        const numerosBingo = generarNumerosBingo();
        var n = numerosDelCarton.slice();
        carton.carton = rellenarCarton(numerosDelCarton);
        mostrarCarton(carton.carton);
        let lineasCantadas = 0;

        // Manejar eventos
        botonNewNumero.addEventListener('click', function () {
            mostrarNumero(numerosBingo, n);

            // Verificar si hay línea cantada después de cada número
            if (filaCompletaCantada(carton.carton[0]) || filaCompletaCantada(carton.carton[1]) || filaCompletaCantada(carton.carton[2])) {
                lineasCantadas++;

                // Si las tres líneas están cantadas, mostrar mensaje de bingo
                if (lineasCantadas === 3) {
                    mostrarMensajeBingo();
                }
            }
        });
    }

    function mostrarMensajeBingo() {
        const mensajeBingo = document.createElement('div');
        mensajeBingo.textContent = '¡BINGO! Todas las líneas han sido cantadas.';
        mensajeBingo.classList.add('bingo-message');
        document.body.appendChild(mensajeBingo);
    }

    // Asociar el evento de inicio con la función principal
    botonEmpezarElement.addEventListener('click', function () {
        comenzarJuego();
    });
});
