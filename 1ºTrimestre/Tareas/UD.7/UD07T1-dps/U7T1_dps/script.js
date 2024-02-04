// Evento para cargar los productos
document.getElementById('loadProducts').addEventListener('click', function () {
    // Peticion get a la api
    fetch('https://api.escuelajs.co/api/v1/products')
        // Convertir los datos a JSON
        .then(response => response.json())
        // Proceso los datos
        .then(data => {
            // Seleccionar el cuerpo de la tabla 
            const tableBody = document.querySelector('#productTable tbody');
            // Limpiar el contenido 
            tableBody.innerHTML = '';
            // Iterar sobre cada producto en los datos recibidos
            data.forEach(product => {
                // Crear una nueva fila de tabla para el producto
                const row = document.createElement('tr');
                // Llenar la fila con datos del producto
                row.innerHTML = `
                <td>${product.id}</td>
                <td>${product.title}</td>
                <td>${product.description}</td>
                <td>${product.price}</td>
                <td>${product.category_name}</td>
                <td><img src="${product.images[0]}" alt="${product.title}" style="max-width: 100px;"></td>
            `;
                // Agregar la fila a la tabla
                tableBody.appendChild(row);
            });
            // Mostrar mensaje de exito
            showMessage('success', 'Productos cargados correctamente');
        })
        // Recoger los errores de la solicitud a la API
        .catch(error => {
            // Mostrar mensaje de error
            showMessage('error', 'Error al cargar los productos');
        });
});

// Evento para el boton de borrar el contenido de la tabla
document.getElementById('clearTable').addEventListener('click', function () {
    // Seleccionar el cuerpo de la tabla de productos
    const tableBody = document.querySelector('#productTable tbody');
    // Limpiar el contenido de la tabla
    tableBody.innerHTML = '';
    // Mostrar mensaje de éxito
    showMessage('success', 'Tabla limpia');
});

// Funcion para mostrar mensajes en el contenedor de mensajes
function showMessage(type, message) {
    // Seleccionar el contenedor de mensajes
    const messageDiv = document.getElementById('message');
    // Establecer el texto del mensaje y la clase para el estilo estilo que tendra el mensaje
    messageDiv.textContent = message;
    messageDiv.className = type;
}


/**
 * Daniel Perez Serrano
 */