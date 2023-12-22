
// Cargo el DOM antes que ejecutar ningun script
document.addEventListener("DOMContentLoaded", function () {
    // Obtener referencias a los elementos del formulario
    var nombre = document.getElementById("nombre");
    var apellidos = document.getElementById("apellidos");
    var edad = document.getElementById("edad");
    var nif = document.getElementById("nif");
    var email = document.getElementById("email");
    var provincia = document.getElementById("provincia");
    var fecha = document.getElementById("fecha");
    var telefono = document.getElementById("telefono");
    var hora = document.getElementById("hora");
    var formulario = document.getElementById("formulario");
    var erroresContainer = document.getElementById("errores");

    // Convierto a mayúsculas el valor del campo 'nombre' al perder el foco
    nombre.addEventListener("blur", function () {
        this.value = this.value.toUpperCase();
        validarCampoTexto(this);
    });

    // Convierto a mayúsculas el valor del campo 'apellidos' al perder el foco
    apellidos.addEventListener("blur", function () {
        this.value = this.value.toUpperCase();
        validarCampoTexto(this);
    });

    // Array que contiene todos los campos del formulario
    var campos = [nombre, apellidos, edad, nif, email, provincia, fecha, telefono, hora];

    // Agrego los eventos focus e input a cada campo para limpiar mensajes de error al interactuar
    campos.forEach(function (campo) {
        campo.addEventListener("focus", function () {
            erroresContainer.innerHTML = "";
            campo.classList.remove("error");
        });

        campo.addEventListener("input", function () {
            erroresContainer.innerHTML = "";
            campo.classList.remove("error");
        });
    });

    // Eventos para validar campos específicos
    nombre.addEventListener("blur", function () {
        validarCampoTexto(this);
    });

    apellidos.addEventListener("blur", function () {
        validarCampoTexto(this);
    });

    edad.addEventListener("blur", function () {
        validarEdad(this);
    });

    nif.addEventListener("blur", function () {
        validarNIF(this);
    });

    email.addEventListener("blur", function () {
        validarEmail(this);
    });

    provincia.addEventListener("blur", function () {
        validarProvincia(this);
    });

    fecha.addEventListener("blur", function () {
        validarFecha(this);
    });

    telefono.addEventListener("blur", function () {
        validarTelefono(this);
    });

    hora.addEventListener("blur", function () {
        validarHora(this);
    });

    // Evento submit del formulario con confirmación antes de enviar
    formulario.addEventListener("submit", function (event) {
        if (!confirm("¿Desea enviar el formulario?")) {
            event.preventDefault();
        }
    });

    // Función para mostrar mensajes de error
    function mostrarError(mensaje, campo) {
        erroresContainer.innerHTML = mensaje;
        campo.classList.add("error");
        campo.focus();
    }

    // Función para validar campos de texto
    function validarCampoTexto(campo) {
        if (!campo.value.trim()) {
            mostrarError("* Este campo es obligatorio.", campo);
        } else {
            erroresContainer.innerHTML = "";
            campo.classList.remove("error");
        }
    }

    // Función para validar la edad
    function validarEdad(campo) {
        var edadValor = parseInt(campo.value, 10);
        if (isNaN(edadValor) || edadValor < 0 || edadValor > 105) {
            mostrarError("* La edad debe estar entre 0 y 105.", campo);
        } else {
            erroresContainer.innerHTML = "";
            campo.classList.remove("error");
        }
    }

    // Expresión regular para validar el NIF
    var nifRegex = /^\d{8}[a-zA-Z]$/;

    // Función para validar el NIF
    function validarNIF(campo) {
        if (!nifRegex.test(campo.value.trim())) {
            mostrarError("* NIF inválido. Formato: 12345678-A.", campo);
        } else {
            erroresContainer.innerHTML = "";
            campo.classList.remove("error");
        }
    }

    // Expresión regular para validar el email
    var emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    // Función para validar el email
    function validarEmail(campo) {
        if (!emailRegex.test(campo.value.trim())) {
            mostrarError("* E-mail inválido.", campo);
        } else {
            erroresContainer.innerHTML = "";
            campo.classList.remove("error");
        }
    }

    // Función para validar la provincia
    function validarProvincia(campo) {
        if (campo.value === "0") {
            mostrarError("* Seleccione una provincia.", campo);
        } else {
            erroresContainer.innerHTML = "";
            campo.classList.remove("error");
        }
    }

    // Expresión regular para validar la fecha
    var fechaRegex = /^(0[1-9]|[12][0-9]|3[01])[\/-](0[1-9]|1[0-2])[\/-]\d{4}$/;

    // Función para validar la fecha
    function validarFecha(campo) {
        if (!fechaRegex.test(campo.value.trim())) {
            mostrarError("* Formato de fecha inválido. Use dd/mm/aaaa o dd-mm-aaaa.", campo);
        } else {
            erroresContainer.innerHTML = "";
            campo.classList.remove("error");
        }
    }

    // Expresión regular para validar el teléfono
    var telefonoRegex = /^\d{9}$/;

    // Función para validar el teléfono
    function validarTelefono(campo) {
        if (!telefonoRegex.test(campo.value.trim())) {
            mostrarError("* Teléfono inválido. Debe contener 9 dígitos.", campo);
        } else {
            erroresContainer.innerHTML = "";
            campo.classList.remove("error");
        }
    }

    // Expresión regular para validar la hora
    var horaRegex = /^(0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$/;

    // Función para validar la hora
    function validarHora(campo) {
        if (!horaRegex.test(campo.value.trim())) {
            mostrarError("* Formato de hora inválido. Use hh:mm.", campo);
        } else {
            erroresContainer.innerHTML = "";
            campo.classList.remove("error");
        }
    }
});
