// VARIABLES
let socios = [];
let contadorSocios = 1;

// Objeto Socio
function Socio() {
  this.numeroSocio = "";
  this.dni = "";
  this.nombre = "";
  this.apellido = "";
  this.fechaNacimiento = "";
  this.localidad = "";
  this.categoria = "";
}

// Método para dar de alta a un nuevo socio
function alta(dni, nombre, apellido, fechaNacimiento, localidad) {
  let socio = new Socio();
  socio.numeroSocio = contadorSocios;
  socio.dni = dni;
  socio.nombre = nombre;
  socio.apellido = apellido;
  socio.fechaNacimiento = fechaNacimiento;
  socio.localidad = localidad.toLowerCase();
  socio.categoria = categoria(fechaNacimiento);

  socios.push(socio);
  contadorSocios++;
  return true;
}

// Método para dar de baja a un socio
function baja(dato) {
  const index = socios.findIndex((socio) => socio.dni === dato);
  if (index !== -1) {
    socios.splice(index, 1);
    return true;
  }
  return false;
}

// Método para modificar la localidad de un Socio.
function modificarLocalidad(dato, localidad) {
  const socio = buscar(dato);
  if (socio) {
    socio.localidad = localidad;
    return true;
  }
  return false;
}

// Método para buscar un socio en el Array de socios
function buscar(dato) {
  return socios.find(
    (socio) => socio.numeroSocio === dato || socio.dni === dato
  );
}
// Método que recoge la fecha de nacimiento de un socio y le dice de qué categoría es.
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

// Método que busca a un socio por DNI o nombre y lo devuelve si existe
function mostrarDatos(dato) {
  let socioEncontrado = null;

  socios.forEach(function (socio) {
    if (
      socio.dni === dato ||
      socio.nombre.toLowerCase() + " " + socio.apellido.toLowerCase() ===
        dato.toLowerCase()
    ) {
      socioEncontrado = socio;
    }
  });

  if (socioEncontrado) {
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
    alert("Socio no encontrado");
  }
}

// Funciones relacionadas con la interfaz de usuario

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
  }
}

// Función para buscar un socio desde el formulario
function buscarSocio() {
  const buscarDato = document.getElementById("buscarDato").value;
  const socioEncontrado = buscar(buscarDato);

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

function buscarSociosCategoria(categoria) {
  let newList = [];
  socios.forEach(function (socio) {
    if (socio.categoria === categoria) {
      newList.push(socio);
    }
  });

  return newList;
}

// Función para mostrar todos los socios de una categoría
function mostrarSociosPorCategoria() {
  const categoria = document.getElementById("categoria").value;
  const sociosEnCategoria = buscarSociosCategoria(categoria);

  if (sociosEnCategoria.length > 0) {
    mostrarListaSocios(sociosEnCategoria);
  } else {
    alert("No se encontraron socios en la categoría especificada.");
  }
}
function buscarSociosLocalidad(localidad) {
  localidad = localidad.toLowerCase();
  let newList = [];

  socios.forEach(function (socio) {
    if (socio.localidad === localidad) {
      newList.push(socio);
    }
  });
  return newList;
}
// Función para mostrar socios de una localidad
function mostrarSociosPorLocalidad() {
  const localidad = document.getElementById("localidad").value;
  const sociosEnLocalidad = buscarSociosLocalidad(localidad);

  if (sociosEnLocalidad.length > 0) {
    mostrarListaSocios(sociosEnLocalidad);
  } else {
    alert("No se encontraron socios en la localidad especificada.");
  }
  // Este funcion pese a que tiene el mismo codigo que el de  mostrarSociosPorCategoria()
  // No funciona como deberia ya que no muestra, los socios si solo hay uno en la localidad
  // Por ejemplo en el caso de uso si filtras por cualquiera de las localidades no muestra nada
  // pero si das de alta un nuevo socio de con la misma localidad y vuelves a filtrar funciona
  // He pasado toda mi tarde de sabado intentado solucionarlo pero no he podido.
}

// Función para mostrar una lista de socios filtrada
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
      socio.categoria +
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
