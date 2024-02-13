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
            var alumnoDiv = document.createElement('div');
            alumnoDiv.classList.add('alumno');

            var img = document.createElement('img');
            img.src = data.ruta_imagen;
            img.alt = 'Foto de alumno';
            img.classList.add('rounded-circle', 'img-fluid');

            var nombreApellido = document.createElement('p');
            nombreApellido.textContent = `${data.nombre} ${data.apellido}`;
            nombreApellido.classList.add('nombre-apellido');

            alumnoDiv.appendChild(img);
            alumnoDiv.appendChild(nombreApellido);

            document.getElementById('grid-alumnos').appendChild(alumnoDiv);
        })
        .catch(error => {
            console.error('Error:', error);
            document.getElementById('respuesta').innerHTML = 'Error al procesar la solicitud';
        });
});
/**
 * Daniel Perez Serrano
 */