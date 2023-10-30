function bingo() {

    function comenzar() {



    }

    function rellenarCarton() {

        let carton = [[5], [5], [5]];

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

    function sacaNumeroNuevo(numeros) {
        let nuevoNumero

    }
}