// Cargo el DOM antes que ejecutar ningun script
document.addEventListener('DOMContentLoaded', function () {
    // Obtengo los elementos del formulario
    var nombreInput = document.getElementById('nombre');
    var dniInput = document.getElementById('dni');
    var fabricanteInput = document.getElementById('fabricante');
    var passwordInput = document.getElementById('password');

    // Agregar eventos input a cada campo del formulario para la validación en tiempo real
    nombreInput.addEventListener('input', function () {
        validateField(nombreInput, 'nombre');
    });

    dniInput.addEventListener('input', function () {
        validateField(dniInput, 'dni');
    });

    fabricanteInput.addEventListener('input', function () {
        validateField(fabricanteInput, 'fabricante');
    });

    passwordInput.addEventListener('input', function () {
        validateField(passwordInput, 'password');
    });

    // Agrego evento click al botón de enviar para realizar la validación antes de enviar el formulario
    const enviar = document.getElementById('enviar');
    enviar.addEventListener('click', function (event) {
        event.preventDefault(); // Evita que el formulario se envíe automáticamente
        validateAll();
    });
});

// Función que realiza la validación de todos los campos antes de enviar el formulario
function validateAll() {
    var nombreInput = document.getElementById('nombre');
    var dniInput = document.getElementById('dni');
    var fabricanteInput = document.getElementById('fabricante');
    var passwordInput = document.getElementById('password');

    // Valido cada campo individualmente
    validateField(nombreInput, 'nombre');
    validateField(dniInput, 'dni');
    validateField(fabricanteInput, 'fabricante');
    validateField(passwordInput, 'password');

    // Verifica si hay algún campo con error
    if (
        nombreInput.classList.contains('error') ||
        dniInput.classList.contains('error') ||
        fabricanteInput.classList.contains('error') ||
        passwordInput.classList.contains('error')
    ) {
        // Detiene el envío del formulario si hay algún error
        return false;
    }

    // Si todos los campos son válidos envio el formulario
    document.getElementById('vaccine-form').submit();
}

// Función que realiza la validación de un campo específico según su nombre y muestra mensajes de error o éxito
function validateField(input, fieldName) {
    var value = input.value;
    var errorMessages = document.getElementById('error-messages');

    switch (fieldName) {
        case 'nombre':
            // Valido el nombre
            if (!value.trim()) {
                input.className = 'error';
                displayErrorMessage('Nombre es obligatorio.');
            } else if (/\d/.test(value)) {
                // Compruebo si el nombre contiene caracteres numéricos
                input.className = 'error';
                displayErrorMessage('El nombre no debe contener caracteres numéricos.');
            } else {
                input.className = 'success';
                clearErrorMessage();
            }
            break;

        case 'dni':
            // Valido DNI
            var dniRegex = /^\d{2}\.\d{3}\.\d{3}-[a-zA-Z]$/;
            if (!value.trim() || !value.match(dniRegex)) {
                input.className = 'error';
                displayErrorMessage('DNI debe tener el formato 99.999.999-X.');
            } else {
                input.className = 'success';
                clearErrorMessage();
            }
            break;

        case 'fabricante':
            // Valido fabricante
            if (!value) {
                input.className = 'error';
                displayErrorMessage('Selecciona un fabricante de vacuna.');
            } else if (value !== 'Oxford-Astrazeneca' && value !== 'Moderna' && value !== 'Pfizer-Biontech') {
                input.className = 'error';
                displayErrorMessage('Fabricante no válido.');
            } else {
                input.className = 'success';
                clearErrorMessage();
            }
            break;

        case 'password':
            // Valido password
            var passwordRegex = /^[A-Z]{2}[^A-Za-z0-9:][a-zA-Z#]+\d{2}$/;
            if (!value.trim() || !value.match(passwordRegex)) {
                input.className = 'error';
                displayErrorMessage('La contraseña no cumple con los requisitos.');
            } else {
                input.className = 'success';
                clearErrorMessage();
            }
            break;

        default:
            break;
    }
}

// Función que muestra mensajes de error en el elemento 'error-messages'
function displayErrorMessage(message) {
    var errorMessages = document.getElementById('error-messages');
    errorMessages.className = 'error';
    errorMessages.innerHTML = message;
}

// Función que limpia los mensajes de error en el elemento 'error-messages'
function clearErrorMessage() {
    var errorMessages = document.getElementById('error-messages');
    errorMessages.className = 'none';
    errorMessages.innerHTML = '';
}

/**
 * Autor: Daniel Perez Serrano
 */
