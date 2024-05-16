document.getElementById("send").addEventListener('click', sendForm);


function sendForm() {

    fetch('https://picsum.photos/600/600')
        .then(response => {
            if (!response.ok) {
                throw new Error('Error en la respuesta');
            }
            return response.blob();
        })
        .then(blob => {
            const imageUrl = URL.createObjectURL(blob);
            document.getElementById('result').innerHTML = `<img src="${imageUrl}" alt="Imagen aleatoria">`;
        })
        .catch(error => {
            console.error("error", error);
        });

}

/**
 * Daniel Perez Serrano
 */