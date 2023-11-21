// Seleccionar todas las filas
let rows = document.querySelectorAll("tr");

// Función para manejar el evento de entrada
function mouseEntrar() {
    let celda = this.children;
    for (const item of celda) {
        item.style.backgroundColor = 'red';
    }
}

// Función para manejar el evento de salida
function mouseSalir() {
    let celda = this.children;
    for (const item of celda) {
        item.style.backgroundColor = 'white';
    }
}

// Asignar los manejadores de eventos a cada fila
for (const item of rows) {
    item.addEventListener("mouseenter", mouseEntrar);
    item.addEventListener("mouseleave", mouseSalir);
}


