document.addEventListener('DOMContentLoaded', function () {
    // Obtener referencias a los elementos del formulario
    var nombreInput = document.getElementById('nombre');
    var dniInput = document.getElementById('dni');
    var fabricanteInput = document.getElementById('fabricante');
    var passwordInput = document.getElementById('password');

    // Agregar eventos input a cada campo del formulario
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

    const enviar = document.getElementById('enviar');
    enviar.addEventListener('click', function (event) {
        event.preventDefault();
        validateAll();
    });
});

function validateAll() {
    var nombreInput = document.getElementById('nombre');
    var dniInput = document.getElementById('dni');
    var fabricanteInput = document.getElementById('fabricante');
    var passwordInput = document.getElementById('password');

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

    // Si todos los campos son válidos, entonces puedes enviar el formulario
    document.getElementById('vaccine-form').submit();
}

function validateField(input, fieldName) {
    var value = input.value;
    var errorMessages = document.getElementById('error-messages');

    switch (fieldName) {
        case 'nombre':
            // Validar nombre
            if (!value.trim()) {
                input.className = 'error';
                displayErrorMessage('Nombre es obligatorio.');
            } else if (/\d/.test(value)) {
                // Si el nombre contiene caracteres numéricos
                input.className = 'error';
                displayErrorMessage('El nombre no debe contener caracteres numéricos.');
            } else {
                input.className = 'success';
                clearErrorMessage();
            }
            break;

        case 'dni':
            // Validar DNI
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
            // Validar fabricante
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
            // Validar password
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

function displayErrorMessage(message) {
    var errorMessages = document.getElementById('error-messages');
    errorMessages.className = 'error';
    errorMessages.innerHTML = message;
}

function clearErrorMessage() {
    var errorMessages = document.getElementById('error-messages');
    errorMessages.className = 'none';
    errorMessages.innerHTML = '';
}
/**
 * Daniel Perez Serrano
 */