document.getElementById('formulario').addEventListener('submit', function (event) {
    event.preventDefault();

    var formData = new FormData(this);

    fetch('procesar_formulario.php', {
        method: 'POST',
        body: formData
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Error en la solicitud');
            }
            return response.json();
        })
        .then(data => {
            // Mostrar los datos en la página principal
            document.getElementById('respuesta').innerHTML = `
            <p>Nombre: ${data.nombre}</p>
            <p>Apellido: ${data.apellido}</p>
            <p>Foto:</p>
            <img src="${data.ruta_imagen}" alt="Foto de alumno">
        `;
        })
        .catch(error => {
            console.error('Error:', error);
            document.getElementById('respuesta').innerHTML = 'Error al procesar la solicitud';
        });
});
