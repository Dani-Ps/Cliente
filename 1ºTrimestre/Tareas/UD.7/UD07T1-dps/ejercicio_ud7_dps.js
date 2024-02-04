const promesa1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        const numeroAleatorio = Math.random();

        console.log('Numero aleatorio:', numeroAleatorio);

        if (numeroAleatorio === 1) {
            resolve("Promesa finalizada con exito");
        } else {
            reject("Promesa rechazada");
        }
    }, 2000);
});

// Consumir la promesa
promesa1
    .then((mensajeExito) => {

        console.log(mensajeExito);
        console.log("Promesa finalizada");
    })

    .catch((mensajeRechazo) => {
        console.error(mensajeRechazo);
        console.log("Promesa finalizada");
    });

// Daniel Perez Serrano