
document.addEventListener('DOMContentLoaded', function () {
    // Obtengo los elementos del formulario
    var tituloInput = document.getElementById('titulo');
    var codigoInput = document.getElementById('codigo');
    var tipoInput = document.getElementById('tipo');
    var passwordInput = document.getElementById('password');
    var resetButton = document.getElementById('reset');
    var submitButton = document.getElementById('enviar');

    tituloInput.addEventListener('input', function () {
        validateTitulo(tituloInput);
    });

    codigoInput.addEventListener('input', function () {
        validateCodigo(codigoInput);
    });

    tipoInput.addEventListener('input', function () {
        validateTipo(tipoInput);
    });

    passwordInput.addEventListener('input', function () {
        validatePassword(passwordInput);
    });

    submitButton.addEventListener('click', function (event) {
        // Prevent the default form submission
        event.preventDefault();

        // Validate the form before submission
        if (validateAll()) {
            // If validation passes, you can submit the form programmatically
            document.getElementById('tv-form').submit();
        }
        // If validation fails, the form will not be submitted
    });

    resetButton.addEventListener('click', function () {
        clearAll();
    });
});

// Función que realiza la validación de todos los campos antes de enviar el formulario
function validateAll() {
    var tituloInput = document.getElementById('titulo');
    var codigoInput = document.getElementById('codigo');
    var tipoInput = document.getElementById('tipo');
    var passwordInput = document.getElementById('password');

    // Valido cada campo individualmente
    validateTitulo(tituloInput);
    validateCodigo(codigoInput);
    validateTipo(tipoInput);
    validatePassword(passwordInput);

    // Verifica si hay algún campo con error
    if (
        tituloInput.classList.contains('error') ||
        codigoInput.classList.contains('error') ||
        tipoInput.classList.contains('error') ||
        passwordInput.classList.contains('error')
    ) {
        return false;
    } else {
        return true;
    }
}

function validateTitulo(input) {
    var errorMessageId = 'title-error';
    if (!input.value.trim()) {
        input.className = 'error';
        displayErrorMessage('Titulo es obligatorio.', errorMessageId);
    } else {
        input.className = 'success';
        clearErrorMessage(errorMessageId);
    }
}

function validateCodigo(input) {
    var errorMessageId = 'code-error';
    if (!input.value.trim()) {
        input.className = 'error';
        clearErrorMessage(errorMessageId);
        displayErrorMessage('Selecciona un código de grabación', errorMessageId);
    } else {
        input.className = 'success';
        clearErrorMessage(errorMessageId);
    }
}

function validateTipo(input) {
    var errorMessageId = 'type-error';
    if (!input.value.trim()) {
        input.className = 'error';
        clearErrorMessage(errorMessageId);
        displayErrorMessage('Debes seleccionar el tipo de grabacion', errorMessageId);
    } else {
        input.className = 'success';
        clearErrorMessage(errorMessageId);
    }
}

function validatePassword(input) {
    var errorMessageId = 'passwd-error';
    var passwordRegex = /^[A-Z]@.{6,12}-[^A-Za-z0-9%]$/;
    if (!input.value.trim() || !input.value.match(passwordRegex)) {
        input.className = 'error';
        clearErrorMessage(errorMessageId);
        displayErrorMessage('La contraseña no cumple con los requisitos.', errorMessageId);
    } else {
        input.className = 'success';
        clearErrorMessage(errorMessageId);
    }
}

// Función que muestra mensajes de error en el elemento 'error-messages'
function displayErrorMessage(message, messageId) {
    var errorMessages = document.getElementById('error-messages');
    errorMessages.className = 'error';

    // Crear un nuevo elemento de párrafo
    var paragraph = document.createElement('p');
    paragraph.textContent = message;

    // Asignar un identificador al párrafo
    paragraph.id = messageId;

    // Agregar el párrafo al contenedor de mensajes de error
    errorMessages.appendChild(paragraph);
}

// Función que limpia los mensajes de error en el elemento 'error-messages'
function clearErrorMessage(messageId) {
    var errorMessages = document.getElementById('error-messages');
    errorMessages.className = 'none';

    // Eliminar el párrafo específico por su identificador
    var paragraph = document.getElementById(messageId);
    if (paragraph) {
        errorMessages.removeChild(paragraph);
    }
}

function clearAll() {
    var tituloInput = document.getElementById('titulo');
    var codigoInput = document.getElementById('codigo');
    var tipoInput = document.getElementById('tipo');
    var passwordInput = document.getElementById('password');

    tituloInput.value = '';
    codigoInput.value = '';
    tipoInput.value = '';
    passwordInput.value = '';

    // Reset the classes and error messages
    tituloInput.className = '';
    codigoInput.className = '';
    tipoInput.className = '';
    passwordInput.className = '';
    clearErrorMessage();
}


