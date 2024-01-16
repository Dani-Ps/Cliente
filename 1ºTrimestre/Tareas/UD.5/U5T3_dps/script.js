document.addEventListener("DOMContentLoaded", function () {
    // Funciones para operaciones
    function guardarDatos() {
        var tipoAlmacenamiento = document.getElementById("tipoAlmacenamiento").value;
        var clave = document.getElementById("clave").value;
        var valor = document.getElementById("valor").value;

        if (!clave || !valor) {
            alert("Por favor, complete tanto la clave como el valor.");
            return;
        }

        if (tipoAlmacenamiento === "localStorage") {
            localStorage.setItem(clave, valor);
            actualizarTextarea("localStorageData");
        } else if (tipoAlmacenamiento === "sessionStorage") {
            sessionStorage.setItem(clave, valor);
            actualizarTextarea("sessionStorageData");
        }
    }

    function eliminarDatos() {
        var tipoAlmacenamiento = document.getElementById("tipoAlmacenamiento").value;
        var clave = document.getElementById("clave").value;

        if (!clave) {
            alert("Por favor, introduzca una clave.");
            return;
        }

        if (tipoAlmacenamiento === "localStorage") {
            localStorage.removeItem(clave);
            actualizarTextarea("localStorageData");
        } else if (tipoAlmacenamiento === "sessionStorage") {
            sessionStorage.removeItem(clave);
            actualizarTextarea("sessionStorageData");
        }
    }

    function refrescar() {
        actualizarTextarea("localStorageData");
        actualizarTextarea("sessionStorageData");
    }

    function comprobarCompatibilidad() {
        if (typeof (Storage) !== "undefined") {
            alert("¡El almacenamiento local es compatible con este navegador!");
        } else {
            alert("¡El almacenamiento local no es compatible con este navegador!");
        }
    }

    function actualizarTextarea(elementId) {
        var data = "";
        if (elementId === "localStorageData") {
            for (var i = 0; i < localStorage.length; i++) {
                var key = localStorage.key(i);
                var value = localStorage.getItem(key);
                data += key + ": " + value + "\n";
            }
            document.getElementById("localStorageData").value = data;
        } else if (elementId === "sessionStorageData") {
            for (var i = 0; i < sessionStorage.length; i++) {
                var key = sessionStorage.key(i);
                var value = sessionStorage.getItem(key);
                data += key + ": " + value + "\n";
            }
            document.getElementById("sessionStorageData").value = data;
        }
    }

    // Asignar eventos a los botones
    document.getElementById("guardarBtn").addEventListener("click", guardarDatos);
    document.getElementById("eliminarBtn").addEventListener("click", eliminarDatos);
    document.getElementById("refrescarBtn").addEventListener("click", refrescar);
    document.getElementById("compatibilidadBtn").addEventListener("click", comprobarCompatibilidad);
});
