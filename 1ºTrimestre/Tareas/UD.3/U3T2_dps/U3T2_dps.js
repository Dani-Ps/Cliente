//VARIABLES
let socios = []; // Este array almacenará los objetos de tipo Socio.

// Objeto socio
function Socio() {
  this.numeroSocio = "";
  this.dni = "";
  this.nombre = "";
  this.apellido = "";
  this.fechaNacimiento = "";
  this.localidad = "";

  let dimensionLista;
  let contadorSocios = 1;

  // Método para dar de alta al un nuevo socio
  this.alta = function (dni, nombre, apellido, fechaNacimiento, localidad) {
    let exito = false;
    let socio = new Socio();

    socio.numeroSocio = contadorSocios;
    socio.dni = dni;
    socio.nombre = nombre;
    socio.apellido = apellido;
    socio.fechaNacimiento = fechaNacimiento;
    socio.localidad = localidad.toLowerCase();

    dimensionLista = socios.length;

    let nuevaDimension = socios.push(socio); // Declaro y añado al socio e inicializo la nueva variable con lo que retorna el método push().

    if (nuevaDimension > dimensionLista) {
      exito = true;
      contadorSocios++;
    }
    return exito; // Devueve true o false dependiendo si se ha añadido o no.
  };
  // Método para dar de baja al un nuevo socio
  this.baja = function (dato) {
    let exito = false;

    socios = socios.filter(function (socio) {
      return socio.numeroSocio !== dato && socio.dni !== dato;
    });

    if (socios.length < dimensionLista) {
      exito = true;
    }

    return exito; // Devueve true o false dependiendo si se ha eliminado o no.
  };

  //  Métopdo para modificar la localidad de un Socio.
  this.modificarLocalidad = function (dato, localidad) {
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
    return exito; // Devueve true o false dependiendo si se ha modificado o no.
  };

  // Metodo para buscar un socio en el Array de socio
  this.buscar = function (dato) {
    let existeSocio = new Socio();

    socios.forEach(function (socio) {
      if (socio.numeroSocio === dato || socio.dni === dato) existeSocio = socio;
    });

    return existeSocio; // Devueve al socio.
  };
  // Metodo que recoge la fecha de nacimiento de un socio y le dice de que categoria es.
  this.categoria = function (fechaNacimiento) {
    let anho = parseInt(fechaNacimiento.slice(6, 10)); // Coge los años de nacimiento
    let edad = 2023 - anho; // Los resto al año actual para calcular su edad.
    let mensaje = ""; // Almacenará la categoría a la que pertence

    if (edad >= 19) {
      mensaje = "Es Senior";
    } else if (edad >= 16 && edad <= 18) {
      mensaje = "Es Juvenil";
    } else if (edad >= 14 && edad <= 15) {
      mensaje = "Es Cadete";
    } else if (edad >= 12 && edad <= 13) {
      mensaje = "Es Infantil";
    } else if (edad >= 10 && edad <= 11) {
      mensaje = "Es Alevin";
    } else if (edad >= 8 && edad <= 9) {
      mensaje = "Es Benjamin";
    } else {
      mensaje = "Edad no clasificada en ninguna categoría.";
    }

    return mensaje; // Devueve la categoria.
  };

  // Metodo que busca a un socio por dni o nombre y lo deuelve si existe
  this.mostrarDatos = function (dato) {
    let socioEncontrado = null;

    socios.forEach(function (socio) {
      if (socio.dni === dato || socio.nombre + " " + socio.apellido === dato) {
        socioEncontrado = socio;
      }
    });

    return socioEncontrado;
  };

  // Metodo que muestra todos los socios de una categoría
  this.sociosCategoria = function (categoria) {
    let lista = [];
    let anhoFiltro;

    switch (categoria.toLowerCase()) {
      case "senior":
        alert("Senior: Nacidos en 2004 o antes.");
        anhoFiltro = 2004;
        break;

      case "juvenil":
        alert("Juvenil: Nacidos en 2005.");
        anhoFiltro = 2005;
        break;

      case "cadetes":
        alert("Cadetes: Nacidos en 2006");
        anhoFiltro = 2006;
        break;

      case "infantil":
        alert("Infantil: Nacidos en 2007.");
        anhoFiltro = 2007;
        break;

      case "alevin":
        alert("Alevín: Nacidos en 2008.");
        anhoFiltro = 2008;
        break;

      case "benjamin":
        alert("Benjamín: Nacidos en 2009.");
        anhoFiltro = 2009;
        break;

      default:
        alert("Valor no encontrado.");
        break;
    }

    socios.forEach(function (socio) {
      const fechaNacimiento = socio.fechaNacimiento;
      const anioNacimiento = parseInt(fechaNacimiento.split("/")[2]);

      if (anioNacimiento === anhoFiltro) lista.push(socio);
    });

    return lista; // Devueve la lista con los socios que son de la misma categoria.
  };

  // Metodo que muestra todos los socios de una misma localidad.
  this.sociosLocalidad = function (localidad) {
    return socios.filter((socio) => socio.localidad === localidad); // Devuelve todos los socios de la localidad.
  };
}

// CONSTANTES

// Opciones para el control de Socio:
const OPC1 = "1. Alta de un nuevo socio:";
const OPC2 = "2. Baja de un socio:";
const OPC3 = "3. Modificar la  localidad de un socio:";
const OPC4 = "4. Ver categoría del socio:";
const OPC5 = "5. Mostrar todos los datos:";
const OPC6 = "6. Buscar socio:";
const OPC7 = "7. Ver socios de una categoría:";
const OPC8 = "8. Ver socios de una localidad:";

// Mensajes de fin, error y exito.
const FIN = "Fin del programa.";
const ERROR = "<p>ERROR. -Vuelve a intentalo.</p>";
const EXITO_ALTA = "<p> Se ha añadido correctamente el socio</p>";
const EXITO_BAJA = "<p>Se ha eliminado correctamente el socio</p>";
const EXITO_MODF_LOCL = "<p>Se ha modificado correctamente la localidad</p>";

// Para alta:
const DNI = "Introduce el DNI:\n";
const NOMBRE = "Introduce el nombre:\n";
const APELLIDO = "Introduce el apellido:\n";
const FECHA_NACIMIENTO = "Introduce tu fecha de nacimiento:\n";
const LOCALIDAD = "Introduce la localidad:\n";

// Para buscar:
const NUMS_DNI = "Introduce el numero de socio o el dni del socio:\n";

// Para cambiar la localidad
const NEW_LOCALIDAD = "Introduce la nueva localidad:\n";

// Para mostrar datos
const DNI_NOMBRE =
  "Introduce el dni o el nombre completo de socio que deseas ver: \n";

// Para método de mostrar socios por categoria
const SOCIOS_CATEGORIA =
  "Introduce la categoría de la que quieras ver los socios:";

// Primera fila con cada conlumna sin categoria
const TABLA_1 =
  "<table><thead><tr><th>Número de Socio</th><th>DNI</th><th>Nombre</th><th>Apellido</th><th>Fecha de Nacimiento</th><th>Localidad</th></tr></thead><tbody>";
// Primera fila con cada conlumna con categoria
const TABLA_2 =
  "<table><thead><tr><th>Número de Socio</th><th>DNI</th><th>Nombre</th><th>Apellido</th><th>Fecha de Nacimiento</th><th>Localidad</th><th>Categoria</th></tr></thead><tbody>";
// Almacena el final de la tabla
const FIN_TABLA = "</tbody></table>";

// VARIABLES

let respuesta = ""; // Alamcena la respuesta del usuario según la opción que desee.
let cancelar = false; // Bandera que hace que el programa se ejecute infinitamente hasta que su valor es = 'true'.
let socio = new Socio(); // Instancio el objeto de socio para traer todos los métodos.
let continuar = ""; // Alamcena el valor que determina si acaba el programa o continua.

// Método para mostrar la lista de opciones
function mostrarOpciones() {
  respuesta = parseInt(
    prompt(
      "Pulsa:\n" +
        OPC1 +
        "\n" +
        OPC2 +
        "\n" +
        OPC3 +
        "\n" +
        OPC4 +
        "\n" +
        OPC5 +
        "\n" +
        OPC6 +
        "\n" +
        OPC7 +
        "\n" +
        OPC8
    )
  );
}

// Método para continuar o acabar con el programa
function preguntarAccion() {
  var respuesta = prompt(
    "¿Desea realizar alguna acción adicional? (Responda 's' para sí o 'n' para no)"
  );
  if (respuesta.includes("n")) {
    cancelar = true;
  } else if (respuesta.includes("s")) {
    cancelar = true;
  } else {
    alert("Responda 's' para sí o 'n' para no");
    preguntarAccion();
  }
}

// LOGICA
while (!cancelar) {
  mostrarOpciones();
  // Segun que la opción que haya elegido ejecuta un case, en caso de no ser ninguno sale de switch y vuele a ejecutarse.
  switch (respuesta) {
    // ALTA
    case 1:
      // Pregunto por los datos del nuevo socio
      let dni = prompt(DNI);
      let nombre = prompt(NOMBRE);
      let apellido = prompt(APELLIDO);
      let fechaNacimiento = prompt(FECHA_NACIMIENTO);
      let localidad = prompt(LOCALIDAD);
      // Doy de alta y compruebo si se ha añadido correctsamente, es asi manda un mensaje de exito, en caso contrario manda un mensaje de error.
      if (socio.alta(dni, nombre, apellido, fechaNacimiento, localidad)) {
        document.write(EXITO_ALTA);
      } else {
        document.write(ERROR);
      }
      break;
    // BAJA
    case 2:
      let dato = prompt(NUMS_DNI); // Almacena la variable que identifica al socio.

      if (socio.baja(dato)) {
        // Ejecuto el metodo de dar de baja, y compruebo si se ha eliminado.
        document.write(EXITO_BAJA); // Si se ha eliminado manda un mensaje de exito, del contrario manda un mensaje de error.
      } else {
        document.write(ERROR);
      }
      mostrarOpciones();
      break;

    // MODIFICAR LOCALIDAD
    case 3:
      let dato3 = prompt(NUMS_DNI); // Almacena la variable que identifica al socio.
      let localidad3 = prompt(NEW_LOCALIDAD); // Almacena la nueva localidad.

      if (socio.modificarLocalidad(dato3, localidad3)) {
        // Ejecuto el método de cambio de localidad y compruebo si el cambio se ha hecho.
        document.write(EXITO_MODF_LOCL); // Si se ha realizado correctamente, me salta un mensaje de exito sino uno de error.
      } else {
        document.write(ERROR);
      }
      break;

    // VER CATEGORIA
    case 4:
      let fecha = prompt(FECHA_NACIMIENTO);
      let respuesta = socio.categoria(fecha);

      if (respuesta != null && respuesta != "") {
        document.write("<p>" + mensaje + "</p>");
      } else {
        document.write(ERROR);
      }
      break;

    case 5:
      let lista5 = socio.socios;

      if (lista5 && lista5.length > 0) {
        let tabla = document.getElementById("tabla-socios");
        tabla.innerHTML = ""; // Elimina los datos de la tabla si es que lo hubiera

        let tablaHTML = TABLA_2;

        for (let i = 0; i < lista5.length; i++) {
          tablaHTML += "<tr>";
          tablaHTML += "<td>" + lista5[i].numeroSocio + "</td>";
          tablaHTML += "<td>" + lista5[i].dni + "</td>";
          tablaHTML += "<td>" + lista5[i].nombre + "</td>";
          tablaHTML += "<td>" + lista5[i].apellido + "</td>";
          tablaHTML += "<td>" + lista5[i].fechaNacimiento + "</td>";
          tablaHTML += "<td>" + lista5[i].localidad + "</td>";
          let categoria = obtenerCategoria(lista5[i].fechaNacimiento);
          tablaHTML += "<td>" + categoria + "</td>";
          tablaHTML += "</tr>";
        }

        tablaHTML += FIN_TABLA;
        tabla.innerHTML = tablaHTML;
      } else {
        // Mostrar mensaje de error
        document.write(ERROR);
      }

      break;

    case 6:
      let dato6 = prompt(DNI_NOMBRE);
      let socio6 = socio.mostrarDatos(dato6);

      if (socio6.length > 1) {
        let tabla = document.getElementById("tabla-socios");
        tabla.innerHTML = ""; // Elimina los datos de la tabla si es que lo hubiera

        let tablaHTML = TABLA_1;

        for (let i = 0; i < socio6.length; i++) {
          tablaHTML += "<tr>";
          tablaHTML += "<td>" + socio6[i].numeroSocio + "</td>";
          tablaHTML += "<td>" + socio6[i].dni + "</td>";
          tablaHTML += "<td>" + socio6[i].nombre + "</td>";
          tablaHTML += "<td>" + socio6[i].apellido + "</td>";
          tablaHTML += "<td>" + socio6[i].fechaNacimiento + "</td>";
          tablaHTML += "<td>" + socio6[i].localidad + "</td>";
          tablaHTML += "</tr>";
        }

        tablaHTML += FIN_TABLA;
        tabla.innerHTML = tablaHTML;
      } else {
        // Mostrar mensaje de error
        document.write(ERROR);
      }

      break;

    case 7:
      let categoria = prompt(SOCIOS_CATEGORIA);
      let lista7 = socio.sociosCategoria(categoria);

      if (lista7.length > 1) {
        let tabla = document.getElementById("tabla-socios");
        tabla.innerHTML = ""; // Elimina los datos de la tabla si es que lo hubiera

        let tablaHTML = TABLA_1;

        for (let i = 0; i < lista7.length; i++) {
          tablaHTML += "<tr>";
          tablaHTML += "<td>" + lista7[i].numeroSocio + "</td>";
          tablaHTML += "<td>" + lista7[i].dni + "</td>";
          tablaHTML += "<td>" + lista7[i].nombre + "</td>";
          tablaHTML += "<td>" + lista7[i].apellido + "</td>";
          tablaHTML += "<td>" + lista7[i].fechaNacimiento + "</td>";
          tablaHTML += "<td>" + lista7[i].localidad + "</td>";
          tablaHTML += "</tr>";
        }

        tablaHTML += FIN_TABLA;
        tabla.innerHTML = tablaHTML;
      } else {
        // Mostrar mensaje de error
        document.write(ERROR);
      }

      break;
    case 8:
      let localidad8 = prompt(LOCALIDAD);
      let lista8 = socio.sociosLocalidad(localidad8);

      if (lista8.length > 1) {
        let tabla = document.getElementById("tabla-socios");
        tabla.innerHTML = ""; // Elimina los datos de la tabla si es que lo hubiera

        let tablaHTML = TABLA_1;

        for (let i = 0; i < lista8.length; i++) {
          tablaHTML += "<tr>";
          tablaHTML += "<td>" + lista8[i].numeroSocio + "</td>";
          tablaHTML += "<td>" + lista8[i].dni + "</td>";
          tablaHTML += "<td>" + lista8[i].nombre + "</td>";
          tablaHTML += "<td>" + lista8[i].apellido + "</td>";
          tablaHTML += "<td>" + lista8[i].fechaNacimiento + "</td>";
          tablaHTML += "<td>" + lista8[i].localidad + "</td>";
          tablaHTML += "</tr>";
        }

        tablaHTML += FIN_TABLA;
        tabla.innerHTML = tablaHTML;
      } else {
        // Mostrar mensaje de error
        document.write(ERROR);
      }

      break;
  }
  preguntarAccion();
}
