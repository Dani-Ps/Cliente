
document.addEventListener("DOMContentLoaded", function () {

    // Funcion para guardar datos en el almacenamiento local o de sesion
    function guardarDatos() {
        // Obtener los valores de los elementos de entrada
        var tipoAlmacenamiento = document.getElementById("tipoAlmacenamiento").value;
        var clave = document.getElementById("clave").value;
        var valor = document.getElementById("valor").value;

        // Verificar si la clave y el valor están vacios
        if (!clave || !valor) {
            alert("Por favor, complete tanto la clave como el valor.");
            return;
        }

        // Almacenar datos en localStorage o sessionStorage 
        if (tipoAlmacenamiento === "localStorage") {
            localStorage.setItem(clave, valor);
            actualizarTextarea("localStorageData");
        } else if (tipoAlmacenamiento === "sessionStorage") {
            sessionStorage.setItem(clave, valor);
            actualizarTextarea("sessionStorageData");
        }
    }

    // Funcion para eliminar datos del almacenamiento 
    function eliminarDatos() {
        // Obtener los valores de los elementos de entrada
        var tipoAlmacenamiento = document.getElementById("tipoAlmacenamiento").value;
        var clave = document.getElementById("clave").value;

        // Verificar si la clave está vacia
        if (!clave) {
            alert("Por favor, introduzca una clave.");
            return;
        }

        // Eliminar datos de localStorage o sessionStorage 
        if (tipoAlmacenamiento === "localStorage") {
            localStorage.removeItem(clave);
            actualizarTextarea("localStorageData");
        } else if (tipoAlmacenamiento === "sessionStorage") {
            sessionStorage.removeItem(clave);
            actualizarTextarea("sessionStorageData");
        }
    }

    // Funcion para refrescar el textarea
    function refrescar() {
        actualizarTextarea("localStorageData");
        actualizarTextarea("sessionStorageData");
    }

    // Funcion para comprobar la compatibilidad del navegador con el almacenamiento local
    function comprobarCompatibilidad() {
        if (typeof (Storage) !== "undefined") {
            alert("¡El almacenamiento local es compatible con este navegador!");
        } else {
            alert("¡El almacenamiento local no es compatible con este navegador!");
        }
    }

    // Funcion para actualizar el contenido del textarea según el tipo de almacenamiento
    function actualizarTextarea(elementId) {
        var data = "";

        // Construir una cadena con la clave:valor para cada elemento 
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

    // Agregar event listeners a los botones correspondientes
    document.getElementById("guardarBtn").addEventListener("click", guardarDatos);
    document.getElementById("eliminarBtn").addEventListener("click", eliminarDatos);
    document.getElementById("refrescarBtn").addEventListener("click", refrescar);
    document.getElementById("compatibilidadBtn").addEventListener("click", comprobarCompatibilidad);

});


// Daniel Perez Serrano