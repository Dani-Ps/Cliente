// Crear la promesa
const promesa1 = new Promise((resolve, reject) => {
    // Esperar 2 segundos utilizando setTimeout
    setTimeout(() => {
        // Generar un número aleatorio entre 0 y 1
        const numeroAleatorio = Math.random();

        // Mostrar el número aleatorio por consola
        console.log('Número aleatorio:', numeroAleatorio);

        // Comprobar si el número es 1 (éxito) o 0 (rechazo)
        if (numeroAleatorio === 1) {
            // Resuelve la promesa con éxito
            resolve("Promesa finalizada con éxito");
        } else {
            // Rechaza la promesa
            reject("Promesa rechazada");
        }
    }, 2000); // 2 segundos
});

// Consumir la promesa
promesa1
    .then((mensajeExito) => {
        // Mostrar el mensaje de éxito por consola
        console.log(mensajeExito);
        // Mostrar el mensaje de finalización por consola
        console.log("Promesa finalizada");
    })
    .catch((mensajeRechazo) => {
        // Mostrar el mensaje de rechazo por consola
        console.error(mensajeRechazo);
        // Mostrar el mensaje de finalización por consola
        console.log("Promesa finalizada");
    });

// Daniel Perez Serrano