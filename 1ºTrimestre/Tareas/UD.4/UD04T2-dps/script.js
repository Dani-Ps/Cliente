window.onload = function () {
    const inputNombre = document.getElementById("nombre");
    const inputApellidos = document.getElementById("apellidos");

    function convertirAMayusculas(elemento) {
        elemento.value = elemento.value.toUpperCase();
    }

    inputNombre.addEventListener('blur', function () {
        convertirAMayusculas(this);
    });

    inputApellidos.addEventListener('blur', function () {
        convertirAMayusculas(this);
    });
};