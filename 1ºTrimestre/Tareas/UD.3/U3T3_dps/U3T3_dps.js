// VARIABLES

let ventana; // Almacena la ventana que se crea

// FUNCIONES

// Abrir ventana, se ejecuta esta funcion al hacer click en el boton abrir.
document.getElementById("abrirVentana").addEventListener("click", function () {
  if (confirm("¿Estás de acuerdo en abrir una nueva ventana?")) {
    // Lanzo mensaje de confirmacion, si acepta crea la ventana
    ventana = window.open(
      "", // URL vacio
      "", // NOMBRE vacio
      "toolbar=no, location=no, menubar=no, resizable=no, width=200, height=80, top=500, left=500" // Propiedades de la ventana
    );
    ventana.document.write("<p>Esta es una nueva ventana</p>");
    ventana.document.write(
      "<input type='button' value='Cerrar Ventana' onclick='window.close()'>"
    );
  }
});

// Cerrar ventana, se ejecuta esta funcion al hacer click en el boton de cerrar.

document.getElementById("cerrarVentana").addEventListener("click", function () {
  if (ventana && !ventana.closed) {
    ventana.close(); // Compruebo que hay una ventana y que no esté ya cerrada, en caso contraio manda un mensaje de error.
  } else {
    alert("La ventana no está abierta o ya ha sido cerrada.");
  }
});

function moverVentana() {
  if (ventana && !ventana.closed) {
    // Compruebo que hay una ventana y que no esté ya cerrada.
    ventana.moveBy(10, 10);
  }
}

function moverA100x100() {
  if (ventana && !ventana.closed) {
    // Compruebo que hay una ventana y que no esté ya cerrada.
    ventana.moveTo(100, 100);
  }
}

function aumentarTamanio() {
  if (ventana && !ventana.closed) {
    // Compruebo que hay una ventana y que no esté ya cerrada.
    ventana.resizeBy(10, 10);
  }
}
