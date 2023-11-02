// VARIABLES
let socios = []; // Este array almacenará los objetos de tipo Socio.

let dimensionLista;
let contadorSocios = 1;

// Objeto socio
function Socio() {
  this.numeroSocio = "";
  this.dni = "";
  this.nombre = "";
  this.apellido = "";
  this.fechaNacimiento = "";
  this.localidad = "";
}

// Método para dar de alta a un nuevo socio
function alta(dni, nombre, apellido, fechaNacimiento, localidad) {
  let exito = false;
  let socio = new Socio();

  socio.numeroSocio = contadorSocios;
  socio.dni = dni;
  socio.nombre = nombre;
  socio.apellido = apellido;
  socio.fechaNacimiento = fechaNacimiento;
  socio.localidad = localidad.toLowerCase();

  dimensionLista = socios.length;

  let nuevaDimension = socios.push(socio);

  if (nuevaDimension > dimensionLista) {
    exito = true;
    contadorSocios++;
  }
  return exito;
}

// Método para dar de baja a un socio
function baja(dato) {
  let exito = false;

  socios = socios.filter(function (socio) {
    return socio.numeroSocio !== dato && socio.dni !== dato;
  });

  if (socios.length < dimensionLista) {
    exito = true;
  }

  return exito;
}

//  Métopdo para modificar la localidad de un Socio.
function modificarLocalidad(dato, localidad) {
  let exito = false;
  let socio = this.buscar(dato);

  if (socio != null) {
    const numeroSocioOriginal = socio.numeroSocio;
    const dniOriginal = socio.dni;
    const nombreOriginal = socio.nombre;
    const apellidoOriginal = socio.apellido;
    const fechaNacimientoOriginal = socio.fechaNacimiento;
    const index = socios.indexOf(socio);

    socios.splice(index, 1);

    let nuevoSocio = new Socio();

    nuevoSocio.numeroSocio = numeroSocioOriginal;
    nuevoSocio.dni = dniOriginal;
    nuevoSocio.nombre = nombreOriginal;
    nuevoSocio.apellido = apellidoOriginal;
    nuevoSocio.fechaNacimiento = fechaNacimientoOriginal;
    nuevoSocio.localidad = localidad;

    socios.push(nuevoSocio);
    exito = true;
  }
  return exito;
}

// Metodo para buscar un socio en el Array de socio
function buscar(dato) {
  let existeSocio = new Socio();

  socios.forEach(function (socio) {
    if (socio.numeroSocio === dato || socio.dni === dato) existeSocio = socio;
  });

  return existeSocio;
}

// Metodo que recoge la fecha de nacimiento de un socio y le dice de qué categoría es.
function categoria(fechaNacimiento) {
  let anho = parseInt(fechaNacimiento.slice(0, 4));
  let edad = new Date().getFullYear() - anho;
  let mensaje = "";

  if (edad >= 19) {
    mensaje = "Senior";
  } else if (edad >= 16 && edad <= 18) {
    mensaje = "Juvenil";
  } else if (edad >= 14 && edad <= 15) {
    mensaje = "Cadete";
  } else if (edad >= 12 && edad <= 13) {
    mensaje = "Infantil";
  } else if (edad >= 10 && edad <= 11) {
    mensaje = "Alevin";
  } else if (edad >= 8 && edad <= 9) {
    mensaje = "Benjamin";
  } else {
    mensaje = "Edad no clasificada en ninguna categoría.";
  }

  return mensaje;
}

// Metodo que busca a un socio por dni o nombre y lo deuelve si existe
function mostrarDatos(dato) {
  let socioEncontrado = null;

  socios.forEach(function (socio) {
    if (socio.dni === dato || socio.nombre + " " + socio.apellido === dato) {
      socioEncontrado = socio;
    }
  });

  return socioEncontrado;
}

// Función para dar de alta a un nuevo socio desde el formulario
function darAltaSocio() {
  const dni = document.getElementById("dni").value;
  const nombre = document.getElementById("nombre").value;
  const apellido = document.getElementById("apellido").value;
  const fechaNacimiento = document.getElementById("fechaNacimiento").value;
  const localidad = document.getElementById("localidad").value;

  if (alta(dni, nombre, apellido, fechaNacimiento, localidad)) {
    // Actualizar la lista de socios
    mostrarSocios();
    alert("Socio dado de alta con éxito.");
  } else {
    alert("Error al dar de alta al socio.");
  }
}

// Función para dar de baja a un socio desde el formulario
function darBajaSocio() {
  const bajaDato = document.getElementById("bajaDato").value;

  if (baja(bajaDato)) {
    // Actualizar la lista de socios
    mostrarSocios();
    alert("Socio dado de baja con éxito.");
  } else {
    alert(
      "No se encontró ningún socio con el número de socio o DNI proporcionado."
    );
  }
}

// Función para buscar un socio desde el formulario
function buscarSocio() {
  const buscarDato = document.getElementById("buscarDato").value;
  const socioEncontrado = mostrarDatos(buscarDato);

  if (socioEncontrado) {
    // Mostrar los detalles del socio encontrado
    alert(
      "Socio encontrado:\nNúmero de Socio: " +
        socioEncontrado.numeroSocio +
        "\nDNI: " +
        socioEncontrado.dni +
        "\nNombre: " +
        socioEncontrado.nombre +
        "\nApellido: " +
        socioEncontrado.apellido +
        "\nFecha de Nacimiento: " +
        socioEncontrado.fechaNacimiento +
        "\nLocalidad: " +
        socioEncontrado.localidad +
        "\nCategoría: " +
        categoria(socioEncontrado.fechaNacimiento)
    );
  } else {
    alert("Socio no encontrado.");
  }
}

// Función para mostrar todos los datos de los socios en una tabla
function mostrarSocios() {
  const listaSocios = document.getElementById("listaSocios");
  listaSocios.innerHTML = ""; // Limpiar la lista anterior

  const table = document.createElement("table");
  table.innerHTML =
    "<tr><th>Número de Socio</th><th>DNI</th><th>Nombre</th><th>Apellidos</th><th>Fecha de Nacimiento</th><th>Localidad</th><th>Categoría</th></tr>";

  socios.forEach((socio) => {
    const row = table.insertRow();
    row.innerHTML =
      "<td>" +
      socio.numeroSocio +
      "</td>" +
      "<td>" +
      socio.dni +
      "</td>" +
      "<td>" +
      socio.nombre +
      "</td>" +
      "<td>" +
      socio.apellido +
      "</td>" +
      "<td>" +
      socio.fechaNacimiento +
      "</td>" +
      "<td>" +
      socio.localidad +
      "</td>" +
      "<td>" +
      categoria(socio.fechaNacimiento) +
      "</td>";
  });

  listaSocios.appendChild(table);
}

// Función para buscar todos los socios de una categoría
function buscarSociosPorCategoria() {
  const categoria = document.getElementById("categoria").value;
  const sociosEnCategoria = sociosCategoria(categoria);

  if (sociosEnCategoria.length > 0) {
    mostrarListaSocios(sociosEnCategoria);
  } else {
    alert("No se encontraron socios en la categoría especificada.");
  }
}

// Función para mostrar socios de una localidad
function mostrarSociosPorLocalidad() {
  const localidad = document.getElementById("localidad").value;
  const sociosEnLocalidad = sociosLocalidad(localidad);

  if (sociosEnLocalidad.length > 0) {
    mostrarListaSocios(sociosEnLocalidad);
  } else {
    alert("No se encontraron socios en la localidad especificada.");
  }
}

// Función para mostrar una lista de socios
function mostrarListaSocios(sociosLista) {
  const listaSocios = document.getElementById("listaSocios");
  listaSocios.innerHTML = "";

  const table = document.createElement("table");
  table.innerHTML =
    "<tr><th>Número de Socio</th><th>DNI</th><th>Nombre</th><th>Apellidos</th><th>Fecha de Nacimiento</th><th>Localidad</th><th>Categoría</th></tr>";

  sociosLista.forEach((socio) => {
    const row = table.insertRow();
    row.innerHTML =
      "<td>" +
      socio.numeroSocio +
      "</td>" +
      "<td>" +
      socio.dni +
      "</td>" +
      "<td>" +
      socio.nombre +
      "</td>" +
      "<td>" +
      socio.apellido +
      "</td>" +
      "<td>" +
      socio.fechaNacimiento +
      "</td>" +
      "<td>" +
      socio.localidad +
      "</td>" +
      "<td>" +
      categoria(socio.fechaNacimiento) +
      "</td>";
  });

  listaSocios.appendChild(table);
}

// Función para modificar la localidad de un socio
function modificarLocalidadSocio() {
  const modificarDato = document.getElementById("modificarDato").value;
  const nuevaLocalidad = document.getElementById("nuevaLocalidad").value;

  if (modificarLocalidad(modificarDato, nuevaLocalidad)) {
    // Actualizar la lista de socios
    mostrarSocios();
    alert("Localidad del socio modificada con éxito.");
  } else {
    alert(
      "No se encontró ningún socio con el número de socio o DNI proporcionado."
    );
  }
}

// Ejemplos de uso de las funciones
alta("12345678A", "Juan", "Pérez", "1990/06/15", "Madrid");
alta("87654321B", "Ana", "García", "2005/02/10", "Barcelona");
alta("55555555C", "Luis", "Fernández", "2002/09/30", "Valencia");

// Mostrar la lista de socios al cargar la página
mostrarSocios();
